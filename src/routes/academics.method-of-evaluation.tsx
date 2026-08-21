import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/academics/method-of-evaluation")({
  head: () => ({
    meta: [
      { title: "Method of Evaluation | PS Matric" },
      { name: "description", content: "Method of Evaluation — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Method of Evaluation | PS Matric" },
      { property: "og:description", content: "Method of Evaluation — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Method of Evaluation" subtitle="Assessment for learning">
      <h2>Continuous Assessment</h2>
      <p>Class work, assignments, projects, oral assessments and practical work contribute to the internal record throughout the term.</p>
      <h2>Periodic Examinations</h2>
      <p>Unit tests, half-yearly and annual examinations follow the prescribed board pattern with detailed answer-script review.</p>
      <h2>Reporting</h2>
      <p>Parents receive comprehensive progress reports each term, followed by parent-teacher meetings for individual feedback.</p>
      <h2>Remedial Support</h2>
      <p>Students needing additional help receive structured remedial classes and revised targets.</p>
    </ContentPage>
  );
}
