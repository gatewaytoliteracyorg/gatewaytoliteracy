import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact | Gateway to Literacy" },
      { name: "description", content: "Gateway to Literacy impact." },
      { property: "og:title", content: "Impact | Gateway to Literacy" },
      { property: "og:description", content: "Gateway to Literacy impact." },
    ],
  }),
  component: Impact,
});

/** Add verified impact metrics here as { value, label }. */
const metrics: { value: string; label: string }[] = [];

function Impact() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">Impact</h1>
          {metrics.length > 0 && (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <p className="font-display text-4xl font-bold">{m.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="rounded-3xl bg-ink p-10 text-background md:p-14">
          <h2 className="max-w-2xl text-2xl font-bold md:text-3xl">Support our work</h2>
          <Link to="/donate" className="mt-8 inline-flex rounded-full bg-health px-7 py-3 text-sm font-semibold text-on-accent transition hover:opacity-90">
            Donate
          </Link>
        </div>
      </section>
    </div>
  );
}
