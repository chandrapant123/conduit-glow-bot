import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Megaphone, Send, Repeat, Target, BarChart3, Zap } from "lucide-react";

const features = [
  { icon: Megaphone, title: "Broadcast Campaigns", desc: "Send bulk promotional campaigns to segmented audiences with high engagement." },
  { icon: Repeat, title: "Re-engagement Flows", desc: "Automatically re-engage inactive customers with personalized messages." },
  { icon: Send, title: "Drip Campaigns", desc: "Set up automated message sequences triggered by events or time delays." },
  { icon: Target, title: "Audience Segmentation", desc: "Target the right customers with behavioral and demographic segmentation." },
  { icon: BarChart3, title: "Campaign Analytics", desc: "Measure open rates, click-through rates, and conversion metrics." },
  { icon: Zap, title: "A/B Testing", desc: "Test different message variants to optimize campaign performance." },
];

const MarketingAutomation = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            WhatsApp Marketing <span className="text-gradient-hero">Automation Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground">Run bulk campaigns, drip sequences & re-engagement flows using WhatsApp marketing automation built for conversions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Get Started</a>
            <a href="/contact" className="glass-card px-8 py-3 rounded-xl font-semibold text-foreground hover:border-primary/50 transition">Book Demo</a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 rounded-2xl">
              <f.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MarketingAutomation;
