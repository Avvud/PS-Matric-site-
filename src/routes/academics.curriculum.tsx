import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/academics/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum | PS Matric" },
      { name: "description", content: "Curriculum — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Curriculum | PS Matric" },
      { property: "og:description", content: "Curriculum — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Curriculum" subtitle="Structured, rigorous, joyful">
      <h2>Primary (I – V)</h2>
      <p>Activity-based learning in languages, mathematics, environmental science, art and physical education, with an emphasis on reading fluency and number sense.</p>
      <h2>Middle School (VI – VIII)</h2>
      <p>Subject specialisation begins, with laboratory work in science, computer literacy, social science projects and a third language.</p>
      <h2>Secondary (IX – X)</h2>
      <p>Matriculation syllabus with intensive preparation, regular assessments and remedial support.</p>
      <h2>Higher Secondary (XI – XII)</h2>
      <p>Streams offered in Science (Biology / Computer Science), Commerce and Arts, with career counselling and competitive-exam guidance.</p>
    </ContentPage>
  );
}
