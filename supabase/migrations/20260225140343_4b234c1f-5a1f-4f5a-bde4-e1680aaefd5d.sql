
-- Create enquiries table for contact/demo form submissions
CREATE TABLE public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  use_case TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (public form)
CREATE POLICY "Anyone can submit enquiry"
ON public.enquiries
FOR INSERT
WITH CHECK (true);

-- Only admins can read
CREATE POLICY "Admin can read enquiries"
ON public.enquiries
FOR SELECT
USING (public.is_admin());

-- Only admins can update
CREATE POLICY "Admin can update enquiries"
ON public.enquiries
FOR UPDATE
USING (public.is_admin());

-- Only admins can delete
CREATE POLICY "Admin can delete enquiries"
ON public.enquiries
FOR DELETE
USING (public.is_admin());

-- Trigger for updated_at
CREATE TRIGGER update_enquiries_updated_at
BEFORE UPDATE ON public.enquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
