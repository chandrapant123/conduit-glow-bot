import { motion } from "framer-motion";
import { Send, Users, RefreshCw, ShoppingCart, TrendingUp, BarChart3 } from "lucide-react";

const features = [
  { icon: Send, title: "Bulk Broadcasts", desc: "Send campaigns to thousands instantly." },
  { icon: Users, title: "Contact Segmentation", desc: "Target the right audience every time." },
  { icon: RefreshCw, title: "Drip Campaigns", desc: "Automated multi-step follow-ups." },
  { icon: ShoppingCart, title: "Cart Recovery", desc: "Win back abandoned carts on WhatsApp." },
  { icon: TrendingUp, title: "Re-engagement Flows", desc: "Bring back dormant customers." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Track opens, replies & conversions." },
];

const MarketingSection = () => (
  <section className="py-24 section-gradient">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Launch Campaigns That <span className="text-gradient-primary">Convert</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Turn conversations into revenue with automated marketing workflows.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6 hover:border-primary/30 transition-all group">
            <f.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h4 className="font-display font-bold text-foreground mb-1">{f.title}</h4>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="/bulk-whatsapp" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">
          Start Campaign Now →
        </a>
      </div>
    </div>
  </section>
);

export default MarketingSection;
