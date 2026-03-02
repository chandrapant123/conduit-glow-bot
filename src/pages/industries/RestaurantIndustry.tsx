import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { UtensilsCrossed, Megaphone, Star, Gift, ClipboardList, ShoppingBag } from "lucide-react";

const RestaurantIndustry = () => (
  <IndustryPageTemplate
    seo={{
      title: "WhatsApp Automation for Restaurants & Cloud Kitchens | Pipebot",
      description: "Automate WhatsApp ordering, menu sharing, offer broadcasts, feedback collection & loyalty programs for restaurants and cloud kitchens with Pipebot.",
      keywords: "whatsapp automation for restaurants, restaurant whatsapp bot, cloud kitchen automation, whatsapp ordering system, restaurant marketing whatsapp",
    }}
    hero={{
      headline: "Automate Orders, Marketing &",
      highlightText: "Customer Loyalty on WhatsApp",
      subtext: "WhatsApp ordering bot, menu automation, offer broadcasting, feedback collection & loyalty programs — all automated for restaurants and cloud kitchens.",
      bullets: [
        "WhatsApp ordering and menu browsing",
        "Automated offer and deal broadcasting",
        "Feedback collection after every order",
        "Loyalty program automation",
        "Table reservation management",
      ],
    }}
    painPoints={{
      headline: "Running a Restaurant Is Hard Enough",
      subtext: "Between managing orders, staff, and customers — marketing and engagement always take the backseat.",
      items: [
        { text: "Customers call for orders — tying up phone lines" },
        { text: "Menu changes require updating multiple platforms" },
        { text: "Offer campaigns are sent manually and inconsistently" },
        { text: "Feedback collection is low or non-existent" },
        { text: "No structured loyalty or repeat customer program" },
        { text: "Table reservations managed via phone calls" },
      ],
    }}
    solution={{
      headline: "AI-Powered Restaurant Automation",
      subtext: "Turn WhatsApp into your digital ordering, marketing, and customer engagement platform.",
      features: [
        { icon: ShoppingBag, title: "WhatsApp Ordering Bot", description: "Customers browse menu and place orders directly on WhatsApp.", bullets: ["Interactive menu browsing", "Item customization", "Cart management", "Payment link integration", "Order confirmation"] },
        { icon: UtensilsCrossed, title: "Menu Automation", description: "Share daily specials, seasonal items, and updated menus instantly.", bullets: ["Digital menu sharing", "Daily special updates", "Combo deal highlights", "Allergen information", "Multi-cuisine support"] },
        { icon: Megaphone, title: "Offer Broadcasting", description: "Launch targeted campaigns for deals, happy hours, and festive specials.", bullets: ["Flash sale announcements", "Happy hour alerts", "Festival specials", "Birthday/anniversary offers", "Segment-based targeting"] },
        { icon: Star, title: "Feedback Collection", description: "Automate post-order reviews to improve service quality.", bullets: ["Instant feedback request", "Star rating collection", "Complaint escalation", "Google review prompts", "Service improvement insights"] },
        { icon: Gift, title: "Loyalty Program", description: "Automated loyalty rewards that drive repeat orders.", bullets: ["Points tracking", "Reward notifications", "Tier-based benefits", "Referral bonuses", "Birthday rewards"] },
        { icon: ClipboardList, title: "Table Reservation", description: "Manage reservations without phone calls.", bullets: ["Available slot sharing", "Party size collection", "Confirmation messages", "Reminder before arrival", "Waitlist management"] },
      ],
    }}
    useCases={[
      { title: "WhatsApp Ordering", description: "Customer sends 'Menu' → Browse items → Add to cart → Place order → Payment → Confirmation → Delivery tracking." },
      { title: "Daily Specials Broadcast", description: "Chef sets daily special → Auto broadcast to subscribers → Orders received → Revenue boost without ads." },
      { title: "Feedback Loop", description: "Order delivered → Auto feedback request → Rating collected → If negative, manager alerted → Complaint resolved." },
      { title: "Loyalty Rewards", description: "5th order → Auto reward notification → Discount code sent → Customer returns → Repeat cycle." },
      { title: "Table Reservation", description: "Customer requests table → Available slots shown → Reservation confirmed → Reminder sent → Check-in confirmed." },
      { title: "Festive Campaign", description: "Festival approaching → Special menu broadcast → Pre-booking option → Limited slots urgency → Revenue maximized." },
    ]}
    aiAgent={{
      name: "Restaurant Concierge AI Agent",
      description: "Handles menu inquiries, takes orders, manages reservations, collects feedback, and sends personalized offers — creating a complete dining experience on WhatsApp without additional staff.",
    }}
    howItWorks={[
      { step: "Connect Your POS", description: "Integrate with your POS system, delivery partners, and payment gateway." },
      { step: "Set Up Restaurant Flows", description: "Activate ordering bot, menu sharing, broadcast campaigns, and loyalty program." },
      { step: "Grow Your Business", description: "Increase orders, improve retention, and build a loyal customer base automatically." },
    ]}
    results={[
      { stat: "40%", label: "More Repeat Orders" },
      { stat: "3x", label: "Higher Engagement" },
      { stat: "25%", label: "Revenue Increase" },
      { stat: "60%", label: "Less Phone Orders" },
    ]}
    integrations={["POS Systems", "Swiggy/Zomato", "Razorpay", "Stripe", "Google Business", "Google Sheets", "Delivery Partners", "Custom APIs"]}
    faqs={[
      { question: "Can customers place orders on WhatsApp?", answer: "Yes. Customers can browse your menu, customize items, and place orders directly on WhatsApp with integrated payment." },
      { question: "Does it work for cloud kitchens?", answer: "Absolutely. Cloud kitchens benefit especially from direct ordering and broadcast campaigns without aggregator commissions." },
      { question: "Can I send daily specials?", answer: "Yes. Automated broadcasts for daily specials, new items, and limited-time offers keep customers engaged." },
      { question: "How does the loyalty program work?", answer: "Customers earn points per order. AI tracks points, sends reward notifications, and applies discounts automatically." },
      { question: "Can it handle table reservations?", answer: "Yes. Customers can check availability, book tables, receive confirmations, and get reminders — all on WhatsApp." },
      { question: "Is it affordable for small restaurants?", answer: "Yes. Flexible pricing plans are available for single-outlet restaurants to multi-chain operations." },
    ]}
    cta={{
      headline: "Turn WhatsApp Into Your Digital Restaurant",
      subtext: "Orders, marketing, feedback, loyalty — all automated. Focus on cooking great food while Pipebot handles the rest.",
      primaryAction: "Book a Demo",
      secondaryAction: "Start Free Trial",
    }}
  />
);

export default RestaurantIndustry;
