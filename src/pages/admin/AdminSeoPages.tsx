import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Loader2, Plus, Trash2, Globe, Zap, Search } from "lucide-react";

const SERVICES = [
  "whatsapp-api", "ai-chatbot", "crm-automation", "bulk-sms", "voice-bot",
  "whatsapp-marketing", "chatbot-for-leads", "customer-support-bot", "ai-sales-agent",
  "marketing-automation", "whatsapp-broadcast", "whatsapp-drip-campaign",
  "ai-customer-support", "conversational-ai", "chatbot-builder", "whatsapp-crm",
  "lead-nurturing-automation", "ai-sales-bot", "omnichannel-marketing",
  "notification-api", "otp-api", "verification-api", "pipeline-management",
  "workflow-automation", "marketing-crm",
];

const INDUSTRIES = [
  "fintech", "healthcare", "real-estate", "ecommerce", "education", "travel",
  "insurance", "logistics", "saas", "banking", "nbfc", "crypto", "hospitals",
  "clinics", "diagnostics", "builders", "property-dealers", "d2c", "marketplaces",
  "coaching", "universities", "airlines", "hotels", "tourism", "insurtech",
  "freight", "hr-tech", "recruitment", "legal", "ca-firms",
];

const LOCATIONS = [
  "india", "delhi", "mumbai", "bangalore", "pune", "hyderabad", "chennai",
  "kolkata", "ahmedabad", "noida", "usa", "uk", "canada", "uae", "singapore",
  "australia", "germany", "france", "dubai", "netherlands",
];

