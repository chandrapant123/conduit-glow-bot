import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Shield, FileText, Bell, Bot, CreditCard, Users } from "lucide-react";

const InsuranceIndustry = () => (
  <IndustryPageTemplate
    seo={{
      title: "WhatsApp Automation for Insurance | Pipebot",
      description: "Automate policy sales, renewals, premium reminders & claims communication on WhatsApp for insurance providers and brokers with Pipebot AI automation.",
      keywords: "whatsapp automation for insurance, insurance whatsapp bot, policy renewal automation, premium reminder whatsapp, claims automation insurance",
    }}
    hero={{
      headline: "Automate Policy Sales,",
      highlightText: "Renewals & Claims on WhatsApp",
      subtext: "Instant quotes, AI policy recommendations, premium reminders, and claim status automation — built for insurance providers, brokers, and InsurTech platforms.",
      bullets: [
        "AI-powered policy recommendation engine",
        "Instant quote generation on WhatsApp",
        "Automated premium renewal reminders",
        "Claims communication & status bot",
        "Cross-sell life, health & motor insurance",
      ],
    }}
    painPoints={{
      headline: "Insurance Operations Need Automation",
      subtext: "Manual processes are costing you renewals, slowing claims, and frustrating policyholders.",
      items: [
        { text: "Policy renewals missed due to lack of reminders" },
        { text: "Slow quote generation loses prospects" },
        { text: "Manual follow-ups for premium collection" },
        { text: "Claims communication gaps frustrate customers" },
        { text: "High agent workload reduces productivity" },
        { text: "Low cross-sell penetration across products" },
      ],
    }}
    solution={{
      headline: "AI Insurance Automation on WhatsApp",
      subtext: "Transform insurance operations with intelligent automation — from policy sales to claims resolution.",
      features: [
        { icon: Bot, title: "AI Policy Recommendation", description: "AI suggests suitable policies based on customer profile and needs.", bullets: ["Age & income assessment", "Family size consideration", "Coverage requirement analysis", "Premium comparison", "Personalized suggestions"] },
        { icon: FileText, title: "Instant Quote Generation", description: "Calculate and share premium quotes instantly on WhatsApp.", bullets: ["Quick premium calculation", "PDF quote sharing", "Comparison charts", "Buy link integration", "Follow-up scheduling"] },
        { icon: Bell, title: "Renewal Automation", description: "Never lose a renewal with automated multi-touch reminders.", bullets: ["Pre-expiry reminders", "Renewal link sharing", "Payment confirmation", "Policy update summary", "No-lapse guarantee support"] },
        { icon: Shield, title: "Claims Communication Bot", description: "Guide policyholders through the claims process seamlessly.", bullets: ["Claim initiation guidance", "Document checklist sharing", "Photo/video upload", "Status updates", "Settlement notification"] },
        { icon: CreditCard, title: "Premium Collection", description: "Automated payment reminders with direct payment links.", bullets: ["Due date reminders", "Payment link sharing", "Receipt confirmation", "Outstanding balance alerts", "Grace period notifications"] },
        { icon: Users, title: "Agent Enablement", description: "Empower insurance agents with AI-assisted sales tools.", bullets: ["Lead assignment", "Sales scripts", "Policy comparison tools", "Commission tracking", "Performance analytics"] },
      ],
    }}
    useCases={[
      { title: "Policy Recommendation", description: "Customer inquiry → AI collects profile → Analyzes needs → Recommends policies → Shares quotes → Buy link → Policy issued." },
      { title: "Renewal Management", description: "30 days before expiry → Reminder → 15 days → Renewal link → 7 days → Urgency message → Payment → Confirmation." },
      { title: "Claims Processing", description: "Claim initiated → Checklist shared → Documents collected → Status updates → Settlement → Feedback collection." },
      { title: "Premium Collection", description: "Due date approaching → Reminder → Payment link → Payment received → Receipt → Next due date scheduled." },
      { title: "Cross-Sell Automation", description: "Motor policy holder → Health insurance suggestion → Family coverage → Quote shared → Enrollment → Bundle discount." },
      { title: "Agent Lead Distribution", description: "New lead → Auto-assignment → Agent notified → Sales script shared → Follow-up scheduled → Deal tracking." },
    ]}
    aiAgent={{
      name: "Insurance Advisor AI Agent",
      description: "Understands customer profile → Recommends suitable policies → Generates instant quotes → Manages renewals → Guides claims process → Cross-sells products. Your 24/7 digital insurance advisor that never misses a renewal or lead.",
    }}
    howItWorks={[
      { step: "Connect Your Systems", description: "Integrate with your policy management system, CRM, and payment infrastructure." },
      { step: "Activate Insurance Flows", description: "Enable policy recommendation, renewal reminders, claims bot, and agent tools." },
      { step: "Grow Your Book", description: "Higher renewal rates, faster claims, and more cross-sell — automatically." },
    ]}
    results={[
      { stat: "25%", label: "Better Renewal Rate" },
      { stat: "3x", label: "Faster Quote Delivery" },
      { stat: "40%", label: "Less Inbound Calls" },
      { stat: "20%", label: "Higher Cross-Sell" },
    ]}
    integrations={["Policy Management Systems", "CRM Platforms", "Payment Gateways", "Underwriting APIs", "Document Verification", "Google Sheets", "Custom APIs"]}
    faqs={[
      { question: "Is it compliant with insurance regulations?", answer: "Yes. Pipebot uses official WhatsApp Business API and follows IRDAI guidelines for insurance communication in India." },
      { question: "Can it handle multiple insurance products?", answer: "Yes. Separate flows for life, health, motor, travel, and commercial insurance are supported." },
      { question: "How does AI policy recommendation work?", answer: "AI collects customer profile (age, income, family size, existing coverage) and recommends the most suitable policies with instant quotes." },
      { question: "Can it manage agent networks?", answer: "Yes. Lead distribution, commission tracking, performance analytics, and agent communication are fully automated." },
      { question: "Does it support claims document collection?", answer: "Yes. Claim-specific document checklists are shared, and documents (photos, PDFs) are collected securely via WhatsApp." },
      { question: "Can customers check claim status?", answer: "Yes. Policyholders can check claim status anytime on WhatsApp with real-time updates from your claims management system." },
    ]}
    cta={{
      headline: "Turn WhatsApp Into Your Automated Insurance Advisor",
      subtext: "Every missed renewal is lost revenue. Every delayed claim response is lost trust. Automate your insurance operations today.",
      primaryAction: "Book a Strategy Call",
      secondaryAction: "Start Free Trial",
    }}
  />
);

export default InsuranceIndustry;
