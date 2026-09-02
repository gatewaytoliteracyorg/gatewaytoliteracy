import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

type Theme = "bbb" | "health" | "finance";

const themeMap = {
  bbb: { bg: "bg-bbb", soft: "bg-bbb-soft", text: "text-bbb", fg: "text-on-accent" },
  health: { bg: "bg-health", soft: "bg-health-soft", text: "text-health", fg: "text-on-accent" },
  finance: { bg: "bg-finance", soft: "bg-finance-soft", text: "text-finance", fg: "text-ink" },
} as const;

export function ProgramPage({
  theme,
  title,
  components,
}: {
  theme: Theme;
  title: string;
  /** Add or remove entries here to update this program's Key Components. */
  components: { title: string }[];
}) {
  const t = themeMap[theme];

  return (
    <div>
      <section className={`${t.bg} ${t.fg}`}>
        <div className="container-page py-20 md:py-28">
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
          <div className="mt-9">
            <Link to="/donate" className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90">
              Support this program
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <h2 className="text-3xl font-bold">Key Components</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${t.soft} ${t.text}`}>
                <Check className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
