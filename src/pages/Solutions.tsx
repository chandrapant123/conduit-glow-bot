import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Headphones, TrendingUp, Megaphone, ShoppingCart, ArrowRight, CheckCircle, Building2, Globe } from "lucide-react";

const solutions = [
  { icon: Headphones, title: "Customer Support Automation", desc: "24/7 chatbot, smart ticket routing, agent handover — reduce response time by 80% & improve customer satisfaction.", href: "/solutions/customer-support-automation", features: ["AI-powered chatbot", "Multi-agent inbox", "SLA tracking", "Smart escalation"] },
  { icon: TrendingUp, title: "Sales Funnel Automation", desc: "Capture leads, automated follow-ups, funnel nurturing — close 3x more deals via WhatsApp conversations.", href: "/solutions/sales-automation", features: ["Lead qualification", "Auto follow-ups", "Pipeline tracking", "Deal scoring"] },
  { icon: Megaphone, title: "Marketing Campaign Automation", desc: "Broadcast campaigns, re-engagement flows, drip campaigns — maximize conversions and ROI.", href: "/solutions/marketing-automation", features: ["Bulk broadcasts", "Drip campaigns", "Segmentation", "A/B testing"] },
  { icon: ShoppingCart, title: "E-commerce Automation", desc: "Cart reminders, order tracking, COD confirmation — automate every customer touchpoint.", href: "/solutions/ecommerce-automation", features: ["Cart recovery", "Order updates", "COD verification", "Product catalog"] },
];

const industries = [
  { title: "Healthcare", desc: "Appointment booking, prescription reminders, lab results, and patient engagement." },
  { title: "Education", desc: "Admission updates, fee reminders, attendance alerts, and parent communication." },
  { title: "Real Estate", desc: "Property listings, virtual tours, EMI calculators, and lead follow-ups." },
  { title: "Banking & Finance", desc: "Account alerts, loan applications, KYC collection, and fraud notifications." },
  { title: "Travel & Hospitality", desc: "Booking confirmations, itinerary updates, concierge services, and feedback." },
  { title: "Retail & D2C", desc: "Product launches, loyalty programs, flash sales, and customer reactivation." },
];

const Solutions = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-36 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            WhatsApp Automation for <span className="text-gradient-hero">Every Business Need</span>
          </h1>
          <p className="text-lg text-muted-foreground">From customer support to sales to marketing — Pipebot has a solution for every team and every industry.</p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {solutions.map((s, i) => (
            <motion.a key={s.title} href={s.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all group border border-border hover:border-primary/30">
              <s.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-xl font-display font-bold text-foreground mb-2">{s.title}</h2>
              <p className="text-muted-foreground mb-4">{s.desc}</p>
              <ul className="space-y-2 mb-4">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Industry Solutions */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-4">Industry Solutions</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Tailored WhatsApp automation for your industry vertical</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div key={ind.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-border">
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{ind.title}</h3>
                <p className="text-sm text-muted-foreground">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">Not Sure Which Solution Fits?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Talk to our experts and we'll recommend the perfect automation setup for your business.</p>
          <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Book a Free Consultation</a>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Solutions;
