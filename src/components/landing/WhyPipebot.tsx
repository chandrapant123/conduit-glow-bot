import { motion } from "framer-motion";
import { MessageSquare, Bot, BarChart3, Users, Zap, Shield } from "lucide-react";

const items = [
  { icon: MessageSquare, label: "Official WhatsApp API", color: "text-primary" },
  { icon: Bot, label: "AI + RAG Chatbot", color: "text-neon-teal" },
  { icon: Zap, label: "Marketing Automation", color: "text-secondary" },
  { icon: Users, label: "Multi-Agent Inbox", color: "text-neon-magenta" },
  { icon: BarChart3, label: "Campaign Analytics", color: "text-neon-lime" },
  { icon: Shield, label: "99.9% Uptime", color: "text-primary" },
];

const WhyPipebot = () => (
  <section className="py-24 relative" id="why">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Why Businesses Choose <span className="text-gradient-primary">Pipebot</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to scale customer conversations — WhatsApp API, AI chatbots, bulk campaigns, analytics & more.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item, i) => (
          <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6 text-center hover:border-primary/30 transition-colors group">
            <item.icon className={`mx-auto mb-3 ${item.color} group-hover:scale-110 transition-transform`} size={28} />
            <p className="text-sm font-medium text-foreground">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyPipebot;
