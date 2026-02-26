import { motion } from "framer-motion";
import { TrendingUp, Headphones, UserPlus, MessageCircle, Clock, BarChart3 } from "lucide-react";

const SalesSupport = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Built for Sales & <span className="text-gradient-primary">Support Teams</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Reduce workload. Increase revenue.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8 glow-blue">
          <TrendingUp className="text-primary mb-4" size={36} />
          <h3 className="font-display font-bold text-xl text-foreground mb-4">Sales Automation</h3>
          <div className="space-y-3">
            {[
              { icon: UserPlus, text: "Capture leads automatically" },
              { icon: MessageCircle, text: "Auto follow-up sequences" },
              { icon: TrendingUp, text: "Funnel nurturing workflows" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="text-primary shrink-0" size={16} />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
          <a href="/solutions/sales-automation" className="inline-block mt-6 text-primary text-sm font-semibold hover:text-neon-teal transition-colors">
            Learn More →
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8 glow-teal">
          <Headphones className="text-accent mb-4" size={36} />
          <h3 className="font-display font-bold text-xl text-foreground mb-4">Customer Support</h3>
          <div className="space-y-3">
            {[
              { icon: Clock, text: "24/7 AI chatbot support" },
              { icon: MessageCircle, text: "Smart routing & ticket management" },
              { icon: BarChart3, text: "Multi-agent shared inbox" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="text-accent shrink-0" size={16} />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
          <a href="/solutions/customer-support-automation" className="inline-block mt-6 text-accent text-sm font-semibold hover:text-neon-teal transition-colors">
            Learn More →
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SalesSupport;
