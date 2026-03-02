import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Megaphone, Bot, Gift, Shield, RefreshCw, TrendingUp } from "lucide-react";

const D2CIndustry = () => (
  <IndustryPageTemplate
    seo={{
      title: "WhatsApp Automation for D2C Brands | Pipebot",
      description: "Broadcast campaigns, AI upsell agents, loyalty automation, COD verification & subscription reminders for D2C brands on WhatsApp with Pipebot.",
      keywords: "whatsapp automation for d2c brands, d2c whatsapp marketing, direct to consumer whatsapp, d2c loyalty program whatsapp, d2c upsell automation",
    }}
    hero={{
      headline: "Scale Your D2C Brand with",
      highlightText: "AI-Powered WhatsApp Automation",
      subtext: "Broadcast campaigns, AI upsell agents, loyalty automation, COD verification & subscription reminders — built specifically for direct-to-consumer brands.",
      bullets: [
        "High-converting broadcast campaigns",
        "AI upsell & cross-sell automation",
        "Loyalty program on WhatsApp",
        "COD verification to reduce fraud",
        "Subscription & reorder reminders",
      ],
    }}
    painPoints={{
      headline: "D2C Growth Hits a Wall Without Automation",
      subtext: "Scaling a D2C brand means more customers, more support, and more complexity — without proportional revenue growth.",
      items: [
        { text: "High customer acquisition cost from paid ads" },
        { text: "Low repeat purchase rate despite great products" },
        { text: "COD fraud eating into margins" },
        { text: "Email campaigns have declining open rates" },
        { text: "No personalized upsell or cross-sell engine" },
        { text: "Manual loyalty and referral management" },
      ],
    }}
    solution={{
      headline: "AI Automation Built for D2C Growth",
      subtext: "Turn WhatsApp into your highest ROI channel — for acquisition, retention, and revenue growth.",
      features: [
        { icon: Megaphone, title: "Broadcast Campaign Engine", description: "Launch high-converting WhatsApp campaigns that outperform email by 5x.", bullets: ["Product launch announcements", "Flash sale alerts", "New collection drops", "Personalized recommendations", "Click tracking & analytics"] },
        { icon: Bot, title: "AI Upsell Agent", description: "Intelligent AI that recommends complementary products based on purchase history.", bullets: ["Purchase-based suggestions", "Bundle recommendations", "Size/variant guidance", "Checkout link sharing", "AOV increase automation"] },
        { icon: Gift, title: "Loyalty Automation", description: "Build a WhatsApp-native loyalty program that drives repeat purchases.", bullets: ["Points tracking", "Tier-based rewards", "Birthday surprises", "Referral bonuses", "VIP customer perks"] },
        { icon: Shield, title: "COD Verification", description: "Eliminate fake orders with automated COD confirmation flows.", bullets: ["Instant confirmation request", "One-tap verify/cancel", "Fraud pattern detection", "Auto-cancel unverified", "Up to 60% fraud reduction"] },
        { icon: RefreshCw, title: "Subscription & Reorder", description: "Automated reminders for consumable products and subscription renewals.", bullets: ["Reorder reminders", "Subscription renewal alerts", "One-tap reorder", "Delivery scheduling", "Stock-up suggestions"] },
        { icon: TrendingUp, title: "Customer Win-Back", description: "Re-engage dormant customers with personalized offers.", bullets: ["Inactivity detection", "Personalized comeback offers", "Exclusive discounts", "New product teasers", "Feedback collection"] },
      ],
    }}
    useCases={[
      { title: "Product Launch", description: "New product → Segment audience → Broadcast → AI handles inquiries → Checkout links → Sales tracked." },
      { title: "AI Cross-Sell", description: "Customer buys shampoo → AI suggests conditioner → Bundle discount → Checkout link → Higher AOV." },
      { title: "COD Verification", description: "COD order → Instant WhatsApp → Confirm/Cancel → Fraud filtered → Only genuine orders shipped." },
      { title: "Loyalty Rewards", description: "Purchase completed → Points added → Milestone reached → Reward notification → Discount code → Repeat purchase." },
      { title: "Reorder Reminder", description: "30 days since purchase → Reorder reminder → One-tap order → Delivery confirmed → Subscription suggested." },
      { title: "Win-Back Campaign", description: "90 days inactive → Personalized offer → Exclusive discount → Re-engagement → Customer recovered." },
    ]}
    aiAgent={{
      name: "D2C Growth AI Agent",
      description: "Handles product recommendations, processes cross-sell suggestions, manages loyalty rewards, verifies COD orders, and re-engages dormant customers — maximizing customer lifetime value on autopilot.",
    }}
    howItWorks={[
      { step: "Connect Your Store", description: "Integrate with Shopify, WooCommerce, or your custom storefront in minutes." },
      { step: "Activate D2C Flows", description: "Enable broadcasts, upsell agents, loyalty, COD verification, and reorder automation." },
      { step: "Grow Revenue", description: "Higher AOV, better retention, reduced fraud — all without increasing headcount." },
    ]}
    results={[
      { stat: "5x", label: "Higher Engagement vs Email" },
      { stat: "30%", label: "Increase in Repeat Orders" },
      { stat: "60%", label: "Reduction in COD Fraud" },
      { stat: "25%", label: "Higher AOV" },
    ]}
    integrations={["Shopify", "WooCommerce", "Razorpay", "Stripe", "Shiprocket", "Delhivery", "Google Sheets", "HubSpot", "Custom APIs", "Cashfree"]}
    faqs={[
      { question: "How is this different from e-commerce automation?", answer: "D2C automation is more conversion and brand-focused, with emphasis on loyalty, upsell, and direct customer relationships rather than marketplace operations." },
      { question: "Can I run broadcast campaigns?", answer: "Yes. Segment your audience and send targeted campaigns with tracking and A/B testing." },
      { question: "How does the AI upsell agent work?", answer: "It analyzes purchase history, browsing behavior, and customer preferences to recommend complementary products with direct checkout links." },
      { question: "Is COD verification automatic?", answer: "Yes. Every COD order triggers an instant WhatsApp confirmation. Unverified orders are auto-cancelled." },
      { question: "Can it handle subscription products?", answer: "Yes. Subscription renewal reminders, reorder automation, and delivery scheduling are fully supported." },
      { question: "Does it work for beauty and skincare brands?", answer: "Absolutely. Skincare routines, refill reminders, and personalized product recommendations work especially well for beauty D2C brands." },
    ]}
    cta={{
      headline: "Turn WhatsApp Into Your D2C Growth Engine",
      subtext: "Your competitors are already on WhatsApp. Start converting, retaining, and growing with AI-powered automation today.",
      primaryAction: "Book a Demo",
      secondaryAction: "Start Free Trial",
    }}
  />
);

export default D2CIndustry;
