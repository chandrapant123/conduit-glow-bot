import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Shield, Globe, BarChart3, Bot, Headphones, TrendingUp, Lock, Server, Users, CheckCircle, ArrowRight, Zap } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const capabilities = [
  { icon: TrendingUp, title: "AI Revenue Agents", description: "Lead qualification, sales funnel acceleration, cross-sell automation, and contract execution.", bullets: ["Context-aware selling", "Business rule application", "CRM action triggers", "Revenue optimization"] },
  { icon: Headphones, title: "AI Support Resolution", description: "Reduce Tier-1 support by 70%. Access order systems, execute workflows, update tickets.", bullets: ["System data access", "Workflow execution", "Ticket management", "Intelligent escalation"] },
  { icon: Users, title: "AI Onboarding & Compliance", description: "Collect data, request documents, validate eligibility, trigger KYC workflows.", bullets: ["Structured data collection", "Document verification", "Compliance logging", "Drop-off reduction"] },
  { icon: BarChart3, title: "AI Collections & Payment", description: "Proactive reminders, secure payment links, settlement flows, escalation protocols.", bullets: ["Payment reminders", "Settlement negotiation", "Risk escalation", "Cash flow improvement"] },
];

const EnterpriseAI = () => (
  <div className="min-h-screen bg-background">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Pipebot Enterprise AI Agents", applicationCategory: "BusinessApplication", description: "Enterprise-grade AI Agents for revenue & operations at scale." }) }} />
    <Navbar />
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-6">
            <Shield className="h-4 w-4" /> Enterprise-Grade AI Infrastructure
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Secure. Scalable. Compliant. <span className="text-gradient-hero">Built for Global Businesses.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deploy enterprise-grade AI Agents on WhatsApp to automate sales, support, onboarding, and collections — across regions, teams, and millions of conversations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition shadow-md">Schedule Enterprise Consultation</a>
            <a href="/contact" className="border border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/5 transition">Request Technical Overview</a>
          </div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-border py-6 mb-20">
        <div className="container mx-auto px-6 flex flex-wrap gap-8 justify-center text-sm text-muted-foreground">
          {["Official WhatsApp Business API", "Enterprise-Grade Security", "Global Deployment Ready", "99.9% Uptime SLA"].map(t => (
            <span key={t} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" />{t}</span>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Scaling Conversations Is Hard. Scaling Intelligence Is Harder.</h2>
          <p className="text-muted-foreground">Traditional solutions are rule-based, rigid, difficult to integrate, and lack real intelligence. Enterprises need AI-powered operational infrastructure.</p>
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="bg-muted/30 py-16 mb-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Autonomous AI Agents for Enterprise Workflows</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-background p-8 rounded-2xl border border-border">
                <cap.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">{cap.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.bullets.map(b => <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-accent shrink-0" />{b}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global + Security */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
            <Globe className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-display font-bold mb-3">Global Deployment</h3>
            <ul className="space-y-2">
              {["Multi-country deployments", "Multi-language AI models", "Regional workflow customization", "Cross-timezone support", "Distributed team access"].map(b => <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-accent shrink-0" />{b}</li>)}
            </ul>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
            <Lock className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-display font-bold mb-3">Enterprise Security</h3>
            <ul className="space-y-2">
              {["Encrypted communication", "Role-based access controls", "Audit trails & logging", "Data retention controls", "GDPR-aligned architecture"].map(b => <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-accent shrink-0" />{b}</li>)}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 mb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "30-50%", label: "Faster Qualification" },
              { stat: "20-40%", label: "Higher Conversion" },
              { stat: "50-70%", label: "Tier-1 Automation" },
              { stat: "5M+", label: "Monthly Conversations" },
            ].map((r, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">{r.stat}</div>
                <div className="text-sm text-white/80">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Built to Integrate, Not Replace</h2>
          <p className="text-muted-foreground">Flexible API-first architecture ensures enterprise compatibility</p>
        </motion.div>
        <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
          {["Salesforce", "HubSpot", "Microsoft Dynamics", "SAP", "Oracle", "Custom CRMs", "Payment Gateways", "Data Warehouses", "Internal APIs"].map(int => (
            <span key={int} className="bg-muted/50 px-5 py-2.5 rounded-full text-sm font-medium border border-border">{int}</span>
          ))}
        </div>
      </section>

      {/* Deployment */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10">
          <motion.div {...fadeUp} className="text-center">
            <Server className="h-14 w-14 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold mb-4">Flexible Enterprise Engagement</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto text-left mt-6">
              {["Dedicated onboarding team", "Technical architecture consultation", "Custom AI workflow design", "Phased deployment strategy", "Ongoing optimization support", "Dedicated account management"].map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground"><CheckCircle className="h-4 w-4 text-primary shrink-0" />{f}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 md:p-16 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Transform Your Customer Operations</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's design an AI automation strategy tailored to your organization's scale, compliance requirements, and revenue goals.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition shadow-md">Schedule Enterprise Strategy Call</a>
              <a href="/contact" className="border border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/5 transition">Speak with AI Solutions Architect</a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default EnterpriseAI;
