import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/academics/examination")({
  head: () => ({ meta: [{ title: "Examination | PS Matric" }, { name: "description", content: "Examination — PS Matriculation Higher Secondary School." }] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Examination" subtitle="Assessment for learning">
      <h2>Continuous Assessment</h2>
      <p>Class work, assignments, projects, oral assessments and practical work contribute to the internal record throughout the term.</p>
      <h2>Periodic Examinations</h2>
      <p>Unit tests, half-yearly and annual examinations follow the prescribed board pattern with detailed answer-script review.</p>
      <h2>Reporting</h2>
      <p>Parents receive comprehensive progress reports each term, followed by parent-teacher meetings for individual feedback.</p>
    </ContentPage>
  );
}