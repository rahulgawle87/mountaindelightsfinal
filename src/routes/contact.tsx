import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Plan Your Indian Mountain Trip",
  description:
    "Request a free route proposal for Ladakh, Himachal, Uttarakhand, Sikkim, Kashmir or Western Ghats travel.",
  url: "https://www.mountaindelights.in/contact",
  mainEntity: {
    "@type": "TravelAgency",
    name: "Mountain Delights",
    email: "mountaindelights05@gmail.com",
    telephone: "+91-79779-58220",
  },
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title:
          "Plan Your Indian Mountain Trip – Free Route Proposal | Mountain Delights",
      },
      {
        name: "description",
        content:
          "Tell us where and when you want to go in the Indian Himalaya or Western Ghats. We'll reply within 2 working days with a realistic route, homestays, and transparent pricing. No pressure.",
      },
      {
        property: "og:title",
        content: "Plan Your Indian Mountain Trip – Free Route Proposal",
      },
      {
        property: "og:description",
        content:
          "Tell us about your trip. We'll reply in 2 working days with a draft route, homestays and fair price. No deposit until you're happy.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.mountaindelights.in/contact",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.mountaindelights.in/contact",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(contactSchema),
      },
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
  "Kashmir",
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
  destination: z.string().min(1, "Select a destination"),
  travel_dates: z.string().trim().max(120).optional().or(z.literal("")),
  group_size: z.string().trim().max(40).optional().or(z.literal("")),
  budget: z.string().optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

type InquiryForm = z.infer<typeof inquirySchema>;

function ContactPage() {
  const [form, setForm] = useState<InquiryForm>({
    full_name: "",
    email: "",
    phone: "",
    destination: "",
    travel_dates: "",
    group_size: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof InquiryForm, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof InquiryForm>(key: K, value: InquiryForm[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof InquiryForm, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof InquiryForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from("inquiries").insert({
        full_name: parsed.data.full_name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        destination: parsed.data.destination,
        travel_dates: parsed.data.travel_dates || null,
        group_size: parsed.data.group_size || null,
        budget: parsed.data.budget || null,
        message: parsed.data.message || null,
      });
      if (error) throw error;
      setSubmitted(true);
      toast.success("Inquiry sent. We'll reply within two working days.");
    } catch (err) {
      console.error(err);
      toast.error(
        "Something went wrong. Please try WhatsApp or email instead.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <SiteLayout>
        <section className="container-prose py-24 md:py-32 text-center">
          <h1 className="font-serif text-3xl md:text-5xl">Thank you.</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-md mx-auto">
            We've received your inquiry. A real person will reply within two
            working days with a draft route and pricing.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Back home
          </a>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-12 md:pt-28">
        <span className="eyebrow">Plan a trip</span>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl max-w-2xl leading-tight">
          Tell us about your trip.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-foreground/80">
          A few details help us draft something realistic — not a sales pitch.
          We reply within two working days with a route, suggested homestays,
          and a fair price for your Indian mountain journey.
        </p>
        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <div>
            <p className="font-medium text-muted-foreground">Write</p>
            <a
              href="mailto:mountaindelights05@gmail.com"
              className="text-primary hover:underline"
            >
              mountaindelights05@gmail.com
            </a>
          </div>
          <div>
            <p className="font-medium text-muted-foreground">WhatsApp</p>
            <a
              href="https://wa.me/917977958220"
              className="text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              +91 79779 58220
            </a>
          </div>
        </div>
      </section>

      <section className="container-prose pb-24">
        <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Full name *
            </label>
            <input
              type="text"
              value={form.full_name}
              onChange={(e) => update("full_name", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Your name"
            />
            {errors.full_name && (
              <p className="mt-1 text-xs text-destructive">{errors.full_name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="+91 ..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Destination *
            </label>
            <select
              value={form.destination}
              onChange={(e) => update("destination", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select...</option>
              {DESTINATIONS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            {errors.destination && (
              <p className="mt-1 text-xs text-destructive">
                {errors.destination}
              </p>
            )}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Travel dates
              </label>
              <input
                type="text"
                value={form.travel_dates}
                onChange={(e) => update("travel_dates", e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="e.g. mid-September 2026"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Group size
              </label>
              <input
                type="text"
                value={form.group_size}
                onChange={(e) => update("group_size", e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="e.g. 2 adults"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Budget</label>
            <select
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select...</option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Anything else?
            </label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Pace, interests, must-sees, constraints..."
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send inquiry →"}
          </button>
          <p className="text-xs text-muted-foreground">
            We don't share your details. No newsletter spam.
          </p>
        </form>
      </section>
    </SiteLayout>
  );
}
