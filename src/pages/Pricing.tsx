import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const tiers = [
  {
    name: "Free Trial",
    price: "$0",
    period: "14 days",
    desc: "Perfect for exploring Pipebot's capabilities",
    bestFor: "Individuals & testers",
    features: ["1 WhatsApp number", "500 messages/month", "Basic bot builder", "Contact management", "Email support"],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    desc: "For growing businesses ready to automate",
    bestFor: "Small businesses & freelancers",
    features: ["3 WhatsApp numbers", "10,000 messages/month", "AI bot builder", "CRM & lead scoring", "Bulk campaigns", "Webhook integrations", "Priority support"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    desc: "For agencies and scaling teams",
    bestFor: "Agencies & growing teams",
    features: ["10 WhatsApp numbers", "50,000 messages/month", "Advanced AI training", "Multi-agent live chat", "eCommerce automation", "Analytics & exports", "API access", "Dedicated support"],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large-scale multi-tenant operations",
    bestFor: "SaaS founders & enterprises",
    features: ["Unlimited numbers", "Unlimited messages", "White-label branding", "Multi-tenant architecture", "Custom integrations", "SLA & dedicated manager", "Custom module development", "On-premise option"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Simple, Transparent <span className="text-gradient-primary">Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground">Choose the plan that fits your growth. Upgrade or downgrade anytime.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 rounded-2xl flex flex-col ${tier.highlight ? "border-primary/50 glow-blue" : ""}`}
            >
              {tier.highlight && (
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full self-start mb-4">Most Popular</span>
              )}
              <h3 className="text-xl font-display font-bold text-foreground">{tier.name}</h3>
              <div className="mt-2 mb-1">
                <span className="text-3xl font-display font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground text-sm">{tier.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{tier.desc}</p>
              <p className="text-xs text-primary mb-4">Best for: {tier.bestFor}</p>
              <ul className="space-y-2 flex-1 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/#cta"
                className={`text-center py-2.5 rounded-xl font-semibold text-sm transition ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground btn-glow hover:brightness-110"
                    : "glass-card text-foreground hover:border-primary/50"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center glass-card p-8 rounded-2xl max-w-2xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Need Volume or Custom Pricing?</h2>
          <p className="text-muted-foreground mb-4">We offer flexible pricing for high-volume senders, resellers, and white-label partners.</p>
          <a href="/#cta" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold btn-glow hover:brightness-110 transition">
            Contact Sales for Custom Quote
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Pricing;
