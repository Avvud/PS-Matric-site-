import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";
import { AcademicPdfList } from "@/components/AcademicPdfList";
import { academicDocuments } from "@/lib/academic-documents";

export const Route = createFileRoute("/academics/syllabus")({
  head: () => ({
    meta: [
      { title: "Syllabus | PS Matric" },
      { name: "description", content: "Syllabus — PS Matriculation Higher Secondary School." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Syllabus" subtitle="Quarterly exam and unit test portions 2026-27">
      <p>
        Latest syllabus portions and assessment updates for each class are listed below.
      </p>
      <AcademicPdfList sections={academicDocuments.syllabus} />
    </ContentPage>
  );
}
