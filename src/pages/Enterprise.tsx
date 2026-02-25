import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Building2, Shield, Users, Palette, Repeat, Headphones } from "lucide-react";

const benefits = [
  { icon: Building2, title: "Multi-Tenant Architecture", desc: "Run unlimited clients with complete tenant isolation, independent integrations, and per-tenant billing." },
  { icon: Palette, title: "White-Label Branding", desc: "Offer Pipebot under your own brand with custom logos, domains, and color schemes." },
  { icon: Repeat, title: "Recurring Revenue Model", desc: "Build a profitable SaaS business with subscription-based pricing and automated billing." },
  { icon: Shield, title: "Enterprise SLA & Support", desc: "99.9% uptime SLA, dedicated account manager, and priority engineering support." },
  { icon: Users, title: "Team & Role Management", desc: "Granular permissions, team workspaces, and audit logs for enterprise governance." },
  { icon: Headphones, title: "Custom Integrations", desc: "Tailored integrations with your existing tech stack, CRM, ERP, and payment systems." },
];

const Enterprise = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Enterprise & <span className="text-gradient-hero">Agency Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Scale your WhatsApp marketing business with multi-tenant infrastructure, white-label branding, and enterprise-grade support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 rounded-2xl">
              <b.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Why Agencies Love Pipebot</h2>
          <p className="text-muted-foreground mb-6">Manage all your clients from a single dashboard, automate onboarding, and generate recurring revenue with zero infrastructure overhead.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#cta" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Request Enterprise Demo</a>
            <a href="/#cta" className="glass-card px-8 py-3 rounded-xl font-semibold text-foreground hover:border-primary/50 transition">Contact Sales</a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Enterprise;
