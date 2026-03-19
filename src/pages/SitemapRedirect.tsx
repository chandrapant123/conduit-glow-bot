import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SitemapRedirect = () => {
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const type = searchParams.get("type") || "index";
    const baseUrl = "https://pipebot.ai";
    const edgeFnUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/sitemap?type=${type}&base=${encodeURIComponent(baseUrl)}`;
    window.location.replace(edgeFnUrl);
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to sitemap...</p>
    </div>
  );
};

export default SitemapRedirect;
