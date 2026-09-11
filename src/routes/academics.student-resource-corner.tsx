import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";
import { AcademicPdfList } from "@/components/AcademicPdfList";
import { academicDocuments } from "@/lib/academic-documents";

export const Route = createFileRoute("/academics/student-resource-corner")({
  head: () => ({
    meta: [
      { title: "Student Resource Corner | PS Matric" },
      { name: "description", content: "Student Resource Corner — PS Matriculation Higher Secondary School." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Student Resource Corner" subtitle="Sample papers and study resources">
      <p>
        Students can use the resources below to practise and prepare for examinations.
      </p>
      <AcademicPdfList sections={academicDocuments.studentResourceCorner} />
    </ContentPage>
  );
}
