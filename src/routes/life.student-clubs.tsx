import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/life/student-clubs")({
  head: () => ({
    meta: [
      { title: "Student Clubs | PS Matric" },
      { name: "description", content: "Student Clubs — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Student Clubs | PS Matric" },
      { property: "og:description", content: "Student Clubs — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Student Clubs" subtitle="Where interests grow">
      <h2>Clubs on Campus</h2>
      <ul>
      <li>Science &amp; Robotics Club</li>
      <li>Literary and Debate Club</li>
      <li>Maths Club</li>
      <li>Eco Club and Green Brigade</li>
      <li>Music, Dance and Drama</li>
      <li>Fine Arts and Photography</li>
      <li>Sports Clubs</li>
      <li>Community Service and NSS</li>
      </ul>
      <p>Clubs meet weekly and organise inter-house events, exhibitions and outreach activities through the year.</p>
    </ContentPage>
  );
}
