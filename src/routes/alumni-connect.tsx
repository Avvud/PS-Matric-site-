import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/alumni-connect")({
  head: () => ({
    meta: [
      { title: "Alumni Connect | PS Matric" },
      { name: "description", content: "Alumni Connect — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Alumni Connect | PS Matric" },
      { property: "og:description", content: "Alumni Connect — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Alumni Connect" subtitle="Once ours, always ours">
      <h2>Stay Connected</h2>
      <p>Our alumni serve across medicine, engineering, law, the arts, defence, business and public service. The alumni association keeps that network alive through reunions, mentoring and campus events.</p>
      <h2>Give Back</h2>
      <ul>
      <li>Mentor current students on careers and higher studies.</li>
      <li>Speak at assemblies, club sessions and career fairs.</li>
      <li>Support scholarships and infrastructure projects.</li>
      </ul>
      <h2>Register</h2>
      <p>Write to info@psmatric.in with your name, batch year and current profession to be added to the alumni directory.</p>
    </ContentPage>
  );
}
