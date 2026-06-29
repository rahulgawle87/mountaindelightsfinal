import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/blog", label: "Field Notes" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="container-prose flex items-center justify-between h-16">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-serif text-xl tracking-tight text-foreground">Mountain Delights</span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-[0.22em] text-muted-foreground">India</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {nav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-foreground/75 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="btn-primary text-xs px-4 py-2">Plan a trip</Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 border-t border-border/70 bg-[oklch(0.94_0.022_75)]">
        <div className="container-prose py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 max-w-sm">
            <div className="font-serif text-xl">Mountain Delights</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Small-group journeys and self-planned routes across the Indian
              mountains — from the Trans-Himalaya to the Western Ghats.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Explore</div>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-foreground text-foreground/75">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground text-foreground/75">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-foreground text-foreground/75">YouTube</a></li>
              <li><a href="mailto:info@mountaindelights.in" className="hover:text-foreground text-foreground/75">info@mountaindelights.in</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/70">
          <div className="container-prose py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Mountain Delights. Made in the hills.</span>
            <span>Travel responsibly. Pack out what you pack in.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
