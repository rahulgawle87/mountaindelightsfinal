import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Plan a trip — Booking inquiry | Mountain Delights" },
      { name: "description", content: "Share your destination, dates, group size and budget. A real person replies within two working days with a draft route and honest pricing." },
      { property: "og:title", content: "Plan an Indian mountain trip — Mountain Delights" },
      { property: "og:description", content: "Tell us about your trip and we'll come back with a draft itinerary." },
    ],
  }),
  component: ContactPage,
});

const DESTINATIONS = [
  "Ladakh",
  "Himachal Pradesh",
  "Uttarakhand",
  "Sikkim",
  "Kerala — Western Ghats",
  "Shimla",
  "Manali",
  "Rajasthan — Aravallis",
  "Not sure yet",
] as const;

const BUDGETS = [
  "Under ₹25,000 / person",
  "₹25,000 – ₹50,000 / person",
  "₹50,000 – ₹1,00,000 / person",
  "₹1,00,000+ / person",
  "Open / not sure",
] as const;

const inquirySchema = z.object({
  full_name: z.string().trim().min(1, "Please share your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(254),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  destination: z.string().min(1, "Pick a destination"),
  start_date: z.string().optional().or(z.literal("")),
  end_date: z.string().optional().or(z.literal("")),
  travelers: z.coerce.number().int().min(1, "At least 1 traveler").max(50),
  budget_range: z.string().min(1, "Pick a budget range"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

type InquiryForm = z.input<typeof inquirySchema>;

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryForm, string>>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());

    const parsed = inquirySchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof InquiryForm, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof InquiryForm;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setSubmitting(true);
    const data = parsed.data;
    const { error } = await supabase.from("booking_inquiries").insert({
      full_name: data.full_name,
      email: data.email,
      phone: data.phone || null,
      destination: data.destination,
      start_date: data.start_date || null,
      end_date: data.end_date || null,
      travelers: data.travelers,
      budget_range: data.budget_range,
      message: data.message || null,
    });
    setSubmitting(false);

    if (error) {
      console.error("Inquiry submit failed", error);
      toast.error("Something went wrong. Please try again or email us directly.");
      return;
    }
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-16 md:pt-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow">Plan a trip</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Tell us about your trip.
          </h1>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            A few details help us draft something realistic — not a sales pitch.
            We reply within two working days with a route, suggested homestays,
            and a fair price.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div>
              <div className="eyebrow mb-1">Write</div>
              <a href="mailto:info@mountaindelights.in" className="text-foreground hover:text-[var(--color-pine)]">info@mountaindelights.in</a>
            </div>
              <div>
              <div className="eyebrow mb-1">WhatsApp</div>
              <div className="space-y-1">
                <a href="https://wa.me/917977958220" className="block text-foreground hover:text-[var(--color-pine)]">+91 79779 58220</a>
              </div>
            </div>
          </div>
        </div>

        <form
          className="md:col-span-7 rounded-lg border border-border bg-card p-6 md:p-8 space-y-5"
          onSubmit={handleSubmit}
          noValidate
        >
          {sent ? (
            <div className="py-10 text-center">
              <div className="font-serif text-2xl">Got it — talk soon.</div>
              <p className="mt-2 text-muted-foreground">
                We'll reply from info@mountaindelights.in within two working days.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" error={errors.full_name}>
                  <input name="full_name" required maxLength={120} className="input" placeholder="Aanya Sharma" />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input name="email" required type="email" maxLength={254} className="input" placeholder="you@example.com" />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone / WhatsApp (optional)" error={errors.phone}>
                  <input name="phone" type="tel" maxLength={40} className="input" placeholder="+91 98XXX XXXXX" />
                </Field>
                <Field label="Destination" error={errors.destination}>
                  <select name="destination" required className="input" defaultValue="">
                    <option value="" disabled>Pick a region</option>
                    {DESTINATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </Field>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <Field label="Start date" error={errors.start_date}>
                  <input name="start_date" type="date" className="input" />
                </Field>
                <Field label="End date" error={errors.end_date}>
                  <input name="end_date" type="date" className="input" />
                </Field>
                <Field label="Travelers" error={errors.travelers}>
                  <input name="travelers" type="number" min={1} max={50} defaultValue={2} required className="input" />
                </Field>
              </div>

              <Field label="Budget range (per person)" error={errors.budget_range}>
                <select name="budget_range" required className="input" defaultValue="">
                  <option value="" disabled>Pick a range</option>
                  {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </Field>

              <Field label="Tell us about the trip (optional)" error={errors.message}>
                <textarea name="message" rows={5} maxLength={2000} className="input" placeholder="Who's travelling, how slow you want to go, what you're hoping to see…" />
              </Field>

              <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? "Sending…" : "Send inquiry →"}
              </button>
              <p className="text-xs text-muted-foreground">We don't share your details. No newsletter spam.</p>
            </>
          )}
        </form>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          font-family: inherit;
        }
        .input:focus { outline: 2px solid var(--color-ring); outline-offset: 1px; }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
