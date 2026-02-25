import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import pipebotLogo from "@/assets/pipebot-logo.png";

const productLinks = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "Bulk WhatsApp Marketing", href: "/bulk-whatsapp" },
  { label: "AI WhatsApp Chatbot", href: "/ai-whatsapp-chatbot" },
  { label: "RCS Messaging", href: "/rcs-messaging" },
  { label: "Bulk SMS", href: "/bulk-sms" },
];

const solutionLinks = [
  { label: "Customer Support Automation", href: "/solutions/customer-support-automation" },
  { label: "Sales Automation", href: "/solutions/sales-automation" },
  { label: "Marketing Automation", href: "/solutions/marketing-automation" },
  { label: "E-commerce Automation", href: "/solutions/ecommerce-automation" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#", children: productLinks },
  { label: "Solutions", href: "/solutions", children: solutionLinks },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-glass-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-2">
          <img src={pipebotLogo} alt="Pipebot Logo" className="h-14 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.children ? (
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {link.label}
                  <ChevronDown size={14} />
                </button>
              ) : (
                <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {link.label}
                </a>
              )}
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="glass-card border border-glass-border rounded-xl p-2 min-w-[240px]">
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a
            href="/contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold btn-glow hover:brightness-110 transition"
          >
            Get Started
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass-card border-t border-glass-border px-6 py-4 space-y-1"
        >
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <a key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground hover:text-primary py-1.5">
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={link.href} onClick={() => setMobileOpen(false)} className="block text-muted-foreground hover:text-primary transition-colors py-2">
                  {link.label}
                </a>
              )}
            </div>
          ))}
          <a href="/contact" className="block bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold text-center btn-glow mt-2">
            Get Started
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
