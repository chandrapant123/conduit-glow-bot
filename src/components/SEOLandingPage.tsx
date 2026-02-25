import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { CheckCircle } from "lucide-react";

interface SEOLandingPageProps {
  title: string;
  highlight: string;
  description: string;
  sections: { heading: string; content: string }[];
  keywords?: string[];
}

const SEOLandingPage = ({ title, highlight, description, sections }: SEOLandingPageProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {title} <span className="text-gradient-hero">{highlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Get Started</a>
            <a href="/contact" className="glass-card px-8 py-3 rounded-xl font-semibold text-foreground hover:border-primary/50 transition">Book Demo</a>
          </div>
        </motion.div>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <motion.section key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">{s.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.content}</p>
            </motion.section>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Talk to Our Experts</a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default SEOLandingPage;
