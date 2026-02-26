import { motion } from "framer-motion";
import { AlertTriangle, Clock, BarChart3, Settings, Unplug } from "lucide-react";

const pains = [
  { icon: AlertTriangle, label: "Missed Leads", desc: "Prospects slip away when nobody responds fast enough." },
  { icon: Clock, label: "Slow Replies", desc: "Manual messaging can't keep up with customer demand." },
  { icon: BarChart3, label: "No Campaign Analytics", desc: "You can't improve what you can't measure." },
  { icon: Settings, label: "No Automation", desc: "Repetitive tasks drain your team's productivity." },
  { icon: Unplug, label: "Disconnected Tools", desc: "Juggling multiple platforms wastes time and money." },
];

const PainPoints = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Still Managing WhatsApp <span className="text-gradient-primary">Manually?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Modern customers expect instant replies. Manual messaging is costing you conversions. <span className="text-primary font-semibold">Pipebot fixes this — instantly.</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
        {pains.map((p, i) => (
          <motion.div key={p.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6 text-center hover:border-destructive/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-destructive/20 transition-colors">
              <p.icon className="text-destructive" size={22} />
            </div>
            <h4 className="font-display font-bold text-sm text-foreground mb-1">{p.label}</h4>
            <p className="text-xs text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPoints;
