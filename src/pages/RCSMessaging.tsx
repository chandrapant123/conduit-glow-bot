import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Smartphone, MousePointer, Image, BadgeCheck, Bell, BarChart3, Palette, MessageSquare, Globe, Shield, Zap, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import rcsHero from "@/assets/rcs-hero.png";

const features = [
  { icon: MousePointer, title: "Interactive Buttons", desc: "Add action buttons for quick replies, URLs, and call-to-actions in messages." },
  { icon: Image, title: "Rich Media & Carousels", desc: "Send image carousels, videos, and rich media for engaging customer experiences." },
  { icon: BadgeCheck, title: "Branded Sender ID", desc: "Display your business name and logo as the sender for instant brand recognition." },
  { icon: Smartphone, title: "Rich Card Messages", desc: "Send visually rich cards with images, descriptions, and action buttons." },
  { icon: Bell, title: "Promotions & Notifications", desc: "Send promotional offers, OTPs, and transactional alerts via RCS." },
  { icon: BarChart3, title: "Analytics & Tracking", desc: "Track engagement, read receipts, and click-through rates in real-time." },
  { icon: Palette, title: "Custom Branding", desc: "Full brand customization with logos, colors, and brand identity in every message." },
  { icon: MessageSquare, title: "Suggested Actions", desc: "Guide users with suggested replies and actions for seamless conversations." },
  { icon: Globe, title: "Global Reach", desc: "RCS is supported by major carriers worldwide including India, US, UK, and EU." },
  { icon: Shield, title: "Verified Sender", desc: "Messages come from verified business profiles, reducing spam perception." },
  { icon: Zap, title: "SMS Fallback", desc: "Automatic SMS fallback when RCS is unavailable, ensuring 100% delivery." },
  { icon: Users, title: "Group Messaging", desc: "Send rich media group messages for community engagement and announcements." },
];

const comparison = [
  { feature: "Media Support", sms: "None", rcs: "Images, Video, Carousels" },
  { feature: "Buttons & CTAs", sms: "None", rcs: "Interactive Buttons" },
  { feature: "Branding", sms: "No", rcs: "Logo, Colors, Name" },
  { feature: "Read Receipts", sms: "No", rcs: "Yes" },
  { feature: "Character Limit", sms: "160 chars", rcs: "Unlimited" },
  { feature: "Engagement Rate", sms: "~5%", rcs: "~35%" },
];

const faqs = [
  { q: "What is RCS Messaging?", a: "RCS (Rich Communication Services) is the next generation of SMS, offering rich media, interactive buttons, branded sender IDs, and read receipts natively in the messaging app." },
  { q: "How is RCS different from SMS?", a: "RCS supports rich media, interactive elements, and branding while SMS is limited to 160 characters of plain text. RCS offers 7x higher engagement rates." },
  { q: "Is RCS available in India?", a: "Yes, RCS is supported by major carriers in India including Jio and Airtel. Coverage is expanding rapidly with Android's default messaging app." },
  { q: "Do recipients need to install an app?", a: "No. RCS works natively in the default messaging app on Android devices. No app installation needed." },
  { q: "What happens on iPhones?", a: "RCS falls back to SMS on iPhones. However, Apple is adding RCS support in iOS 18+, expanding reach significantly." },
  { q: "Can I send promotional messages via RCS?", a: "Yes, RCS is perfect for promotional campaigns with rich media, product carousels, and interactive CTAs." },
  { q: "What's the cost compared to SMS?", a: "RCS pricing varies by carrier but typically costs similar to SMS while delivering significantly higher engagement and conversion rates." },
  { q: "How do I get started with RCS?", a: "Contact our team to register your business brand for RCS. We handle carrier approvals and setup within 5-7 business days." },
];

const RCSMessaging = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-36 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              RCS Business <span className="text-gradient-hero">Messaging Platform</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">Upgrade from plain SMS to rich, interactive RCS messaging. Send carousels, branded messages, and interactive buttons natively.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition text-center">Get Started</a>
              <a href="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition text-center">Book Demo</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <img src={rcsHero} alt="RCS Messaging Platform" className="rounded-2xl shadow-xl border border-border w-full" />
          </motion.div>
        </div>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">RCS Messaging Features</h2>
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

        {/* RCS vs SMS Comparison */}
        <section className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-8">RCS vs SMS Comparison</h2>
          <div className="glass-card rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-foreground font-display">Feature</th>
                  <th className="p-4 text-center text-muted-foreground">SMS</th>
                  <th className="p-4 text-center text-primary font-bold">RCS</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr key={c.feature} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/20" : ""}`}>
                    <td className="p-4 text-foreground font-medium">{c.feature}</td>
                    <td className="p-4 text-center text-muted-foreground">{c.sms}</td>
                    <td className="p-4 text-center text-primary font-medium">{c.rcs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default RCSMessaging;
