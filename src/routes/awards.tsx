import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Recognition | Gateway to Literacy" },
      { name: "description", content: "Awards and recognition received by Gateway to Literacy." },
      { property: "og:title", content: "Awards & Recognition | Gateway to Literacy" },
      { property: "og:description", content: "Awards and recognition received by Gateway to Literacy." },
    ],
  }),
  component: Awards,
});

/**
 * Add an award by appending an entry here.
 * - title: award name
 * - description: leave empty until copy is finalized
 * - image: optional image URL; a placeholder shows when omitted
 */
const awards: { title: string; description: string; image?: string }[] = [
  { title: "", description: "" },
  { title: "", description: "" },
];

function Awards() {
  return (
    <div>
      <section className="border-b border-border bg-ink text-background">
        <div className="container-page py-24 md:py-32">
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl">Awards &amp; Recognition</h1>
          <div className="mt-8 flex gap-2">
            <span className="h-1.5 w-16 rounded-full bg-bbb" />
            <span className="h-1.5 w-16 rounded-full bg-health" />
            <span className="h-1.5 w-16 rounded-full bg-finance" />
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="space-y-16 md:space-y-24">
          {awards.map((a, i) => (
            <article key={i} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                {a.image ? (
                  <img
                    src={a.image}
                    alt={a.title || "Award"}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-3xl border border-border object-cover shadow-soft"
                  />
                ) : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl border border-dashed border-border bg-secondary/50">
                    <ImageIcon className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
                  </div>
                )}
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="min-h-[2.5rem] text-2xl font-bold md:text-3xl">{a.title}</h2>
                <p className="mt-4 min-h-[6rem] leading-relaxed text-foreground/75">{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
