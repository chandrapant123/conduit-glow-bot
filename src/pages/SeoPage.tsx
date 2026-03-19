import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

const SeoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [page, setPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      if (!slug) { setNotFound(true); setLoading(false); return; }
      const { data, error } = await supabase
        .from("seo_pages")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();
      if (error || !data) { setNotFound(true); } else { setPage(data); }
      setLoading(false);
    };
    fetchPage();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
          <Button asChild><a href="/">Go Home</a></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const faqs = Array.isArray(page.faqs) ? page.faqs : [];
  const serviceName = page.service?.replace(/-/g, " ") || "";
  const industryName = page.industry?.replace(/-/g, " ") || "";
  const locationName = page.location?.replace(/-/g, " ") || "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.meta_title || page.title,
    description: page.meta_description,
    url: `https://pipebot.ai/${page.slug}`,
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f: any) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{page.meta_title || page.title}</title>
        <meta name="description" content={page.meta_description || ""} />
        {page.meta_keywords && <meta name="keywords" content={page.meta_keywords} />}
        <link rel="canonical" href={`https://pipebot.ai/${page.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="flex gap-2 justify-center mb-4 flex-wrap">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize">{serviceName}</span>
            <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium capitalize">{industryName}</span>
            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium capitalize">{locationName}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">{page.title}</h1>
          {page.meta_description && <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{page.meta_description}</p>}
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <a href="/contact"><MessageSquare className="h-5 w-5 mr-2" /> Book a Demo</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/pricing">View Pricing <ArrowRight className="h-5 w-5 ml-2" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: page.content || "" }}
          />
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq: any, i: number) => (
                <details key={i} className="bg-background border border-border rounded-xl p-5 group">
                  <summary className="font-medium text-foreground cursor-pointer list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ready to Automate Your {industryName} Business?</h2>
          <p className="text-muted-foreground mb-8">Get started with Pipebot's AI-powered {serviceName} solution today.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild><a href="/contact">Get Free Demo</a></Button>
            <Button size="lg" variant="outline" asChild><a href="https://wa.me/919599923365" target="_blank">WhatsApp Us</a></Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeoPage;
