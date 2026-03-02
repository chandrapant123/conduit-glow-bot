import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Bot, Zap, Shield, Users, TrendingUp, Headphones, CreditCard, UserCheck, MessageSquare, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const capabilities = [
  { icon: TrendingUp, title: "AI Sales Agent", description: "Qualifies leads, recommends products, handles objections, sends payment links, and closes transactions. Works 24/7.", bullets: ["Lead qualification", "Product recommendation", "Objection handling", "Payment link sharing", "Transaction closure"] },
  { icon: UserCheck, title: "AI Lead Qualification Agent", description: "Asks smart follow-up questions, scores intent, filters low-quality leads, and routes hot prospects to sales.", bullets: ["Smart follow-ups", "Intent scoring", "Quality filtering", "Priority routing", "CRM updates"] },
  { icon: Headphones, title: "AI Support Agent", description: "Resolves 70-80% of queries automatically — orders, refunds, FAQs, and escalations.", bullets: ["Order tracking", "Refund handling", "FAQ answers", "Smart escalation", "Satisfaction surveys"] },
  { icon: CreditCard, title: "AI Collection Agent", description: "Sends payment reminders, follows up on dues, shares payment links, and escalates risk cases.", bullets: ["Payment reminders", "Due follow-ups", "Payment links", "Risk escalation", "Cash flow improvement"] },
  { icon: Users, title: "AI Onboarding Agent", description: "Collects documents, guides users step-by-step, completes KYC flows, and reduces drop-offs.", bullets: ["Document collection", "Step-by-step guidance", "KYC workflows", "Drop-off reduction", "Compliance logs"] },
  { icon: Shield, title: "AI Concierge Agent", description: "Personalized recommendations, VIP handling, appointment scheduling, and premium experiences.", bullets: ["Personalized service", "VIP client handling", "Appointment scheduling", "Premium experience", "Relationship building"] },
];

const comparisons = [
  { label: "Fixed flows", vs: "Dynamic conversations" },
  { label: "No intelligence", vs: "Context-aware reasoning" },
  { label: "Manual routing", vs: "Smart qualification" },
  { label: "Scripted replies", vs: "Natural interaction" },
  { label: "No decisions", vs: "Goal-driven actions" },
];

const industries = ["E-commerce", "Real Estate", "Fintech", "Healthcare", "Insurance", "EdTech", "Travel", "B2B Manufacturing", "D2C Brands", "SaaS Platforms"];

const AIAgents = () => (
  <div className="min-h-screen bg-background">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Pipebot AI Agents", applicationCategory: "BusinessApplication", description: "Autonomous AI Agents built on WhatsApp to sell, support & scale — 24/7." }) }} />
    <Navbar />
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Hire AI Agents That Work 24/7 — <span className="text-gradient-hero">Without Salaries or Burnout</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pipebot AI Agents don't just reply. They understand, qualify, recommend, and convert — autonomously on WhatsApp. Think of them as digital employees powered by AI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition shadow-md">Book AI Strategy Call</a>
            <a href="/pricing" className="border border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/5 transition">See AI Agents in Action</a>
          </div>
        </motion.div>
      </section>

      {/* Not a Chatbot */}
      <section className="bg-muted/30 py-16 mb-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">This Is Not a Chatbot</h2>
            <p className="text-muted-foreground">Traditional chatbots follow scripts and break when users ask unexpected questions. AI Agents reason, decide, and act.</p>
          </motion.div>
          <div className="max-w-2xl mx-auto space-y-4">
            {comparisons.map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="grid grid-cols-2 gap-4">
                <div className="bg-destructive/10 p-4 rounded-xl text-center"><span className="text-destructive font-medium">✗ {c.label}</span></div>
                <div className="bg-primary/10 p-4 rounded-xl text-center"><span className="text-primary font-medium">✓ {c.vs}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Pipebot AI Agents Can Do</h2>
          <p className="text-muted-foreground">Deploy specialized AI agents for every function — sales, support, onboarding, collections, and more.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
              <cap.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-display font-bold mb-2">{cap.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{cap.description}</p>
              <ul className="space-y-2">
                {cap.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-16 mb-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">How AI Agents Operate</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "Context Understanding", desc: "AI understands the user message, conversation history, customer profile, and behavioral signals." },
              { step: "Intelligent Decision", desc: "Based on goals, it decides: ask a question, recommend a product, escalate, send an offer, or trigger a workflow." },
              { step: "Execute Action", desc: "The agent sends payment links, books appointments, updates CRM, assigns leads, or sends contracts — without manual intervention." },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{i + 1}</div>
                <h3 className="font-display font-bold text-lg mb-2">{s.step}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 mb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "30-50%", label: "Faster Response Time" },
              { stat: "20-40%", label: "Higher Conversion" },
              { stat: "70-80%", label: "Automated Resolution" },
              { stat: "3x", label: "Revenue Per Lead" },
            ].map((r, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">{r.stat}</div>
                <div className="text-sm text-white/80">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Who Should Use AI Agents?</h2>
          <p className="text-muted-foreground">If you handle leads or customers — you need AI Agents.</p>
        </motion.div>
        <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
          {industries.map((ind) => (
            <span key={ind} className="bg-primary/10 px-5 py-2.5 rounded-full text-sm font-medium text-primary border border-primary/20">{ind}</span>
          ))}
        </div>
      </section>

      {/* Human + AI */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10">
          <motion.div {...fadeUp} className="text-center">
            <MessageSquare className="h-14 w-14 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold mb-4">Human + AI Hybrid Model</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">AI handles qualification, FAQs, and structured workflows. Humans handle high-value negotiations and complex edge cases. Smart escalation ensures seamless transitions.</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto text-left">
              <div><h4 className="font-bold mb-2">AI Handles</h4><ul className="space-y-1 text-sm text-muted-foreground">{["Qualification", "FAQs", "Basic transactions", "Payment collection"].map(t => <li key={t} className="flex gap-2"><Bot className="h-4 w-4 text-primary shrink-0 mt-0.5" />{t}</li>)}</ul></div>
              <div><h4 className="font-bold mb-2">Humans Handle</h4><ul className="space-y-1 text-sm text-muted-foreground">{["Strategic negotiation", "Complex objections", "Relationship mgmt", "Edge cases"].map(t => <li key={t} className="flex gap-2"><Users className="h-4 w-4 text-accent shrink-0 mt-0.5" />{t}</li>)}</ul></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 md:p-16 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Stop Hiring More People. Start Hiring Intelligence.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Deploy AI Agents that sell, support, qualify, and collect — 24/7. Your competitors are already automating.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition shadow-md">Book AI Strategy Call</a>
              <a href="/pricing" className="border border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/5 transition">See Live Demo</a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AIAgents;
