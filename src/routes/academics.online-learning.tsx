import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/academics/online-learning")({
  head: () => ({
    meta: [
      { title: "Online Learning | PS Matric" },
      { name: "description", content: "Online Learning — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Online Learning | PS Matric" },
      { property: "og:description", content: "Online Learning — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Online Learning" subtitle="Learning beyond the classroom">
      <h2>Digital Classrooms</h2>
      <p>Recorded lessons, worksheets and revision material are shared through the school's learning portal.</p>
      <h2>Live Sessions</h2>
      <p>Doubt-clearing and revision sessions are scheduled before examinations and during school closures.</p>
      <h2>Parent Access</h2>
      <p>Parents can track assignments, attendance and circulars through the same portal.</p>
    </ContentPage>
  );
}
