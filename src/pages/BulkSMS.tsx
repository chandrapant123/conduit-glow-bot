import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Mail, Shield, Megaphone, MessageSquare, BarChart3, Zap, Clock, Globe, Users, Lock, FileText, Smartphone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import smsHero from "@/assets/sms-hero.png";

const features = [
  { icon: Shield, title: "High Delivery OTP SMS", desc: "Priority delivery routes for time-sensitive OTP and authentication messages." },
  { icon: Megaphone, title: "Marketing Campaigns", desc: "Reach customers with promotional SMS campaigns and drive conversions at scale." },
  { icon: Mail, title: "Transactional Alerts", desc: "Automated order confirmations, payment receipts, and status updates." },
  { icon: MessageSquare, title: "Two-Way SMS", desc: "Enable customers to reply to your messages for interactive communication." },
  { icon: BarChart3, title: "Delivery Reports", desc: "Real-time delivery tracking and analytics for every message sent." },
  { icon: Zap, title: "DLT Compliant", desc: "Fully compliant with TRAI DLT regulations for enterprise messaging in India." },
  { icon: Clock, title: "Scheduled SMS", desc: "Schedule messages for optimal delivery times across different time zones." },
  { icon: Globe, title: "International SMS", desc: "Send SMS worldwide with carrier-grade delivery across 200+ countries." },
  { icon: Users, title: "Contact Management", desc: "Import, segment, and manage contacts with smart lists and tags." },
  { icon: Lock, title: "Secure Messaging", desc: "Enterprise-grade security for sensitive OTP, banking, and healthcare messages." },
  { icon: FileText, title: "Template Management", desc: "DLT-approved template management with quick submission and tracking." },
  { icon: Smartphone, title: "API Integration", desc: "RESTful APIs for seamless integration with your applications and workflows." },
];

const smsTypes = [
  { title: "Transactional SMS", desc: "OTP verification, order updates, payment confirmations, and security alerts delivered instantly.", color: "from-primary/10 to-primary/5" },
  { title: "Promotional SMS", desc: "Marketing campaigns, offers, discounts, product launches, and event announcements to opted-in customers.", color: "from-accent/10 to-accent/5" },
  { title: "OTP & Authentication", desc: "Time-critical OTP delivery for login verification, two-factor authentication, and secure transactions.", color: "from-secondary/10 to-secondary/5" },
];

const faqs = [
  { q: "What types of SMS can I send?", a: "You can send transactional SMS (OTP, alerts), promotional SMS (offers, marketing), and two-way conversational SMS through Pipebot's platform." },
  { q: "Is your SMS platform DLT compliant?", a: "Yes, Pipebot's SMS platform is fully compliant with TRAI DLT regulations for sending SMS in India. We help with entity registration and template approval." },
  { q: "What delivery rates can I expect?", a: "We maintain 98%+ delivery rates through priority routing and carrier-grade infrastructure with real-time monitoring and automatic failover." },
  { q: "Can I send international SMS?", a: "Yes, we support international SMS delivery across 200+ countries with competitive rates and reliable delivery." },
  { q: "Do you support Unicode/regional languages?", a: "Yes, we support Unicode SMS for all Indian languages including Hindi, Tamil, Telugu, Bengali, and more." },
  { q: "What's the pricing model?", a: "Pay-as-you-go pricing with volume discounts. No platform fees. Plans start from $49/month with dedicated routes." },
  { q: "How fast are OTP deliveries?", a: "OTP messages are delivered within 3-5 seconds through our priority delivery routes with 99.9% uptime guarantee." },
  { q: "Can I integrate SMS with my application?", a: "Yes, use our RESTful APIs and SDKs for seamless integration. We provide documentation, code samples, and technical support." },
];

const BulkSMS = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-36 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Bulk SMS Service for <span className="text-gradient-hero">Growing Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">Send OTP, transactional & promotional SMS with 98%+ delivery rates. DLT-compliant, API-ready, and scalable for enterprises.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition text-center">Start Free Trial</a>
              <a href="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition text-center">Book Demo</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <img src={smsHero} alt="SMS Marketing Platform" className="rounded-2xl shadow-xl border border-border w-full" />
          </motion.div>
        </div>

        {/* SMS Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">SMS Solutions for Every Need</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {smsTypes.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`bg-gradient-to-br ${t.color} p-8 rounded-2xl border border-border`}>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{t.title}</h3>
                <p className="text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Platform Features</h2>
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

export default BulkSMS;
