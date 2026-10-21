import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Mountain Delights",
  description:
    "Founded by Rohan Pawar. Small-group, authentic trips across the Indian mountains — from Spiti to Sikkim — with local partners.",
  url: "https://www.mountaindelights.in/about",
  mainEntity: {
    "@type": "TravelAgency",
    name: "Mountain Delights",
    founder: {
      "@type": "Person",
      name: "Rohan Pawar",
      jobTitle: "Founder & Director",
    },
  },
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About Mountain Delights – Honest Indian Mountain Journeys by Rohan Pawar",
      },
      {
        name: "description",
        content:
          "Founded by Rohan Pawar. We design small-group, authentic trips across the Indian Himalaya and Western Ghats — Ladakh, Himachal, Uttarakhand, Sikkim and Kerala hills. Local partners, zero hard sell.",
      },
      {
        property: "og:title",
        content:
          "About Mountain Delights – Honest Journeys by Rohan Pawar",
      },
      {
        property: "og:description",
        content:
          "A small team that grew up in these mountains. Honest journeys across Ladakh, Himachal, Uttarakhand, Sikkim and the Western Ghats.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.mountaindelights.in/about",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.mountaindelights.in/about",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(aboutSchema),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-16 md:pt-28">
        <span className="eyebrow">About</span>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl max-w-3xl leading-tight">
          A small team that grew up in these mountains.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80">
          We plan honest, unhurried journeys across the Indian Himalaya and
          Western Ghats — Ladakh, Himachal, Uttarakhand, Sikkim, Kashmir and
          Kerala's hill country. Not cookie-cutter packages; real routes and
          local partners.
        </p>
      </section>

      <section className="container-prose pb-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Mountain Delights started in 2014 as a notebook of routes shared
            between three friends — a mountaineering instructor from Manali, a
            naturalist from Munnar, and a homestay owner in Yuksom. We were
            tired of cookie-cutter packages that treated the Himalaya like a
            backdrop.
          </p>
          <p>
            Today we're a team of eleven across Himachal, Sikkim and Kerala. We
            plan trips the way we plan our own: pick the right weather window,
            sleep where the food is good, walk further than you drive, and leave
            room for the day the weather changes its mind.
          </p>
          <p>
            We don't own the homestays, jeeps or guides we work with — they're
            independent partners we've known for years. That keeps the trips
            honest and the money in the villages.
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Meet the founder
            </p>
            <h2 className="mt-2 font-serif text-2xl">Rohan Pawar</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Founder & Director
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              Rohan believes travel is more than a destination — it's the
              experiences, connections, and memories you take back. His vision
              for Mountain Delights is simple: Explore More. Without Limits.
            </p>
          </div>
        </div>
      </section>

      <section className="container-prose pb-24">
        <h2 className="font-serif text-2xl md:text-3xl">Why travel with us</h2>
        <ul className="mt-8 grid sm:grid-cols-2 gap-6">
          <li className="rounded-lg border border-border p-5">
            <h3 className="font-medium">Personalized planning</h3>
            <p className="mt-2 text-sm text-foreground/75">
              We design around your dates, pace and budget — not a fixed
              package. Indian Himalaya tour or Western Ghats week, same care.
            </p>
          </li>
          <li className="rounded-lg border border-border p-5">
            <h3 className="font-medium">Transparent pricing</h3>
            <p className="mt-2 text-sm text-foreground/75">
              Clear costs, no hidden charges. You know what you're paying for.
            </p>
          </li>
          <li className="rounded-lg border border-border p-5">
            <h3 className="font-medium">On-ground support</h3>
            <p className="mt-2 text-sm text-foreground/75">
              Local partners in Himachal, Sikkim, Kashmir and Kerala — people we
              have worked with for years.
            </p>
          </li>
          <li className="rounded-lg border border-border p-5">
            <h3 className="font-medium">Flexible itineraries</h3>
            <p className="mt-2 text-sm text-foreground/75">
              Built for couples, families, small groups and slow travellers.
            </p>
          </li>
        </ul>
        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Plan your trip →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
