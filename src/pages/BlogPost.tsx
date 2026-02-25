import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Calendar } from "lucide-react";
import { format } from "date-fns";

interface Post {
  id: string;
  title: string;
  content: string | null;
  cover_image: string | null;
  published_at: string | null;
  tags: string[];
  meta_title: string | null;
  meta_description: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();
      setPost(data);
      setLoading(false);
    };
    if (slug) fetch();
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = post.meta_title || post.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && post.meta_description) metaDesc.setAttribute("content", post.meta_description);
    }
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-20 container mx-auto px-6 max-w-3xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-64 bg-muted rounded-xl" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-2/3" />
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-20 container mx-auto px-6 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="container mx-auto px-6 max-w-3xl">
          <Link to="/blog" className="flex items-center gap-1 text-primary hover:underline text-sm mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          {post.tags?.length > 0 && (
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">{post.title}</h1>
          {post.published_at && (
            <p className="text-sm text-muted-foreground flex items-center gap-1 mb-6">
              <Calendar className="h-4 w-4" /> {format(new Date(post.published_at), "MMMM d, yyyy")}
            </p>
          )}
          {post.cover_image && <img src={post.cover_image} alt={post.title} className="w-full rounded-2xl mb-8 max-h-96 object-cover" />}
          <div className="prose prose-invert max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: post.content || "" }} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
