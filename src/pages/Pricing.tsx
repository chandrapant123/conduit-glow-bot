import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const tiers = [
  {
    name: "WhatsApp API",
    desc: "Conversation-based pricing",
    items: ["Marketing conversations", "Utility conversations", "Authentication conversations", "Service conversations (free 24h)", "Multi-agent inbox included", "Automation builder included"],
    cta: "Talk to Sales",
  },
  {
    name: "Bulk Campaigns",
    desc: "Volume-based pricing",
    items: ["Pay per message sent", "No minimum commitment", "Volume discounts available", "Real-time delivery tracking", "Template management", "Campaign analytics"],
    cta: "Get Quote",
  },
  {
    name: "SMS Platform",
    desc: "Competitive per-SMS rates",
    items: ["Transactional SMS", "Promotional SMS", "OTP SMS (priority routes)", "DLT compliant", "Two-way SMS", "Delivery reports"],
    cta: "Get Quote",
  },
  {
    name: "RCS Messaging",
    desc: "Rich messaging pricing",
    items: ["Interactive message pricing", "Rich media included", "Branded sender ID", "Fallback to SMS included", "Carousels & buttons", "Read receipts"],
    cta: "Get Quote",
  },
];

const faqs = [
  { q: "How does WhatsApp API pricing work?", a: "WhatsApp API uses conversation-based pricing. You pay per 24-hour conversation window, with rates varying by category (marketing, utility, authentication, service)." },
  { q: "Are there any hidden fees?", a: "No hidden fees. You pay only for conversations and messages sent. Platform access is included." },
  { q: "Do you offer enterprise pricing?", a: "Yes, we offer custom enterprise plans with volume discounts, dedicated support, and tailored SLAs." },
  { q: "Can I start with a free trial?", a: "Yes, get started with a free trial. No credit card required." },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Transparent WhatsApp & Messaging <span className="text-gradient-hero">Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground">Simple, usage-based pricing for WhatsApp API, bulk messaging, SMS & RCS. Pay-as-you-go with no hidden fees.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {tiers.map((tier, i) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 rounded-2xl flex flex-col">
              <h3 className="font-display font-bold text-lg text-foreground mb-1">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold text-sm text-center btn-glow hover:brightness-110 transition">{tier.cta}</a>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Enterprise Custom Plans</h2>
          <p className="text-muted-foreground mb-6">Need volume discounts, dedicated support, or custom SLAs? Contact our sales team.</p>
          <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Contact Sales</a>
        </div>

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
