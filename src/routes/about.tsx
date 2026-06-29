import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mountain Delights — Indian mountain trip planners" },
      { name: "description", content: "A small team of mountain guides and trip planners based in Manali and Gangtok, building honest journeys across the Indian Himalaya and Western Ghats." },
      { property: "og:title", content: "About Mountain Delights" },
      { property: "og:description", content: "Who we are and how we plan trips." },
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
            Today we're a team of eleven across Himachal, Sikkim and Kerala.
            We plan trips the way we plan our own: pick the right window,
            sleep where the food is good, walk further than you drive, and
            leave room for the day the weather changes its mind.
          </p>
          <p>
            We don't own the homestays, jeeps or guides we work with — they're
            our neighbours, and most of what you pay goes to them.
          </p>
        </div>

        <aside className="md:col-span-5 space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="eyebrow">Where we work from</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between"><span>Manali, Himachal Pradesh</span><span className="text-muted-foreground">2,050 m</span></li>
              <li className="flex justify-between"><span>Gangtok, Sikkim</span><span className="text-muted-foreground">1,650 m</span></li>
              <li className="flex justify-between"><span>Munnar, Kerala</span><span className="text-muted-foreground">1,600 m</span></li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="eyebrow">What we promise</div>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              <li>· A real human on WhatsApp from arrival to departure.</li>
              <li>· Honest seasons — we'll tell you when not to come.</li>
              <li>· Group size capped at six travellers.</li>
              <li>· Plastic-free trips above 2,500 m.</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="border-t border-border bg-[oklch(0.945_0.02_78)]">
        <div className="container-prose py-20 grid md:grid-cols-3 gap-10">
          {[
            { name: "Tenzin Norbu", role: "Co-founder · Lead guide, Himachal & Ladakh", note: "IMF-certified, fifteen years in the Western Himalaya." },
            { name: "Anjali Menon", role: "Co-founder · Naturalist, Western Ghats", note: "Spent four years at the Periyar tiger reserve before joining." },
            { name: "Pema Wangchuk", role: "Eastern Himalaya lead, Sikkim", note: "Born in Yuksom; runs the Goecha La trek every spring." },
          ].map((p) => (
            <div key={p.name}>
              <div className="font-serif text-2xl">{p.name}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{p.role}</div>
              <p className="mt-3 text-foreground/80">{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Come walk with us.</h2>
        <Link to="/contact" className="btn-primary mt-6">Get in touch →</Link>
      </section>
    </SiteLayout>
  );
}
