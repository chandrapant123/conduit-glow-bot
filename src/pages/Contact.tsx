import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", useCase: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("enquiries").insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      company: formData.company.trim() || null,
      use_case: formData.useCase.trim() || null,
    });

    setSubmitting(false);

    if (error) {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
      return;
    }

    setSubmitted(true);
    toast({ title: "Demo request submitted!", description: "We'll reach out within 24 hours." });
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
                    { name: "name", label: "Your Name", type: "text", required: true, maxLength: 100 },
                    { name: "email", label: "Email Address", type: "email", required: true, maxLength: 255 },
                    { name: "phone", label: "Phone Number", type: "tel", required: false, maxLength: 20 },
                    { name: "company", label: "Company Name", type: "text", required: false, maxLength: 100 },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      placeholder={field.label}
                      required={field.required}
                      maxLength={field.maxLength}
                      value={(formData as any)[field.name]}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                      className="w-full bg-muted/50 border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  ))}
                  <textarea
                    placeholder="Tell us about your use case"
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    rows={3}
                    maxLength={1000}
                    className="w-full bg-muted/50 border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold btn-glow hover:brightness-110 transition disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Book Demo"}
                  </button>
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
