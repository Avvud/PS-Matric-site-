import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/about/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission | PS Matric" },
      { name: "description", content: "Vision & Mission — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Vision & Mission | PS Matric" },
      { property: "og:description", content: "Vision & Mission — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Vision & Mission" subtitle="What we stand for">
      <h2>Our Vision</h2>
      <p>To be a school where every child is known by name, challenged by ideas and guided by values — an institution that sends confident, compassionate citizens into the world.</p>
      <h2>Our Mission</h2>
      <ul>
      <li>Deliver a rigorous, future-ready curriculum grounded in conceptual understanding.</li>
      <li>Nurture character through service, sport, art and everyday classroom culture.</li>
      <li>Support every learner with individual attention and a strong mentor system.</li>
      <li>Partner closely with parents as co-educators in a child's growth.</li>
      </ul>
      <h2>Our Core Values</h2>
      <p>Integrity, respect, curiosity, perseverance and service to community guide every decision we make on campus.</p>
    </ContentPage>
  );
}
