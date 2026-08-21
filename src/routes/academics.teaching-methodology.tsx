import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/academics/teaching-methodology")({
  head: () => ({
    meta: [
      { title: "Teaching Methodology | PS Matric" },
      { name: "description", content: "Teaching Methodology — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Teaching Methodology | PS Matric" },
      { property: "og:description", content: "Teaching Methodology — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Teaching Methodology" subtitle="How we teach">
      <h2>Concept First</h2>
      <p>Lessons begin with an idea or problem rather than a definition, so students build understanding before memorising.</p>
      <h2>Active Classrooms</h2>
      <p>Group work, peer teaching, experiments, debates and field visits are built into the annual plan for every subject.</p>
      <h2>Technology as a Tool</h2>
      <p>Smart boards, simulations and curated digital resources support — but never replace — the teacher.</p>
      <h2>Mentoring</h2>
      <p>Every student is attached to a teacher-mentor who tracks academic progress and wellbeing through the year.</p>
    </ContentPage>
  );
}
