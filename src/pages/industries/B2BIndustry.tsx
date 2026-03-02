import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Factory, Truck, FileText, Headphones, Users, BarChart3 } from "lucide-react";

const B2BIndustry = () => (
  <IndustryPageTemplate
    seo={{
      title: "WhatsApp Automation for B2B & Manufacturing | Pipebot",
      description: "Automate distributor onboarding, dealer orders, invoice sharing & support tickets on WhatsApp for manufacturing and B2B businesses with Pipebot.",
      keywords: "whatsapp automation for b2b, manufacturing whatsapp bot, distributor onboarding automation, dealer order whatsapp, B2B whatsapp integration",
    }}
    hero={{
      headline: "Automate B2B Operations —",
      highlightText: "Distributors, Dealers & Supply Chain",
      subtext: "Distributor onboarding, dealer order automation, invoice sharing & support ticket management — all on WhatsApp for manufacturing and B2B enterprises.",
      bullets: [
        "Automated distributor & dealer onboarding",
        "WhatsApp-based order management",
        "Invoice and payment automation",
        "Support ticket management",
        "Supply chain communication",
      ],
    }}
    painPoints={{
      headline: "B2B Communication Is Still Broken",
      subtext: "Manufacturing and B2B businesses rely on calls, emails, and manual processes that don't scale.",
      items: [
        { text: "Distributor onboarding takes weeks" },
        { text: "Dealer orders are placed via phone calls" },
        { text: "Invoice sharing is manual and delayed" },
        { text: "Support tickets are untracked" },
        { text: "Supply chain updates are inconsistent" },
        { text: "No structured dealer engagement program" },
      ],
    }}
    solution={{
      headline: "AI B2B Automation on WhatsApp",
      subtext: "Transform distributor and dealer operations with intelligent WhatsApp automation.",
      features: [
        { icon: Users, title: "Distributor Onboarding", description: "Automate the entire onboarding process for new distributors and dealers.", bullets: ["Registration form collection", "Document verification", "Territory assignment", "Product catalog sharing", "Terms & conditions acceptance"] },
        { icon: Truck, title: "Dealer Order Automation", description: "Enable dealers to place orders directly on WhatsApp.", bullets: ["Product catalog browsing", "Quantity selection", "Price confirmation", "Order placement", "Delivery tracking"] },
        { icon: FileText, title: "Invoice & Payment", description: "Automated invoice sharing and payment tracking.", bullets: ["Auto invoice generation", "WhatsApp delivery", "Payment reminder", "Receipt confirmation", "Outstanding balance alerts"] },
        { icon: Headphones, title: "Support Ticket Bot", description: "Manage dealer and distributor support queries efficiently.", bullets: ["Issue categorization", "Ticket creation", "Priority assignment", "Status updates", "Resolution confirmation"] },
        { icon: Factory, title: "Supply Chain Updates", description: "Keep the entire supply chain informed in real-time.", bullets: ["Production updates", "Shipping notifications", "Delivery confirmations", "Stock availability alerts", "Quality issue notifications"] },
        { icon: BarChart3, title: "Performance Analytics", description: "Track dealer performance and engagement metrics.", bullets: ["Order volume tracking", "Payment compliance", "Engagement scores", "Territory performance", "Growth recommendations"] },
      ],
    }}
    useCases={[
      { title: "Dealer Onboarding", description: "New dealer → Registration form → Document collection → Verification → Territory assignment → Catalog shared → Active." },
      { title: "Order Processing", description: "Dealer browses catalog → Selects products → Confirms quantity → Order placed → Invoice generated → Delivery scheduled." },
      { title: "Invoice & Payment", description: "Order delivered → Invoice auto-sent → Payment reminder → Payment received → Receipt shared → Outstanding updated." },
      { title: "Support Management", description: "Dealer reports issue → Bot categorizes → Ticket created → Assigned to team → Status updates → Resolution confirmed." },
      { title: "Stock Alerts", description: "Inventory low → Auto alert to dealers → Pre-order option → Restocking notification → Order fulfillment." },
      { title: "Scheme Communication", description: "New scheme launched → Broadcast to dealers → Scheme details → Registration → Performance tracking → Rewards." },
    ]}
    aiAgent={{
      name: "B2B Operations AI Agent",
      description: "Handles distributor onboarding, processes dealer orders, manages invoices and payments, resolves support tickets, and sends supply chain updates — creating a unified B2B operations layer on WhatsApp.",
    }}
    howItWorks={[
      { step: "Connect Your ERP/CRM", description: "Integrate with your ERP, CRM, and inventory management systems." },
      { step: "Activate B2B Flows", description: "Enable onboarding, ordering, invoicing, support, and communication workflows." },
      { step: "Scale Operations", description: "Manage 10x more dealers without increasing operations team size." },
    ]}
    results={[
      { stat: "70%", label: "Faster Onboarding" },
      { stat: "50%", label: "Fewer Phone Orders" },
      { stat: "3x", label: "Faster Issue Resolution" },
      { stat: "40%", label: "Better Payment Compliance" },
    ]}
    integrations={["SAP", "Oracle ERP", "Tally", "Zoho CRM", "Salesforce", "Google Sheets", "Payment Gateways", "Logistics APIs", "Custom ERPs"]}
    faqs={[
      { question: "Can it handle complex product catalogs?", answer: "Yes. Multi-category, multi-SKU catalogs with pricing tiers for different dealer levels are supported." },
      { question: "Does it integrate with our ERP?", answer: "Yes. API-based integration with SAP, Oracle, Tally, and custom ERP systems." },
      { question: "Can dealers place bulk orders?", answer: "Yes. Bulk ordering with quantity-based pricing and volume discounts is fully automated." },
      { question: "How does invoice automation work?", answer: "Invoices are auto-generated on order confirmation, delivered via WhatsApp, with payment reminders and receipt tracking." },
      { question: "Is it secure for B2B transactions?", answer: "Yes. Enterprise-grade security with encrypted communication, role-based access, and audit trails." },
      { question: "Can we manage multiple territories?", answer: "Yes. Territory-based dealer management with separate catalogs, pricing, and communication flows." },
    ]}
    cta={{
      headline: "Modernize Your B2B Operations",
      subtext: "Phone calls and emails don't scale. Transform your distributor and dealer operations with WhatsApp AI automation.",
      primaryAction: "Book a Demo",
      secondaryAction: "Start Free Trial",
    }}
  />
);

export default B2BIndustry;
