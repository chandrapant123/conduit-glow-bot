import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Mail, Shield, Megaphone, MessageSquare, BarChart3, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  { icon: Shield, title: "High Delivery OTP SMS", desc: "Priority delivery routes for time-sensitive OTP and authentication messages." },
  { icon: Megaphone, title: "Marketing Campaigns", desc: "Reach customers with promotional SMS campaigns and drive conversions." },
  { icon: Mail, title: "Transactional Alerts", desc: "Automated order confirmations, payment receipts, and status updates." },
  { icon: MessageSquare, title: "Two-Way SMS", desc: "Enable customers to reply to your messages for interactive communication." },
  { icon: BarChart3, title: "Delivery Reports", desc: "Real-time delivery tracking and analytics for every message sent." },
  { icon: Zap, title: "DLT Compliant", desc: "Fully compliant with TRAI DLT regulations for enterprise messaging." },
];

const faqs = [
  { q: "What types of SMS can I send?", a: "You can send transactional SMS (OTP, alerts), promotional SMS (offers, marketing), and two-way conversational SMS through Pipebot." },
  { q: "Is your SMS platform DLT compliant?", a: "Yes, Pipebot's SMS platform is fully compliant with TRAI DLT regulations for sending SMS in India." },
  { q: "What delivery rates can I expect?", a: "We maintain high delivery rates through priority routing and carrier-grade infrastructure with real-time monitoring." },
];

const BulkSMS = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Bulk SMS Service Provider for <span className="text-gradient-hero">Businesses</span>
          </h1>
          <p className="text-lg text-muted-foreground">Send OTP, transactional & promotional SMS with high delivery rates. Scalable bulk SMS platform for growing businesses.</p>
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

export default BulkSMS;
