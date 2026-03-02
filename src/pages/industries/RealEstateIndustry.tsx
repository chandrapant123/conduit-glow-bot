import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Building2, Users, Calendar, FileText, TrendingUp, MessageSquare } from "lucide-react";

const RealEstateIndustry = () => (
  <IndustryPageTemplate
    seo={{
      title: "WhatsApp AI Automation for Real Estate | Pipebot",
      description: "Convert property inquiries into site visits automatically. Instant lead response, AI qualification, automated follow-ups & higher booking rates with Pipebot.",
      keywords: "whatsapp automation for real estate, real estate whatsapp chatbot, property lead automation, site visit automation, AI lead qualification real estate",
    }}
    hero={{
      headline: "Convert Property Inquiries into",
      highlightText: "Site Visits — Automatically",
      subtext: "Instant lead response. AI qualification. Automated follow-ups. Higher site visit show-up rates. Built for real estate developers, brokers, and channel partners.",
      bullets: [
        "Instant lead response within 5 seconds",
        "AI-powered lead qualification and scoring",
        "Automated site visit scheduling & reminders",
        "Brochure & price sheet auto-delivery",
        "30-90 day smart follow-up sequences",
      ],
    }}
    painPoints={{
      headline: "Your Leads Are Expensive. But Most Never Convert.",
      subtext: "You spend lakhs every month on ads and portals. But 60-80% of leads go cold within 5 minutes if not contacted instantly.",
      items: [
        { text: "Lead responds after 2–3 hours — too late" },
        { text: "Sales team misses critical follow-ups" },
        { text: "No structured qualification process" },
        { text: "Site visits don't show up — 40% no-show rate" },
        { text: "Brokers don't get timely updates" },
        { text: "CRM data is incomplete and unreliable" },
      ],
    }}
    solution={{
      headline: "AI Automation Built for Property Sales",
      subtext: "Pipebot turns WhatsApp into your automated sales assistant. Not just a chatbot — an AI-powered lead qualification and follow-up engine.",
      features: [
        { icon: MessageSquare, title: "Instant Lead Response", description: "The moment a lead comes from Facebook, Google, or portals — Pipebot responds within 5 seconds.", bullets: ["Auto-greeting with project details", "Configuration preference collection", "Budget qualification", "Instant brochure sharing", "30-50% higher qualification rates"] },
        { icon: Users, title: "AI Lead Qualification Agent", description: "Instead of sales teams asking repetitive questions, AI handles the entire qualification.", bullets: ["Budget range assessment", "Location preference mapping", "Buying timeline analysis", "Home loan requirement check", "Hot/warm/cold lead scoring"] },
        { icon: Calendar, title: "Site Visit Scheduling", description: "Automated scheduling with reminders that reduce no-shows by up to 40%.", bullets: ["Available time slot sharing", "Google Maps location", "Reminder 24h before visit", "Post-visit follow-up", "Reschedule automation"] },
        { icon: FileText, title: "Brochure & Price Auto-Send", description: "Prospects get instant information — even at midnight. No manual PDF sending.", bullets: ["Auto brochure delivery", "Price list sharing", "Payment plan details", "Amenities explanation", "Project FAQ answers"] },
        { icon: TrendingUp, title: "Smart Follow-Up Automation", description: "Real estate requires 30–90 day follow-ups. Pipebot handles it automatically.", bullets: ["Price update notifications", "Offer & discount reminders", "Inventory scarcity alerts", "Festive campaign triggers", "Last-units urgency messaging"] },
        { icon: Building2, title: "Channel Partner Management", description: "Automate broker lead handling, status updates, and commission tracking.", bullets: ["Auto lead registration", "Status update notifications", "Commission tracking", "Deal closure alerts", "Broker engagement reports"] },
      ],
    }}
    useCases={[
      { title: "Facebook Lead → WhatsApp", description: "Lead fills form → Instant WhatsApp message → AI qualification → Hot lead assigned → Site visit scheduled → CRM updated." },
      { title: "Portal Auto-Response", description: "99acres/Magicbricks lead → Instant intro → Budget qualification → Brochure shared → Follow-up scheduled automatically." },
      { title: "AI Property Match", description: "User types '3BHK in Hinjewadi under 90L' → AI suggests matching units → Layout shared → EMI breakdown → Site visit booked." },
      { title: "Channel Partner Flow", description: "Broker submits lead → Auto acknowledgement → Status updates → Commission notification → Deal closure alert." },
      { title: "EMI Calculator Bot", description: "Buyer asks loan EMI → AI calculates instantly → Shares breakdown → Increases seriousness and trust." },
      { title: "NRI Buyer Engagement", description: "International inquiry → Time-zone aware response → Video tour link → ROI projection → Investment advisory." },
    ]}
    aiAgent={{
      name: "Lead Qualification AI Agent",
      description: "Asks budget, location, timeline → Scores lead as hot/warm/cold → Assigns to sales team automatically → Follows up until site visit is confirmed. Works 24/7 across all your projects.",
    }}
    howItWorks={[
      { step: "Connect Lead Sources", description: "Integrate Facebook Ads, Google Lead Forms, property portals, and website forms." },
      { step: "Activate Real Estate Flows", description: "Enable lead qualification, site visit scheduling, brochure delivery, and follow-up sequences." },
      { step: "Close More Deals", description: "Your sales team talks only to qualified, high-intent prospects. AI handles the rest." },
    ]}
    results={[
      { stat: "30-50%", label: "Higher Lead Engagement" },
      { stat: "2x", label: "Faster Qualification" },
      { stat: "40%", label: "Fewer No-Shows" },
      { stat: "25%", label: "Higher Booking Rate" },
    ]}
    integrations={["Facebook Lead Ads", "Google Lead Forms", "Zoho CRM", "HubSpot", "Salesforce", "99acres", "Magicbricks", "Housing.com", "Google Sheets", "Custom APIs"]}
    faqs={[
      { question: "Is this suitable for luxury projects?", answer: "Absolutely. Automation can be customized for high-ticket, relationship-driven luxury property sales with VIP workflows." },
      { question: "Can AI understand regional languages?", answer: "Yes. Multi-language support is available including Hindi, Marathi, Tamil, Telugu, and more." },
      { question: "Can we integrate with our existing CRM?", answer: "Yes. Full CRM sync with Zoho, HubSpot, Salesforce, and custom CRMs is supported." },
      { question: "Will it replace our sales team?", answer: "No. It qualifies and warms leads so your team focuses on closing deals, not chasing cold leads." },
      { question: "How long does setup take?", answer: "Most real estate businesses go live within 2-3 days with pre-built templates." },
      { question: "Can it handle multiple projects?", answer: "Yes. Create separate pipelines, automation flows, and AI agents for each project from a central dashboard." },
      { question: "Does it work with channel partners?", answer: "Yes. Broker lead registration, status updates, commission tracking, and deal alerts are all automated." },
      { question: "What about site visit no-shows?", answer: "Automated reminders with Google Maps location, reschedule options, and post-visit follow-ups reduce no-shows by up to 40%." },
    ]}
    cta={{
      headline: "Stop Letting Expensive Leads Go Cold",
      subtext: "Every delayed response costs you revenue. Every missed follow-up reduces conversion. Turn WhatsApp into your automated property sales engine.",
      primaryAction: "Book a Demo",
      secondaryAction: "Start Free Trial",
    }}
  />
);

export default RealEstateIndustry;
