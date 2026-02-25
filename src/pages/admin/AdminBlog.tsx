import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus, Save, Trash2, Eye, EyeOff } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  is_published: boolean;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  tags: string[];
}

const AdminBlog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selected, setSelected] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchPosts = async () => {
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    setPosts(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const addPost = async () => {
    const slug = `post-${Date.now()}`;
    const { data, error } = await supabase.from("blog_posts").insert({ title: "New Post", slug }).select().single();
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { setPosts([data, ...posts]); setSelected(data); }
  };

  const savePost = async () => {
    if (!selected) return;
    const { error } = await supabase.from("blog_posts").update({
      title: selected.title,
      slug: selected.slug,
      excerpt: selected.excerpt,
      content: selected.content,
      cover_image: selected.cover_image,
      is_published: selected.is_published,
      published_at: selected.is_published && !selected.published_at ? new Date().toISOString() : selected.published_at,
      meta_title: selected.meta_title,
      meta_description: selected.meta_description,
      meta_keywords: selected.meta_keywords,
      tags: selected.tags,
    }).eq("id", selected.id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: "Post saved!" }); fetchPosts(); }
  };

  const deletePost = async (id: string) => {
    await supabase.from("blog_posts").delete().eq("id", id);
    setPosts(posts.filter((p) => p.id !== id));
    if (selected?.id === id) setSelected(null);
    toast({ title: "Post deleted" });
  };

  const togglePublish = () => {
    if (!selected) return;
    setSelected({
      ...selected,
      is_published: !selected.is_published,
      published_at: !selected.is_published ? new Date().toISOString() : selected.published_at,
    });
  };

  if (loading) return <AdminLayout><p className="text-muted-foreground">Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <div className="grid lg:grid-cols-[280px_1fr] gap-6">
        <div className="glass-card rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-foreground text-sm">Blog Posts</h3>
            <Button size="sm" variant="ghost" onClick={addPost}><Plus className="h-4 w-4" /></Button>
          </div>
          <ul className="space-y-1">
            {posts.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => setSelected(p)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                    selected?.id === p.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {p.is_published ? <Eye className="h-3 w-3 text-accent" /> : <EyeOff className="h-3 w-3" />}
                    {p.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {selected ? (
          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground">Title</label>
                  <Input value={selected.title} onChange={(e) => setSelected({ ...selected, title: e.target.value })} className="bg-background/50 border-glass-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Slug</label>
                  <Input value={selected.slug} onChange={(e) => setSelected({ ...selected, slug: e.target.value })} className="bg-background/50 border-glass-border" />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Excerpt</label>
                <Textarea value={selected.excerpt || ""} onChange={(e) => setSelected({ ...selected, excerpt: e.target.value })} className="bg-background/50 border-glass-border" rows={2} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Content (HTML)</label>
                <Textarea value={selected.content || ""} onChange={(e) => setSelected({ ...selected, content: e.target.value })} className="bg-background/50 border-glass-border font-mono text-xs" rows={12} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Cover Image URL</label>
                <Input value={selected.cover_image || ""} onChange={(e) => setSelected({ ...selected, cover_image: e.target.value })} className="bg-background/50 border-glass-border" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Tags (comma-separated)</label>
                <Input value={(selected.tags || []).join(", ")} onChange={(e) => setSelected({ ...selected, tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })} className="bg-background/50 border-glass-border" />
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h4 className="font-display font-bold text-foreground text-sm">SEO Settings</h4>
              <div>
                <label className="text-sm text-muted-foreground">Meta Title</label>
                <Input value={selected.meta_title || ""} onChange={(e) => setSelected({ ...selected, meta_title: e.target.value })} className="bg-background/50 border-glass-border" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Meta Description</label>
                <Textarea value={selected.meta_description || ""} onChange={(e) => setSelected({ ...selected, meta_description: e.target.value })} className="bg-background/50 border-glass-border" rows={2} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Meta Keywords</label>
                <Input value={selected.meta_keywords || ""} onChange={(e) => setSelected({ ...selected, meta_keywords: e.target.value })} className="bg-background/50 border-glass-border" />
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={savePost} className="btn-glow"><Save className="h-4 w-4 mr-1" /> Save</Button>
              <Button variant="outline" onClick={togglePublish}>
                {selected.is_published ? <><EyeOff className="h-4 w-4 mr-1" /> Unpublish</> : <><Eye className="h-4 w-4 mr-1" /> Publish</>}
              </Button>
              <Button variant="destructive" onClick={() => deletePost(selected.id)}><Trash2 className="h-4 w-4 mr-1" /> Delete</Button>
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center text-muted-foreground">
            Select a post to edit, or create a new one.
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminBlog;
