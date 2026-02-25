import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Bot, Brain, CalendarCheck, HelpCircle, CreditCard, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  { icon: Brain, title: "RAG-Powered Responses", desc: "AI trained on your documents delivers context-aware, accurate answers automatically." },
  { icon: Bot, title: "Lead Qualification", desc: "Automatically qualify leads through conversational flows and smart scoring." },
  { icon: CalendarCheck, title: "Appointment Booking", desc: "Let customers book appointments directly through WhatsApp chat." },
  { icon: HelpCircle, title: "FAQ Automation", desc: "Instant answers to common questions — reduce ticket volume by up to 80%." },
  { icon: CreditCard, title: "Payment Collection", desc: "Send payment links and collect payments directly within WhatsApp conversations." },
  { icon: Users, title: "Human Handover", desc: "Seamless escalation to human agents when the bot can't handle a query." },
];

const faqs = [
  { q: "What is an AI WhatsApp Chatbot?", a: "An AI WhatsApp chatbot uses artificial intelligence to automatically respond to customer messages, qualify leads, and handle support queries 24/7." },
  { q: "Can the chatbot learn from my documents?", a: "Yes, Pipebot's AI uses RAG (Retrieval Augmented Generation) to learn from your uploaded PDFs, CSVs, and documents for context-aware responses." },
  { q: "Does it support multiple languages?", a: "Yes, the AI chatbot supports multi-language conversations and can respond in the customer's preferred language." },
];

const AIWhatsAppChatbot = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            AI WhatsApp Chatbot Platform for <span className="text-gradient-hero">Business Automation</span>
          </h1>
          <p className="text-lg text-muted-foreground">Deploy AI-powered WhatsApp chatbots for support, sales & lead generation. Automate conversations and scale customer engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Get Started</a>
            <a href="/contact" className="glass-card px-8 py-3 rounded-xl font-semibold text-foreground hover:border-primary/50 transition">Book Demo</a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 rounded-2xl">
              <f.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <section className="mb-20 max-w-3xl mx-auto">
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
