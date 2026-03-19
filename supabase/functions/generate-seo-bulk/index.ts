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
    const { data: roles } = await supabaseAdmin.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin");
    if (!roles || roles.length === 0) throw new Error("Not admin");

    const { services, industries, locations } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const combinations: { service: string; industry: string; location: string; slug: string }[] = [];
    for (const s of services) {
      for (const i of industries) {
        for (const l of locations) {
          combinations.push({ service: s, industry: i, location: l, slug: `${s}-for-${i}-${l}` });
        }
      }
    }

    // Check which slugs already exist
    const existingSlugs = new Set<string>();
    const slugBatches = [];
    for (let i = 0; i < combinations.length; i += 100) {
      slugBatches.push(combinations.slice(i, i + 100).map(c => c.slug));
    }
    for (const batch of slugBatches) {
      const { data } = await supabaseAdmin.from("seo_pages").select("slug").in("slug", batch);
      if (data) data.forEach(r => existingSlugs.add(r.slug));
    }

    const newCombinations = combinations.filter(c => !existingSlugs.has(c.slug));

    let created = 0;
    let errors = 0;
    const batchSize = 5;

    for (let i = 0; i < newCombinations.length; i += batchSize) {
      const batch = newCombinations.slice(i, i + batchSize);
      
      const promises = batch.map(async (combo) => {
        const serviceName = combo.service.replace(/-/g, " ");
        const industryName = combo.industry.replace(/-/g, " ");
        const locationName = combo.location.replace(/-/g, " ");

        try {
          const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-2.5-flash-lite",
              messages: [
                { role: "system", content: "You are an SEO copywriter. Return valid JSON only." },
                {
                  role: "user",
                  content: `Write SEO content for a WhatsApp automation platform (Pipebot). Service: ${serviceName}, Industry: ${industryName}, Location: ${locationName}. Return JSON with: title, meta_title (60 chars), meta_description (155 chars), meta_keywords, content (800+ words HTML with h2/h3/p/ul/li tags covering pain points, solutions, use cases, benefits), faqs (array of 5 {question, answer}).`,
                },
              ],
              tools: [{
                type: "function",
                function: {
                  name: "seo_page",
                  description: "SEO page data",
                  parameters: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      meta_title: { type: "string" },
                      meta_description: { type: "string" },
                      meta_keywords: { type: "string" },
                      content: { type: "string" },
                      faqs: { type: "array", items: { type: "object", properties: { question: { type: "string" }, answer: { type: "string" } }, required: ["question", "answer"] } },
                    },
                    required: ["title", "meta_title", "meta_description", "meta_keywords", "content", "faqs"],
                  },
                },
              }],
              tool_choice: { type: "function", function: { name: "seo_page" } },
            }),
          });

          if (!aiResponse.ok) {
            errors++;
            return;
          }

          const aiData = await aiResponse.json();
          const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
          let generated;
          if (toolCall) {
            generated = JSON.parse(toolCall.function.arguments);
          } else {
            const text = aiData.choices?.[0]?.message?.content || "";
            generated = JSON.parse(text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim());
          }

          const { error: insertError } = await supabaseAdmin.from("seo_pages").insert({
            slug: combo.slug,
            title: generated.title,
            meta_title: generated.meta_title,
            meta_description: generated.meta_description,
            meta_keywords: generated.meta_keywords,
            content: generated.content,
            faqs: generated.faqs,
            service: combo.service,
            industry: combo.industry,
            location: combo.location,
            is_published: true,
          });

          if (insertError) { errors++; } else { created++; }
        } catch {
          errors++;
        }
      });

      await Promise.all(promises);
      // Small delay between batches to avoid rate limits
      if (i + batchSize < newCombinations.length) {
        await new Promise(r => setTimeout(r, 2000));
      }
    }

    return new Response(JSON.stringify({
      success: true,
      total_combinations: combinations.length,
      already_existing: existingSlugs.size,
      created,
      errors,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
