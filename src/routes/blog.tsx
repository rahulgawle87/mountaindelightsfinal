import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { blogPosts } from "@/lib/destinations";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title:
          "Field Notes — Indian Mountain Travel Writing | Mountain Delights",
      },
      {
        name: "description",
        content:
          "Practical notes on Indian Himalaya and Western Ghats travel — Ladakh acclimatisation, Spiti itineraries, monastery festivals, Munnar seasons. Written from the trail.",
      },
      {
        property: "og:title",
        content: "Field Notes from the Indian mountains | Mountain Delights",
      },
      {
        property: "og:description",
        content:
          "Specific, useful writing from guides and travellers — seasons, routes, and what to skip.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.mountaindelights.in/blog",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.mountaindelights.in/blog",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-12 md:pt-28">
        <span className="eyebrow">Field Notes</span>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl max-w-3xl leading-tight">
          Notes from the trail, written when they're still fresh.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80">
          No top-ten lists. These are short pieces by guides and travellers we
          work with — practical writing about what's actually open, what's
          worth the detour, and what you can safely skip on an Indian mountain
          trip.
        </p>
      </section>

      <section className="container-prose pb-24">
        <ol className="divide-y divide-border border-t border-border">
          {blogPosts.map((p) => (
            <li
              key={p.slug}
              className="py-8 grid md:grid-cols-12 gap-6 items-baseline"
            >
              <div className="md:col-span-1 font-serif text-3xl text-[var(--color-ochre)]">
                {p.number}
              </div>
              <div className="md:col-span-8">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="uppercase tracking-[0.18em]">{p.tag}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
                <h2 className="mt-2 font-serif text-2xl md:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-3 text-foreground/80">{p.excerpt}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <span className="text-sm text-muted-foreground">
                  Coming soon
                </span>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-sm text-muted-foreground max-w-xl">
          Full notes will be published here. For a custom route in the meantime,{" "}
          <Link to="/contact" className="text-primary underline underline-offset-4">
            plan a trip
          </Link>
          .
        </p>
      </section>
    </SiteLayout>
  );
}
