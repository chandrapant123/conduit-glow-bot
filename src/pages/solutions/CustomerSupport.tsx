import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Bot, Route, Users, Clock, BarChart3, Zap } from "lucide-react";

const features = [
  { icon: Bot, title: "24/7 AI Chatbot", desc: "Automate responses to common queries and provide instant support around the clock." },
  { icon: Route, title: "Smart Ticket Routing", desc: "Route conversations to the right agents based on topic, priority, and availability." },
  { icon: Users, title: "Agent Handover", desc: "Seamless escalation from AI bot to human agents when needed." },
  { icon: Clock, title: "Reduce Response Time", desc: "From hours to seconds — provide instant answers to customer queries." },
  { icon: BarChart3, title: "Agent Analytics", desc: "Track agent performance, response times, and customer satisfaction metrics." },
  { icon: Zap, title: "Multi-Agent Inbox", desc: "Shared team inbox with conversation assignment and collaboration tools." },
];

const CustomerSupport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            WhatsApp Customer Support <span className="text-gradient-hero">Automation</span>
          </h1>
          <p className="text-lg text-muted-foreground">Automate 24/7 customer support with WhatsApp chatbots, smart routing & multi-agent inbox. Reduce response time & improve CX.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Get Started</a>
            <a href="/contact" className="glass-card px-8 py-3 rounded-xl font-semibold text-foreground hover:border-primary/50 transition">Book Demo</a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 rounded-2xl">
              <f.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CustomerSupport;
