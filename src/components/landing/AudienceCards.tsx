import { motion } from "framer-motion";
import { Headphones, TrendingUp, Megaphone, ShoppingCart } from "lucide-react";

const solutions = [
  { icon: Headphones, title: "Customer Support Automation", desc: "24/7 chatbot, smart ticket routing, agent handover — reduce response time & improve CX.", href: "/solutions/customer-support-automation", color: "text-primary" },
  { icon: TrendingUp, title: "Sales Automation", desc: "Capture leads, automated follow-ups, funnel nurturing — close more deals via WhatsApp.", href: "/solutions/sales-automation", color: "text-neon-teal" },
  { icon: Megaphone, title: "Marketing Automation", desc: "Broadcast campaigns, re-engagement flows, drip campaigns — maximize conversions.", href: "/solutions/marketing-automation", color: "text-secondary" },
  { icon: ShoppingCart, title: "E-commerce Automation", desc: "Cart reminders, order tracking, COD confirmation — automate every touchpoint.", href: "/solutions/ecommerce-automation", color: "text-neon-magenta" },
];

const AudienceCards = () => (
  <section className="py-24" id="solutions">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Solutions for Sales, Support & <span className="text-gradient-primary">Marketing</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Industry-proven automation workflows for every business need.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {solutions.map((s, i) => (
          <motion.a key={s.title} href={s.href} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group">
            <s.icon className={`${s.color} mb-4 group-hover:scale-110 transition-transform`} size={32} />
            <h3 className="font-display font-bold text-lg mb-2 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceCards;
