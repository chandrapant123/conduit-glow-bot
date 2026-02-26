import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Send, Target, Clock, BarChart3, Shield, Users, Repeat, Zap, Filter, TrendingUp, FileText, Globe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import bulkCampaignHero from "@/assets/bulk-campaign-hero.png";

const features = [
  { icon: Send, title: "Campaign Scheduler", desc: "Schedule bulk WhatsApp campaigns in advance for optimal engagement times." },
  { icon: Target, title: "Contact Segmentation", desc: "Target the right audience with smart filters and custom contact groups." },
  { icon: Clock, title: "Template-Based Broadcast", desc: "Pre-approved templates for promotional, transactional & utility messages." },
  { icon: Shield, title: "Opt-in Management", desc: "Ensure compliance with WhatsApp policies and opt-in/opt-out management." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Track delivery, read, and reply rates with detailed campaign reports." },
  { icon: Users, title: "Scale Effortlessly", desc: "Send thousands of messages while maintaining deliverability and compliance." },
  { icon: Repeat, title: "Drip Campaigns", desc: "Automated multi-step follow-up sequences for lead nurturing and re-engagement." },
  { icon: Zap, title: "Trigger-Based Messages", desc: "Send automated messages based on customer actions, events, or time delays." },
  { icon: Filter, title: "A/B Testing", desc: "Test different message variations to optimize open rates and conversions." },
  { icon: TrendingUp, title: "ROI Tracking", desc: "Track campaign revenue, conversion rates, and cost per acquisition." },
  { icon: FileText, title: "Template Library", desc: "Pre-built campaign templates for promotions, reminders, and engagement." },
  { icon: Globe, title: "Multi-Language Campaigns", desc: "Send campaigns in multiple languages with auto-translation support." },
];

const faqs = [
  { q: "Is bulk WhatsApp messaging legal?", a: "Yes, when done through the official WhatsApp Business API with proper opt-in consent and approved templates, bulk messaging is fully compliant with WhatsApp policies." },
  { q: "How many messages can I send?", a: "There's no hard limit. Your messaging tier increases as you maintain quality and engagement. Pipebot helps you scale from 1K to 100K+ contacts/day." },
  { q: "What types of messages can I send in bulk?", a: "You can send marketing promotions, transactional alerts, utility notifications, and re-engagement campaigns using pre-approved templates." },
  { q: "How do I get templates approved?", a: "Pipebot provides a template builder with best practices. We submit templates for approval and most get approved within 24 hours." },
  { q: "Can I import my contact list?", a: "Yes, import contacts via CSV/Excel files or sync automatically from your CRM, eCommerce platform, or custom database." },
  { q: "What analytics are available?", a: "Track delivery rates, read rates, click-through rates, reply rates, opt-out rates, and campaign ROI in real-time dashboards." },
  { q: "Is there a free trial?", a: "Yes, start with a 14-day free trial that includes 500 messages. No credit card required to get started." },
  { q: "Can I schedule campaigns?", a: "Absolutely. Schedule campaigns for specific dates and times, set recurring campaigns, and create drip sequences." },
];

const BulkWhatsApp = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-36 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Bulk WhatsApp <span className="text-gradient-hero">Marketing Software</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">Send promotional & transactional WhatsApp messages at scale. Campaign scheduling, contact segmentation, drip campaigns & real-time analytics.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition text-center">Start Free Trial</a>
              <a href="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition text-center">Book Demo</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <img src={bulkCampaignHero} alt="Bulk WhatsApp Campaign Dashboard" className="rounded-2xl shadow-xl border border-border w-full" />
          </motion.div>
        </div>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Campaign Features</h2>
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

        {/* Stats */}
        <section className="mb-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Delivery Rate" },
              { value: "85%", label: "Open Rate" },
              { value: "45%", label: "Click Rate" },
              { value: "3x", label: "Higher ROI vs Email" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-display font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
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

export default BulkWhatsApp;
