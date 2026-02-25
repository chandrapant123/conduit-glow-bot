import { motion } from "framer-motion";
import { CheckCircle, ShoppingCart, Truck, CreditCard, UserPlus, RotateCcw } from "lucide-react";

const useCases = [
  { icon: CheckCircle, label: "Order Confirmations", desc: "Instant WhatsApp notification on every new order." },
  { icon: Truck, label: "Shipping Updates", desc: "Real-time delivery tracking right in WhatsApp." },
  { icon: RotateCcw, label: "Abandoned Cart Recovery", desc: "Automated reminders that bring customers back." },
  { icon: CreditCard, label: "Payment Alerts", desc: "Secure payment confirmations and reminders." },
  { icon: UserPlus, label: "Account Notifications", desc: "Welcome messages, OTPs, and onboarding flows." },
];

const UseCases = () => (
  <section className="py-24 section-gradient" id="usecases">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Real-World <span className="text-gradient-primary">Use Cases</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          See how businesses use Pipebot to automate every touchpoint.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {useCases.map((uc, i) => (
          <motion.div
            key={uc.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <uc.icon className="text-primary" size={22} />
            </div>
            <h4 className="font-display font-bold text-sm mb-2 text-foreground">{uc.label}</h4>
            <p className="text-xs text-muted-foreground">{uc.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
