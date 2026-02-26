import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { CheckCircle, Users, Zap, Shield, FileCheck, BarChart3, BadgeCheck, Globe, MessageSquare, Clock, Headphones, Lock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import whatsappApiHero from "@/assets/whatsapp-api-hero.png";

const features = [
  { icon: BadgeCheck, title: "Verified Green Tick Assistance", desc: "Get your business verified with WhatsApp's official green tick badge for instant trust." },
  { icon: Users, title: "Multi-Agent Dashboard", desc: "Manage conversations across teams with role-based access and smart routing." },
  { icon: FileCheck, title: "Template Approval Support", desc: "Quick template submission and approval management for marketing & utility messages." },
  { icon: Zap, title: "Automated Workflows", desc: "Build trigger-based automation for follow-ups, reminders, and engagement flows." },
  { icon: Shield, title: "CRM Integrations", desc: "Connect with popular CRMs, ERPs, and business tools seamlessly via APIs." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Track delivery, read rates, response times, and campaign performance in real-time." },
  { icon: Globe, title: "Multi-Language Support", desc: "Engage customers globally with automated multi-language message templates." },
  { icon: MessageSquare, title: "Interactive Messages", desc: "Send list messages, quick reply buttons, and CTA buttons for higher engagement." },
  { icon: Clock, title: "24/7 Availability", desc: "Never miss a lead with round-the-clock automated responses and chatbot support." },
  { icon: Headphones, title: "Dedicated Support", desc: "Get onboarding help, template approval support, and a dedicated account manager." },
  { icon: Lock, title: "End-to-End Encryption", desc: "Enterprise-grade security with WhatsApp's built-in end-to-end encryption." },
  { icon: CheckCircle, title: "Compliance Ready", desc: "Built-in opt-in management, consent tracking, and GDPR-compliant messaging." },
];

const howItWorks = [
  { step: "1", title: "Apply for WhatsApp API", desc: "We help you register and get approved for the official WhatsApp Business API in under 24 hours." },
  { step: "2", title: "Setup Your Dashboard", desc: "Configure your multi-agent inbox, chatbot flows, and automated response templates." },
  { step: "3", title: "Connect & Integrate", desc: "Integrate with your CRM, eCommerce platform, or custom application via REST APIs." },
  { step: "4", title: "Go Live & Scale", desc: "Start engaging customers at scale with automated messaging, campaigns, and AI support." },
];

const faqs = [
  { q: "What is WhatsApp Business API?", a: "WhatsApp Business API allows medium and large businesses to automate, scale and manage customer communication on WhatsApp with multi-agent support, automation, and CRM integrations." },
  { q: "How is WhatsApp API different from WhatsApp Business App?", a: "WhatsApp API supports automation, multiple agents and CRM integrations, while the WhatsApp Business App is designed for small businesses with manual messaging. The API has no device limitation." },
  { q: "Does Pipebot provide official WhatsApp API?", a: "Yes, Pipebot provides official WhatsApp Business API integration with automation tools, multi-agent inbox, and analytics as an authorized BSP." },
  { q: "How much does WhatsApp API cost?", a: "WhatsApp API pricing is conversation-based. Pipebot offers transparent pay-as-you-go pricing with no hidden fees. Plans start from $49/month." },
  { q: "How long does it take to set up?", a: "Setup takes as little as 5 minutes. We guide you through the entire process including Facebook Business verification and number registration." },
  { q: "Can I use my existing phone number?", a: "Yes, you can use your existing business phone number with WhatsApp API. We help you migrate seamlessly without losing your contacts." },
  { q: "Is there a message limit?", a: "Message limits depend on your quality rating and tier. New accounts start with 1,000 unique contacts/day and scale up as quality improves." },
  { q: "Do you support webhook integrations?", a: "Yes, Pipebot supports webhook forwarding, REST APIs, and pre-built integrations with popular CRM and eCommerce platforms." },
];

const WhatsAppBusinessAPI = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-36 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Official WhatsApp Business <span className="text-gradient-hero">API Provider</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Scale customer communication with official WhatsApp Business API integration. Multi-agent dashboard, automation workflows, template management & analytics — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition text-center">Get Started Free</a>
              <a href="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition text-center">Book Demo</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <img src={whatsappApiHero} alt="WhatsApp Business API Dashboard" className="rounded-2xl shadow-xl border border-border w-full" />
          </motion.div>
        </div>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-4">How It Works</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Get started with WhatsApp Business API in 4 simple steps</p>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg mx-auto mb-4">{s.step}</div>
                <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-4">Everything You Need for WhatsApp Automation</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Comprehensive features to manage, automate, and scale your WhatsApp communication</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="glass-card p-6 rounded-2xl hover:shadow-md transition-shadow">
                <f.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Join thousands of businesses automating WhatsApp with Pipebot. Start your free trial today.</p>
          <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Start Free Trial</a>
        </section>

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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    }) }} />
  </div>
);

export default WhatsAppBusinessAPI;
