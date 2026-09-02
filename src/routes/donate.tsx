import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, HeartPulse, PiggyBank, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate | Gateway to Literacy" },
      {
        name: "description",
        content:
          "Give fee-free through Zeffy. 100% of your donation funds workbooks, learning kits, hygiene kits, and financial literacy materials for elementary students.",
      },
      { property: "og:title", content: "Donate to Gateway to Literacy" },
      { property: "og:description", content: "100% fee-free giving through Zeffy supports all three program pillars." },
    ],
  }),
  component: Donate,
});

function Donate() {
  return (
    <div>
      <section className="bg-health text-on-accent">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow opacity-80">Donate</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
            100% of your gift reaches a classroom.
          </h1>
          <p className="mt-6 max-w-2xl text-lg opacity-90">
            We accept donations through Zeffy, a platform-fee-free processor. That means every dollar you give goes to
            school outreach supplies, student workbooks, and program expansion across all three pillars.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-lift md:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Give through Zeffy</h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
                <ShieldCheck className="h-3.5 w-3.5" /> Fee-free
              </span>
            </div>
            {/* Zeffy embed container — replace the placeholder with the Zeffy iframe snippet. */}
            <div
              id="zeffy-donation-form"
              className="mt-6 flex min-h-[560px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/50 p-10 text-center"
            >
              <p className="font-display text-lg font-bold">Zeffy donation form</p>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Paste your Zeffy embed iframe into this container to activate live, fee-free donations. The form will
                inherit the page width automatically.
              </p>
              <code className="mt-5 rounded-lg bg-card px-3 py-2 text-xs text-muted-foreground">
                &lt;iframe src="https://www.zeffy.com/embed/donation-form/..." /&gt;
              </code>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-lg font-bold">Where your donation goes</h3>
              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-bbb-soft text-bbb">
                    <BookOpen className="h-4 w-4" />
                  </span>
                  <span>
                    <strong className="block">Bright Beginnings Bundles</strong>
                    <span className="text-muted-foreground">Workbooks, reading books, school supplies, and learning kits.</span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-health-soft text-health">
                    <HeartPulse className="h-4 w-4" />
                  </span>
                  <span>
                    <strong className="block">Health Literacy</strong>
                    <span className="text-muted-foreground">Hygiene kits, activity workbooks, and workshop materials.</span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-finance-soft text-finance">
                    <PiggyBank className="h-4 w-4" />
                  </span>
                  <span>
                    <strong className="block">Financial Literacy</strong>
                    <span className="text-muted-foreground">Piggy banks, budgeting games, and family guidebooks.</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-lg font-bold">Suggested impact</h3>
              <div className="mt-4 divide-y divide-border text-sm">
                {[
                  ["$25", "One complete Bright Beginnings Bundle"],
                  ["$100", "A full classroom health workshop with kits"],
                  ["$250", "Financial literacy materials for two classrooms"],
                  ["$500", "Launches outreach at a new partner school"],
                ].map(([amt, desc]) => (
                  <div key={amt} className="flex items-center gap-4 py-3">
                    <span className="w-16 font-display font-bold">{amt}</span>
                    <span className="text-muted-foreground">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
