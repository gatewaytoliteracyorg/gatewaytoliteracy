import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramLayout";

export const Route = createFileRoute("/programs/financial-literacy")({
  head: () => ({
    meta: [
      { title: "Financial Literacy | Gateway to Literacy" },
      { name: "description", content: "Financial Literacy — a Gateway to Literacy program." },
      { property: "og:title", content: "Financial Literacy | Gateway to Literacy" },
      { property: "og:description", content: "Financial Literacy — a Gateway to Literacy program." },
    ],
  }),
  component: () => <ProgramPage theme="finance" title="Financial Literacy" components={[{ title: "Workshops" }]} />,
});
