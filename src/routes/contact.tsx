import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Gateway to Literacy" },
      { name: "description", content: "Contact Gateway to Literacy." },
      { property: "og:title", content: "Contact Us | Gateway to Literacy" },
      { property: "og:description", content: "Contact Gateway to Literacy." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="border-b border-border bg-ink text-background">
        <div className="container-page py-24 md:py-32">
          <h1 className="text-4xl font-bold leading-[1.05] md:text-6xl">Contact Us</h1>
          <div className="mt-8 flex gap-2">
            <span className="h-1.5 w-16 rounded-full bg-bbb" />
            <span className="h-1.5 w-16 rounded-full bg-health" />
            <span className="h-1.5 w-16 rounded-full bg-finance" />
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-soft sm:p-4">
          <iframe
            title="Gateway to Literacy contact form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdJpaQXG8-XyxaxLsVhzEWo8ULi-vzw5Y4wSIZxdnccIEBTVQ/viewform?embedded=true"
            className="h-[720px] w-full rounded-2xl border-0 sm:h-[640px]"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
}
