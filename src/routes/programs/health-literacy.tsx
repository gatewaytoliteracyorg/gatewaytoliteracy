import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramLayout";

export const Route = createFileRoute("/programs/health-literacy")({
  head: () => ({
    meta: [
      { title: "Health & Wellness Literacy | Gateway to Literacy" },
      {
        name: "description",
        content:
          "Health Literacy workshops teach elementary students nutrition, hygiene, movement, and mental well-being through interactive sessions and take-home kits.",
      },
      { property: "og:title", content: "Health & Wellness Literacy" },
      { property: "og:description", content: "Interactive health workshops and hygiene kits for elementary students." },
    ],
  }),
  component: () => (
    <ProgramPage
      theme="health"
      eyebrow="Pillar Two"
      title="Health & Wellness Literacy"
      tagline="Teaching young learners how their bodies and minds work — and how to take care of both."
      overview="Our Health Literacy workshops educate elementary students on physical health, mental well-being, nutrition, and hygiene to build lifelong healthy habits. Sessions are visual, hands-on, and designed for young attention spans, with take-home materials so families can continue the lesson at the kitchen table."
      components={[
        {
          title: "Interactive workshops",
          body: "Sessions covering basic anatomy, balanced nutrition, active lifestyle choices, and germ prevention.",
        },
        {
          title: "Take-home health kits",
          body: "Personal hygiene essentials paired with fun activity workbooks students can complete at home.",
        },
        {
          title: "Group activities & storytelling",
          body: "Engaging group games, storytelling, and visual demonstrations designed for young learners.",
        },
      ]}
      metrics={[
        { value: "Ongoing", label: "Workshops delivered" },
        { value: "Ongoing", label: "Hygiene kits distributed" },
        { value: "Collected", label: "Student survey feedback" },
      ]}
    />
  ),
});
