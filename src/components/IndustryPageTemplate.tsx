import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { CheckCircle, ArrowRight, Zap, Shield, Globe, BarChart3, Bot, Headphones, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PainPoint {
  text: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface AIAgent {
  name: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface IndustryPageProps {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    headline: string;
    highlightText: string;
    subtext: string;
    bullets: string[];
    image?: string;
  };
  painPoints: {
    headline: string;
    subtext: string;
    items: PainPoint[];
  };
  solution: {
    headline: string;
    subtext: string;
    features: { icon?: LucideIcon; title: string; description: string; bullets: string[] }[];
  };
  useCases: UseCase[];
  aiAgent: AIAgent;
  howItWorks: { step: string; description: string }[];
  results: { stat: string; label: string }[];
  integrations: string[];
  faqs: FAQItem[];
  cta: {
    headline: string;
    subtext: string;
    primaryAction: string;
    secondaryAction: string;
  };
  jsonLd?: object;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const IndustryPageTemplate = ({ seo, hero, painPoints, solution, useCases, aiAgent, howItWorks, results, integrations, faqs, cta, jsonLd }: IndustryPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO */}
      {typeof document !== "undefined" && (
        <>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
        </>
      )}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                {hero.headline}{" "}
                <span className="text-gradient-hero">{hero.highlightText}</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">{hero.subtext}</p>
              <ul className="space-y-3 mb-8">
                {hero.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition shadow-md">
                  Book a Demo
                </a>
                <a href="/pricing" className="border border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/5 transition">
                  Start Free Trial
                </a>
              </div>
            </motion.div>
            {hero.image && (
              <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                <img src={hero.image} alt={hero.highlightText} className="rounded-2xl shadow-xl w-full" />
              </motion.div>
            )}
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-muted/30 py-16 mb-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{painPoints.headline}</h2>
              <p className="text-muted-foreground">{painPoints.subtext}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {painPoints.items.map((p, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="bg-background p-6 rounded-xl border border-border flex items-start gap-3">
                  <span className="text-destructive font-bold text-lg mt-0.5">✗</span>
                  <p className="text-foreground">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution / Features */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{solution.headline}</h2>
            <p className="text-muted-foreground">{solution.subtext}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solution.features.map((f, i) => {
              const Icon = f.icon || Zap;
              return (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-display font-bold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground mb-4">{f.description}</p>
                  <ul className="space-y-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-muted/30 py-16 mb-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Real Automation Workflows</h2>
              <p className="text-muted-foreground">See how businesses automate key processes end-to-end</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {useCases.map((uc, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="bg-background p-6 rounded-xl border border-border">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground">{uc.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agent */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10">
            <motion.div {...fadeUp} className="text-center">
              <Bot className="h-14 w-14 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-display font-bold mb-4">Meet Your AI Agent</h2>
              <h3 className="text-xl font-semibold text-primary mb-4">"{aiAgent.name}"</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">{aiAgent.description}</p>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Get started in 3 simple steps</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.step}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Results / Stats */}
        <section className="bg-gradient-to-r from-primary to-accent py-16 mb-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-2">The Results That Matter</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {results.map((r, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="text-4xl font-display font-bold text-white mb-2">{r.stat}</div>
                  <div className="text-sm text-white/80">{r.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Seamless Integrations</h2>
            <p className="text-muted-foreground">Works with your existing tech stack</p>
          </motion.div>
          <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
            {integrations.map((int) => (
              <span key={int} className="bg-muted/50 px-5 py-2.5 rounded-full text-sm font-medium border border-border">{int}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="bg-background border border-border rounded-xl p-6 group">
                <summary className="font-display font-bold cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-muted-foreground mt-4">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 md:p-16 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{cta.headline}</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">{cta.subtext}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition shadow-md">
                  {cta.primaryAction}
                </a>
                <a href="/pricing" className="border border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/5 transition">
                  {cta.secondaryAction}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryPageTemplate;
