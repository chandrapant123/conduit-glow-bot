import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Bot, Brain, CalendarCheck, HelpCircle, CreditCard, Users, FileText, Globe, Sparkles, RefreshCw, Shield, BarChart3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import aiChatbotHero from "@/assets/ai-chatbot-hero.png";

const features = [
  { icon: Brain, title: "RAG-Powered Responses", desc: "AI trained on your documents delivers context-aware, accurate answers automatically." },
  { icon: Bot, title: "Lead Qualification", desc: "Automatically qualify leads through conversational flows and smart scoring." },
  { icon: CalendarCheck, title: "Appointment Booking", desc: "Let customers book appointments directly through WhatsApp chat." },
  { icon: HelpCircle, title: "FAQ Automation", desc: "Instant answers to common questions — reduce ticket volume by up to 80%." },
  { icon: CreditCard, title: "Payment Collection", desc: "Send payment links and collect payments directly within WhatsApp conversations." },
  { icon: Users, title: "Human Handover", desc: "Seamless escalation to human agents when the bot can't handle a query." },
  { icon: FileText, title: "Document Training", desc: "Upload PDFs, CSVs, DOCX files to train your AI with your knowledge base." },
  { icon: Globe, title: "Multi-Language", desc: "Auto-detect and respond in 50+ languages for global customer support." },
  { icon: Sparkles, title: "Smart Suggestions", desc: "AI suggests responses to agents based on conversation context and history." },
  { icon: RefreshCw, title: "Continuous Learning", desc: "AI improves over time by learning from agent corrections and feedback." },
  { icon: Shield, title: "Data Privacy", desc: "Your training data is encrypted and never shared. Full GDPR compliance." },
  { icon: BarChart3, title: "Bot Analytics", desc: "Track resolution rates, handover rates, and customer satisfaction scores." },
];

const useCases = [
  { title: "E-commerce", desc: "Product recommendations, order tracking, returns handling, and upselling via AI chat." },
  { title: "Healthcare", desc: "Appointment scheduling, symptom checking, prescription reminders, and patient support." },
  { title: "Education", desc: "Course inquiries, admission status, fee payment reminders, and student support." },
  { title: "Real Estate", desc: "Property inquiries, virtual tour scheduling, EMI calculator, and follow-up automation." },
  { title: "Banking & Finance", desc: "Account queries, loan applications, KYC collection, and transaction alerts." },
  { title: "Travel & Hospitality", desc: "Booking confirmations, itinerary updates, concierge services, and feedback collection." },
];

const faqs = [
  { q: "What is an AI WhatsApp Chatbot?", a: "An AI WhatsApp chatbot uses artificial intelligence to automatically respond to customer messages, qualify leads, and handle support queries 24/7 without human intervention." },
  { q: "Can the chatbot learn from my documents?", a: "Yes, Pipebot's AI uses RAG (Retrieval Augmented Generation) to learn from your uploaded PDFs, CSVs, and documents for context-aware, accurate responses." },
  { q: "Does it support multiple languages?", a: "Yes, the AI chatbot supports 50+ languages and can auto-detect the customer's language for seamless communication." },
  { q: "How accurate is the AI?", a: "Our RAG-powered AI delivers 90%+ accuracy on trained topics. It gracefully handles unknown queries by escalating to human agents." },
  { q: "Can it integrate with my CRM?", a: "Yes, the chatbot integrates with popular CRMs, helpdesk tools, and eCommerce platforms via webhooks and APIs." },
  { q: "What happens when the bot can't answer?", a: "The bot seamlessly hands over the conversation to a human agent with full context, so customers never feel abandoned." },
  { q: "How long does it take to set up?", a: "You can have a basic chatbot running in under 30 minutes. Training with documents takes a few hours depending on the data size." },
  { q: "Is there a limit on conversations?", a: "Conversation limits depend on your plan. Our Professional plan supports up to 50,000 conversations/month." },
];

const AIWhatsAppChatbot = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-36 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              AI WhatsApp Chatbot for <span className="text-gradient-hero">Business Automation</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">Deploy AI-powered WhatsApp chatbots that understand your business. Train with your documents, qualify leads, book appointments, and provide 24/7 support.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition text-center">Get Started Free</a>
              <a href="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition text-center">Book Demo</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <img src={aiChatbotHero} alt="AI Chatbot Platform" className="rounded-2xl shadow-xl border border-border w-full" />
          </motion.div>
        </div>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-4">Powerful AI Chatbot Features</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Everything you need to build intelligent, context-aware chatbots</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="glass-card p-6 rounded-2xl hover:shadow-md transition-shadow">
                <f.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-4">Industry Use Cases</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">AI chatbots for every industry vertical</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-border">
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border-glass-border">
                <AccordionTrigger className="text-foreground font-display font-semibold text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default AIWhatsAppChatbot;
