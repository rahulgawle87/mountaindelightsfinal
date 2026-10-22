import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  destinations,
  getDestination,
  type Destination,
} from "@/lib/destinations";

const WA = "917977958220";
const AUTHOR = {
  name: "Rohan Pawar",
  bio: "Plans small-group routes across the Indian Himalaya and Western Ghats.",
};

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const dest = getDestination(params.slug);
    if (!dest) throw notFound();
    return dest;
  },
  head: ({ loaderData }) => {
    const d = loaderData as Destination | undefined;
    if (!d) return {};
    const title = `${d.name} Trip Planning | Mountain Delights`;
    const description = d.intro.slice(0, 155);
    const url = `https://www.mountaindelights.in/destinations/${d.slug}`;
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.mountaindelights.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Destinations",
          item: "https://www.mountaindelights.in/destinations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: d.name,
          item: url,
        },
      ],
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
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqSchema) },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbSchema),
        },
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const d = Route.useLoaderData() as Destination;
  const related = destinations.filter((x) => d.relatedSlugs.includes(x.slug));
  const waText = encodeURIComponent(
    `Hi Mountain Delights — I'd like to plan a trip to ${d.name}.`,
  );
  const waHref = `https://wa.me/${WA}?text=${waText}`;

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
            <li>
              <Link to="/destinations" className="hover:text-foreground">
                Destinations
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">{d.name}</li>
          </ol>
        </nav>
      </section>

      <section className="container-prose pb-12 md:pb-16">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {d.region}
        </p>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
          {d.name} Trip Planning | Mountain Delights
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/85 leading-relaxed">
          {d.intro}
        </p>
        <div className="mt-8 aspect-[21/9] max-h-80 overflow-hidden rounded-lg">
          <img
            src={d.image}
            alt={`${d.name} — ${d.short}`}
            width={1200}
            height={514}
            className="h-full w-full object-cover"
          />
        </div>
        <dl className="mt-6 grid sm:grid-cols-2 gap-4 text-sm max-w-xl">
          <div>
            <dt className="font-medium text-muted-foreground">Altitude</dt>
            <dd className="mt-0.5">{d.altitude}</dd>
          </div>
          <div>
            <dt className="font-medium text-muted-foreground">Best season</dt>
            <dd className="mt-0.5">{d.bestSeason}</dd>
          </div>
        </dl>
      </section>

      <section className="container-prose pb-16">
        <h2 className="font-serif text-2xl md:text-3xl">Best time to visit</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[28rem] text-sm border-collapse">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-medium">Month</th>
                <th className="py-2 pr-4 font-medium">Rating</th>
                <th className="py-2 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {d.months.map((m) => (
                <tr key={m.month} className="border-b border-border/60">
                  <td className="py-2 pr-4 font-medium">{m.month}</td>
                  <td className="py-2 pr-4">{m.rating}</td>
                  <td className="py-2 text-foreground/80">{m.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-prose pb-16">
        <h2 className="font-serif text-2xl md:text-3xl">
          Getting there and getting around
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/85 leading-relaxed">
          {d.gettingThere}
        </p>
      </section>

      <section className="container-prose pb-16">
        <h2 className="font-serif text-2xl md:text-3xl">Sample route</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {d.sampleRoute.name} · {d.sampleRoute.duration} ·{" "}
          {d.sampleRoute.groupSize}
        </p>
        <div className="mt-8 space-y-8 max-w-2xl">
          {d.sampleRoute.days.map((day) => (
            <div key={day.day}>
              <h3 className="font-serif text-xl">
                {day.day}: {day.title}
              </h3>
              <p className="mt-2 text-foreground/85 leading-relaxed">{day.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground max-w-2xl">
          Sample structure only — final routes, durations and group sizes are
          confirmed when you plan with us.
        </p>
      </section>

      <section className="container-prose pb-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-2xl">Who it's for</h2>
          <p className="mt-3 text-foreground/85 leading-relaxed">{d.whoFor}</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl">Who it isn't for</h2>
          <p className="mt-3 text-foreground/85 leading-relaxed">{d.whoNotFor}</p>
        </div>
      </section>

      <section className="container-prose pb-16">
        <h2 className="font-serif text-2xl md:text-3xl">FAQ</h2>
        <div className="mt-8 space-y-8 max-w-2xl">
          {d.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-serif text-xl">{f.q}</h3>
              <p className="mt-2 text-foreground/85 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose pb-16">
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Plan this trip on WhatsApp →
        </a>
        <p className="mt-8 text-sm text-muted-foreground">
          Last updated: October 2026
          <br />
          <span className="text-foreground/80">
            {AUTHOR.name} — {AUTHOR.bio}
          </span>
        </p>
      </section>

      <section className="container-prose pb-24 border-t border-border pt-12">
        <h2 className="font-serif text-2xl">Continue exploring</h2>
        <ul className="mt-6 space-y-3 text-sm">
          {related.map((r) => (
            <li key={r.slug}>
              <Link
                to="/destinations/$slug"
                params={{ slug: r.slug }}
                className="font-medium text-primary hover:underline"
              >
                {r.name} trip planning →
              </Link>
            </li>
          ))}
          {d.guideSlug && (
            <li>
              <Link
                to="/guides/$slug"
                params={{ slug: d.guideSlug }}
                className="font-medium text-primary hover:underline"
              >
                Matching guide →
              </Link>
            </li>
          )}
          <li>
            <Link to="/destinations" className="hover:underline text-foreground/80">
              All destinations
            </Link>
          </li>
        </ul>
      </section>
    </SiteLayout>
  );
}
