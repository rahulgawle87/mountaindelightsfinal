import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { destinations } from "@/lib/destinations";

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
          "Field guides to Ladakh, Himachal Pradesh, Uttarakhand, Sikkim and Kerala Western Ghats. Best seasons, altitudes, and real routes for small-group Indian mountain travel.",
      },
      {
        property: "og:title",
        content:
          "Indian Mountain Destinations – When to Go & Real Routes | Mountain Delights",
      },
      {
        property: "og:description",
        content:
          "Five mountain regions of India — seasons, altitudes, and what people actually travel there for.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.mountaindelights.in/destinations",
      },
      { property: "og:locale", content: "en_IN" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.mountaindelights.in/destinations",
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
          Five mountain regions, each on its own clock.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80">
          The Indian mountains aren't one trip. The Trans-Himalaya is a cold
          desert; the Western Ghats are a rainforest. Open a region for season
          tables, sample pacing, honest fit notes, and FAQs.
        </p>
      </section>

      <section className="container-prose pb-24 space-y-16">
        {destinations.map((d) => (
          <article
            key={d.slug}
            className="grid md:grid-cols-12 gap-8 md:gap-12 items-start border-t border-border pt-12 first:border-t-0 first:pt-0"
          >
            <div className="md:col-span-5">
              <Link
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className="block aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={d.image}
                  alt={`${d.name} — ${d.short}`}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition hover:scale-[1.02]"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {d.region}
              </p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                <Link
                  to="/destinations/$slug"
                  params={{ slug: d.slug }}
                  className="hover:underline"
                >
                  {d.name}
                </Link>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground/85">
                {d.intro}
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
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className="mt-6 inline-flex text-sm font-medium text-primary hover:underline"
              >
                {d.name} trip planning →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="container-prose pb-24 border-t border-border pt-16">
        <h2 className="font-serif text-2xl md:text-3xl">Guides</h2>
        <ul className="mt-6 space-y-3 text-sm max-w-xl">
          <li>
            <Link
              to="/guides/$slug"
              params={{ slug: "best-time-ladakh" }}
              className="font-medium text-primary hover:underline"
            >
              Best time to visit Ladakh, month by month →
            </Link>
          </li>
          <li>
            <Link
              to="/guides/$slug"
              params={{ slug: "spiti-7-days" }}
              className="font-medium text-primary hover:underline"
            >
              Spiti Valley itinerary: 7 days →
            </Link>
          </li>
          <li>
            <Link
              to="/guides/$slug"
              params={{ slug: "munnar-vs-thekkady" }}
              className="font-medium text-primary hover:underline"
            >
              Munnar vs Thekkady: which to pick →
            </Link>
          </li>
        </ul>
      </section>
    </SiteLayout>
  );
}
