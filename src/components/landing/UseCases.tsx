import { motion } from "framer-motion";
import { Building2, ShoppingBag, GraduationCap, Stethoscope, Home, Package } from "lucide-react";

const industries = [
  { icon: Building2, label: "Fintech" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: GraduationCap, label: "EdTech" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Home, label: "Real Estate" },
  { icon: Package, label: "D2C Brands" },
];

const UseCases = () => (
  <section className="py-24 section-gradient" id="industries">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Industries We <span className="text-gradient-primary">Serve</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Pipebot powers communication for businesses across verticals.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-4xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div key={ind.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <ind.icon className="text-primary" size={22} />
            </div>
            <h4 className="font-display font-bold text-sm text-foreground">{ind.label}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
