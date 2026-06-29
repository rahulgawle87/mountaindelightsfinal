import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { blogPosts } from "@/lib/destinations";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Field Notes — Indian mountain travel writing | Mountain Delights" },
      { name: "description", content: "Short dispatches from guides and travellers across the Indian Himalaya and Western Ghats — itineraries, acclimatisation, festivals, seasons." },
      { property: "og:title", content: "Field Notes from the Indian mountains" },
      { property: "og:description", content: "Specific, useful writing from people on the trail." },
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
          worth the detour, and what you can safely skip.
        </p>
      </section>

      <section className="container-prose pb-24">
        <ol className="divide-y divide-border border-t border-border">
          {blogPosts.map((p) => (
            <li key={p.slug} className="py-8 grid md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-1 font-serif text-3xl text-[var(--color-ochre)]">{p.number}</div>
              <div className="md:col-span-8">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="uppercase tracking-[0.18em]">{p.tag}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
                <h2 className="mt-2 font-serif text-2xl md:text-3xl">{p.title}</h2>
                <p className="mt-3 text-foreground/80">{p.excerpt}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <Link to="/blog" className="text-sm underline underline-offset-4 hover:text-[var(--color-pine)]">
                  Read note →
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
