import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { UserPlus, Repeat, Target, MessageSquare, BarChart3, Zap } from "lucide-react";

const features = [
  { icon: UserPlus, title: "Lead Capture", desc: "Automatically capture leads from WhatsApp conversations and web forms." },
  { icon: Repeat, title: "Automated Follow-ups", desc: "Schedule and send follow-up messages to nurture leads through the funnel." },
  { icon: Target, title: "Funnel Nurturing", desc: "Move leads through sales stages with personalized WhatsApp sequences." },
  { icon: MessageSquare, title: "Conversation Workflows", desc: "Build custom conversation flows for qualification and engagement." },
  { icon: BarChart3, title: "Sales Analytics", desc: "Track conversion rates, response times, and pipeline performance." },
  { icon: Zap, title: "CRM Integration", desc: "Sync leads and conversations with your existing CRM tools." },
];

const SalesAutomation = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            WhatsApp Sales <span className="text-gradient-hero">Automation Software</span>
          </h1>
          <p className="text-lg text-muted-foreground">Capture, nurture and convert leads using automated WhatsApp sales funnels, follow-ups & conversation workflows.</p>
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

export default SalesAutomation;
