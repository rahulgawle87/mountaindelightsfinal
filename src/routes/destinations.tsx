import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { destinations } from "@/lib/destinations";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Indian mountain regions | Mountain Delights" },
      { name: "description", content: "Detailed notes on Ladakh, Himachal, Uttarakhand, Sikkim, Kerala, Shimla, Manali and Kashmir — altitudes, seasons, and what each region is actually known for." },
      { property: "og:title", content: "Indian mountain destinations" },
      { property: "og:description", content: "Routes and field-checked notes on eight mountain regions across India." },
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
          actually travel there for.
        </p>
      </section>

      <section className="container-prose pb-24 space-y-20">
        {destinations.map((d, i) => (
          <article key={d.slug} className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
            <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={d.image}
                  alt={d.name}
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
    </SiteLayout>
  );
}
