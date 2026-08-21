import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/life/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements | PS Matric" },
      { name: "description", content: "Achievements — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Achievements | PS Matric" },
      { property: "og:description", content: "Achievements — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Achievements" subtitle="Celebrating our students">
      <h2>Academics</h2>
      <p>Consistent board results with state-level rank holders and subject centums across streams.</p>
      <h2>Sports</h2>
      <p>District and state level representation in athletics, chess, basketball and volleyball.</p>
      <h2>Arts &amp; Culture</h2>
      <p>Prizes at inter-school cultural festivals in music, dance, elocution and quizzing.</p>
      <h2>Science &amp; Innovation</h2>
      <p>Awards at regional science exhibitions and olympiads.</p>
    </ContentPage>
  );
}
