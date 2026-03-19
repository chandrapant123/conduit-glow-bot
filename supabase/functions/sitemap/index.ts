import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const url = new URL(req.url);
  const type = url.searchParams.get("type") || "index";
  const baseUrl = url.searchParams.get("base") || "https://pipebot.ai";

  const now = new Date().toISOString().split("T")[0];

  // Static pages
  const staticPages = [
    "/", "/pricing", "/blog", "/faq", "/contact", "/resources", "/solutions",
    "/whatsapp-business-api", "/bulk-whatsapp", "/ai-whatsapp-chatbot",
    "/rcs-messaging", "/bulk-sms", "/solutions/customer-support-automation",
    "/solutions/sales-automation", "/solutions/marketing-automation",
    "/solutions/ecommerce-automation", "/solutions/ai-agents",
    "/enterprise-ai-agents",
    "/whatsapp-automation-for-ecommerce", "/whatsapp-ai-automation-for-real-estate",
    "/whatsapp-automation-for-healthcare", "/whatsapp-ai-for-edtech",
    "/whatsapp-automation-for-fintech", "/whatsapp-automation-for-restaurants",
    "/whatsapp-ai-for-travel-agencies", "/whatsapp-automation-for-b2b",
    "/whatsapp-automation-for-d2c", "/whatsapp-automation-for-insurance",
  ];

  if (type === "index") {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${baseUrl}/sitemap-static.xml</loc><lastmod>${now}</lastmod></sitemap>
  <sitemap><loc>${baseUrl}/sitemap-seo.xml</loc><lastmod>${now}</lastmod></sitemap>
  <sitemap><loc>${baseUrl}/sitemap-blog.xml</loc><lastmod>${now}</lastmod></sitemap>
</sitemapindex>`;
    return new Response(xml, { headers: { ...corsHeaders, "Content-Type": "application/xml" } });
  }

  if (type === "static") {
    const urls = staticPages.map(p => `  <url><loc>${baseUrl}${p}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
    return new Response(xml, { headers: { ...corsHeaders, "Content-Type": "application/xml" } });
  }

  if (type === "seo") {
    const { data: pages } = await supabase.from("seo_pages").select("slug, updated_at").eq("is_published", true);
    const urls = (pages || []).map(p => `  <url><loc>${baseUrl}/${p.slug}</loc><lastmod>${p.updated_at?.split("T")[0] || now}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
    return new Response(xml, { headers: { ...corsHeaders, "Content-Type": "application/xml" } });
  }

  if (type === "blog") {
    const { data: posts } = await supabase.from("blog_posts").select("slug, updated_at").eq("is_published", true);
    const urls = (posts || []).map(p => `  <url><loc>${baseUrl}/blog/${p.slug}</loc><lastmod>${p.updated_at?.split("T")[0] || now}</lastmod><changefreq>weekly</changefreq><priority>0.6</priority></url>`).join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
    return new Response(xml, { headers: { ...corsHeaders, "Content-Type": "application/xml" } });
  }

  return new Response("Not found", { status: 404, headers: corsHeaders });
});
