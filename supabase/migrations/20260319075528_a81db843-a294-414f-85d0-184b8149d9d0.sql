
-- SEO Pages table
CREATE TABLE public.seo_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  service TEXT NOT NULL,
  industry TEXT NOT NULL,
  location TEXT NOT NULL DEFAULT 'india',
  content TEXT,
  faqs JSONB DEFAULT '[]'::jsonb,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- SEO Tags table
CREATE TABLE public.seo_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Page-Tag relation
CREATE TABLE public.seo_page_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES public.seo_pages(id) ON DELETE CASCADE NOT NULL,
  tag_id UUID REFERENCES public.seo_tags(id) ON DELETE CASCADE NOT NULL,
  UNIQUE(page_id, tag_id)
);

-- Enable RLS
ALTER TABLE public.seo_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_page_tags ENABLE ROW LEVEL SECURITY;

-- seo_pages policies
CREATE POLICY "Anyone can read published seo_pages" ON public.seo_pages FOR SELECT TO public USING (is_published = true);
CREATE POLICY "Admin can manage seo_pages" ON public.seo_pages FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- seo_tags policies
CREATE POLICY "Anyone can read seo_tags" ON public.seo_tags FOR SELECT TO public USING (true);
CREATE POLICY "Admin can manage seo_tags" ON public.seo_tags FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- seo_page_tags policies
CREATE POLICY "Anyone can read seo_page_tags" ON public.seo_page_tags FOR SELECT TO public USING (true);
CREATE POLICY "Admin can manage seo_page_tags" ON public.seo_page_tags FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Updated at trigger
CREATE TRIGGER update_seo_pages_updated_at BEFORE UPDATE ON public.seo_pages FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
