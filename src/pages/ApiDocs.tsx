import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Code2, Webhook, Globe, Key, BookOpen, Terminal } from "lucide-react";

const sections = [
  { icon: Terminal, title: "Campaign API", desc: "Launch and manage bulk WhatsApp campaigns programmatically. Send personalized messages at scale with merge fields and scheduling." },
  { icon: Globe, title: "Group Management", desc: "Create, update, and manage WhatsApp groups via API. Add members, set admins, and broadcast to groups seamlessly." },
  { icon: Webhook, title: "Webhook Forwarding", desc: "Receive real-time event notifications for message delivery, read receipts, and user interactions via configurable webhooks." },
  { icon: Code2, title: "Message API", desc: "Send text, media, templates, and interactive messages through a unified API endpoint with built-in rate limiting." },
  { icon: Key, title: "Authentication & Tokens", desc: "Secure API access with token-based authentication. Manage API keys per tenant with granular permission controls." },
  { icon: BookOpen, title: "Documentation Hub", desc: "Comprehensive guides for getting started, bot flow builder, CRM integration, multi-tenant setup, and best practices." },
];

const ApiDocs = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="text-gradient-primary">API</span> & Integrations
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect Pipebot to your CRM, eCommerce platform, ERP, or any system with our powerful REST APIs and webhook integrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 rounded-2xl">
              <s.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Quick Start Example</h2>
          <pre className="bg-background/50 p-4 rounded-xl text-sm text-muted-foreground overflow-x-auto">
{`curl -X POST https://api.pipebot.ai/v1/messages \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+919599923365",
    "template": "welcome_message",
    "params": { "name": "John" }
  }'`}
          </pre>
          <div className="flex gap-4 mt-6">
            <a href="/#cta" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Get API Keys</a>
            <a href="/#cta" className="glass-card px-6 py-2.5 rounded-xl font-semibold text-foreground hover:border-primary/50 transition">View Full Docs</a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ApiDocs;
