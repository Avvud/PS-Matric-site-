import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";
import { AcademicPdfList } from "@/components/AcademicPdfList";
import { academicDocuments } from "@/lib/academic-documents";

export const Route = createFileRoute("/academics/timetable")({
  head: () => ({
    meta: [
      { title: "Timetable | PS Matric" },
      { name: "description", content: "Timetable — PS Matriculation Higher Secondary School." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Timetable" subtitle="Assessment schedule and unit test timetable">
      <p>
        Use the links below to view the latest exam and unit test timetables for each class group.
      </p>
      <AcademicPdfList sections={academicDocuments.timetable} />
    </ContentPage>
  );
}
