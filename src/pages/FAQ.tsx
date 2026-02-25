import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is Pipebot?", a: "Pipebot is a complete WhatsApp marketing and automation platform built for agencies, SaaS founders, enterprises, and multi-tenant operations. It includes bulk campaigns, CRM, AI bots, live chat, and developer APIs." },
  { q: "Do I need WhatsApp Business API?", a: "Yes, Pipebot works with the official WhatsApp Business API (WABA). We guide you through the setup process and can help you get your WABA account approved." },
  { q: "How many WhatsApp numbers can I connect?", a: "It depends on your plan. Starter supports 3 numbers, Professional supports 10, and Enterprise offers unlimited connections." },
  { q: "What file types does the AI understand?", a: "Pipebot's AI can be trained with .pdf, .csv, .docx, .txt, and .md files. Upload your knowledge base and the AI will provide context-aware responses." },
  { q: "How does pricing work?", a: "We offer monthly and yearly plans starting at $49/month. Enterprise and white-label pricing is custom. All plans include a 14-day free trial." },
  { q: "Can I white-label Pipebot?", a: "Absolutely! Our Enterprise plan includes full white-label branding with custom domains, logos, and color schemes. Offer Pipebot as your own product." },
  { q: "Is there onboarding support?", a: "Yes! All paid plans include onboarding support. Enterprise customers get a dedicated account manager and custom training sessions." },
  { q: "Is my data secure?", a: "Yes. Pipebot uses enterprise-grade encryption, secure token management, tenant isolation, and is built with compliance-ready template support." },
  { q: "Can I integrate with my existing CRM or eCommerce platform?", a: "Yes, Pipebot offers REST APIs, webhook forwarding, and pre-built integrations for popular platforms. Custom integrations are available on Enterprise plans." },
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h1>
          <p className="text-muted-foreground">Everything you need to know about Pipebot.</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border-glass-border">
              <AccordionTrigger className="text-foreground font-display font-semibold text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="/#cta" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Contact Support</a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default FAQ;
