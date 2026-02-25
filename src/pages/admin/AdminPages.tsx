import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Save, Trash2 } from "lucide-react";

interface Page {
  id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  is_published: boolean;
}

interface Section {
  id: string;
  page_id: string;
  section_key: string;
  title: string | null;
  subtitle: string | null;
  content: any;
  sort_order: number;
  is_visible: boolean;
}

const AdminPages = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchPages = async () => {
    const { data } = await supabase.from("pages").select("*").order("title");
    setPages(data || []);
    setLoading(false);
  };

  const fetchSections = async (pageId: string) => {
    const { data } = await supabase.from("page_sections").select("*").eq("page_id", pageId).order("sort_order");
    setSections(data || []);
  };

  useEffect(() => { fetchPages(); }, []);

  useEffect(() => {
    if (selectedPage) fetchSections(selectedPage.id);
  }, [selectedPage]);

  const savePage = async (page: Page) => {
    const { error } = await supabase.from("pages").update({
      title: page.title,
      meta_title: page.meta_title,
      meta_description: page.meta_description,
      meta_keywords: page.meta_keywords,
      is_published: page.is_published,
    }).eq("id", page.id);
    if (error) toast({ title: "Error saving", description: error.message, variant: "destructive" });
    else toast({ title: "Page saved!" });
  };

  const addPage = async () => {
    const slug = `new-page-${Date.now()}`;
    const { data, error } = await supabase.from("pages").insert({ slug, title: "New Page" }).select().single();
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { setPages([...pages, data]); setSelectedPage(data); }
  };

  const deletePage = async (id: string) => {
    await supabase.from("pages").delete().eq("id", id);
    setPages(pages.filter((p) => p.id !== id));
    if (selectedPage?.id === id) setSelectedPage(null);
    toast({ title: "Page deleted" });
  };

  const saveSection = async (section: Section) => {
    const { error } = await supabase.from("page_sections").update({
      title: section.title,
      subtitle: section.subtitle,
      content: section.content,
      sort_order: section.sort_order,
      is_visible: section.is_visible,
    }).eq("id", section.id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else toast({ title: "Section saved!" });
  };

  const addSection = async () => {
    if (!selectedPage) return;
    const key = `section-${Date.now()}`;
    const { data, error } = await supabase.from("page_sections").insert({
      page_id: selectedPage.id,
      section_key: key,
      title: "New Section",
      sort_order: sections.length,
    }).select().single();
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else setSections([...sections, data]);
  };

  const deleteSection = async (id: string) => {
    await supabase.from("page_sections").delete().eq("id", id);
    setSections(sections.filter((s) => s.id !== id));
  };

  if (loading) return <AdminLayout><p className="text-muted-foreground">Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <div className="grid lg:grid-cols-[280px_1fr] gap-6">
        {/* Page list */}
        <div className="glass-card rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-foreground text-sm">Pages</h3>
            <Button size="sm" variant="ghost" onClick={addPage}><Plus className="h-4 w-4" /></Button>
          </div>
          <ul className="space-y-1">
            {pages.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => setSelectedPage(p)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                    selectedPage?.id === p.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {p.title}
                  <span className="block text-xs opacity-60">/{p.slug}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Editor */}
        {selectedPage ? (
          <div className="space-y-6">
            <Tabs defaultValue="seo">
              <TabsList className="bg-muted">
                <TabsTrigger value="seo">SEO & Meta</TabsTrigger>
                <TabsTrigger value="sections">Sections</TabsTrigger>
              </TabsList>

              <TabsContent value="seo" className="glass-card rounded-2xl p-6 mt-4 space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">Page Title</label>
                  <Input value={selectedPage.title} onChange={(e) => setSelectedPage({ ...selectedPage, title: e.target.value })} className="bg-background/50 border-glass-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Slug</label>
                  <Input value={selectedPage.slug} disabled className="bg-background/50 border-glass-border opacity-60" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Meta Title (SEO)</label>
                  <Input value={selectedPage.meta_title || ""} onChange={(e) => setSelectedPage({ ...selectedPage, meta_title: e.target.value })} placeholder="Under 60 chars" className="bg-background/50 border-glass-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Meta Description (SEO)</label>
                  <Textarea value={selectedPage.meta_description || ""} onChange={(e) => setSelectedPage({ ...selectedPage, meta_description: e.target.value })} placeholder="Under 160 chars" className="bg-background/50 border-glass-border" rows={2} />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Meta Keywords</label>
                  <Input value={selectedPage.meta_keywords || ""} onChange={(e) => setSelectedPage({ ...selectedPage, meta_keywords: e.target.value })} placeholder="Comma-separated" className="bg-background/50 border-glass-border" />
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" checked={selectedPage.is_published} onChange={(e) => setSelectedPage({ ...selectedPage, is_published: e.target.checked })} />
                    Published
                  </label>
                  <Button onClick={() => savePage(selectedPage)} className="btn-glow"><Save className="h-4 w-4 mr-1" /> Save Page</Button>
                  <Button variant="destructive" size="sm" onClick={() => deletePage(selectedPage.id)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </TabsContent>

              <TabsContent value="sections" className="mt-4 space-y-4">
                {sections.map((s, i) => (
                  <div key={s.id} className="glass-card rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-mono">{s.section_key}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" onClick={() => saveSection(s)}><Save className="h-3 w-3" /></Button>
                        <Button size="sm" variant="ghost" onClick={() => deleteSection(s.id)}><Trash2 className="h-3 w-3 text-destructive" /></Button>
                      </div>
                    </div>
                    <Input value={s.title || ""} onChange={(e) => {
                      const updated = [...sections];
                      updated[i] = { ...s, title: e.target.value };
                      setSections(updated);
                    }} placeholder="Section title" className="bg-background/50 border-glass-border" />
                    <Textarea value={s.subtitle || ""} onChange={(e) => {
                      const updated = [...sections];
                      updated[i] = { ...s, subtitle: e.target.value };
                      setSections(updated);
                    }} placeholder="Section subtitle/description" className="bg-background/50 border-glass-border" rows={2} />
                    <Textarea value={JSON.stringify(s.content, null, 2)} onChange={(e) => {
                      try {
                        const parsed = JSON.parse(e.target.value);
                        const updated = [...sections];
                        updated[i] = { ...s, content: parsed };
                        setSections(updated);
                      } catch {}
                    }} placeholder="Content (JSON)" className="bg-background/50 border-glass-border font-mono text-xs" rows={4} />
                    <div className="flex gap-4">
                      <Input type="number" value={s.sort_order} onChange={(e) => {
                        const updated = [...sections];
                        updated[i] = { ...s, sort_order: parseInt(e.target.value) || 0 };
                        setSections(updated);
                      }} className="bg-background/50 border-glass-border w-24" placeholder="Order" />
                      <label className="flex items-center gap-2 text-sm text-muted-foreground">
                        <input type="checkbox" checked={s.is_visible} onChange={(e) => {
                          const updated = [...sections];
                          updated[i] = { ...s, is_visible: e.target.checked };
                          setSections(updated);
                        }} />
                        Visible
                      </label>
                    </div>
                  </div>
                ))}
                <Button variant="outline" onClick={addSection}><Plus className="h-4 w-4 mr-1" /> Add Section</Button>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center text-muted-foreground">
            Select a page to edit, or create a new one.
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminPages;
