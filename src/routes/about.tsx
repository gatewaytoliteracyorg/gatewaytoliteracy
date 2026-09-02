import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Compass, HandHeart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Gateway to Literacy" },
      {
        name: "description",
        content:
          "Gateway to Literacy is a student-led nonprofit bridging educational equity across Wake County elementary schools, recognized 2nd nationally at FBLA NLC.",
      },
      { property: "og:title", content: "About Gateway to Literacy" },
      { property: "og:description", content: "Our mission, our story, and our national FBLA recognition." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-muted-foreground">About us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
            Students building bridges where opportunity gaps exist.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75">
            Gateway to Literacy began with a simple observation: in the same county, two elementary schools can post
            proficiency rates thirty points apart. We built a program to close that distance — one classroom at a time.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-9 shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-bbb-soft text-bbb">
              <Compass className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-2xl font-bold">Our mission</h2>
            <p className="mt-4 leading-relaxed text-foreground/75">
              To bridge educational equity across local elementary schools by delivering literacy, health, and financial
              education directly to students who have the least access to it — and by making those resources free,
              consistent, and joyful.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-9 shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-finance-soft text-finance">
              <Users className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-2xl font-bold">Who we are</h2>
            <p className="mt-4 leading-relaxed text-foreground/75">
              We are high school students, volunteers, and educators who plan curriculum, assemble bundles, and lead
              workshops in partner classrooms. Every program is designed with teachers and delivered by peers who
              remember what elementary school felt like.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-3xl bg-health p-9 text-on-accent md:p-14">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
            <Award className="h-5 w-5" />
          </span>
          <p className="mt-6 eyebrow opacity-80">National recognition</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">
            Placed 2nd Nationally at the FBLA National Leadership Conference
          </h2>
          <p className="mt-5 max-w-3xl text-lg opacity-90">
            Our Building Bright Futures (BBB) initiative earned 2nd place in the Community Service Presentation event at
            the Future Business Leaders of America National Leadership Conference — validating a model built on
            measurable school outcomes, sustainable volunteer training, and direct student impact.
          </p>
        </div>
      </section>

      <section className="container-page pb-24">
        <p className="eyebrow text-muted-foreground">How we work</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { t: "Identify", b: "We map every elementary school in the district by economic need and proficiency data to prioritize the highest-need classrooms." },
            { t: "Partner", b: "We meet with principals and teachers to schedule bundles and workshops that fit real classroom calendars." },
            { t: "Measure", b: "We track deliveries, workshops, and student feedback publicly so partners and donors see exactly what changed." },
          ].map((s, i) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/partner-schools" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90">
            <HandHeart className="h-4 w-4" /> See our outreach dashboard
          </Link>
          <Link to="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-secondary">
            Partner with us
          </Link>
        </div>
      </section>
    </div>
  );
}
