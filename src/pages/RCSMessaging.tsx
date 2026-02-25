import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Smartphone, MousePointer, Image, BadgeCheck, Bell, BarChart3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  { icon: MousePointer, title: "Interactive Buttons", desc: "Add action buttons for quick replies, URLs, and call-to-actions in messages." },
  { icon: Image, title: "Rich Media & Carousels", desc: "Send image carousels, videos, and rich media for engaging customer experiences." },
  { icon: BadgeCheck, title: "Branded Sender ID", desc: "Display your business name and logo as the sender for instant brand recognition." },
  { icon: Smartphone, title: "Rich Media Support", desc: "Go beyond plain text with images, GIFs, and interactive content." },
  { icon: Bell, title: "Promotions & Notifications", desc: "Send promotional offers, OTPs, and transactional alerts via RCS." },
  { icon: BarChart3, title: "Analytics & Tracking", desc: "Track engagement metrics and optimize your RCS messaging strategy." },
];

const faqs = [
  { q: "What is RCS Messaging?", a: "RCS (Rich Communication Services) is the next generation of SMS, offering rich media, interactive buttons, branded sender IDs, and read receipts." },
  { q: "How is RCS different from SMS?", a: "RCS supports rich media, interactive elements, and branding while SMS is limited to plain text. RCS offers significantly higher engagement rates." },
  { q: "Is RCS available in India?", a: "Yes, RCS is increasingly supported by carriers in India and globally. Pipebot helps you leverage RCS for maximum engagement." },
];

const RCSMessaging = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            RCS Business <span className="text-gradient-hero">Messaging Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground">Upgrade from SMS to rich RCS messaging with interactive buttons, carousels & branded sender ID for better customer engagement.</p>
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

export default RCSMessaging;
