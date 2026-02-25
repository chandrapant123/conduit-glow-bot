import { motion } from "framer-motion";
import { MessageSquare, Users, Brain, Zap, Code, Globe } from "lucide-react";

const items = [
  { icon: MessageSquare, label: "Marketing Automation", color: "text-primary" },
  { icon: Users, label: "CRM & Contacts", color: "text-neon-teal" },
  { icon: Brain, label: "AI-Powered Bots", color: "text-secondary" },
  { icon: Zap, label: "Multi-Tenant SaaS", color: "text-neon-magenta" },
  { icon: Code, label: "Developer APIs", color: "text-neon-lime" },
  { icon: Globe, label: "Real-Time Messaging", color: "text-primary" },
];

const WhyPipebot = () => (
  <section className="py-24 relative" id="why">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          One Platform. <span className="text-gradient-primary">Unlimited Growth.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          From marketing automation and CRM to AI bots, developer APIs, and multi-tenant architecture — everything you need in one place.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-6 text-center hover:border-primary/30 transition-colors group"
          >
            <item.icon className={`mx-auto mb-3 ${item.color} group-hover:scale-110 transition-transform`} size={28} />
            <p className="text-sm font-medium text-foreground">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyPipebot;
