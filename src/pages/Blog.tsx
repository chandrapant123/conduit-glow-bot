import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  published_at: string | null;
  tags: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, cover_image, published_at, tags")
        .eq("is_published", true)
        .order("published_at", { ascending: false });
      setPosts(data || []);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Pipebot <span className="text-gradient-primary">Blog</span>
            </h1>
            <p className="text-muted-foreground">Insights, tutorials, and updates on WhatsApp marketing automation.</p>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card rounded-2xl p-6 animate-pulse">
                  <div className="h-40 bg-muted rounded-xl mb-4" />
                  <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No blog posts yet. Check back soon!</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {posts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
                  {post.cover_image && (
                    <img src={post.cover_image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
                  )}
                  <div className="p-6">
                    {post.tags?.length > 0 && (
                      <div className="flex gap-2 mb-2 flex-wrap">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                    {post.excerpt && <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      {post.published_at && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {format(new Date(post.published_at), "MMM d, yyyy")}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-primary">
                        Read more <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
