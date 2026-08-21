import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/about/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | PS Matric" },
      { name: "description", content: "Testimonials — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Testimonials | PS Matric" },
      { property: "og:description", content: "Testimonials — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Testimonials" subtitle="What our community says">
      <h2>Parents</h2>
      <p>&ldquo;The teachers know my daughter as a person, not a roll number. That has made all the difference in her confidence.&rdquo; — Parent, Class VIII</p>
      <h2>Students</h2>
      <p>&ldquo;There is always something happening — a club, a match, a science fair. School never feels like a chore.&rdquo; — Student, Class XI</p>
      <h2>Alumni</h2>
      <p>&ldquo;I carry the discipline and warmth of this school into everything I do today.&rdquo; — Alumnus, Batch of 2016</p>
    </ContentPage>
  );
}
