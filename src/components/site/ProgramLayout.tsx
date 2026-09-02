import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

type Theme = "bbb" | "health" | "finance";

const themeMap = {
  bbb: { bg: "bg-bbb", soft: "bg-bbb-soft", text: "text-bbb", fg: "text-on-accent" },
  health: { bg: "bg-health", soft: "bg-health-soft", text: "text-health", fg: "text-on-accent" },
  finance: { bg: "bg-finance", soft: "bg-finance-soft", text: "text-finance", fg: "text-ink" },
} as const;

export interface ProgramMetric {
  value: string;
  label: string;
}

export function ProgramPage({
  theme,
  eyebrow,
  title,
  tagline,
  overview,
  components,
  metrics,
  recognition,
}: {
  theme: Theme;
  eyebrow: string;
  title: string;
  tagline: string;
  overview: string;
  components: { title: string; body: string }[];
  metrics: ProgramMetric[];
  recognition?: { title: string; body: string };
}) {
  const t = themeMap[theme];

  return (
    <div>
      <section className={`${t.bg} ${t.fg}`}>
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow opacity-80">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg opacity-90">{tagline}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/donate" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90">
              Support this program
            </Link>
            <Link to="/partner-schools" className="rounded-full border border-current px-6 py-3 text-sm font-semibold transition hover:bg-black/10">
              See partner schools
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className={`eyebrow ${t.text}`}>Program overview</p>
            <h2 className="mt-3 text-3xl font-bold">What we do</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/80">{overview}</p>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <p className={`eyebrow ${t.text}`}>Key components</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {components.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${t.soft} ${t.text}`}>
                <Check className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {recognition && (
        <section className="container-page pb-16 md:pb-24">
          <div className={`rounded-3xl ${t.soft} p-8 md:p-12`}>
            <p className={`eyebrow ${t.text}`}>Recognitions & accomplishments</p>
            <h3 className="mt-3 max-w-2xl text-2xl font-bold md:text-3xl">{recognition.title}</h3>
            <p className="mt-4 max-w-3xl text-foreground/80">{recognition.body}</p>
          </div>
        </section>
      )}

      <section className="container-page pb-24">
        <p className={`eyebrow ${t.text}`}>Impact metrics</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft">
              <p className={`font-display text-4xl font-bold ${t.text}`}>{m.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
