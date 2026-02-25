import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { CheckCircle, Users, Zap, Shield, FileCheck, BarChart3, BadgeCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  { icon: BadgeCheck, title: "Verified Green Tick Assistance", desc: "Get your business verified with WhatsApp's official green tick badge." },
  { icon: Users, title: "Multi-Agent Dashboard", desc: "Manage conversations across teams with role-based access and smart routing." },
  { icon: FileCheck, title: "Template Approval Support", desc: "Quick template submission and approval management for marketing & utility messages." },
  { icon: Zap, title: "Automated Workflows", desc: "Build trigger-based automation for follow-ups, reminders, and engagement flows." },
  { icon: Shield, title: "CRM Integrations", desc: "Connect with popular CRMs, ERPs, and business tools seamlessly." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Track delivery, read rates, response times, and campaign performance." },
];

const faqs = [
  { q: "What is WhatsApp Business API?", a: "WhatsApp Business API allows medium and large businesses to automate, scale and manage customer communication on WhatsApp with multi-agent support, automation, and CRM integrations." },
  { q: "How is WhatsApp API different from WhatsApp Business App?", a: "WhatsApp API supports automation, multiple agents and CRM integrations, while the WhatsApp Business App is designed for small businesses with manual messaging." },
  { q: "Does Pipebot provide official WhatsApp API?", a: "Yes, Pipebot provides official WhatsApp Business API integration with automation tools, multi-agent inbox, and analytics." },
  { q: "How much does WhatsApp API cost?", a: "WhatsApp API pricing is conversation-based. Pipebot offers transparent pay-as-you-go pricing with no hidden fees." },
];

const WhatsAppBusinessAPI = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Official WhatsApp Business <span className="text-gradient-hero">API Provider</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Scale customer communication with official WhatsApp Business API integration. Multi-agent dashboard, automation workflows, template management & analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Get Started</a>
            <a href="/contact" className="glass-card px-8 py-3 rounded-xl font-semibold text-foreground hover:border-primary/50 transition">Book Demo</a>
          </div>
        </motion.div>

        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-4">Why Your Business Needs WhatsApp API</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Unlike the WhatsApp Business App, the API version allows automation, CRM integration, multiple agents, and unlimited scalability for growing businesses.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 rounded-2xl">
                <f.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20 max-w-3xl mx-auto">
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

        <div className="text-center">
          <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Get Started with WhatsApp API</a>
        </div>
      </div>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    }) }} />
  </div>
);

export default WhatsAppBusinessAPI;
