import { motion } from "framer-motion";
import { MessageSquare, Send, Bot, Smartphone, Mail } from "lucide-react";

const products = [
  { icon: MessageSquare, title: "WhatsApp Business API", desc: "Official API integration with multi-agent dashboard, automation workflows & green tick support.", href: "/whatsapp-business-api", color: "text-primary" },
  { icon: Send, title: "Bulk WhatsApp Marketing", desc: "Campaign scheduler, contact segmentation, template broadcasts & real-time analytics.", href: "/bulk-whatsapp", color: "text-neon-teal" },
  { icon: Bot, title: "AI WhatsApp Chatbot", desc: "RAG-powered intelligent responses, lead qualification, appointment booking & FAQ automation.", href: "/ai-whatsapp-chatbot", color: "text-secondary" },
  { icon: Smartphone, title: "RCS Messaging", desc: "Interactive buttons, carousels, branded sender ID & rich media for next-gen messaging.", href: "/rcs-messaging", color: "text-neon-magenta" },
  { icon: Mail, title: "Bulk SMS Platform", desc: "High-delivery OTP, promotional & transactional SMS with two-way capabilities.", href: "/bulk-sms", color: "text-neon-lime" },
];

const FeaturesGrid = () => (
  <section className="py-24 section-gradient" id="products">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Messaging Products Built for <span className="text-gradient-primary">Growth</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          From WhatsApp API to AI chatbots, SMS & RCS — everything you need in one platform.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((p, i) => (
          <motion.a key={p.title} href={p.href} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group">
            <p.icon className={`${p.color} mb-4 group-hover:scale-110 transition-transform`} size={32} />
            <h3 className="font-display font-bold text-lg mb-2 text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
