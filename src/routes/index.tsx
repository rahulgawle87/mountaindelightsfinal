import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { destinations } from "@/lib/destinations";
import hero from "@/assets/hero-mountains.jpg";

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Mountain Delights",
  description:
    "Honest, unhurried journeys across the Indian Himalaya and Western Ghats — Ladakh, Himachal, Uttarakhand, Sikkim, Kashmir and more.",
  url: "https://www.mountaindelights.in/",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Ladakh travel",
    "Himachal Pradesh tours",
    "Uttarakhand trekking",
    "Sikkim travel",
    "Western Ghats",
    "Indian Himalaya",
    "small group mountain travel India",
    "Spiti Valley",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "mountaindelights05@gmail.com",
    telephone: "+91-79779-58220",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mountain Delights",
  url: "https://www.mountaindelights.in/",
  description:
    "Small-group Indian mountain travel — Ladakh, Himachal, Uttarakhand, Sikkim, Kashmir and Western Ghats.",
  email: "mountaindelights05@gmail.com",
  founder: {
    "@type": "Person",
    name: "Rohan Pawar",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mountain Delights",
  url: "https://www.mountaindelights.in/",
  description:
    "Plan honest, unhurried journeys across the Indian mountains.",
  publisher: {
    "@type": "Organization",
    name: "Mountain Delights",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What destinations does Mountain Delights cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We plan trips across Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Kashmir, Shimla, Manali and the Western Ghats of Kerala. Each region has different seasons, altitudes and travel styles.",
      },
    },
    {
      "@type": "Question",
      name: "Are Mountain Delights trips small-group or private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We focus on small groups (around six travellers with two guides) and also plan self-paced or private itineraries. No megaphone group tours.",
      },
    },
    {
      "@type": "Question",
      name: "How do I plan a trip with Mountain Delights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tell us roughly where, when, and how slow you want to travel. We reply within two working days with a draft route, recommended homestays, and a fair price. No deposit until you are happy with the plan.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to visit Ladakh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main season for Ladakh is June to September. Plan for two days of acclimatisation in Leh (about 3,500 m) before driving over high passes like Khardung La or out to Nubra and Pangong.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Mountain Delights different from package tour operators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build trips around weather windows, festival dates, road openings and the right village to sleep in — then get out of your way. Independent local partners, transparent pricing, and no rented sherpa hats.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Indian Himalaya Tour & Small Group Mountain Travel | Mountain Delights",
      },
      {
        name: "description",
        content:
          "Plan an honest Indian Himalaya tour or small-group mountain travel across Ladakh, Himachal Pradesh, Uttarakhand, Sikkim and Western Ghats. Real routes, local guides, unhurried journeys with Mountain Delights.",
      },
      {
        property: "og:title",
        content:
          "Indian Himalaya Tour & Small Group Mountain Travel | Mountain Delights",
      },
      {
        property: "og:description",
        content:
          "Small-group, unhurried trips across Ladakh, Himachal, Uttarakhand, Sikkim and the Western Ghats. Real routes, local guides, no filler.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.mountaindelights.in/" },
      { property: "og:site_name", content: "Mountain Delights" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Indian Himalaya Tour & Small Group Mountain Travel | Mountain Delights",
      },
      {
        name: "twitter:description",
        content:
          "Honest journeys across Ladakh, Himachal, Uttarakhand, Sikkim and the Western Ghats.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.mountaindelights.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(travelAgencySchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = destinations.slice(0, 6);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="A Himalayan village at dawn with prayer flags and snow peaks behind — Indian mountain travel"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.03_50/0.55)] via-[oklch(0.18_0.03_50/0.25)] to-background" />
        </div>
        <div className="relative container-prose pt-28 pb-40 md:pt-40 md:pb-56 text-[oklch(0.97_0.02_80)]">
          <span className="eyebrow text-[oklch(0.92_0.04_75)]">
            Indian Himalaya · Western Ghats
          </span>
          <h1 className="mt-5 font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] max-w-3xl">
            The mountains are louder than the brochures let on.
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-[oklch(0.94_0.02_80/0.9)]">
            Mountain Delights plans honest, unhurried journeys across the Indian
            mountains — from Ladakh's cold deserts to the tea-soaked Ghats of
            Kerala. Real routes, real guides, no rented sherpa hats.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[oklch(0.92_0.04_75)] px-5 py-2.5 text-sm font-medium text-[oklch(0.18_0.03_50)] transition hover:bg-[oklch(0.95_0.03_75)]"
            >
              Plan a trip
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center justify-center rounded-md border border-[oklch(0.92_0.04_75/0.4)] px-5 py-2.5 text-sm font-medium text-[oklch(0.97_0.02_80)] transition hover:bg-[oklch(0.97_0.02_80/0.1)]"
            >
              Explore destinations
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="container-prose py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
              We build trips around the way the mountains actually work.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-lg text-foreground/85 leading-relaxed">
            <p>
              Weather windows, festival dates, road openings, the right village
              to sleep in. Then we get out of your way. Whether you want a
              Ladakh road trip, Spiti circuit, Kashmir valley stay, or a quiet
              Western Ghats week in Munnar — we plan it without filler.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div>
                <p className="font-serif text-3xl">11 yrs</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Running routes across the Indian mountains
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl">47 villages</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Of homestay partners from Spiti to Sikkim
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl">Small groups</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Six travellers, two guides, no megaphones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Featured</span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                Where we take people
              </h2>
            </div>
            <Link
              to="/destinations"
              className="text-sm font-medium text-primary hover:underline"
            >
              All destinations →
            </Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((d, i) => (
              <Link
                key={d.slug}
                to="/destinations"
                hash={d.slug}
                className="group block overflow-hidden rounded-lg bg-background shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.name} mountain travel — ${d.short}`}
                    width={640}
                    height={480}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-serif text-xl">{d.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d.region}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80 line-clamp-2">
                    {d.short}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — visible for AEO / users */}
      <section className="container-prose py-20 md:py-28">
        <span className="eyebrow">Questions</span>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl max-w-2xl">
          Straight answers about Indian mountain travel with us
        </h2>
        <dl className="mt-10 max-w-2xl space-y-8">
          <div>
            <dt className="font-serif text-xl">What destinations do you cover?</dt>
            <dd className="mt-2 text-foreground/80 leading-relaxed">
              Ladakh, Himachal Pradesh (including Spiti and Kinnaur), Uttarakhand,
              Sikkim, Kashmir, Shimla, Manali, and the Western Ghats of Kerala.
              Each region has its own season and altitude — we match the trip to
              the mountain, not the other way around.
            </dd>
          </div>
          <div>
            <dt className="font-serif text-xl">Small group or private?</dt>
            <dd className="mt-2 text-foreground/80 leading-relaxed">
              Small groups of about six travellers with two guides, or fully
              private / self-paced itineraries. No large coach tours and no
              megaphones.
            </dd>
          </div>
          <div>
            <dt className="font-serif text-xl">How does planning work?</dt>
            <dd className="mt-2 text-foreground/80 leading-relaxed">
              Tell us roughly where, when, and how slow you want to travel. We
              reply within two working days with a draft route, recommended
              homestays, and a fair price. No deposit until you're happy with the
              plan.
            </dd>
          </div>
          <div>
            <dt className="font-serif text-xl">Best time for Ladakh?</dt>
            <dd className="mt-2 text-foreground/80 leading-relaxed">
              June to September. Plan two days of acclimatisation in Leh (~3,500
              m) before high passes such as Khardung La or drives to Nubra and
              Pangong.
            </dd>
          </div>
        </dl>
      </section>

      {/* CTA */}
      <section className="container-prose pb-20 md:pb-28">
        <div className="max-w-2xl">
          <span className="eyebrow">Plan a trip</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
            Tell us roughly where, when, and how slow you want to travel.
          </h2>
          <p className="mt-5 text-lg text-foreground/80">
            We'll come back within two working days with a draft route, homestays
            we'd recommend, and a fair price. No deposit until you're happy with
            the plan.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
