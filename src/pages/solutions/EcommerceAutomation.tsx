import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ShoppingCart, Truck, CreditCard, RotateCcw, Bell, BarChart3 } from "lucide-react";

const features = [
  { icon: RotateCcw, title: "Cart Recovery", desc: "Automatically remind customers about abandoned carts and recover lost sales." },
  { icon: ShoppingCart, title: "Order Confirmation", desc: "Instant WhatsApp notifications for order placement and processing." },
  { icon: Truck, title: "Shipping Updates", desc: "Real-time delivery tracking and shipping status updates via WhatsApp." },
  { icon: CreditCard, title: "COD Confirmation", desc: "Verify cash-on-delivery orders to reduce returns and improve delivery success." },
  { icon: Bell, title: "Promotional Offers", desc: "Send personalized product recommendations and special offers." },
  { icon: BarChart3, title: "Performance Analytics", desc: "Track recovery rates, engagement, and revenue impact from automation." },
];

const EcommerceAutomation = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            WhatsApp Automation for <span className="text-gradient-hero">E-commerce Brands</span>
          </h1>
          <p className="text-lg text-muted-foreground">Recover carts, confirm COD orders & send order updates automatically using WhatsApp automation for e-commerce.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold btn-glow hover:brightness-110 transition">Get Started</a>
            <a href="/contact" className="glass-card px-8 py-3 rounded-xl font-semibold text-foreground hover:border-primary/50 transition">Book Demo</a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 rounded-2xl">
              <f.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default EcommerceAutomation;
