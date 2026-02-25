import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", useCase: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Pipebot Demo Request");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nUse Case: ${formData.useCase}`);
    window.open(`mailto:info@pipebot.ai?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                See Pipebot <span className="text-gradient-hero">in Action</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">Book a personalized demo with our messaging experts to scale your WhatsApp automation strategy.</p>
              
              <div className="space-y-4">
                {["Official WhatsApp API integration", "AI-powered chatbot automation", "Bulk campaign management", "Multi-agent shared inbox", "Pay-as-you-go pricing"].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:info@pipebot.ai" className="text-primary hover:underline">info@pipebot.ai</a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+919599923365" className="text-primary hover:underline">+91 95999 23365</a>
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-8 rounded-2xl glow-blue">
              <h2 className="font-display font-bold text-xl mb-1 text-foreground">Book a Demo</h2>
              <p className="text-sm text-muted-foreground mb-6">We'll reach out within 24 hours.</p>

              {submitted ? (
                <div className="text-accent font-semibold py-8 text-center">Thanks! We'll be in touch soon.</div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: "name", label: "Your Name", type: "text" },
                    { name: "email", label: "Email Address", type: "email" },
                    { name: "phone", label: "Phone Number", type: "tel" },
                    { name: "company", label: "Company Name", type: "text" },
                  ].map((field) => (
                    <input key={field.name} type={field.type} placeholder={field.label} required={field.name !== "company"} value={(formData as any)[field.name]} onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })} className="w-full bg-muted/50 border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  ))}
                  <textarea placeholder="Tell us about your use case" value={formData.useCase} onChange={(e) => setFormData({ ...formData, useCase: e.target.value })} rows={3} className="w-full bg-muted/50 border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                  <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold btn-glow hover:brightness-110 transition">Book Demo</button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
