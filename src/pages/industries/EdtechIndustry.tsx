import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { GraduationCap, Video, CreditCard, UserCheck, BookOpen, Users } from "lucide-react";

const EdtechIndustry = () => (
  <IndustryPageTemplate
    seo={{
      title: "WhatsApp AI Automation for EdTech | Pipebot",
      description: "Convert student leads 3x faster with AI-powered WhatsApp funnels. Automate course inquiries, webinar registration, admission qualification & fee reminders.",
      keywords: "whatsapp AI for edtech, edtech whatsapp automation, student lead conversion, course inquiry bot, admission automation whatsapp",
    }}
    hero={{
      headline: "Convert Student Leads",
      highlightText: "3x Faster with AI WhatsApp Funnels",
      subtext: "Instant inquiry response. Automated webinar registration. Admission qualification. Fee reminder automation. Built for EdTech platforms and online course providers.",
      bullets: [
        "Instant course inquiry response on WhatsApp",
        "Automated webinar funnel with reminders",
        "AI-powered admission qualification",
        "Fee installment reminders & payment links",
        "Counselor productivity improvement by 3x",
      ],
    }}
    painPoints={{
      headline: "Students Inquire But Don't Enroll",
      subtext: "Speed and structured nurturing are critical in EdTech. Manual processes are killing your conversion rates.",
      items: [
        { text: "Students inquire but never complete enrollment" },
        { text: "Counselors are overloaded with repetitive questions" },
        { text: "Follow-ups are inconsistent and unstructured" },
        { text: "Webinar attendance drops by 60% without reminders" },
        { text: "Fee reminder calls are time-consuming" },
        { text: "Lead response time is too slow for today's students" },
      ],
    }}
    solution={{
      headline: "AI-Powered Student Conversion Engine",
      subtext: "Automate the entire student journey — from inquiry to enrollment to retention — on WhatsApp.",
      features: [
        { icon: BookOpen, title: "Instant Course Inquiry Bot", description: "Student fills form → Instant WhatsApp response → AI qualifies interest and recommends courses.", bullets: ["Course interest assessment", "Budget & timeline collection", "Career goal mapping", "Personalized course suggestions", "Counselor assignment for hot leads"] },
        { icon: Video, title: "Webinar Funnel Automation", description: "Maximize webinar attendance and conversions with automated WhatsApp sequences.", bullets: ["Registration confirmation", "Multi-touch reminder sequence", "Replay link auto-send", "Enrollment CTA post-webinar", "Attendance tracking"] },
        { icon: UserCheck, title: "Admission Qualification AI", description: "Pre-qualify students based on academic background, career intent, and budget.", bullets: ["Academic background assessment", "Career intent analysis", "Budget capacity evaluation", "Eligibility verification", "Priority counselor routing"] },
        { icon: CreditCard, title: "Fee Reminder Automation", description: "Reduce revenue leakage with automated installment reminders and payment links.", bullets: ["Installment due alerts", "Payment link sharing", "Scholarship reminders", "Late payment nudges", "Receipt confirmation"] },
        { icon: GraduationCap, title: "Student Onboarding Bot", description: "Guide new students through orientation, course access, and platform setup.", bullets: ["Welcome sequence", "Platform access instructions", "Course material links", "Community group invitations", "First-week check-in"] },
        { icon: Users, title: "Alumni Engagement", description: "Keep alumni connected for referrals, reviews, and advanced courses.", bullets: ["Course completion congratulations", "Review & testimonial requests", "Advanced course recommendations", "Referral program automation", "Career update collection"] },
      ],
    }}
    useCases={[
      { title: "Lead to Enrollment", description: "Inquiry → AI qualification → Course recommendation → Demo class invite → Enrollment link → Payment confirmation." },
      { title: "Webinar Attendance Boost", description: "Registration → Confirmation → D-1 reminder → 1hr reminder → Live link → Replay → Enrollment CTA." },
      { title: "Fee Collection", description: "Due date approach → WhatsApp reminder → Payment link → Confirmation → Receipt → Next installment schedule." },
      { title: "Course Recommendation", description: "Student asks about career goals → AI maps to courses → Shares curriculum → Schedules counselor call." },
      { title: "Dropout Prevention", description: "Engagement drop detected → Check-in message → Support offered → Re-engagement incentive → Counselor alert." },
      { title: "Referral Program", description: "Course completed → Review request → Referral link → Friend enrolls → Reward notification." },
    ]}
    aiAgent={{
      name: "Student Enrollment AI Agent",
      description: "Handles course inquiries, qualifies students based on background and goals, recommends suitable programs, schedules counselor calls for hot leads, and follows up until enrollment is complete. Increases counselor productivity by 3x.",
    }}
    howItWorks={[
      { step: "Connect Lead Sources", description: "Integrate website forms, Facebook Ads, Google Ads, and landing pages." },
      { step: "Activate EdTech Flows", description: "Enable inquiry bots, webinar funnels, admission qualification, and fee reminders." },
      { step: "Scale Enrollments", description: "AI handles 80% of student interactions. Counselors focus on closing." },
    ]}
    results={[
      { stat: "3x", label: "Faster Lead Response" },
      { stat: "35%", label: "Higher Enrollment Rate" },
      { stat: "2x", label: "Webinar Attendance" },
      { stat: "50%", label: "Less Manual Work" },
    ]}
    integrations={["Facebook Lead Ads", "Google Ads", "Zoho CRM", "HubSpot", "Razorpay", "Stripe", "Google Sheets", "LMS Platforms", "Custom APIs", "Zoom"]}
    faqs={[
      { question: "Can it handle multiple courses?", answer: "Yes. You can set up separate inquiry flows, qualification logic, and follow-up sequences for each course or program." },
      { question: "Does it work for offline coaching centers?", answer: "Absolutely. Appointment scheduling, batch management, and fee collection work for both online and offline education." },
      { question: "Can it integrate with our LMS?", answer: "Yes. Pipebot connects with popular LMS platforms via API for seamless student data sync." },
      { question: "How does webinar automation help?", answer: "Automated reminder sequences typically double webinar attendance. Post-webinar follow-ups increase enrollment conversion by 30-40%." },
      { question: "Is it suitable for university admissions?", answer: "Yes. Document collection, eligibility verification, and admission status updates can all be automated." },
      { question: "Can students interact in Hindi or regional languages?", answer: "Yes. Multi-language AI support is available for major Indian and international languages." },
      { question: "How does fee reminder automation work?", answer: "The system sends reminders before due dates, shares payment links, confirms receipt, and schedules next installment alerts." },
      { question: "Can it handle bulk student communication?", answer: "Yes. Broadcast campaigns for batch announcements, exam schedules, and event notifications are fully supported." },
    ]}
    cta={{
      headline: "Turn WhatsApp Into Your Enrollment Engine",
      subtext: "Every delayed response to a student inquiry is a lost enrollment. Automate the complete student journey from inquiry to enrollment today.",
      primaryAction: "Book a Demo",
      secondaryAction: "Start Free Trial",
    }}
  />
);

export default EdtechIndustry;
