import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import logoAsset from "@/assets/gateway-logo.png.asset.json";

const logo = logoAsset.url;

const programLinks = [
  { to: "/programs/bright-beginnings-bundles", label: "Bright Beginnings Bundles", color: "bg-bbb" },
  { to: "/programs/health-literacy", label: "Health Literacy", color: "bg-health" },
  { to: "/programs/financial-literacy", label: "Financial Literacy", color: "bg-finance" },
] as const;

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/awards", label: "Awards & Recognition" },
  { to: "/impact", label: "Impact" },
  { to: "/contact", label: "Contact Us" },
] as const;

const linkClass =
  "text-sm font-medium text-foreground/75 transition-colors hover:text-foreground data-[status=active]:text-foreground";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Gateway to Literacy logo" width={48} height={48} className="h-11 w-11 object-contain" />
          <span className="font-display text-lg font-bold leading-tight tracking-tight">Gateway to Literacy</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link to="/" className={linkClass} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/about" className={linkClass}>
            About Us
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground">
              Programs <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100">
              <div className="overflow-hidden rounded-xl border border-border bg-card p-2 shadow-lift">
                {programLinks.map((p) => (
                  <Link
                    key={p.to}
                    to={p.to}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${p.color}`} />
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/awards" className={linkClass}>
            Awards &amp; Recognition
          </Link>
          <Link to="/impact" className={linkClass}>
            Impact
          </Link>
          <Link to="/contact" className={linkClass}>
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/donate"
            className="hidden rounded-full bg-health px-5 py-2.5 text-sm font-semibold text-on-accent shadow-soft transition hover:opacity-90 sm:inline-flex"
          >
            Donate
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 text-sm font-medium hover:bg-secondary">
                {l.label}
              </Link>
            ))}
            <span className="mt-2 px-2 eyebrow text-muted-foreground">Programs</span>
            {programLinks.map((p) => (
              <Link key={p.to} to={p.to} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium hover:bg-secondary">
                <span className={`h-2.5 w-2.5 rounded-full ${p.color}`} />
                {p.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-health px-5 py-2.5 text-center text-sm font-semibold text-on-accent"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
