import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { BookOpen, FileText, HelpCircle, Video, Download, Lightbulb, ArrowRight } from "lucide-react";

const resources = [
  { icon: BookOpen, title: "Blog", desc: "Expert insights on WhatsApp API, RCS messaging, AI chatbots & business automation strategies.", href: "/blog", cta: "Read Articles" },
  { icon: HelpCircle, title: "FAQ", desc: "Comprehensive answers about Pipebot features, WhatsApp API, pricing, and getting started.", href: "/faq", cta: "View FAQ" },
  { icon: FileText, title: "Contact Support", desc: "Get help from our messaging experts or book a personalized demo for your team.", href: "/contact", cta: "Get Help" },
];

const guides = [
  { title: "Getting Started with WhatsApp API", desc: "Step-by-step guide to register, verify, and launch your WhatsApp Business API account.", tag: "Beginner" },
  { title: "Building Your First AI Chatbot", desc: "Learn how to create, train, and deploy an AI-powered WhatsApp chatbot in under 30 minutes.", tag: "Tutorial" },
  { title: "WhatsApp Campaign Best Practices", desc: "Maximize open rates and conversions with proven campaign strategies and template tips.", tag: "Strategy" },
  { title: "CRM Integration Guide", desc: "Connect Pipebot with HubSpot, Salesforce, Zoho, and custom CRMs via APIs and webhooks.", tag: "Technical" },
  { title: "E-commerce Automation Playbook", desc: "Automate cart recovery, order updates, and customer re-engagement for online stores.", tag: "Strategy" },
  { title: "Multi-Agent Inbox Setup", desc: "Configure team roles, smart routing, SLA tracking, and agent performance monitoring.", tag: "Tutorial" },
];

const Resources = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-36 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Learn, Build & <span className="text-gradient-primary">Scale</span>
          </h1>
          <p className="text-lg text-muted-foreground">Expert resources to help you master WhatsApp automation and grow your business.</p>
        </motion.div>

        {/* Main Resources */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {resources.map((r, i) => (
            <motion.a key={r.title} href={r.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all group text-center border border-border hover:border-primary/30">
              <r.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-xl font-display font-bold text-foreground mb-2">{r.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{r.desc}</p>
              <span className="text-primary font-semibold text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                {r.cta} <ArrowRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Guides */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-4">Guides & Tutorials</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Step-by-step guides to get the most out of Pipebot</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {guides.map((g, i) => (
              <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 rounded-2xl hover:shadow-md transition-shadow">
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">{g.tag}</span>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">Need Personalized Help?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Book a free consultation with our messaging experts to build your automation strategy.</p>
          <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Book Free Consultation</a>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Resources;
