import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/life/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure | PS Matric" },
      { name: "description", content: "Infrastructure — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Infrastructure | PS Matric" },
      { property: "og:description", content: "Infrastructure — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Infrastructure" subtitle="Spaces built for learning">
      <h2>Classrooms</h2>
      <p>Airy, well-lit classrooms equipped with smart boards and ergonomic seating.</p>
      <h2>Laboratories</h2>
      <p>Dedicated physics, chemistry, biology and computer laboratories with modern equipment and safety protocols.</p>
      <h2>Library</h2>
      <p>A growing collection of reference books, fiction, periodicals and digital resources with quiet reading spaces.</p>
      <h2>Sports</h2>
      <p>Playground, indoor games hall, basketball and volleyball courts, and coaching for athletics.</p>
      <h2>Auditorium &amp; Arts</h2>
      <p>A multipurpose auditorium along with music, dance and art rooms.</p>
    </ContentPage>
  );
}
