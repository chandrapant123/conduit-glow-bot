import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const authHeader = req.headers.get("authorization");
    if (!authHeader) throw new Error("No authorization header");

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token);
    if (authError || !user) throw new Error("Unauthorized");

    const { data: roles } = await supabaseAdmin
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin");
    if (!roles || roles.length === 0) throw new Error("Not admin");

    const { service, industry, location, mode } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const serviceName = service.replace(/-/g, " ");
    const industryName = industry.replace(/-/g, " ");
    const locationName = location.replace(/-/g, " ");

    const prompt = `Write a comprehensive, SEO-optimized landing page for a WhatsApp & AI automation platform called Pipebot.

Service: ${serviceName}
Industry: ${industryName}
Location: ${locationName}

Return a JSON object with these exact fields:
- "title": SEO-friendly page title (60 chars max)
- "meta_title": Meta title with keyword (60 chars max)  
- "meta_description": Compelling meta description (155 chars max)
- "meta_keywords": Comma-separated keywords (8-10 keywords)
- "content": Full HTML content (1000+ words) with these sections:
  1. Hero intro paragraph
  2. Industry pain points (5+)
  3. How Pipebot solves it (features with icons described)
  4. Use cases (5-6 specific workflows)
  5. AI Agent example
  6. Benefits with statistics
  7. Integration stack
  8. CTA section
- "faqs": Array of 5 objects with "question" and "answer" fields

Make content unique, conversion-focused, and specific to ${industryName} in ${locationName}.
Use proper HTML tags (h2, h3, p, ul, li, strong).
Do NOT use markdown. Use only HTML.`;

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: "You are an expert SEO copywriter. Always return valid JSON only, no markdown code blocks." },
          { role: "user", content: prompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "generate_seo_page",
              description: "Generate SEO page content",
              parameters: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  meta_title: { type: "string" },
                  meta_description: { type: "string" },
                  meta_keywords: { type: "string" },
                  content: { type: "string" },
                  faqs: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        question: { type: "string" },
                        answer: { type: "string" },
                      },
                      required: ["question", "answer"],
                    },
                  },
                },
                required: ["title", "meta_title", "meta_description", "meta_keywords", "content", "faqs"],
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "generate_seo_page" } },
      }),
    });

    if (!aiResponse.ok) {
      const status = aiResponse.status;
      if (status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited. Please wait and try again." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`AI gateway error: ${status}`);
    }

    const aiData = await aiResponse.json();
    const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
    let generated;
    if (toolCall) {
      generated = JSON.parse(toolCall.function.arguments);
    } else {
      const text = aiData.choices?.[0]?.message?.content || "";
      const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      generated = JSON.parse(cleaned);
    }

    const slug = `${service}-for-${industry}-${location}`;

    if (mode === "preview") {
      return new Response(JSON.stringify({ ...generated, slug }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Save to database
    const { data: page, error: insertError } = await supabaseAdmin
      .from("seo_pages")
      .upsert(
        {
          slug,
          title: generated.title,
          meta_title: generated.meta_title,
          meta_description: generated.meta_description,
          meta_keywords: generated.meta_keywords,
          content: generated.content,
          faqs: generated.faqs,
          service,
          industry,
          location,
          is_published: true,
        },
        { onConflict: "slug" }
      )
      .select()
      .single();

    if (insertError) throw insertError;

    return new Response(JSON.stringify({ success: true, page }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
