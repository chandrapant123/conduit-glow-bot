import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

interface Setting {
  id: string;
  setting_key: string;
  value: any;
}

const defaultSettings = [
  { key: "header", label: "Header / Navigation", default: { logo_text: "Pipebot", nav_links: [{ label: "Features", href: "/features" }, { label: "Pricing", href: "/pricing" }, { label: "API", href: "/api-docs" }, { label: "Enterprise", href: "/enterprise" }, { label: "Blog", href: "/blog" }, { label: "FAQ", href: "/faq" }], cta_text: "Start Free Trial", cta_href: "/demo" } },
  { key: "footer", label: "Footer", default: { brand_text: "Pipebot", tagline: "The complete WhatsApp marketing & automation platform.", email: "info@pipebot.ai", phone: "+91 95999 23365", sections: [{ title: "Product", links: ["Features", "Pricing", "White-Label", "Integrations"] }, { title: "Developers", links: ["Documentation", "API Reference", "Modules", "Changelog"] }, { title: "Company", links: ["About", "Contact", "Privacy", "Terms"] }] } },
  { key: "seo_global", label: "Global SEO", default: { default_title: "Pipebot - WhatsApp Marketing Automation Platform", default_description: "The complete WhatsApp marketing and automation platform for agencies, SaaS, and enterprises. AI-powered, multi-tenant, enterprise-ready.", default_keywords: "WhatsApp marketing, WhatsApp automation, WhatsApp CRM, AI chatbot, multi-tenant SaaS" } },
];

const AdminSettings = () => {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("site_settings").select("*");
      
      // Initialize missing settings
      const existing = data || [];
      for (const def of defaultSettings) {
        if (!existing.find((s) => s.setting_key === def.key)) {
          const { data: inserted } = await supabase.from("site_settings").insert({ setting_key: def.key, value: def.default }).select().single();
          if (inserted) existing.push(inserted);
        }
      }
      setSettings(existing);
      setLoading(false);
    };
    fetch();
  }, []);

  const saveSetting = async (setting: Setting) => {
    const { error } = await supabase.from("site_settings").update({ value: setting.value }).eq("id", setting.id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else toast({ title: "Setting saved!" });
  };

  const updateValue = (id: string, newValue: string) => {
    try {
      const parsed = JSON.parse(newValue);
      setSettings(settings.map((s) => s.id === id ? { ...s, value: parsed } : s));
    } catch {
      // Invalid JSON, don't update
    }
  };

  if (loading) return <AdminLayout><p className="text-muted-foreground">Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-3xl">
        {defaultSettings.map((def) => {
          const setting = settings.find((s) => s.setting_key === def.key);
          if (!setting) return null;
          return (
            <div key={def.key} className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-bold text-foreground">{def.label}</h3>
              <Textarea
                value={JSON.stringify(setting.value, null, 2)}
                onChange={(e) => updateValue(setting.id, e.target.value)}
                className="bg-background/50 border-glass-border font-mono text-xs"
                rows={12}
              />
              <Button onClick={() => saveSetting(setting)} className="btn-glow">
                <Save className="h-4 w-4 mr-1" /> Save {def.label}
              </Button>
            </div>
          );
        })}
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
