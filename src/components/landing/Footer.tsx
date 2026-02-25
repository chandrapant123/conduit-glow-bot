const footerLinks = {
  Product: ["Features", "Pricing", "White-Label", "Integrations"],
  Developers: ["Documentation", "API Reference", "Modules", "Changelog"],
  Company: ["About", "Contact", "Privacy", "Terms"],
};

const Footer = () => (
  <footer className="border-t border-glass-border py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-display font-bold">P</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Pipe<span className="text-primary">bot</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The complete WhatsApp marketing & automation platform for agencies, SaaS, and enterprises.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            <a href="mailto:info@pipebot.ai" className="text-primary hover:underline">info@pipebot.ai</a>
            <br />
            <a href="tel:+919599923365" className="text-primary hover:underline">+91 95999 23365</a>
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display font-bold text-sm text-foreground mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="neon-line mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pipebot. All rights reserved. Powered by AI.
      </p>
    </div>
  </footer>
);

export default Footer;
