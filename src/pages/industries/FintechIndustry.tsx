import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Landmark, FileCheck, CreditCard, TrendingUp, Shield, BarChart3 } from "lucide-react";

const FintechIndustry = () => (
  <IndustryPageTemplate
    seo={{
      title: "WhatsApp Automation for Fintech & Lending | Pipebot",
      description: "Automate the entire loan journey from lead to disbursal on WhatsApp. AI-powered KYC, eligibility checks, EMI reminders & cross-sell automation for NBFCs and fintech.",
      keywords: "whatsapp automation for fintech, lending whatsapp bot, loan automation whatsapp, KYC collection bot, NBFC whatsapp integration, EMI reminder automation",
    }}
    hero={{
      headline: "Automate the Entire Loan Journey —",
      highlightText: "From Lead to Disbursal",
      subtext: "Instant eligibility checks. AI-powered KYC collection. Automated EMI reminders. Higher loan conversions. Built for digital lenders, NBFCs, and fintech platforms.",
      bullets: [
        "Instant loan inquiry response on WhatsApp",
        "AI-powered lead qualification and scoring",
        "Automated KYC document collection",
        "EMI reminder and collection automation",
        "Cross-sell insurance, credit cards & more",
      ],
    }}
    painPoints={{
      headline: "Every Minute of Delay Reduces Loan Conversion",
      subtext: "Digital lenders face mounting challenges in acquisition, processing, and collection efficiency.",
      items: [
        { text: "Slow lead response kills conversion probability" },
        { text: "Drop-offs during KYC document collection" },
        { text: "Manual document verification is time-consuming" },
        { text: "High customer acquisition cost (CAC)" },
        { text: "EMI defaults and collection challenges" },
        { text: "Low cross-sell and upsell penetration" },
      ],
    }}
    solution={{
      headline: "AI Automation That Transforms Lending",
      subtext: "Pipebot turns WhatsApp into an automated loan processing and collection engine. End-to-end automation from lead to disbursal to repayment.",
      features: [
        { icon: TrendingUp, title: "Instant Loan Inquiry Response", description: "User clicks ad → Instant WhatsApp conversation → AI collects details → Eligibility calculated.", bullets: ["Loan amount assessment", "Income verification", "Employment type collection", "Credit score estimation", "Instant eligibility result"] },
        { icon: BarChart3, title: "AI Lead Qualification", description: "AI tags prime borrowers, near-prime, and high-risk applicants. Sales focuses on qualified leads only.", bullets: ["Income-based scoring", "Employment verification", "Bureau data assessment", "Risk categorization", "Auto-assignment to sales"] },
        { icon: FileCheck, title: "Automated KYC Collection", description: "Collect all documents inside WhatsApp securely. Reduce drop-offs significantly.", bullets: ["Aadhaar upload", "PAN card collection", "Bank statement upload", "Salary slip verification", "Selfie/video KYC"] },
        { icon: CreditCard, title: "EMI Reminder & Collection", description: "Automated payment reminders that improve repayment rates and reduce delinquency.", bullets: ["Pre-EMI reminders", "Due-date alerts", "Missed payment nudges", "Settlement link sharing", "Escalation protocols"] },
        { icon: Landmark, title: "Disbursal & Status Updates", description: "Keep borrowers informed at every stage — reducing inbound support calls.", bullets: ["Application status updates", "Approval notifications", "Disbursal confirmation", "Account details sharing", "Disbursement timeline tracking"] },
        { icon: Shield, title: "AI Cross-Sell Agent", description: "After loan disbursal, AI recommends relevant financial products to increase LTV.", bullets: ["Insurance recommendations", "Credit card offers", "Top-up loan suggestions", "BNPL activation", "Investment product cross-sell"] },
      ],
    }}
    useCases={[
      { title: "Lead to Application", description: "Ad click → WhatsApp inquiry → AI qualification → Eligibility check → Application initiated → KYC collection." },
      { title: "KYC Document Collection", description: "Application started → Document checklist sent → One-by-one collection → Verification → Application complete." },
      { title: "Loan Status Bot", description: "Borrower asks status → Auto-fetch from LOS → Share current stage → Expected timeline → Next steps." },
      { title: "EMI Collection Flow", description: "D-3 reminder → D-1 reminder → Due date alert → Payment link → Confirmation → Next EMI schedule." },
      { title: "Cross-Sell Automation", description: "Loan disbursed → Wait period → AI recommends insurance → Credit card offer → Top-up loan suggestion." },
      { title: "Fraud Prevention", description: "Suspicious application → Additional verification → Video KYC → Manual review trigger → Decision notification." },
    ]}
    aiAgent={{
      name: "Loan Processing AI Agent",
      description: "Handles loan inquiries, calculates eligibility, collects KYC documents, provides status updates, sends EMI reminders, and cross-sells financial products — all autonomously on WhatsApp. Reduces processing time by 50% and improves collection efficiency.",
    }}
    howItWorks={[
      { step: "Connect Your LOS/CRM", description: "Integrate with your loan origination system, CRM, and payment infrastructure." },
      { step: "Activate Lending Flows", description: "Enable inquiry bots, KYC collection, status updates, EMI reminders, and cross-sell agents." },
      { step: "Scale Lending Operations", description: "Process more loans with fewer resources. AI handles repetitive tasks 24/7." },
    ]}
    results={[
      { stat: "30%", label: "Higher Application Completion" },
      { stat: "40%", label: "Faster Processing" },
      { stat: "25%", label: "Lower Support Costs" },
      { stat: "20%", label: "Better Collection Rate" },
    ]}
    integrations={["Loan Origination Systems", "CRM Platforms", "Razorpay", "CIBIL/Bureau APIs", "eSign Platforms", "Video KYC", "Payment Gateways", "Google Sheets", "Custom APIs"]}
    faqs={[
      { question: "Is it compliant with RBI guidelines?", answer: "Yes. Pipebot uses official WhatsApp Business API and follows data protection guidelines applicable to financial services in India." },
      { question: "Can it handle document verification?", answer: "Yes. Documents are collected securely and can be integrated with verification APIs for automated validation." },
      { question: "Does it work for personal and business loans?", answer: "Yes. Separate flows can be configured for personal loans, business loans, gold loans, and other lending products." },
      { question: "How does EMI reminder improve collections?", answer: "Automated multi-touch reminders before and on due dates, with easy payment links, improve repayment rates by 15-25%." },
      { question: "Can it integrate with our existing LOS?", answer: "Yes. API-based integration with major loan origination systems and custom platforms is supported." },
      { question: "Is video KYC supported?", answer: "Yes. Video KYC can be initiated directly through WhatsApp for seamless identity verification." },
      { question: "Can it handle multi-product lending?", answer: "Yes. Separate qualification logic, document requirements, and processing flows for each product." },
      { question: "What about data security?", answer: "End-to-end encryption, secure cloud infrastructure, role-based access, and audit trails ensure enterprise-grade security." },
    ]}
    cta={{
      headline: "Turn WhatsApp Into Your Automated Loan Engine",
      subtext: "Every delayed response, every dropped KYC, every missed EMI reminder costs you revenue. Automate the entire lending lifecycle today.",
      primaryAction: "Schedule Fintech Demo",
      secondaryAction: "Start Free Trial",
    }}
  />
);

export default FintechIndustry;
