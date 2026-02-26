import { motion } from "framer-motion";
import { MessageSquare, Send, Bot, Smartphone, Mail } from "lucide-react";
import platformOverview from "@/assets/platform-overview.png";

const whatIs = [
  { icon: MessageSquare, label: "WhatsApp API", desc: "Official API integration for scalable communication." },
  { icon: Send, label: "Bulk WhatsApp", desc: "Campaign broadcasts at scale with analytics." },
  { icon: Mail, label: "SMS", desc: "High-delivery OTP & marketing SMS." },
  { icon: Smartphone, label: "RCS Messaging", desc: "Rich interactive messages beyond SMS." },
  { icon: Bot, label: "AI Chatbots", desc: "Intelligent automation for support & sales." },
];

const MultiTenant = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-primary">Scale Conversations</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Pipebot is a unified messaging automation platform that helps businesses manage WhatsApp API, bulk campaigns, AI chatbots, RCS and SMS from a single dashboard.
          </p>
          <div className="space-y-4">
            {whatIs.map((p, i) => (
              <motion.div key={p.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4">
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

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="rounded-2xl overflow-hidden glow-blue">
            <img src={platformOverview} alt="Pipebot unified messaging platform overview" className="w-full h-auto" loading="lazy" />
          </div>
          {/* Stats overlay */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%]">
            <div className="glass-card p-4 rounded-xl grid grid-cols-4 gap-4">
              {[
                { v: "99.9%", l: "Uptime" },
                { v: "10M+", l: "Messages/mo" },
                { v: "50+", l: "Integrations" },
                { v: "24/7", l: "AI Support" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-lg font-bold text-primary">{s.v}</p>
                  <p className="text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MultiTenant;
