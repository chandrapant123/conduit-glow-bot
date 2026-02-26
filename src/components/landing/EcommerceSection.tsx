import { motion } from "framer-motion";
import { Package, Truck, CreditCard, ShoppingCart, Bell } from "lucide-react";

const touchpoints = [
  { icon: ShoppingCart, label: "Cart Reminders", desc: "Recover abandoned carts via WhatsApp" },
  { icon: Package, label: "Order Confirmation", desc: "Instant order updates to customers" },
  { icon: Truck, label: "Shipping Updates", desc: "Real-time delivery tracking" },
  { icon: CreditCard, label: "COD Verification", desc: "Reduce RTO with confirmation messages" },
  { icon: Bell, label: "Payment Alerts", desc: "Automated payment reminders" },
];

const EcommerceSection = () => (
  <section className="py-24 section-gradient">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Automate Every <span className="text-gradient-primary">Customer Touchpoint</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Perfect for Shopify, WooCommerce & custom stores.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {touchpoints.map((t, i) => (
          <motion.div key={t.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6 w-[200px] text-center hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <t.icon className="text-primary" size={22} />
            </div>
            <h4 className="font-display font-bold text-sm text-foreground mb-1">{t.label}</h4>
            <p className="text-xs text-muted-foreground">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcommerceSection;
