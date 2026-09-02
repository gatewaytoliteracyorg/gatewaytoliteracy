import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, HeartPulse, PiggyBank } from "lucide-react";
import hero from "@/assets/hero-classroom.jpg";
import logo from "@/assets/gateway-logo.png";
import { totalSchools, highNeedSchools, activePartnerships } from "@/data/schools";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gateway to Literacy | Bridging Educational Equity for Kids" },
      {
        name: "description",
        content:
          "Gateway to Literacy empowers elementary students through three pillars: Bright Beginnings Bundles, Health Literacy, and Financial Literacy workshops.",
      },
      { property: "og:title", content: "Gateway to Literacy | Bridging Educational Equity" },
      {
        property: "og:description",
        content: "Student-led outreach delivering literacy, health, and financial education to Wake County elementary schools.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: BookOpen,
    title: "Bright Beginnings Bundles",
    body: "Curriculum workbooks, reading books, and hands-on learning kits delivered straight to classrooms.",
    to: "/programs/bright-beginnings-bundles" as const,
    bg: "bg-bbb",
    soft: "bg-bbb-soft",
    text: "text-bbb",
  },
  {
    icon: HeartPulse,
    title: "Health Literacy",
    body: "Workshops on nutrition, hygiene, movement, and mental well-being that build lifelong habits.",
    to: "/programs/health-literacy" as const,
    bg: "bg-health",
    soft: "bg-health-soft",
    text: "text-health",
  },
  {
    icon: PiggyBank,
    title: "Financial Literacy",
    body: "Earn, Save, Spend, and Give — budgeting games, piggy banks, and family money guidebooks.",
    to: "/programs/financial-literacy" as const,
    bg: "bg-finance",
    soft: "bg-finance-soft",
    text: "text-finance",
  },
];

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-page grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground/70">
              <Award className="h-4 w-4 text-health" />
              2nd Place Nationally — FBLA National Leadership Conference
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.03] md:text-6xl">
              Building the bridge to opportunity for every elementary student.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
              Gateway to Literacy is a student-led outreach organization closing the educational equity gap in Wake
              County — supported by three pillars: early literacy, health, and financial education.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/impact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Our Impact <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-health px-6 py-3 text-sm font-semibold text-on-accent shadow-soft transition hover:opacity-90"
              >
                Donate via Zeffy
              </Link>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { v: totalSchools, l: "Schools targeted" },
                { v: highNeedSchools, l: "High-need schools" },
                { v: activePartnerships, l: "Active partnerships" },
              ].map((m) => (
                <div key={m.l}>
                  <p className="font-display text-3xl font-bold md:text-4xl">{m.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
              <img src={hero} alt="Volunteers reading with elementary students in a classroom" width={1600} height={1104} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lift sm:flex">
              <img src={logo} alt="Gateway to Literacy bridge logo" loading="lazy" width={56} height={56} className="h-12 w-12 rounded-xl bg-ink object-contain p-1.5" />
              <div>
                <p className="text-sm font-bold">Three pillars. One bridge.</p>
                <p className="text-xs text-muted-foreground">Literacy · Health · Finance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow text-muted-foreground">Our programs</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Three pillars holding up one mission</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <Link key={p.title} to={p.to} className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${p.soft} ${p.text}`}>
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <span className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${p.text}`}>
                Explore program <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
              <span className={`mt-6 block h-1.5 w-full rounded-full ${p.bg} opacity-80`} />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink text-background">
        <div className="container-page grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-background/60">National recognition</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              2nd in the nation at the FBLA National Leadership Conference
            </h2>
            <p className="mt-5 max-w-xl text-background/75">
              Our Building Bright Futures (BBB) work earned 2nd place nationally in the Community Service Presentation
              event — recognition of a program built by students, for students.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-ink transition hover:opacity-90">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { v: "2nd", l: "FBLA National placement" },
              { v: "43", l: "Wake County schools mapped" },
              { v: "3", l: "Program pillars" },
              { v: "100%", l: "Of donations go to students" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-background/15 p-6">
                <p className="font-display text-3xl font-bold">{s.v}</p>
                <p className="mt-1 text-sm text-background/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft md:p-16">
          <h2 className="text-3xl font-bold md:text-4xl">Help us reach the next classroom</h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
            Every donation funds workbooks, hygiene kits, and piggy banks for elementary students who need them most.
            Zeffy passes 100% of your gift straight to our programs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/donate" className="rounded-full bg-health px-7 py-3 text-sm font-semibold text-on-accent transition hover:opacity-90">
              Donate via Zeffy
            </Link>
            <Link to="/partner-schools" className="rounded-full border border-border px-7 py-3 text-sm font-semibold transition hover:bg-secondary">
              View outreach dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
