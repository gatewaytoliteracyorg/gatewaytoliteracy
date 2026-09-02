import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramLayout";

export const Route = createFileRoute("/programs/bright-beginnings-bundles")({
  head: () => ({
    meta: [
      { title: "Bright Beginnings Bundles (BBB) | Gateway to Literacy" },
      {
        name: "description",
        content:
          "Bright Beginnings Bundles deliver curriculum workbooks, reading books, school supplies, and learning kits to low-income elementary students.",
      },
      { property: "og:title", content: "Bright Beginnings Bundles (BBB)" },
      { property: "og:description", content: "Early childhood literacy kits and classroom workshops for elementary students." },
    ],
  }),
  component: () => (
    <ProgramPage
      theme="bbb"
      eyebrow="Pillar One"
      title="Bright Beginnings Bundles (BBB)"
      tagline="Early childhood literacy kits placed directly into the hands of elementary students who need them most."
      overview="Bright Beginnings Bundles focuses on early childhood literacy through essential learning kits distributed directly to elementary students. Each bundle pairs age-appropriate reading books with a custom curriculum workbook and the supplies a student needs to use them, then is reinforced by in-classroom reading sessions led by trained student volunteers."
      components={[
        {
          title: "Workbooks & reading books",
          body: "Custom curriculum workbooks paired with age-appropriate reading books selected for each grade band.",
        },
        {
          title: "Supplies & learning kits",
          body: "Essential school supplies and hands-on learning kits tailored to low-income elementary students.",
        },
        {
          title: "Classroom workshops",
          body: "Interactive classroom workshops and reading sessions led by trained student volunteers.",
        },
      ]}
      recognition={{
        title: "2nd Place Nationally — FBLA Community Service Presentation",
        body: "The BBB implementation earned 2nd place at the Future Business Leaders of America National Leadership Conference in the Community Service Presentation event, recognizing the program's measurable literacy outcomes and sustainable volunteer model.",
      }}
      metrics={[
        { value: "2", label: "Schools served to date" },
        { value: "Growing", label: "Bundles delivered to classrooms" },
        { value: "Tracked", label: "Reading engagement gains per session" },
      ]}
    />
  ),
});
