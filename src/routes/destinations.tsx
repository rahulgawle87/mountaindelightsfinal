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
    {
      "@type": "Question",
      name: "What Indian mountain destinations does Mountain Delights cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We plan trips across Ladakh, Himachal Pradesh (including Spiti, Kinnaur, Shimla and Manali), Uttarakhand, Sikkim, Kashmir, and the Western Ghats of Kerala, plus Mount Abu in the Aravallis.",
      },
    },
  ],
};

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      {
        title:
          "Indian Mountain Destinations – Ladakh, Himachal, Sikkim & More | Mountain Delights",
      },
      {
        name: "description",
        content:
          "Field guides to Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Kashmir and Kerala Western Ghats. Best seasons, altitudes, and real routes for small-group Indian Himalaya travel.",
      },
      {
        property: "og:title",
        content:
          "Indian Mountain Destinations – When to Go & Real Routes | Mountain Delights",
      },
      {
        property: "og:description",
        content:
          "Eight mountain regions of India — seasons, altitudes, and what people actually travel there for. Plan with Mountain Delights.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.mountaindelights.in/destinations",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.mountaindelights.in/destinations",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
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
          tour, a Ladakh trip, Spiti circuit, or a slower Western Ghats
          journey, these notes help you match the right season and pace.
        </p>
      </section>

      <section className="container-prose pb-24 space-y-16">
        {destinations.map((d) => (
          <article
            key={d.slug}
            id={d.slug}
            className="grid md:grid-cols-12 gap-8 md:gap-12 items-start border-t border-border pt-12 first:border-t-0 first:pt-0"
          >
            <div className="md:col-span-5">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={d.image}
                  alt={`${d.name} — ${d.short}`}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {d.region}
              </p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">{d.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground/85">
                {d.long}
              </p>
              <dl className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-medium text-muted-foreground">Altitude</dt>
                  <dd className="mt-0.5">{d.altitude}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Best season</dt>
                  <dd className="mt-0.5">{d.bestSeason}</dd>
                </div>
              </dl>
              {d.knownFor?.length > 0 && (
                <p className="mt-4 text-sm text-foreground/70">
                  Known for: {d.knownFor.join(" · ")}
                </p>
              )}
              <Link
                to="/contact"
                className="mt-6 inline-flex text-sm font-medium text-primary hover:underline"
              >
                Plan a {d.name} trip →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="container-prose pb-24 border-t border-border pt-16">
        <h2 className="font-serif text-2xl md:text-3xl">Common questions</h2>
        <dl className="mt-8 space-y-6 max-w-2xl">
          <div>
            <dt className="font-medium">Best time for Ladakh?</dt>
            <dd className="mt-1 text-sm text-foreground/80">
              June–September. Acclimatise two days in Leh before high passes.
            </dd>
          </div>
          <div>
            <dt className="font-medium">How long for Himachal or Spiti?</dt>
            <dd className="mt-1 text-sm text-foreground/80">
              6–7 days for Shimla–Manali; 10–12 days for a full Spiti or Kinnaur
              circuit.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Small groups only?</dt>
            <dd className="mt-1 text-sm text-foreground/80">
              Yes — around six travellers with two guides, or private
              itineraries. No coach tours.
            </dd>
          </div>
        </dl>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Plan your mountain trip →
        </Link>
      </section>
    </SiteLayout>
  );
}
