import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, User, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Gateway to Literacy" },
      { name: "description", content: "About Gateway to Literacy, our mission, directors, and board." },
      { property: "og:title", content: "About Us | Gateway to Literacy" },
      { property: "og:description", content: "About Gateway to Literacy, our mission, directors, and board." },
    ],
  }),
  component: About,
});

/** Add or edit leadership entries here. Leave `description` empty until copy is ready. */
const directors: { name: string; description: string; image?: string }[] = [
  { name: "Lalitha Vadlamani", description: "" },
  { name: "Preeti Ozarkar", description: "" },
  { name: "Suneel Kolluru", description: "" },
];

const board: { name: string; position: string; description: string; image?: string }[] = [
  { name: "Srivatsa Vadlamani", position: "President", description: "" },
  { name: "Krish Ozarkar", position: "Vice President and Acting Secretary", description: "" },
];

function ProfileCard({
  name,
  position,
  description,
  image,
}: {
  name: string;
  position?: string | undefined;
  description: string;
  image?: string | undefined;
}) {

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      {image ? (
        <img src={image} alt={name} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      ) : (
        <div className="flex aspect-[4/5] w-full items-center justify-center border-b border-dashed border-border bg-secondary/50">
          <User className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
        </div>
      )}
      <div className="p-7">
        <h3 className="text-lg font-bold">{name}</h3>
        {position && <p className="mt-1 text-sm font-semibold text-health">{position}</p>}
        <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-foreground/75">{description}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">About Us</h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-9 shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-bbb-soft text-bbb">
              <Compass className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-2xl font-bold">Our mission</h2>
            <p className="mt-4 min-h-[5rem] leading-relaxed text-foreground/75">
              To bridge educational equity across local elementary schools.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-9 shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-finance-soft text-finance">
              <Users className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-2xl font-bold">Who we are</h2>
            <p className="mt-4 min-h-[5rem] leading-relaxed text-foreground/75" />
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <h2 className="text-3xl font-bold">Directors</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {directors.map((d) => (
            <ProfileCard key={d.name} name={d.name} description={d.description} image={d.image} />
          ))}
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <h2 className="text-3xl font-bold">Board</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((b) => (
            <ProfileCard key={b.name} name={b.name} position={b.position} description={b.description} image={b.image} />
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90">
            Contact Us
          </Link>
          <Link to="/donate" className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-secondary">
            Donate
          </Link>
        </div>
      </section>
    </div>
  );
}
