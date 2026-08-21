import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/about/history")({
  head: () => ({
    meta: [
      { title: "History | PS Matric" },
      { name: "description", content: "History — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "History | PS Matric" },
      { property: "og:description", content: "History — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="History" subtitle="Six decades of learning">
      <h2>Humble Beginnings</h2>
      <p>The school began as a modest initiative of P.S.EDUCATIONAL SOCIETY to provide affordable, high quality education to families of the neighbourhood. A handful of classrooms and a few dedicated teachers formed its earliest foundation.</p>
      <h2>Growth</h2>
      <p>Over the decades the campus expanded to include science and computer laboratories, a library, sports facilities and dedicated arts spaces, while enrolment grew into the thousands.</p>
      <h2>Today</h2>
      <p>Today the school stands as one of the city's trusted matriculation institutions, with generations of families choosing it for their children, and alumni serving across the world.</p>
    </ContentPage>
  );
}
