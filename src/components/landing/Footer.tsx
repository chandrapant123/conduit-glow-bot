import pipebotLogo from "@/assets/pipebot-logo.png";

const footerLinks = {
  Products: [
    { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
    { label: "Bulk WhatsApp", href: "/bulk-whatsapp" },
    { label: "AI Chatbot", href: "/ai-whatsapp-chatbot" },
    { label: "RCS Messaging", href: "/rcs-messaging" },
    { label: "Bulk SMS", href: "/bulk-sms" },
  ],
  Solutions: [
    { label: "Customer Support", href: "/solutions/customer-support-automation" },
    { label: "Sales Automation", href: "/solutions/sales-automation" },
    { label: "Marketing Automation", href: "/solutions/marketing-automation" },
    { label: "AI Agents", href: "/solutions/ai-agents" },
    { label: "Enterprise AI", href: "/enterprise-ai-agents" },
  ],
  Industries: [
    { label: "E-commerce", href: "/whatsapp-automation-for-ecommerce" },
    { label: "Real Estate", href: "/whatsapp-ai-automation-for-real-estate" },
    { label: "Healthcare", href: "/whatsapp-automation-for-healthcare" },
    { label: "Fintech", href: "/whatsapp-automation-for-fintech" },
    { label: "EdTech", href: "/whatsapp-ai-for-edtech" },
    { label: "D2C Brands", href: "/whatsapp-automation-for-d2c" },
    { label: "Insurance", href: "/whatsapp-automation-for-insurance" },
    { label: "Travel", href: "/whatsapp-ai-for-travel-agencies" },
    { label: "B2B", href: "/whatsapp-automation-for-b2b" },
    { label: "Restaurants", href: "/whatsapp-automation-for-restaurants" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
  "SEO Pages": [
    { label: "WhatsApp API for Fintech", href: "/whatsapp-api-for-fintech-india" },
    { label: "AI Chatbot for Healthcare", href: "/ai-chatbot-for-healthcare-india" },
    { label: "CRM Automation for Real Estate", href: "/crm-automation-for-real-estate-india" },
    { label: "Bulk SMS for Ecommerce", href: "/bulk-sms-for-ecommerce-india" },
    { label: "WhatsApp Marketing for EdTech", href: "/whatsapp-marketing-for-education-india" },
    { label: "AI Sales Agent for Insurance", href: "/ai-sales-agent-for-insurance-india" },
  ],
  Account: [
    { label: "Login", href: "/login" },
    { label: "Sign Up", href: "/signup" },
  ],
};

const Footer = () => (
  <footer className="bg-gradient-to-r from-[hsl(195,80%,25%)] to-[hsl(180,60%,30%)] py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-6 gap-10 mb-12">
        <div>
          <a href="/" className="flex items-center gap-2 mb-4">
            <img src={pipebotLogo} alt="Pipebot" className="h-[120px] w-auto" />
          </a>
          <p className="text-sm text-white/70 leading-relaxed">
            AI-powered WhatsApp & messaging automation platform for sales, support & marketing.
          </p>
          <p className="text-sm mt-3">
            <a href="mailto:info@pipebot.ai" className="text-white/90 hover:text-white transition-colors">info@pipebot.ai</a>
            <br />
            <a href="tel:+919599923365" className="text-white/90 hover:text-white transition-colors">+91 95999 23365</a>
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display font-bold text-sm text-white mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="h-px bg-white/20 mb-6" />
      <p className="text-center text-xs text-white/50">
        © {new Date().getFullYear()} Pipebot. All rights reserved. Powered by AI.
      </p>
    </div>
  </footer>
);

export default Footer;
