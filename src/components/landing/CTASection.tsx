import { motion } from "framer-motion";
import { useState } from "react";

const CTASection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Pipebot Demo Request");
    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}`);
    window.open(`mailto:info@pipebot.ai?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ready to Build Your{" "}
            <span className="text-gradient-hero">WhatsApp Empire?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get started today — or schedule a live demo with our team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+919599923365"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-lg btn-glow hover:brightness-110 transition"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+919599923365"
              className="glass-card px-8 py-3.5 rounded-xl font-semibold text-lg text-foreground hover:border-primary/50 transition-colors"
            >
              Schedule Live Demo
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 max-w-md mx-auto glow-blue"
          >
            <h3 className="font-display font-bold text-lg mb-1 text-foreground">Get in Touch</h3>
            <p className="text-sm text-muted-foreground mb-6">We'll reach out within 24 hours.</p>

            {submitted ? (
              <div className="text-accent font-semibold py-4">Thanks! We'll be in touch soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-muted/50 border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-muted/50 border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold btn-glow hover:brightness-110 transition"
                >
                  Send to info@pipebot.ai
                </button>
              </form>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              Or call us: <a href="tel:+919599923365" className="text-primary hover:underline">+91 95999 23365</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
