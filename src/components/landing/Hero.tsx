import { motion } from "framer-motion";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-teal/5 blur-[150px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Official WhatsApp API Partner · 99.9% Uptime · Enterprise Security</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Automate. Engage.{" "}
            <span className="text-gradient-hero">Convert.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            AI-powered WhatsApp & Messaging Automation Platform for Sales, Support & Marketing. Built for startups, enterprises, fintech, e-commerce & service businesses.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-lg btn-glow hover:brightness-110 transition">
              Get Started
            </a>
            <a href="/contact" className="glass-card px-8 py-3.5 rounded-xl font-semibold text-lg text-foreground hover:border-primary/50 transition-colors">
              Book Demo
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-2xl overflow-hidden border border-glass-border glow-blue">
            <img src={dashboardMockup} alt="Pipebot WhatsApp Marketing Dashboard showing campaign metrics, chat analytics, and contact management" className="w-full h-auto" loading="eager" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
