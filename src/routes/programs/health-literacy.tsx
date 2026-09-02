import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramLayout";

export const Route = createFileRoute("/programs/health-literacy")({
  head: () => ({
    meta: [
      { title: "Health Literacy | Gateway to Literacy" },
      { name: "description", content: "Health Literacy — a Gateway to Literacy program." },
      { property: "og:title", content: "Health Literacy | Gateway to Literacy" },
      { property: "og:description", content: "Health Literacy — a Gateway to Literacy program." },
    ],
  }),
  component: () => <ProgramPage theme="health" title="Health Literacy" components={[{ title: "Workshops" }]} />,
});
