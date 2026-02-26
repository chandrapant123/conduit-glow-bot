import { motion } from "framer-motion";
import { Brain, FileText, UserCheck, CalendarCheck, CreditCard, ArrowRightLeft } from "lucide-react";
import aiFeature from "@/assets/ai-feature.png";

const features = [
  { icon: FileText, label: "Train with PDFs, CSV, DOCX & knowledge base" },
  { icon: Brain, label: "Context-aware RAG-powered responses" },
  { icon: UserCheck, label: "Lead qualification automation" },
  { icon: CalendarCheck, label: "Appointment booking" },
  { icon: CreditCard, label: "Payment link integration" },
  { icon: ArrowRightLeft, label: "Smart human handover triggers" },
];

const AIHighlight = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="rounded-2xl overflow-hidden glow-blue">
            <img src={aiFeature} alt="Pipebot AI-powered chatbot with RAG technology" className="w-full h-auto" loading="lazy" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Smarter Conversations with <span className="text-gradient-primary">AI + RAG</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Pipebot's AI engine doesn't just reply — it <span className="text-primary font-semibold">understands</span>. Faster replies. Better CX. Higher conversions.
          </p>
          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="text-primary" size={16} />
                </div>
                <span className="text-sm text-foreground">{f.label}</span>
              </motion.div>
            ))}
          </div>
          <a href="/ai-whatsapp-chatbot" className="inline-block mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">
            Explore AI Capabilities →
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AIHighlight;
