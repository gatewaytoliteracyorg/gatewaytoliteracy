import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramLayout";

export const Route = createFileRoute("/programs/bright-beginnings-bundles")({
  head: () => ({
    meta: [
      { title: "Bright Beginnings Bundles | Gateway to Literacy" },
      { name: "description", content: "Bright Beginnings Bundles — a Gateway to Literacy program." },
      { property: "og:title", content: "Bright Beginnings Bundles | Gateway to Literacy" },
      { property: "og:description", content: "Bright Beginnings Bundles — a Gateway to Literacy program." },
    ],
  }),
  component: () => (
    <ProgramPage
      theme="bbb"
      title="Bright Beginnings Bundles"
      components={[
        { title: "Reading level books" },
        { title: "Notebooks" },
        { title: "Pencils" },
        { title: "Coloring supplies" },
        { title: "Motivational cards" },
      ]}
    />
  ),
});
