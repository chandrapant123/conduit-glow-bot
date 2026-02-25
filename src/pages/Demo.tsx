import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Shield, Users, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Zap, text: "See live WhatsApp automation in action" },
  { icon: Users, text: "Multi-tenant dashboard walkthrough" },
  { icon: BarChart3, text: "Analytics & ROI tracking demo" },
  { icon: Shield, text: "Enterprise security overview" },
];

const Demo = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();

    if (!name || !email || !phone) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

    // In production this would send to a backend
    setSubmitted(true);
    toast({ title: "Demo request submitted!", description: "We'll contact you within 24 hours." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                See Pipebot <span className="text-gradient-hero">in Action</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                Book a personalized demo and discover how Pipebot can transform your WhatsApp marketing, automate customer engagement, and drive revenue growth.
              </p>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b.text} className="flex items-center gap-3 text-muted-foreground">
                    <b.icon className="h-5 w-5 text-primary shrink-0" />
                    {b.text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 glass-card p-4 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  📧 <a href="mailto:info@pipebot.ai" className="text-primary hover:underline">info@pipebot.ai</a>
                  <br />
                  📞 <a href="tel:+919599923365" className="text-primary hover:underline">+91 95999 23365</a>
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-8 rounded-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Our team will reach out within 24 hours to schedule your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">Book Your Demo</h3>
                  <Input name="name" placeholder="Full Name *" required className="bg-background/50 border-glass-border" />
                  <Input name="email" type="email" placeholder="Email Address *" required className="bg-background/50 border-glass-border" />
                  <Input name="phone" type="tel" placeholder="Phone Number *" required className="bg-background/50 border-glass-border" />
                  <Input name="company" placeholder="Company Name" className="bg-background/50 border-glass-border" />
                  <Textarea name="usecase" placeholder="Tell us about your use case..." className="bg-background/50 border-glass-border" rows={3} />
                  <Button type="submit" className="w-full btn-glow">Book Demo</Button>
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

export default Demo;
