import { motion } from "framer-motion";
import { Shield, Server, RefreshCw, FileCheck, Key } from "lucide-react";

const items = [
  { icon: Shield, label: "Enterprise Security" },
  { icon: Server, label: "Scalable Infrastructure" },
  { icon: RefreshCw, label: "Real-time Sync" },
  { icon: FileCheck, label: "Compliance-Ready" },
  { icon: Key, label: "Dedicated Support" },
];

const Security = () => (
  <section className="py-24 section-gradient" id="security">
    <div className="container mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Transparent Pricing, <span className="text-gradient-primary">No Hidden Costs</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Simple, usage-based pricing for WhatsApp API, bulk campaigns, SMS & RCS. We scale with you.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, i) => (
          <motion.div key={item.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card px-6 py-4 flex items-center gap-3 hover:border-primary/30 transition-colors">
            <item.icon className="text-primary" size={20} />
            <span className="text-sm font-medium text-foreground">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Security;
