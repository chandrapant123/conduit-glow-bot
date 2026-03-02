import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { ShoppingCart, BarChart3, Bot, MessageSquare, Shield, Zap } from "lucide-react";
import ecomHero from "@/assets/carousel-banner-1.png";

const EcommerceIndustry = () => (
  <IndustryPageTemplate
    seo={{
      title: "WhatsApp Automation for E-commerce & D2C | Pipebot",
      description: "Recover abandoned carts, automate COD verification, send AI product recommendations & increase repeat orders with Pipebot WhatsApp automation for e-commerce.",
      keywords: "whatsapp automation for ecommerce, ecommerce whatsapp chatbot, abandoned cart recovery whatsapp, COD verification bot, AI product recommendation whatsapp",
    }}
    hero={{
      headline: "Turn WhatsApp Into Your",
      highlightText: "Highest-Converting Sales Channel",
      subtext: "Recover abandoned carts, automate support, send COD verification & increase repeat orders with AI-powered WhatsApp automation built for e-commerce and D2C brands.",
      bullets: [
        "Recover 25–40% more abandoned carts automatically",
        "Eliminate COD fraud with AI verification flows",
        "24/7 AI customer support without hiring more staff",
        "AI product recommendations that increase AOV",
        "Automated post-purchase retention workflows",
      ],
      image: ecomHero,
    }}
    painPoints={{
      headline: "E-commerce Is Growing. So Are Your Problems.",
      subtext: "If you're running a Shopify, WooCommerce, or custom store, you already know these pain points.",
      items: [
        { text: "70% of carts are abandoned before checkout" },
        { text: "COD fraud eats into your margins every month" },
        { text: "Customers expect instant replies — not email responses" },
        { text: "Support tickets keep increasing with scale" },
        { text: "Retention is harder and costlier than acquisition" },
        { text: "Paid ads are getting expensive with low ROAS" },
      ],
    }}
    solution={{
      headline: "Meet Pipebot — AI Automation Built for E-commerce",
      subtext: "Not just chatbots. Not just broadcasts. Intelligent AI agents that understand, respond, qualify, recommend, and convert.",
      features: [
        {
          icon: ShoppingCart,
          title: "Abandoned Cart Recovery",
          description: "The moment a customer abandons checkout, Pipebot triggers an intelligent recovery sequence.",
          bullets: ["Instant WhatsApp reminder", "AI handles objections", "Auto-apply coupon codes", "Payment link shared directly", "Zero manual follow-up needed"],
        },
        {
          icon: Shield,
          title: "COD Fraud Elimination",
          description: "Automated COD verification flow that reduces fake orders by up to 60%.",
          bullets: ["Instant WhatsApp confirmation", "One-tap confirm/cancel button", "AI fraud detection signals", "Auto-cancel unverified orders", "Real-time fraud analytics"],
        },
        {
          icon: Bot,
          title: "24/7 AI Customer Support",
          description: "Your AI Agent handles 80% of queries without human intervention.",
          bullets: ["Order tracking automation", "Invoice & receipt sharing", "Return & refund handling", "FAQ auto-responses", "Smart escalation to humans"],
        },
        {
          icon: Zap,
          title: "AI Product Recommendation Engine",
          description: "Instead of generic responses, your AI understands intent and recommends products dynamically.",
          bullets: ["Budget-based suggestions", "Category preferences", "Style & size recommendations", "Direct checkout links", "Higher AOV guaranteed"],
        },
        {
          icon: BarChart3,
          title: "Post-Purchase Retention Automation",
          description: "Automate every touchpoint after delivery to maximize repeat purchases.",
          bullets: ["Review & feedback requests", "Cross-sell suggestions", "Reorder reminders", "Loyalty reward notifications", "Win-back campaigns"],
        },
        {
          icon: MessageSquare,
          title: "Broadcast Campaign Engine",
          description: "Launch high-converting WhatsApp campaigns with smart segmentation.",
          bullets: ["Sale announcements", "Product drop alerts", "Flash sale notifications", "Click tracking & analytics", "A/B testing support"],
        },
      ],
    }}
    useCases={[
      { title: "Abandoned Cart Recovery", description: "Trigger → WhatsApp reminder → AI handles objections → Coupon applied → Checkout link sent → Order recovered automatically." },
      { title: "COD Order Verification", description: "Order placed → Auto WhatsApp confirmation → One-tap confirm/cancel → Fraud filtering → Only genuine orders processed." },
      { title: "Order Tracking Bot", description: "Customer types 'Track Order' → Auto-fetch from Shopify/WooCommerce → Share real-time tracking status instantly." },
      { title: "AI Sales Agent", description: "Customer browsing → Asks for suggestions → AI recommends based on preferences → Direct checkout link → Sale closed." },
      { title: "Returns Automation", description: "Customer initiates return → AI verifies eligibility → Creates ticket → Sends pickup confirmation → Refund processed." },
      { title: "Review Collection", description: "Post-delivery → Auto review request → Collect rating → Share on social proof → Incentivize repeat purchase." },
    ]}
    aiAgent={{
      name: "Product Recommender AI Agent",
      description: "Understands customer query → Analyzes preferences and budget → Suggests matching products from your catalog → Shares payment link → Closes the sale. All autonomously, 24/7, without human intervention.",
    }}
    howItWorks={[
      { step: "Connect Your Store", description: "Integrates with Shopify, WooCommerce, Magento, and custom APIs in minutes." },
      { step: "Activate E-commerce Flows", description: "Choose from cart recovery, COD verification, support bot, review automation, and broadcast campaigns." },
      { step: "Let AI Handle the Rest", description: "Monitor analytics, optimize flows, and scale revenue — no coding required." },
    ]}
    results={[
      { stat: "25-40%", label: "Cart Recovery Rate" },
      { stat: "60%", label: "Reduction in COD Fraud" },
      { stat: "3-5x", label: "Higher Open Rates vs Email" },
      { stat: "30%", label: "Support Cost Reduction" },
    ]}
    integrations={["Shopify", "WooCommerce", "Magento", "Razorpay", "Stripe", "HubSpot", "Zoho CRM", "Google Sheets", "Custom APIs", "Cashfree", "PayU"]}
    faqs={[
      { question: "Is this an official WhatsApp API solution?", answer: "Yes. Pipebot works with official WhatsApp Business API infrastructure, ensuring reliability, compliance, and high delivery rates." },
      { question: "Can it integrate with Shopify?", answer: "Yes. Shopify integration takes minutes. We also support WooCommerce, Magento, and custom stores via API." },
      { question: "Can AI actually recommend products?", answer: "Yes. AI Agents use your product catalog, customer context, and browsing behavior to suggest products dynamically — not just static recommendations." },
      { question: "Is coding required?", answer: "No. Everything is no-code setup. You can configure automation flows, AI agents, and campaigns without any technical knowledge." },
      { question: "Does it work for international stores?", answer: "Yes. Multi-country and multi-currency support is available. Pipebot works globally wherever WhatsApp Business API is available." },
      { question: "How does abandoned cart recovery work?", answer: "When a customer abandons checkout, Pipebot automatically sends a WhatsApp reminder, handles objections via AI, applies discount codes if configured, and shares a direct checkout link." },
      { question: "What's the ROI of WhatsApp automation?", answer: "Brands using Pipebot typically see 25-40% cart recovery, 3-5x higher engagement than email, and 30% lower support costs within the first month." },
      { question: "Can I send broadcast campaigns?", answer: "Yes. You can send targeted campaigns with smart segmentation, click tracking, and A/B testing to maximize conversions." },
    ]}
    cta={{
      headline: "Stop Losing Revenue Every Day",
      subtext: "Every abandoned cart, every delayed reply, every missed follow-up is lost revenue. Turn WhatsApp into your automated revenue engine today.",
      primaryAction: "Book a Demo",
      secondaryAction: "Start Free Trial",
    }}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Pipebot WhatsApp Automation for E-commerce",
      applicationCategory: "BusinessApplication",
      description: "AI-powered WhatsApp automation platform for e-commerce and D2C brands.",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    }}
  />
);

export default EcommerceIndustry;
