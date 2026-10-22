import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getGuide, getDestination, type Guide } from "@/lib/destinations";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return guide;
  },
  head: ({ loaderData }) => {
    const g = loaderData as Guide | undefined;
    if (!g) return {};
    const title = `${g.title} | Mountain Delights`;
    const description = g.intro.slice(0, 155);
    const url = `https://www.mountaindelights.in/guides/${g.slug}`;
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: g.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:locale", content: "en_IN" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      ],
    };
  },
  component: GuidePage,
});

function GuidePage() {
  const g = Route.useLoaderData() as Guide;
  const dest = getDestination(g.destinationSlug);

  return (
    <SiteLayout>
      <section className="container-prose pt-10 pb-6">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">Guides</li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground line-clamp-1">{g.title}</li>
          </ol>
        </nav>
      </section>

      <section className="container-prose pb-16 max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl leading-tight">{g.title}</h1>
        <p className="mt-6 text-lg text-foreground/85 leading-relaxed">{g.intro}</p>
        <div className="mt-10 space-y-5 text-foreground/85 leading-relaxed">
          {g.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h2 className="mt-14 font-serif text-2xl">FAQ</h2>
        <div className="mt-6 space-y-8">
          {g.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-serif text-xl">{f.q}</h3>
              <p className="mt-2 text-foreground/85 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        {dest && (
          <p className="mt-12">
            <Link
              to="/destinations/$slug"
              params={{ slug: dest.slug }}
              className="font-medium text-primary hover:underline"
            >
              Full {dest.name} trip planning page →
            </Link>
          </p>
        )}

        <p className="mt-10 text-sm text-muted-foreground">
          Last updated: October 2026 · Rohan Pawar — Plans small-group routes
          across the Indian Himalaya and Western Ghats.
        </p>
      </section>
    </SiteLayout>
  );
}
