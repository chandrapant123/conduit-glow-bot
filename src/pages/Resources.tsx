import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { BookOpen, FileText, HelpCircle } from "lucide-react";

const resources = [
  { icon: BookOpen, title: "Blog", desc: "Insights, strategies & updates on WhatsApp API, RCS messaging, AI chatbots & business automation.", href: "/blog" },
  { icon: FileText, title: "FAQ", desc: "Everything you need to know about Pipebot, WhatsApp API, pricing and getting started.", href: "/faq" },
  { icon: HelpCircle, title: "Contact Support", desc: "Get help from our messaging experts or book a personalized demo.", href: "/contact" },
];

const Resources = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            WhatsApp API Guides, Blogs & <span className="text-gradient-primary">Case Studies</span>
          </h1>
          <p className="text-lg text-muted-foreground">Learn WhatsApp marketing, automation & API setup with expert blogs, guides & case studies from Pipebot.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {resources.map((r, i) => (
            <motion.a key={r.title} href={r.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-colors group text-center">
              <r.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-xl font-display font-bold text-foreground mb-2">{r.title}</h2>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Resources;
