import { motion } from "framer-motion";
import { Building2, Rocket, Headphones, Briefcase, Store } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Digital Marketing Agencies",
    desc: "Manage multiple clients from a single dashboard. Offer WhatsApp automation as a service and build recurring revenue at scale.",
    color: "text-primary",
  },
  {
    icon: Rocket,
    title: "SaaS Entrepreneurs",
    desc: "Embed white-label WhatsApp marketing into your SaaS. Multi-tenant architecture means infinite scalability.",
    color: "text-neon-teal",
  },
  {
    icon: Headphones,
    title: "Customer Support Centers",
    desc: "Route conversations intelligently, use AI-powered responses, and manage tickets — all from WhatsApp.",
    color: "text-secondary",
  },
  {
    icon: Briefcase,
    title: "Freelancers & Consultants",
    desc: "Impress clients with professional WhatsApp campaigns. Automate follow-ups and nurture leads effortlessly.",
    color: "text-neon-magenta",
  },
  {
    icon: Store,
    title: "Small to Medium Enterprises",
    desc: "Affordable, enterprise-grade WhatsApp marketing. Order updates, cart recovery, and payment alerts on autopilot.",
    color: "text-neon-lime",
  },
];

const AudienceCards = () => (
  <section className="py-24" id="audience">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Who Is <span className="text-gradient-primary">Pipebot</span> For?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Built for anyone who wants to own the WhatsApp channel.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-8 hover:border-primary/30 transition-all duration-300 ${i >= 3 ? "lg:col-span-1" : ""}`}
          >
            <a.icon className={`${a.color} mb-4`} size={32} />
            <h3 className="font-display font-bold text-lg mb-2 text-foreground">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceCards;