const AdminSeoPages = () => {
  const { toast } = useToast();
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [bulkGenerating, setBulkGenerating] = useState(false);
  const [bulkProgress, setBulkProgress] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Single page form
  const [service, setService] = useState(SERVICES[0]);
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [location, setLocation] = useState(LOCATIONS[0]);

  // Bulk form
  const [bulkServices, setBulkServices] = useState<string[]>([]);
  const [bulkIndustries, setBulkIndustries] = useState<string[]>([]);
  const [bulkLocations, setBulkLocations] = useState<string[]>([]);

  useEffect(() => { fetchPages(); }, []);

  const fetchPages = async () => {
    setLoading(true);
    const { data } = await supabase.from("seo_pages").select("*").order("created_at", { ascending: false });
    setPages(data || []);
    setLoading(false);
  };

  const generateSinglePage = async () => {
    setGenerating(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-seo-content`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify({ service, industry, location, mode: "save" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate");
      toast({ title: "Page generated!", description: `Created: ${service}-for-${industry}-${location}` });
      fetchPages();
    } catch (e: any) {
      toast({ title: "Error", description: e.message, variant: "destructive" });
    }
    setGenerating(false);
  };

  const generateBulkPages = async () => {
    if (!bulkServices.length || !bulkIndustries.length || !bulkLocations.length) {
      toast({ title: "Select at least one service, industry, and location", variant: "destructive" });
      return;
    }
    const total = bulkServices.length * bulkIndustries.length * bulkLocations.length;
    setBulkGenerating(true);
    setBulkProgress(`Generating ${total} pages... This may take a while.`);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-seo-bulk`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify({ services: bulkServices, industries: bulkIndustries, locations: bulkLocations }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setBulkProgress(`Done! Created: ${data.created}, Errors: ${data.errors}, Already existed: ${data.already_existing}`);
      toast({ title: "Bulk generation complete!", description: `${data.created} pages created` });
      fetchPages();
    } catch (e: any) {
      toast({ title: "Error", description: e.message, variant: "destructive" });
      setBulkProgress("");
    }
    setBulkGenerating(false);
  };

  const deletePage = async (id: string) => {
    await supabase.from("seo_pages").delete().eq("id", id);
    toast({ title: "Page deleted" });
    fetchPages();
  };

  const togglePublish = async (id: string, current: boolean) => {
    await supabase.from("seo_pages").update({ is_published: !current }).eq("id", id);
    fetchPages();
  };

  const toggleBulkItem = (arr: string[], setArr: (v: string[]) => void, item: string) => {
    setArr(arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item]);
  };

  const filteredPages = pages.filter(p =>
    !searchQuery || p.slug.includes(searchQuery.toLowerCase()) || p.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <Tabs defaultValue="pages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pages">All Pages ({pages.length})</TabsTrigger>
          <TabsTrigger value="generate">Generate Page</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Generator</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search pages..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-9" />
            </div>
          </div>
          {loading ? (
            <div className="flex items-center justify-center py-12"><Loader2 className="h-6 w-6 animate-spin" /></div>
          ) : (
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-medium">Title</th>
                    <th className="text-left p-3 font-medium">Service</th>
                    <th className="text-left p-3 font-medium">Industry</th>
                    <th className="text-left p-3 font-medium">Location</th>
                    <th className="text-left p-3 font-medium">Status</th>
                    <th className="text-right p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPages.map(p => (
                    <tr key={p.id} className="border-t">
                      <td className="p-3">
                        <a href={`/${p.slug}`} target="_blank" rel="noopener" className="text-primary hover:underline font-medium">{p.title || p.slug}</a>
                      </td>
                      <td className="p-3"><Badge variant="outline">{p.service}</Badge></td>
                      <td className="p-3"><Badge variant="outline">{p.industry}</Badge></td>
                      <td className="p-3">{p.location}</td>
                      <td className="p-3">
                        <Badge variant={p.is_published ? "default" : "secondary"} className="cursor-pointer" onClick={() => togglePublish(p.id, p.is_published)}>
                          {p.is_published ? "Published" : "Draft"}
                        </Badge>
                      </td>
                      <td className="p-3 text-right">
                        <Button size="icon" variant="ghost" onClick={() => deletePage(p.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                      </td>
                    </tr>
                  ))}
                  {filteredPages.length === 0 && (
                    <tr><td colSpan={6} className="p-8 text-center text-muted-foreground">No SEO pages yet. Generate your first one!</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>

        <TabsContent value="generate" className="space-y-6">
          <div className="glass-card p-6 rounded-2xl max-w-2xl space-y-4">
            <h3 className="font-display font-bold text-lg flex items-center gap-2"><Plus className="h-5 w-5 text-primary" /> Generate Single SEO Page</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Service</label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{SERVICES.map(s => <SelectItem key={s} value={s}>{s.replace(/-/g, " ")}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Industry</label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{INDUSTRIES.map(i => <SelectItem key={i} value={i}>{i.replace(/-/g, " ")}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Location</label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{LOCATIONS.map(l => <SelectItem key={l} value={l}>{l.replace(/-/g, " ")}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <div className="bg-muted/50 p-3 rounded-xl text-sm">
              <strong>Preview slug:</strong> /{service}-for-{industry}-{location}
            </div>
            <Button onClick={generateSinglePage} disabled={generating} className="w-full">
              {generating ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Generating with AI...</> : <><Zap className="h-4 w-4 mr-2" /> Generate Page with AI</>}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="bulk" className="space-y-6">
          <div className="glass-card p-6 rounded-2xl space-y-6">
            <h3 className="font-display font-bold text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-primary" /> Bulk SEO Page Generator</h3>

            <div>
              <label className="text-sm font-medium mb-2 block">Services ({bulkServices.length} selected)</label>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map(s => (
                  <Badge key={s} variant={bulkServices.includes(s) ? "default" : "outline"} className="cursor-pointer" onClick={() => toggleBulkItem(bulkServices, setBulkServices, s)}>
                    {s.replace(/-/g, " ")}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline" onClick={() => setBulkServices([...SERVICES])}>Select All</Button>
                <Button size="sm" variant="outline" onClick={() => setBulkServices([])}>Clear</Button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Industries ({bulkIndustries.length} selected)</label>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map(i => (
                  <Badge key={i} variant={bulkIndustries.includes(i) ? "default" : "outline"} className="cursor-pointer" onClick={() => toggleBulkItem(bulkIndustries, setBulkIndustries, i)}>
                    {i.replace(/-/g, " ")}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline" onClick={() => setBulkIndustries([...INDUSTRIES])}>Select All</Button>
                <Button size="sm" variant="outline" onClick={() => setBulkIndustries([])}>Clear</Button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Locations ({bulkLocations.length} selected)</label>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map(l => (
                  <Badge key={l} variant={bulkLocations.includes(l) ? "default" : "outline"} className="cursor-pointer" onClick={() => toggleBulkItem(bulkLocations, setBulkLocations, l)}>
                    {l.replace(/-/g, " ")}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline" onClick={() => setBulkLocations([...LOCATIONS])}>Select All</Button>
                <Button size="sm" variant="outline" onClick={() => setBulkLocations([])}>Clear</Button>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-xl">
              <p className="font-medium">Total pages to generate: <span className="text-primary text-lg">{bulkServices.length * bulkIndustries.length * bulkLocations.length}</span></p>
              <p className="text-xs text-muted-foreground mt-1">Each page uses AI to generate unique content. Large batches may take several minutes.</p>
            </div>

            {bulkProgress && <div className="bg-primary/10 text-primary p-3 rounded-xl text-sm font-medium">{bulkProgress}</div>}

            <Button onClick={generateBulkPages} disabled={bulkGenerating} className="w-full" size="lg">
              {bulkGenerating ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Generating...</> : <><Zap className="h-4 w-4 mr-2" /> Generate {bulkServices.length * bulkIndustries.length * bulkLocations.length} Pages</>}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default AdminSeoPages;
