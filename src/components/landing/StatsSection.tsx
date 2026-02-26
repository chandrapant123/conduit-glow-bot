import { motion } from "framer-motion";

const stats = [
  { value: "99.9%", label: "Platform Uptime" },
  { value: "10M+", label: "Messages Per Month" },
  { value: "50+", label: "Integrations" },
  { value: "24/7", label: "AI Monitoring" },
];

const StatsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-10 rounded-2xl glow-blue">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8">Built for scale. Trusted by fast-growing brands.</p>
      </motion.div>
    </div>
  </section>
);

export default StatsSection;
