import { createFileRoute } from "@tanstack/react-router";
import { SchoolDashboard } from "@/components/site/SchoolDashboard";

export const Route = createFileRoute("/partner-schools")({
  head: () => ({
    meta: [
      { title: "Partner Schools & Outreach Dashboard | Gateway to Literacy" },
      {
        name: "description",
        content:
          "Track Gateway to Literacy outreach across 43 Wake County elementary schools: economic need, proficiency, outreach status, and service type.",
      },
      { property: "og:title", content: "Partner Schools & Outreach Dashboard" },
      { property: "og:description", content: "Filterable outreach tracking across 43 target elementary schools." },
    ],
  }),
  component: PartnerSchools,
});

function PartnerSchools() {
  return (
    <div className="container-page py-16 md:py-24">
      <p className="eyebrow text-muted-foreground">Partner schools</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">
        School tracking & outreach dashboard
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-foreground/75">
        We prioritize schools by economic need and proficiency data. This live tracker shows every school on our target
        list, where outreach stands today, and which pillar has been delivered.
      </p>
      <div className="mt-12">
        <SchoolDashboard />
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        Proficiency and economically disadvantaged figures are drawn from publicly reported district data.
      </p>
    </div>
  );
}
