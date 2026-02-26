import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-secondary/10" />
        <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-neon-teal/5 blur-[180px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(195 100% 50%) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-primary/80">Official WhatsApp API Partner · 99.9% Uptime</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              <span className="text-foreground">Automate.</span>
              <br />
              <span className="text-foreground">Engage.</span>
              <br />
              <span className="text-gradient-hero">Convert.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10">
              AI-powered WhatsApp & Messaging Automation Platform for Sales, Support & Marketing. Built for growing businesses.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg btn-glow hover:brightness-110 transition text-center">
                Get Started Free
              </a>
              <a href="/contact" className="glass-card px-8 py-4 rounded-xl font-semibold text-lg text-foreground hover:border-primary/50 transition-colors text-center">
                Book Demo
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Enterprise Security
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Setup in 5 Minutes
              </div>
            </motion.div>
          </div>

          {/* Right: Hero illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none rounded-2xl" />
            <div className="rounded-2xl overflow-hidden glow-blue">
              <img src={heroIllustration} alt="Pipebot WhatsApp Automation Platform showing AI chatbots, campaign analytics, and multi-channel messaging dashboard" className="w-full h-auto" loading="eager" />
            </div>
            {/* Floating badges */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full text-sm font-semibold text-primary glow-blue z-20">
              🤖 AI Powered
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full text-sm font-semibold text-accent glow-teal z-20">
              ✅ WhatsApp Official
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
