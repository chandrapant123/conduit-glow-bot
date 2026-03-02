import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Heart, Calendar, FileText, Bell, Stethoscope, ClipboardList } from "lucide-react";

const HealthcareIndustry = () => (
  <IndustryPageTemplate
    seo={{
      title: "WhatsApp Automation for Healthcare | Hospitals & Clinics | Pipebot",
      description: "Automate patient appointments, reminders, lab reports & engagement on WhatsApp. Reduce no-shows by 40% with Pipebot healthcare automation.",
      keywords: "whatsapp automation for healthcare, hospital whatsapp chatbot, patient appointment bot, healthcare AI automation, clinic whatsapp integration",
    }}
    hero={{
      headline: "Automate Patient Engagement,",
      highlightText: "Appointments & Follow-Ups — 24/7",
      subtext: "Reduce no-shows. Automate appointment booking. Send lab reports instantly. Pre-screen patients with AI. Built for hospitals, clinics, and diagnostic centers.",
      bullets: [
        "AI-powered appointment booking on WhatsApp",
        "Reduce no-shows by up to 40% with auto-reminders",
        "Secure lab report delivery via WhatsApp",
        "AI symptom pre-screening before visits",
        "Preventive care & follow-up automation",
      ],
    }}
    painPoints={{
      headline: "Healthcare Teams Are Overwhelmed",
      subtext: "Patients expect instant replies — not long call queues. Manual processes are costing you time, revenue, and patient satisfaction.",
      items: [
        { text: "High appointment no-show rates drain revenue" },
        { text: "Overloaded front desk staff and phone lines" },
        { text: "Manual call confirmations take hours daily" },
        { text: "Lab report follow-ups are delayed" },
        { text: "Missed preventive care reminders" },
        { text: "Poor patient engagement and retention" },
      ],
    }}
    solution={{
      headline: "AI Healthcare Automation on WhatsApp",
      subtext: "Turn WhatsApp into your digital front desk — available 24/7 for appointments, reminders, reports, and patient engagement.",
      features: [
        { icon: Calendar, title: "AI Appointment Booking", description: "Patients book appointments directly on WhatsApp without calling.", bullets: ["Check doctor availability", "Book & confirm appointment", "Automated confirmation message", "Reschedule options", "Multi-department support"] },
        { icon: Bell, title: "No-Show Reduction System", description: "Automated reminders that reduce empty appointment slots by up to 40%.", bullets: ["24-hour advance reminder", "Same-day morning reminder", "Easy reschedule option", "Waitlist management", "Cancellation auto-fill"] },
        { icon: Stethoscope, title: "AI Symptom Pre-Screening", description: "Collect basic symptoms before the visit to speed up triage and improve efficiency.", bullets: ["Symptom collection chat", "Department identification", "Doctor specialization matching", "Priority flagging", "Pre-visit preparation tips"] },
        { icon: FileText, title: "Lab Report Automation", description: "Deliver reports securely via WhatsApp the moment they're ready.", bullets: ["Auto notification when ready", "Secure PDF sharing", "Follow-up consultation booking", "Abnormal result flagging", "Doctor feedback integration"] },
        { icon: Heart, title: "Preventive Care Automation", description: "Keep patients engaged with proactive health reminders.", bullets: ["Vaccination schedules", "Annual checkup alerts", "Chronic care follow-ups", "Medicine refill reminders", "Health tip broadcasts"] },
        { icon: ClipboardList, title: "Feedback & Survey Collection", description: "Automate patient satisfaction surveys and collect actionable feedback.", bullets: ["Post-visit satisfaction survey", "NPS score collection", "Doctor rating system", "Service improvement insights", "Google review requests"] },
      ],
    }}
    useCases={[
      { title: "Appointment Booking Bot", description: "Patient sends 'Book appointment' → AI shows available slots → Patient selects → Confirmation sent → Reminder scheduled." },
      { title: "Lab Report Delivery", description: "Report ready → Auto WhatsApp notification → Secure PDF sent → Follow-up appointment suggestion." },
      { title: "Vaccination Reminder", description: "Schedule-based trigger → Reminder sent → Booking link → Confirmation → Post-vaccination follow-up." },
      { title: "Chronic Care Management", description: "Medication reminder → Refill alert → Doctor check-in scheduling → Health metric collection." },
      { title: "Emergency Triage Bot", description: "Patient describes symptoms → AI pre-screens → Priority assignment → Directs to appropriate department." },
      { title: "Insurance Pre-Authorization", description: "Collect insurance details → Verify coverage → Pre-authorize procedures → Reduce billing delays." },
    ]}
    aiAgent={{
      name: "Patient Engagement AI Agent",
      description: "Handles appointment booking, sends reminders, delivers lab reports, pre-screens symptoms, and manages follow-ups — all autonomously on WhatsApp. Reduces front desk workload by 50% while improving patient satisfaction.",
    }}
    howItWorks={[
      { step: "Connect Your HMS/EMR", description: "Integrate with your hospital management system, EMR, or practice management software." },
      { step: "Activate Healthcare Flows", description: "Enable appointment booking, reminders, report delivery, and patient engagement workflows." },
      { step: "Improve Patient Experience", description: "Reduce wait times, no-shows, and manual work while improving satisfaction scores." },
    ]}
    results={[
      { stat: "40%", label: "Fewer No-Shows" },
      { stat: "50%", label: "Less Front Desk Load" },
      { stat: "3x", label: "Faster Patient Response" },
      { stat: "92%", label: "Patient Satisfaction" },
    ]}
    integrations={["Hospital Management Systems", "EMR/EHR Software", "Lab Information Systems", "Google Calendar", "Zoho CRM", "Custom APIs", "Payment Gateways", "Insurance Portals"]}
    faqs={[
      { question: "Is patient data secure on WhatsApp?", answer: "Yes. We use official WhatsApp Business API with end-to-end encryption. All data handling follows healthcare compliance standards." },
      { question: "Can it work with our existing HMS?", answer: "Yes. Pipebot integrates with major hospital management systems and can connect via custom APIs." },
      { question: "Does it support multiple departments?", answer: "Yes. You can set up separate flows for cardiology, orthopedics, dental, diagnostics, and more." },
      { question: "Can patients book appointments in regional languages?", answer: "Yes. Multi-language support is available for Hindi, Tamil, Telugu, Marathi, and other regional languages." },
      { question: "How does the no-show reduction work?", answer: "Automated reminders at 24h and same-day, with easy reschedule options, reduce no-shows by up to 40%." },
      { question: "Is this suitable for diagnostic centers?", answer: "Absolutely. Lab report delivery, test booking, and result follow-ups are core features." },
      { question: "Can it handle insurance verification?", answer: "Yes. The bot can collect insurance details, verify coverage, and streamline pre-authorization workflows." },
      { question: "What about emergency situations?", answer: "AI pre-screens symptoms and can flag urgent cases for immediate attention while directing non-urgent queries to appropriate departments." },
    ]}
    cta={{
      headline: "Turn WhatsApp Into Your Digital Front Desk",
      subtext: "Reduce no-shows, automate patient engagement, and improve satisfaction — all without increasing staff. Start your healthcare automation journey today.",
      primaryAction: "Book a Demo",
      secondaryAction: "Start Free Trial",
    }}
  />
);

export default HealthcareIndustry;
