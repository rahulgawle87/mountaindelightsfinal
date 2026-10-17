import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { destinations, blogPosts } from "@/lib/destinations";
import hero from "@/assets/hero-mountains.jpg";

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Mountain Delights",
  description:
    "Honest, unhurried journeys across the Indian Himalaya and Western Ghats — Ladakh, Himachal, Uttarakhand, Sikkim, Kashmir and more.",
  url: "https://www.mountaindelights.in/",
  areaServed: "India",
  knowsAbout: [
    "Ladakh travel",
    "Himachal Pradesh tours",
    "Uttarakhand trekking",
    "Sikkim travel",
    "Western Ghats",
    "Indian Himalaya",
  ],
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
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Mountain Delights — Honest journeys through the Indian mountains",
      },
      {
        name: "description",
        content:
          "Small-group and self-planned trips across Ladakh, Himachal, Uttarakhand, Sikkim and the Western Ghats. Real itineraries, local guides, homestays — no filler.",
      },
      {
        property: "og:title",
        content: "Mountain Delights — Indian mountain travel",
      },
      {
        property: "og:description",
        content:
          "Routes, field notes and trip planning for the Indian Himalaya and Western Ghats.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.mountaindelights.in/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(travelAgencySchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
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
            alt="A Himalayan village at dawn with prayer flags and snow peaks behind"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.03_50/0.55)] via-[oklch(0.18_0.03_50/0.25)] to-background" />
        </div>
        <div className="relative container-prose pt-28 pb-40 md:pt-40 md:pb-56 text-[oklch(0.97_0.02_80)]">
          <span className="eyebrow text-[oklch(0.92_0.04_75)]">Indian Himalaya · Western Ghats</span>
          <h1 className="mt-5 font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] max-w-3xl">
            The mountains are louder than the brochures let on.
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-[oklch(0.94_0.02_80/0.9)]">
            Mountain Delights plans honest, unhurried journeys across the Indian
            mountains — from Ladakh's cold deserts to the tea-soaked Ghats of
            Kerala. Real routes, real guides, no rented sherpa hats.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/destinations" className="btn-primary">Explore destinations →</Link>
            <Link to="/contact" className="btn-ghost border-white/40 text-white hover:bg-white/10">Plan with us</Link>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="container-prose py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <span className="eyebrow">What we do</span>
        </div>
        <div className="md:col-span-8">
          <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
            We build trips around the way the mountains actually work — weather
            windows, festival dates, road openings, the right village to sleep
            in. Then we get out of your way.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-8 text-sm">
            {[
              { k: "11 yrs", v: "Running routes across the Indian mountains" },
              { k: "47 villages", v: "Of homestay partners from Spiti to Sikkim" },
              { k: "Small groups", v: "Six travellers, two guides, no megaphones" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-serif text-3xl text-[var(--color-pine)]">{s.k}</div>
                <div className="mt-2 text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured destinations as an editorial index */}
      <section className="border-y border-border bg-[oklch(0.945_0.02_78)]">
        <div className="container-prose py-20 md:py-28">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <span className="eyebrow">Featured</span>
              <h2 className="mt-3 font-serif text-3xl md:text-5xl">Where we take people</h2>
            </div>
            <Link to="/destinations" className="text-sm underline underline-offset-4 hover:text-[var(--color-pine)]">All destinations →</Link>
          </div>

          <ol className="divide-y divide-border">
            {featured.map((d, i) => (
              <li key={d.slug} className="group">
                <Link
                  to="/destinations"
                  className="grid md:grid-cols-12 gap-6 py-8 items-center"
                >
                  <div className="md:col-span-1 text-sm tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl md:text-3xl group-hover:text-[var(--color-pine)] transition-colors">
                      {d.name}
                    </h3>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {d.region}
                    </div>
                  </div>
                  <div className="md:col-span-5 text-foreground/80">{d.short}</div>
                  <div className="md:col-span-2 hidden md:block overflow-hidden rounded-md">
                    <img
                      src={d.image}
                      alt={d.name}
                      width={1280}
                      height={896}
                      loading="lazy"
                      className="h-24 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ — AEO */}
      <section className="container-prose py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl">Common questions</h2>
          <p className="mt-4 text-foreground/80">
            Quick answers about destinations, group size, and how planning works.
          </p>
        </div>
        <div className="grid gap-6 max-w-3xl">
          {[
            {
              q: "What destinations does Mountain Delights cover?",
              a: "We plan trips across Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Kashmir, Shimla, Manali and the Western Ghats of Kerala. Each region has different seasons, altitudes and travel styles.",
            },
            {
              q: "Are trips small-group or private?",
              a: "We focus on small groups (around six travellers with two guides) and also plan self-paced or private itineraries. No megaphone group tours.",
            },
            {
              q: "How do I plan a trip with you?",
              a: "Tell us roughly where, when, and how slow you want to travel. We reply within two working days with a draft route, recommended homestays, and a fair price. No deposit until you are happy with the plan.",
            },
            {
              q: "When is the best time to visit Ladakh?",
              a: "The main season for Ladakh is June to September. Plan for two days of acclimatisation in Leh (about 3,500 m) before driving over high passes like Khardung La or out to Nubra and Pangong.",
            },
          ].map((item) => (
            <div key={item.q} className="border-t border-border pt-6">
              <h3 className="font-serif text-xl md:text-2xl">{item.q}</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog highlights — field notes */}
      <section className="container-prose py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Field notes</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">From the trail</h2>
          </div>
          <p className="md:col-span-8 text-foreground/80 text-lg max-w-2xl">
            Short, specific dispatches from guides and travellers — what worked,
            what didn't, and what we'd do differently next season.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {blogPosts.map((p) => (
            <article key={p.slug} className="grid grid-cols-12 gap-4 border-t border-border pt-8">
              <div className="col-span-2 font-serif text-3xl text-[var(--color-ochre)]">{p.number}</div>
              <div className="col-span-10">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="uppercase tracking-[0.16em]">{p.tag}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="mt-2 font-serif text-xl md:text-2xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-foreground/75">{p.excerpt}</p>
                <Link to="/blog" className="mt-3 inline-block text-sm underline underline-offset-4 hover:text-[var(--color-pine)]">
                  Read note →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-pine)] text-primary-foreground">
        <div className="container-prose py-20 md:py-28 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="eyebrow text-[oklch(0.85_0.04_80)]">Plan a trip</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">
              Tell us roughly where, when, and how slow you want to travel.
            </h2>
            <p className="mt-4 max-w-xl text-[oklch(0.94_0.02_80/0.85)]">
              We'll come back within two working days with a draft route,
              homestays we'd recommend, and a fair price. No deposit until
              you're happy with the plan.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[oklch(0.97_0.02_80)] text-[var(--color-pine)] px-6 py-3 rounded-full font-medium hover:bg-white"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
