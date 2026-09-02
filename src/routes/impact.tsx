import { createFileRoute, Link } from "@tanstack/react-router";
import { schools, totalSchools, highNeedSchools, activePartnerships } from "@/data/schools";
import { SchoolDashboard } from "@/components/site/SchoolDashboard";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact | Gateway to Literacy" },
      {
        name: "description",
        content:
          "See Gateway to Literacy's measurable impact: schools served, bundles delivered, workshops led, and proficiency gaps we are working to close.",
      },
      { property: "og:title", content: "Our Impact | Gateway to Literacy" },
      { property: "og:description", content: "Transparent outreach metrics across Wake County elementary schools." },
    ],
  }),
  component: Impact,
});

function Impact() {
  const avgReading = Math.round(schools.reduce((a, s) => a + s.reading, 0) / schools.length);
  const avgMath = Math.round(schools.reduce((a, s) => a + s.math, 0) / schools.length);

  return (
    <div>
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow text-muted-foreground">Impact</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
            The numbers behind the bridge.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75">
            We publish our outreach data openly. These are the schools we serve, the gaps we're targeting, and the
            progress we've made so far.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: String(totalSchools), l: "Schools targeted", c: "text-bbb" },
              { v: String(highNeedSchools), l: "High-need schools (>70%)", c: "text-health" },
              { v: String(activePartnerships), l: "Active partnerships", c: "text-finance" },
              { v: "2nd", l: "FBLA national placement", c: "text-foreground" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <p className={`font-display text-4xl font-bold ${s.c}`}>{s.v}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-muted-foreground">Why it matters</p>
            <h2 className="mt-3 text-3xl font-bold">Average proficiency across our target schools</h2>
            <p className="mt-4 text-foreground/75">
              Across the {totalSchools} schools on our list, average math proficiency sits at {avgMath}% and reading at{" "}
              {avgReading}%. In our highest-need schools, those figures fall below 25%. Bundles and workshops are aimed
              squarely at those classrooms.
            </p>
          </div>
          <div className="space-y-6 rounded-3xl border border-border bg-card p-9 shadow-soft">
            {[
              { l: "Average math proficiency", v: avgMath, c: "bg-bbb" },
              { l: "Average reading proficiency", v: avgReading, c: "bg-health" },
              { l: "Schools above 70% economic need", v: Math.round((highNeedSchools / totalSchools) * 100), c: "bg-finance" },
            ].map((b) => (
              <div key={b.l}>
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>{b.l}</span>
                  <span className="tabular-nums text-muted-foreground">{b.v}%</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-muted">
                  <div className={`h-full rounded-full ${b.c}`} style={{ width: `${b.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <p className="eyebrow text-muted-foreground">Live outreach tracker</p>
        <h2 className="mt-3 text-3xl font-bold">Where we stand, school by school</h2>
        <div className="mt-10">
          <SchoolDashboard />
        </div>
        <div className="mt-12 rounded-3xl bg-ink p-10 text-background md:p-14">
          <h3 className="max-w-2xl text-2xl font-bold md:text-3xl">Move a school from "Not Contacted" to served.</h3>
          <p className="mt-4 max-w-2xl text-background/75">
            Funding one classroom bundle set is the difference between a school on our list and a school in our program.
          </p>
          <Link to="/donate" className="mt-8 inline-flex rounded-full bg-health px-7 py-3 text-sm font-semibold text-on-accent transition hover:opacity-90">
            Donate via Zeffy
          </Link>
        </div>
      </section>
    </div>
  );
}
