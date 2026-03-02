import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Plane, MapPin, FileText, Calendar, Globe, Compass } from "lucide-react";

const TravelIndustry = () => (
  <IndustryPageTemplate
    seo={{
      title: "WhatsApp AI Automation for Travel Agencies | Pipebot",
      description: "Automate travel package inquiries, visa document checklists, booking confirmations & AI travel planning on WhatsApp with Pipebot for travel agencies.",
      keywords: "whatsapp AI for travel agencies, travel automation whatsapp, tour package whatsapp bot, visa checklist automation, AI travel planner",
    }}
    hero={{
      headline: "Automate Travel Inquiries,",
      highlightText: "Bookings & Customer Journeys",
      subtext: "Package inquiry bot, visa document checklists, booking confirmations & AI travel planner agent — all on WhatsApp for travel agencies and tour operators.",
      bullets: [
        "Instant package inquiry response on WhatsApp",
        "Visa document checklist automation",
        "Booking confirmation & itinerary sharing",
        "AI travel planner for personalized recommendations",
        "Post-trip feedback and review collection",
      ],
    }}
    painPoints={{
      headline: "Travel Inquiries Are Time-Sensitive",
      subtext: "Travelers expect instant responses. Every hour of delay means they book with a competitor.",
      items: [
        { text: "Slow response to travel inquiries" },
        { text: "Manual itinerary creation takes hours" },
        { text: "Visa document requirements shared inconsistently" },
        { text: "Booking confirmations sent via email (low open rates)" },
        { text: "No structured follow-up for repeat bookings" },
        { text: "Group travel coordination is chaotic" },
      ],
    }}
    solution={{
      headline: "AI Travel Automation on WhatsApp",
      subtext: "Turn WhatsApp into your automated travel desk — handling inquiries, bookings, and customer engagement 24/7.",
      features: [
        { icon: Compass, title: "Package Inquiry Bot", description: "Instantly respond to destination inquiries with curated package options.", bullets: ["Destination-wise packages", "Budget-based filtering", "Duration preferences", "Group size options", "Instant quote sharing"] },
        { icon: FileText, title: "Visa Document Automation", description: "Share country-specific visa requirements and collect documents on WhatsApp.", bullets: ["Country-wise checklist", "Document upload", "Status tracking", "Appointment booking", "Rejection prevention tips"] },
        { icon: Calendar, title: "Booking & Itinerary", description: "Automated booking confirmations with detailed itinerary sharing.", bullets: ["Booking confirmation", "Day-wise itinerary", "Hotel & flight details", "Activity schedule", "Emergency contacts"] },
        { icon: Plane, title: "AI Travel Planner", description: "AI recommends destinations and creates custom itineraries based on preferences.", bullets: ["Preference-based suggestions", "Budget optimization", "Season recommendations", "Activity matching", "Hidden gem suggestions"] },
        { icon: Globe, title: "Group Travel Coordination", description: "Manage group communications, payments, and updates on WhatsApp.", bullets: ["Group creation", "Payment tracking", "Document collection", "Update broadcasts", "Activity voting"] },
        { icon: MapPin, title: "Post-Trip Engagement", description: "Collect feedback, reviews, and plan future trips.", bullets: ["Trip feedback survey", "Google review request", "Photo sharing invitation", "Future trip suggestions", "Loyalty rewards"] },
      ],
    }}
    useCases={[
      { title: "Instant Package Inquiry", description: "Traveler asks about Bali → AI shows packages → Budget filter → Duration selection → Quote generated → Booking initiated." },
      { title: "Visa Processing", description: "Destination selected → Country-wise checklist sent → Documents collected → Application tracked → Visa received notification." },
      { title: "Booking Management", description: "Payment confirmed → Booking confirmation → Itinerary shared → Pre-departure checklist → Travel day reminders." },
      { title: "AI Trip Planning", description: "Traveler shares preferences → AI creates custom itinerary → Reviews → Adjustments → Final booking → Confirmation." },
      { title: "Group Coordination", description: "Group formed → Member communication → Document collection → Payment tracking → Updates → Trip coordination." },
      { title: "Repeat Customer Engagement", description: "Trip completed → Feedback → Review → Loyalty points → Personalized future trip suggestions → Re-booking." },
    ]}
    aiAgent={{
      name: "AI Travel Planner Agent",
      description: "Understands travel preferences, budget, and timeline → Recommends destinations → Creates custom itineraries → Handles visa requirements → Manages bookings → Follows up post-trip. Your 24/7 digital travel consultant.",
    }}
    howItWorks={[
      { step: "Connect Your Travel CRM", description: "Integrate with your booking system, CRM, and supplier databases." },
      { step: "Activate Travel Flows", description: "Enable inquiry bots, visa automation, booking management, and customer engagement." },
      { step: "Scale Your Agency", description: "Handle 10x more inquiries without increasing staff. AI does the heavy lifting." },
    ]}
    results={[
      { stat: "5x", label: "Faster Inquiry Response" },
      { stat: "40%", label: "Higher Booking Conversion" },
      { stat: "3x", label: "More Repeat Customers" },
      { stat: "60%", label: "Less Manual Work" },
    ]}
    integrations={["Booking Systems", "GDS Platforms", "Payment Gateways", "Google Maps", "Visa Portals", "CRM Platforms", "Google Sheets", "Custom APIs"]}
    faqs={[
      { question: "Can it handle international travel packages?", answer: "Yes. Multi-country packages, visa requirements, and currency-specific pricing are all supported." },
      { question: "Does it work for both B2C and B2B travel?", answer: "Yes. Separate flows for direct customers and corporate travel management." },
      { question: "Can it create custom itineraries?", answer: "Yes. AI creates personalized itineraries based on destination, budget, duration, and activity preferences." },
      { question: "How does visa automation work?", answer: "Country-specific document checklists are shared, documents collected via WhatsApp, and application status tracked automatically." },
      { question: "Can it handle group bookings?", answer: "Yes. Group communication, payment tracking, document collection, and coordination are fully automated." },
      { question: "Is multi-language support available?", answer: "Yes. Communicate with travelers in multiple languages including English, Hindi, Arabic, and European languages." },
    ]}
    cta={{
      headline: "Turn WhatsApp Into Your Digital Travel Desk",
      subtext: "Every delayed inquiry response is a booking lost to a competitor. Automate your travel operations and convert more travelers today.",
      primaryAction: "Book a Demo",
      secondaryAction: "Start Free Trial",
    }}
  />
);

export default TravelIndustry;
