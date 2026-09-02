import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramLayout";

export const Route = createFileRoute("/programs/financial-literacy")({
  head: () => ({
    meta: [
      { title: "Financial Literacy & Empowerment | Gateway to Literacy" },
      {
        name: "description",
        content:
          "Financial Literacy workshops introduce elementary students to earning, saving, spending, and giving through games, simulations, and piggy banks.",
      },
      { property: "og:title", content: "Financial Literacy & Empowerment" },
      { property: "og:description", content: "Money management fundamentals taught to elementary students." },
    ],
  }),
  component: () => (
    <ProgramPage
      theme="finance"
      eyebrow="Pillar Three"
      title="Financial Literacy & Empowerment"
      tagline="Earn, Save, Spend, Give — money fundamentals made playful for elementary classrooms."
      overview="Our Financial Literacy workshops introduce elementary students to fundamental economic concepts, money management, saving strategies, and smart spending. Students learn by doing: counting coins, running mini budgets, and taking home a piggy bank plus a family guidebook that turns the lesson into a household habit."
      components={[
        {
          title: "Earn, Save, Spend, Give",
          body: "Hands-on activities that make the four core money decisions concrete for young students.",
        },
        {
          title: "Games & simulations",
          body: "Interactive budgeting simulations, coin and cash identification games, and basic entrepreneurship workshops.",
        },
        {
          title: "Piggy banks & guidebooks",
          body: "Student piggy bank distribution paired with family financial guidebooks sent home after each session.",
        },
      ]}
      metrics={[
        { value: "Ongoing", label: "Participating classrooms" },
        { value: "Ongoing", label: "Financial workbooks completed" },
        { value: "Measured", label: "Math & financial proficiency gains" },
      ]}
    />
  ),
});
