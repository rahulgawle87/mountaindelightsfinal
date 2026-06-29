import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { destinations, blogPosts } from "@/lib/destinations";
import hero from "@/assets/hero-mountains.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mountain Delights — Honest journeys through the Indian mountains" },
      { name: "description", content: "Small-group and self-planned trips across Ladakh, Himachal, Uttarakhand, Sikkim and the Western Ghats. Real itineraries, local guides, no filler." },
      { property: "og:title", content: "Mountain Delights — Indian mountain travel" },
      { property: "og:description", content: "Routes, field notes and trip planning for the Indian Himalaya and Western Ghats." },
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
