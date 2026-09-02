import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, School } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Gateway to Literacy" },
      {
        name: "description",
        content:
          "Reach Gateway to Literacy to bring Bright Beginnings Bundles, health, or financial literacy workshops to your elementary school.",
      },
      { property: "og:title", content: "Contact Gateway to Literacy" },
      { property: "og:description", content: "Partner with us, volunteer, or bring a program to your school." },
    ],
  }),
  component: Contact,
});

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container-page py-16 md:py-24">
      <p className="eyebrow text-muted-foreground">Contact us</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">Let's build the next bridge.</h1>
      <p className="mt-5 max-w-2xl text-lg text-foreground/75">
        Educators, principals, volunteers, and donors — tell us what your students need and we'll follow up.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <form
          className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-soft"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Thanks! We'll be in touch soon.");
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Name
              <input required name="name" className={`mt-2 ${inputClass}`} placeholder="Your name" />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input required type="email" name="email" className={`mt-2 ${inputClass}`} placeholder="you@school.org" />
            </label>
          </div>
          <label className="block text-sm font-medium">
            School or organization
            <input name="school" className={`mt-2 ${inputClass}`} placeholder="Elementary school name" />
          </label>
          <label className="block text-sm font-medium">
            Program of interest
            <select name="program" className={`mt-2 ${inputClass}`} defaultValue="">
              <option value="" disabled>
                Select a program
              </option>
              <option>Bright Beginnings Bundles</option>
              <option>Health Literacy</option>
              <option>Financial Literacy</option>
              <option>Volunteering</option>
              <option>Donations & sponsorship</option>
            </select>
          </label>
          <label className="block text-sm font-medium">
            Message
            <textarea required name="message" rows={5} className={`mt-2 ${inputClass}`} placeholder="How can we help?" />
          </label>
          <button
            type="submit"
            className="rounded-full bg-health px-7 py-3 text-sm font-semibold text-on-accent transition hover:opacity-90"
          >
            Send message
          </button>
          {sent && <p className="text-sm text-success">Message received — we'll respond within a few days.</p>}
        </form>

        <div className="space-y-5">
          {[
            { icon: Mail, t: "Email", b: "hello@gatewaytoliteracy.org" },
            { icon: School, t: "Bring us to your school", b: "We schedule bundles and workshops around your classroom calendar." },
            { icon: MapPin, t: "Service area", b: "Wake County, North Carolina elementary schools." },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-bbb-soft text-bbb">
                <c.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-bold">{c.t}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
