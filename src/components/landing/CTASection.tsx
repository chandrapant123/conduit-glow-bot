import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden" id="cta">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Ready to Automate &{" "}
          <span className="text-gradient-hero">Scale?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Modern customers expect instant responses. Businesses that automate win. Start scaling conversations with Pipebot today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-lg btn-glow hover:brightness-110 transition">
            Get Started Free
          </a>
          <a href="/contact" className="glass-card px-8 py-3.5 rounded-xl font-semibold text-lg text-foreground hover:border-primary/50 transition-colors">
            Book Demo
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Or call us: <a href="tel:+919599923365" className="text-primary hover:underline">+91 95999 23365</a> · <a href="mailto:info@pipebot.ai" className="text-primary hover:underline">info@pipebot.ai</a>
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
