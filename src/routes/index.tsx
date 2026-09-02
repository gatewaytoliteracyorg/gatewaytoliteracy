import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, HeartPulse, PiggyBank } from "lucide-react";
import logoAsset from "@/assets/gateway-logo.png.asset.json";
import { StudentsServedCounter } from "@/components/site/StudentsServedCounter";

const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gateway to Literacy | Empowering Elementary Students" },
      {
        name: "description",
        content:
          "Gateway to Literacy supports elementary students through three pillars: Bright Beginnings Bundles, Health Literacy, and Financial Literacy.",
      },
      { property: "og:title", content: "Gateway to Literacy" },
      {
        property: "og:description",
        content: "Three pillars: Bright Beginnings Bundles, Health Literacy, and Financial Literacy.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: BookOpen, title: "Bright Beginnings Bundles", to: "/programs/bright-beginnings-bundles" as const, bg: "bg-bbb", soft: "bg-bbb-soft", text: "text-bbb" },
  { icon: HeartPulse, title: "Health Literacy", to: "/programs/health-literacy" as const, bg: "bg-health", soft: "bg-health-soft", text: "text-health" },
  { icon: PiggyBank, title: "Financial Literacy", to: "/programs/financial-literacy" as const, bg: "bg-finance", soft: "bg-finance-soft", text: "text-finance" },
];

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-page grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold leading-[1.03] md:text-6xl">
              Building the bridge to opportunity for every elementary student.
            </h1>
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
          </div>
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Gateway to Literacy bridge logo"
              width={520}
              height={520}
              className="w-full max-w-sm object-contain lg:max-w-md"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <StudentsServedCounter />
      </section>

      <section className="container-page pb-20">
        <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">Our Programs</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <Link key={p.title} to={p.to} className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${p.soft} ${p.text}`}>
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <span className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${p.text}`}>
                Explore program <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
              <span className={`mt-6 block h-1.5 w-full rounded-full ${p.bg} opacity-80`} />
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft md:p-16">
          <h2 className="text-3xl font-bold md:text-4xl">Help us reach the next classroom</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/donate" className="rounded-full bg-health px-7 py-3 text-sm font-semibold text-on-accent transition hover:opacity-90">
              Donate via Zeffy
            </Link>
            <Link to="/contact" className="rounded-full border border-border px-7 py-3 text-sm font-semibold transition hover:bg-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
