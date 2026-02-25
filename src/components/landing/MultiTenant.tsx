import { motion } from "framer-motion";
import { Server, Users, CreditCard, Paintbrush, Infinity } from "lucide-react";

const points = [
  { icon: Server, label: "Tenant Isolation", desc: "Each client gets their own isolated environment." },
  { icon: CreditCard, label: "Subscription Models", desc: "Built-in billing and plan management." },
  { icon: Paintbrush, label: "White-Label Support", desc: "Brand it as your own product." },
  { icon: Users, label: "Independent Integrations", desc: "Each tenant has their own API keys and webhooks." },
  { icon: Infinity, label: "Unlimited Clients", desc: "Scale to thousands of tenants effortlessly." },
];

const MultiTenant = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Built for Scale.{" "}
            <span className="text-gradient-primary">Designed for SaaS.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our multi-tenant architecture means you can onboard unlimited clients, each with their own isolated workspace, integrations, and billing.
          </p>
          <div className="space-y-4">
            {points.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <p.icon className="text-primary" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{p.label}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 glow-blue"
        >
          <div className="space-y-6">
            {["Agency A", "Agency B", "Agency C"].map((name, i) => (
              <div key={name} className="glass-card p-4 border-glass-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-foreground">{name}</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">Active</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { v: `${(i + 1) * 12}k`, l: "Messages" },
                    { v: `${(i + 1) * 3}k`, l: "Contacts" },
                    { v: `${(i + 1) * 5}`, l: "Campaigns" },
                  ].map((s) => (
                    <div key={s.l} className="bg-muted/30 rounded-lg p-2">
                      <p className="text-lg font-bold text-primary">{s.v}</p>
                      <p className="text-xs text-muted-foreground">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MultiTenant;
