import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageSquare, CreditCard, Shield, Zap, Globe, Users, FileText, Bot } from "lucide-react";

const categories = [
  {
    icon: HelpCircle,
    title: "General",
    faqs: [
      { q: "What is Pipebot?", a: "Pipebot is a complete WhatsApp marketing and automation platform built for agencies, SaaS founders, enterprises, and multi-tenant operations. It includes bulk campaigns, CRM, AI bots, live chat, and developer APIs." },
      { q: "Do I need WhatsApp Business API?", a: "Yes, Pipebot works with the official WhatsApp Business API (WABA). We guide you through the setup process and can help you get your WABA account approved within 24 hours." },
      { q: "How many WhatsApp numbers can I connect?", a: "It depends on your plan. Starter supports 3 numbers, Professional supports 10, and Enterprise offers unlimited connections." },
    ],
  },
  {
    icon: Bot,
    title: "AI & Chatbot",
    faqs: [
      { q: "What file types does the AI understand?", a: "Pipebot's AI can be trained with .pdf, .csv, .docx, .txt, and .md files. Upload your knowledge base and the AI will provide context-aware responses." },
      { q: "How accurate is the AI chatbot?", a: "Our RAG-powered AI delivers 90%+ accuracy on trained topics. It gracefully handles unknown queries by escalating to human agents." },
      { q: "Can the AI handle multiple languages?", a: "Yes, the AI supports 50+ languages and can auto-detect the customer's preferred language for seamless communication." },
    ],
  },
  {
    icon: CreditCard,
    title: "Pricing & Plans",
    faqs: [
      { q: "How does pricing work?", a: "We offer monthly and yearly plans starting at $49/month. Enterprise and white-label pricing is custom. All plans include a 14-day free trial." },
      { q: "Are there any hidden fees?", a: "No hidden fees. You pay only for your plan and WhatsApp conversations. Platform access, support, and updates are included." },
      { q: "Can I upgrade or downgrade anytime?", a: "Absolutely. You can switch plans anytime. Changes take effect on your next billing cycle with pro-rated adjustments." },
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    faqs: [
      { q: "Is my data secure?", a: "Yes. Pipebot uses enterprise-grade encryption, secure token management, tenant isolation, and is built with compliance-ready template support." },
      { q: "Is Pipebot GDPR compliant?", a: "Yes, we follow GDPR guidelines for data processing, storage, and deletion. We provide data export and deletion tools for compliance." },
      { q: "Do you store WhatsApp messages?", a: "Messages are stored encrypted for chat history and analytics. You can configure retention policies and auto-deletion schedules." },
    ],
  },
  {
    icon: Zap,
    title: "Integrations",
    faqs: [
      { q: "Can I integrate with my existing CRM?", a: "Yes, Pipebot offers REST APIs, webhook forwarding, and pre-built integrations for popular platforms like HubSpot, Salesforce, Zoho, and more." },
      { q: "Do you support Shopify/WooCommerce?", a: "Yes, we have dedicated eCommerce plugins for Shopify, WooCommerce, and Magento for automated order updates, cart recovery, and more." },
      { q: "Can I use webhooks?", a: "Yes, webhooks are available on all paid plans. Configure inbound and outbound webhooks for real-time event notifications." },
    ],
  },
  {
    icon: Users,
    title: "Account & Support",
    faqs: [
      { q: "Can I white-label Pipebot?", a: "Absolutely! Our Enterprise plan includes full white-label branding with custom domains, logos, and color schemes. Offer Pipebot as your own product." },
      { q: "Is there onboarding support?", a: "Yes! All paid plans include onboarding support. Enterprise customers get a dedicated account manager and custom training sessions." },
      { q: "What support channels are available?", a: "We offer email support, live chat, WhatsApp support, and scheduled video calls. Enterprise plans include 24/7 priority support." },
    ],
  },
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-36 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground">Everything you need to know about Pipebot — organized by topic.</p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {categories.map((cat) => (
            <a key={cat.title} href={`#faq-${cat.title.toLowerCase()}`} className="glass-card p-4 rounded-xl hover:shadow-md transition-shadow flex items-center gap-3">
              <cat.icon className="h-6 w-6 text-primary shrink-0" />
              <div>
                <span className="font-display font-bold text-foreground">{cat.title}</span>
                <span className="text-xs text-muted-foreground ml-2">({cat.faqs.length} questions)</span>
              </div>
            </a>
          ))}
        </div>

        {/* FAQ Sections */}
        <div className="max-w-3xl mx-auto space-y-12">
          {categories.map((cat) => (
            <section key={cat.title} id={`faq-${cat.title.toLowerCase()}`}>
              <div className="flex items-center gap-3 mb-6">
                <cat.icon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">{cat.title}</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`${cat.title}-${i}`} className="glass-card rounded-xl px-6 border-glass-border">
                    <AccordionTrigger className="text-foreground font-display font-semibold text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Contact Support</a>
            <a href="https://wa.me/919599923365" target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary px-6 py-2.5 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default FAQ;
