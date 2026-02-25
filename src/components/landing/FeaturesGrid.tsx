import { motion } from "framer-motion";
import {
  Send, FileSpreadsheet, Target, Image, Webhook, Phone,
  KanbanSquare, MessageCircle, UserPlus, BarChart3, Upload,
  Bot, Brain, Languages, Sparkles, Copy,
  Headphones, Route, MessageSquareDashed, Smile, Bell,
  Code2, Layers, Puzzle, Lock, Globe,
  ShoppingCart, Truck, CreditCard, BellRing, Map,
  Activity, FileDown, QrCode, Ticket, LayoutList
} from "lucide-react";

interface FeatureCategory {
  title: string;
  color: string;
  glowClass: string;
  features: { icon: any; label: string }[];
}

const categories: FeatureCategory[] = [
  {
    title: "WhatsApp Marketing Engine",
    color: "text-primary",
    glowClass: "glow-blue",
    features: [
      { icon: Send, label: "Bulk Campaign Sending" },
      { icon: FileSpreadsheet, label: "Dynamic Merge Fields" },
      { icon: Target, label: "Smart Segmentation" },
      { icon: Image, label: "Rich Media Messaging" },
      { icon: Webhook, label: "Real-time Webhooks" },
      { icon: Phone, label: "Multi-number Support" },
    ],
  },
  {
    title: "CRM & Lead Management",
    color: "text-neon-teal",
    glowClass: "glow-teal",
    features: [
      { icon: KanbanSquare, label: "Kanban Contact View" },
      { icon: MessageCircle, label: "Direct Chat" },
      { icon: UserPlus, label: "Auto Lead Capture" },
      { icon: BarChart3, label: "Lead Scoring" },
      { icon: Target, label: "Advanced Segmentation" },
      { icon: Upload, label: "Bulk Import" },
    ],
  },
  {
    title: "AI + Bot Automation",
    color: "text-secondary",
    glowClass: "glow-magenta",
    features: [
      { icon: Bot, label: "Drag & Drop Bot Builder" },
      { icon: Brain, label: "AI Context-Aware Replies" },
      { icon: Sparkles, label: "Multi-file AI Training" },
      { icon: Languages, label: "Multi-language Support" },
      { icon: Copy, label: "Bot Clone Feature" },
      { icon: MessageSquareDashed, label: "Smart Fallbacks" },
    ],
  },
  {
    title: "Live Chat & Communication",
    color: "text-neon-lime",
    glowClass: "glow-blue",
    features: [
      { icon: Headphones, label: "Live Chat Console" },
      { icon: Route, label: "Agent Routing" },
      { icon: MessageSquareDashed, label: "Canned Responses" },
      { icon: Sparkles, label: "AI Grammar Correction" },
      { icon: Smile, label: "Emoji Picker" },
      { icon: Bell, label: "Custom Sound Alerts" },
    ],
  },
  {
    title: "Developer Excellence",
    color: "text-primary",
    glowClass: "glow-blue",
    features: [
      { icon: Code2, label: "TALL Stack Architecture" },
      { icon: Layers, label: "Laravel 12 + Livewire 3" },
      { icon: Puzzle, label: "Modular Add-On System" },
      { icon: Lock, label: "Secure Token Mgmt" },
      { icon: Globe, label: "API Integration" },
      { icon: Webhook, label: "Forward Webhooks" },
    ],
  },
  {
    title: "eCommerce Automation",
    color: "text-neon-teal",
    glowClass: "glow-teal",
    features: [
      { icon: ShoppingCart, label: "Order Confirmation" },
      { icon: Truck, label: "Shipping Updates" },
      { icon: CreditCard, label: "Payment Alerts" },
      { icon: BellRing, label: "Cart Recovery" },
      { icon: Map, label: "Custom Event Mapping" },
      { icon: Lock, label: "Tenant Isolation" },
    ],
  },
  {
    title: "Analytics & Control",
    color: "text-neon-magenta",
    glowClass: "glow-magenta",
    features: [
      { icon: Activity, label: "WABA Health Monitor" },
      { icon: FileDown, label: "Message Log Export" },
      { icon: QrCode, label: "QR Code Generation" },
      { icon: Ticket, label: "Ticket Management" },
      { icon: LayoutList, label: "Categorized Support" },
      { icon: BarChart3, label: "Advanced Reports" },
    ],
  },
];

const FeaturesGrid = () => (
  <section className="py-24 section-gradient" id="features">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Core <span className="text-gradient-primary">Features</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to build, automate, and scale your WhatsApp marketing operations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-6 hover:border-primary/30 transition-all duration-300 ${i === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <h3 className={`font-display font-bold text-lg mb-5 ${cat.color}`}>{cat.title}</h3>
            <div className="space-y-3">
              {cat.features.map((f) => (
                <div key={f.label} className="flex items-center gap-3 group">
                  <f.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{f.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
