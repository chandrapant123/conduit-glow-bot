import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Headphones, TrendingUp, Megaphone, ShoppingCart, Building2 } from "lucide-react";

const solutions = [
  { icon: Headphones, title: "Customer Support Automation", desc: "24/7 chatbot, smart ticket routing, agent handover — reduce response time & improve CX.", href: "/solutions/customer-support-automation" },
  { icon: TrendingUp, title: "Sales Funnel Automation", desc: "Capture leads, automated follow-ups, funnel nurturing — close more deals via WhatsApp.", href: "/solutions/sales-automation" },
  { icon: Megaphone, title: "Marketing Campaign Automation", desc: "Broadcast campaigns, re-engagement flows, drip campaigns — maximize conversions.", href: "/solutions/marketing-automation" },
  { icon: ShoppingCart, title: "E-commerce Automation", desc: "Cart reminders, order tracking, COD confirmation — automate every touchpoint.", href: "/solutions/ecommerce-automation" },
];

const Solutions = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            WhatsApp Automation Solutions for <span className="text-gradient-hero">Modern Businesses</span>
          </h1>
          <p className="text-lg text-muted-foreground">Explore WhatsApp automation solutions for sales, support, marketing & e-commerce. Scale engagement with AI-driven messaging.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {solutions.map((s, i) => (
            <motion.a key={s.title} href={s.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-colors group">
              <s.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-xl font-display font-bold text-foreground mb-2">{s.title}</h2>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Get Started</a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Solutions;
