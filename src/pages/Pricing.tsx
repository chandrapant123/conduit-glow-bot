import { motion } from "framer-motion";
import { Check, CheckCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const tiers = [
  {
    name: "Free Trial",
    price: "$0",
    period: "14 days",
    desc: "Explore Pipebot's capabilities",
    bestFor: "Individuals & testers",
    features: ["1 WhatsApp number", "500 messages", "Basic chatbot", "Contact management", "Email support"],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    desc: "For growing businesses",
    bestFor: "Small businesses",
    features: ["3 WhatsApp numbers", "10,000 messages/mo", "AI chatbot", "Bulk campaigns", "Webhook integrations", "Priority support"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    desc: "For scaling teams",
    bestFor: "Agencies & teams",
    features: ["10 WhatsApp numbers", "50,000 messages/mo", "Advanced AI training", "Multi-agent inbox", "eCommerce automation", "API access", "Analytics & exports", "Dedicated support"],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large-scale operations",
    bestFor: "Enterprises",
    features: ["Unlimited numbers", "Unlimited messages", "Custom integrations", "SLA & dedicated manager", "Custom development", "On-premise option", "Volume discounts", "24/7 priority support"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const comparisonFeatures = [
  { name: "WhatsApp Numbers", free: "1", starter: "3", pro: "10", enterprise: "Unlimited" },
  { name: "Messages/Month", free: "500", starter: "10,000", pro: "50,000", enterprise: "Unlimited" },
  { name: "AI Chatbot", free: "Basic", starter: "✓", pro: "Advanced", enterprise: "Custom" },
  { name: "Bulk Campaigns", free: "—", starter: "✓", pro: "✓", enterprise: "✓" },
  { name: "Multi-Agent Inbox", free: "—", starter: "—", pro: "✓", enterprise: "✓" },
  { name: "API Access", free: "—", starter: "—", pro: "✓", enterprise: "✓" },
  { name: "eCommerce Automation", free: "—", starter: "—", pro: "✓", enterprise: "✓" },
  { name: "Analytics & Reports", free: "Basic", starter: "Standard", pro: "Advanced", enterprise: "Custom" },
  { name: "Webhook Integrations", free: "—", starter: "✓", pro: "✓", enterprise: "✓" },
  { name: "Custom Integrations", free: "—", starter: "—", pro: "—", enterprise: "✓" },
  { name: "Dedicated Support", free: "—", starter: "—", pro: "✓", enterprise: "✓" },
  { name: "SLA", free: "—", starter: "—", pro: "—", enterprise: "✓" },
];

const faqs = [
  { q: "How does WhatsApp API pricing work?", a: "WhatsApp API uses conversation-based pricing. You pay per 24-hour conversation window, with rates varying by category (marketing, utility, authentication, service)." },
  { q: "Are there any hidden fees?", a: "No hidden fees. You pay only for your plan and conversations sent. Platform access is included." },
  { q: "Do you offer enterprise pricing?", a: "Yes, we offer custom enterprise plans with volume discounts, dedicated support, and tailored SLAs." },
  { q: "Can I start with a free trial?", a: "Yes, get started with a 14-day free trial. No credit card required." },
  { q: "Can I upgrade or downgrade anytime?", a: "Absolutely. You can switch plans anytime. Changes take effect on your next billing cycle." },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Simple, Transparent <span className="text-gradient-hero">Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground">Choose the plan that fits your growth. Upgrade or downgrade anytime.</p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 rounded-2xl flex flex-col ${tier.highlight ? "border-primary/50 glow-blue relative" : ""}`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary-foreground bg-primary px-4 py-1 rounded-full">Most Popular</span>
              )}
              <h3 className="text-xl font-display font-bold text-foreground">{tier.name}</h3>
              <div className="mt-2 mb-1">
                <span className="text-3xl font-display font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground text-sm">{tier.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{tier.desc}</p>
              <p className="text-xs text-primary mb-4">Best for: {tier.bestFor}</p>
              <ul className="space-y-2 flex-1 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`text-center py-2.5 rounded-xl font-semibold text-sm transition ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground btn-glow hover:brightness-110"
                    : "glass-card text-foreground hover:border-primary/50"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-center mb-8">
            Feature <span className="text-gradient-primary">Comparison</span>
          </h2>
          <div className="glass-card rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="p-4 text-left text-foreground font-display">Feature</th>
                  <th className="p-4 text-center text-muted-foreground">Free Trial</th>
                  <th className="p-4 text-center text-muted-foreground">Starter</th>
                  <th className="p-4 text-center text-primary font-bold">Professional</th>
                  <th className="p-4 text-center text-muted-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f, i) => (
                  <tr key={f.name} className={`border-b border-glass-border/50 ${i % 2 === 0 ? "bg-muted/5" : ""}`}>
                    <td className="p-4 text-foreground font-medium">{f.name}</td>
                    <td className="p-4 text-center text-muted-foreground">{f.free === "✓" ? <CheckCircle className="h-4 w-4 text-accent mx-auto" /> : f.free === "—" ? <span className="text-muted-foreground/40">—</span> : f.free}</td>
                    <td className="p-4 text-center text-muted-foreground">{f.starter === "✓" ? <CheckCircle className="h-4 w-4 text-accent mx-auto" /> : f.starter === "—" ? <span className="text-muted-foreground/40">—</span> : f.starter}</td>
                    <td className="p-4 text-center text-foreground font-medium bg-primary/5">{f.pro === "✓" ? <CheckCircle className="h-4 w-4 text-primary mx-auto" /> : f.pro === "—" ? <span className="text-muted-foreground/40">—</span> : f.pro}</td>
                    <td className="p-4 text-center text-muted-foreground">{f.enterprise === "✓" ? <CheckCircle className="h-4 w-4 text-accent mx-auto" /> : f.enterprise === "—" ? <span className="text-muted-foreground/40">—</span> : f.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center mb-20 glow-blue">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Need a Custom Enterprise Plan?</h2>
          <p className="text-muted-foreground mb-6">Volume discounts, dedicated support, custom SLAs, and on-premise deployment options available.</p>
          <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Contact Sales</a>
        </div>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border-glass-border">
                <AccordionTrigger className="text-foreground font-display font-semibold text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Pricing;
