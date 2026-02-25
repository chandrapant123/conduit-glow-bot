import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Bot, BarChart3, ShoppingCart, MessageSquare, Code2, Users, Zap } from "lucide-react";

const featureSections = [
  {
    icon: Zap,
    title: "WhatsApp Marketing Automation",
    summary: "Launch high-converting bulk campaigns with precision targeting and rich media support.",
    bullets: [
      "Bulk campaign sending from CSV with dynamic merge fields",
      "Smart segmentation for targeted audiences",
      "Rich media messaging — images, videos, documents, voice",
      "Template management & real-time webhook processing",
      "Multi-number & WABA connection management",
    ],
  },
  {
    icon: Users,
    title: "CRM & Lead Management",
    summary: "Track every lead from first contact to conversion with a visual pipeline.",
    bullets: [
      "Kanban-style drag-and-drop contact management",
      "Direct chat from contact list",
      "Automated lead capture and scoring",
      "Complete lead lifecycle management",
      "Advanced segmentation & source tracking",
      "Contact bulk import",
    ],
  },
  {
    icon: Bot,
    title: "AI Bot & Conversation Engine",
    summary: "Deploy intelligent bots that learn, respond, and convert — in any language.",
    bullets: [
      "Drag-and-drop bot flow builder",
      "AI context-aware replies with multi-file training",
      "Smart fallback messages & keyword-based activation",
      "Multi-language support & personalized responses",
      "Bot clone feature for rapid deployment",
    ],
  },
  {
    icon: MessageSquare,
    title: "Live Chat & Communication",
    summary: "Real-time agent console with intelligent routing and AI-assisted replies.",
    bullets: [
      "Integrated live chat console",
      "Intelligent agent routing & canned responses",
      "AI grammar correction & emoji picker",
      "Organized chat history & custom sound alerts",
    ],
  },
  {
    icon: Code2,
    title: "Developer & Technical Excellence",
    summary: "Built on modern architecture with extensible APIs and modular add-ons.",
    bullets: [
      "TALL Stack Architecture (Tailwind, Alpine, Laravel, Livewire)",
      "PSR-2 clean code with modular add-on ecosystem",
      "Custom module development framework",
      "Secure token management & webhook forwarding",
      "API integration for campaigns & group management",
    ],
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Automation",
    summary: "Automate order confirmations, shipping updates, and cart recovery via WhatsApp.",
    bullets: [
      "Webhook integration for order & payment events",
      "Abandoned cart reminders & shipping updates",
      "Account notifications & custom event mapping",
      "Tenant-level isolation for multi-brand stores",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Control",
    summary: "Monitor WABA health, export logs, and manage support tickets from one dashboard.",
    bullets: [
      "WABA health monitoring & message logs with export",
      "QR code generation for instant engagement",
      "Advanced ticket management with categorized support",
      "Real-time performance dashboards",
    ],
  },
];

const Features = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Everything You Need to <span className="text-gradient-hero">Dominate WhatsApp</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            From bulk campaigns to AI-powered bots, CRM, live chat, and developer APIs — Pipebot is the all-in-one WhatsApp marketing automation platform.
          </p>
        </motion.div>

        <div className="space-y-20">
          {featureSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">{section.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">{section.summary}</p>
                <ul className="space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 glass-card p-8 rounded-2xl flex items-center justify-center min-h-[200px]">
                <section.icon className="h-24 w-24 text-primary/20" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a href="/#cta" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-lg btn-glow hover:brightness-110 transition">
            Start Free Trial
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Features;
