import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { destinations } from "@/lib/destinations";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best time to visit Ladakh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main season for Ladakh is June to September. Plan for two days of acclimatisation in Leh (about 3,500 m) before driving over high passes like Khardung La or out to Nubra and Pangong.",
      },
    },
    {
      "@type": "Question",
      name: "How many days do I need for a Himachal Pradesh tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A comfortable introductory tour covering Shimla and Manali needs about 6–7 days. Full Spiti circuits or Kinnaur extensions typically take 10–12 days depending on road conditions and pace.",
      },
    },
    {
      "@type": "Question",
      name: "Does Mountain Delights offer small-group mountain travel in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We focus on small groups of around six travellers with two guides, plus private or self-paced itineraries across the Indian Himalaya and Western Ghats. No large coach tours.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best season for the Western Ghats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "October to March is ideal for Kerala’s Western Ghats — cooler weather, clear views of tea estates around Munnar, and better access to wildlife areas like Periyar.",
      },
    },
  ],
};

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      {
        title:
          "Indian Mountain Destinations | Ladakh, Himachal, Uttarakhand, Sikkim | Mountain Delights",
      },
      {
        name: "description",
        content:
          "Detailed guides to Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Kerala Western Ghats, Shimla, Manali and Kashmir — altitudes, best seasons, and what each region is known for. Plan honest mountain trips with Mountain Delights.",
      },
      {
        property: "og:title",
        content: "Indian Mountain Destinations | Ladakh, Himachal, Uttarakhand, Sikkim",
      },
      {
        property: "og:description",
        content:
          "Field-checked notes on eight mountain regions across India — when to go, how high you'll be, and what people actually travel there for.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-16 md:pt-28 md:pb-20">
        <span className="eyebrow">Destinations</span>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl max-w-3xl leading-tight">
          Eight mountain regions, each on its own clock.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80">
          The Indian mountains aren't one trip. The Trans-Himalaya is a cold
          desert; the Western Ghats are a rainforest. Below is what we know
          about each region — when to go, how high you'll be, and what people
          actually travel there for. Whether you're planning an Indian Himalaya
          tour, a Ladakh trip, or a slower Western Ghats journey, these notes
          help you match the right season and pace.
        </p>
      </section>

      <section className="container-prose pb-24 space-y-20">
        {destinations.map((d, i) => (
          <article key={d.slug} className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
            <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={d.image}
                  alt={`${d.name} — ${d.region} mountain travel with Mountain Delights`}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="w-full h-72 md:h-[28rem] object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {d.region}
              </div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">{d.name}</h2>
              <p className="mt-4 text-foreground/85 leading-relaxed">{d.long}</p>

              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm border-t border-border pt-4">
                <div>
                  <dt className="text-muted-foreground">Altitude</dt>
                  <dd className="mt-1 font-medium">{d.altitude}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Best season</dt>
                  <dd className="mt-1 font-medium">{d.bestSeason}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-2">
                {d.knownFor.map((k) => (
                  <span key={k} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {k}
                  </span>
                ))}
              </div>

              <Link to="/contact" className="mt-7 inline-block text-sm underline underline-offset-4 hover:text-[var(--color-pine)]">
                Plan a {d.name} trip →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* FAQ for AEO */}
      <section className="container-prose pb-24">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Common questions about Indian mountain travel</h2>
        </div>
        <div className="grid gap-6 max-w-3xl">
          {[
            {
              q: "What is the best time to visit Ladakh?",
              a: "The main season for Ladakh is June to September. Plan for two days of acclimatisation in Leh (about 3,500 m) before driving over high passes like Khardung La or out to Nubra and Pangong.",
            },
            {
              q: "How many days do I need for a Himachal Pradesh tour?",
              a: "A comfortable introductory tour covering Shimla and Manali needs about 6–7 days. Full Spiti circuits or Kinnaur extensions typically take 10–12 days depending on road conditions and pace.",
            },
            {
              q: "Does Mountain Delights offer small-group mountain travel in India?",
              a: "Yes. We focus on small groups of around six travellers with two guides, plus private or self-paced itineraries across the Indian Himalaya and Western Ghats. No large coach tours.",
            },
            {
              q: "When is the best season for the Western Ghats?",
              a: "October to March is ideal for Kerala’s Western Ghats — cooler weather, clear views of tea estates around Munnar, and better access to wildlife areas like Periyar.",
            },
          ].map((item) => (
            <div key={item.q} className="border-t border-border pt-6">
              <h3 className="font-serif text-xl md:text-2xl">{item.q}</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
