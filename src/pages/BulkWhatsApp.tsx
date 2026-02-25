import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Send, Target, Clock, BarChart3, Shield, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  { icon: Send, title: "Campaign Scheduler", desc: "Schedule bulk WhatsApp campaigns in advance for optimal engagement times." },
  { icon: Target, title: "Contact Segmentation", desc: "Target the right audience with smart filters and custom contact groups." },
  { icon: Clock, title: "Template-Based Broadcast", desc: "Pre-approved templates for promotional, transactional & utility messages." },
  { icon: Shield, title: "Opt-in Management", desc: "Ensure compliance with WhatsApp policies and opt-in/opt-out management." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Track delivery, read, and reply rates with detailed campaign reports." },
  { icon: Users, title: "Scale Effortlessly", desc: "Send thousands of messages while maintaining deliverability and compliance." },
];

const faqs = [
  { q: "Is bulk WhatsApp messaging legal?", a: "Yes, when done through the official WhatsApp Business API with proper opt-in consent and approved templates, bulk messaging is fully compliant." },
  { q: "How many messages can I send?", a: "There's no hard limit. Your messaging tier increases as you maintain quality and engagement. Pipebot helps you scale progressively." },
  { q: "What types of messages can I send in bulk?", a: "You can send marketing promotions, transactional alerts, utility notifications, and re-engagement campaigns using approved templates." },
];

const BulkWhatsApp = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Bulk WhatsApp <span className="text-gradient-hero">Marketing Software</span>
          </h1>
          <p className="text-lg text-muted-foreground">Send promotional & transactional WhatsApp messages at scale with campaign scheduling, segmentation & real-time analytics.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Get Started</a>
            <a href="/contact" className="glass-card px-8 py-3 rounded-xl font-semibold text-foreground hover:border-primary/50 transition">Book Demo</a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 rounded-2xl">
              <f.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

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
      </div>
    </main>
    <Footer />
  </div>
);

export default BulkWhatsApp;
