CREATE TABLE public.booking_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  destination TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  travelers INTEGER NOT NULL CHECK (travelers >= 1 AND travelers <= 50),
  budget_range TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.booking_inquiries TO anon;
GRANT INSERT ON public.booking_inquiries TO authenticated;
GRANT ALL ON public.booking_inquiries TO service_role;

ALTER TABLE public.booking_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
  ON public.booking_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(full_name) BETWEEN 1 AND 120
    AND length(email) BETWEEN 3 AND 254
    AND length(destination) BETWEEN 1 AND 120
    AND length(budget_range) BETWEEN 1 AND 60
    AND (phone IS NULL OR length(phone) <= 40)
    AND (message IS NULL OR length(message) <= 2000)
  );