import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/about/advisory-board")({
  head: () => ({
    meta: [
      { title: "Advisory Board | PS Matric" },
      { name: "description", content: "Advisory Board — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Advisory Board | PS Matric" },
      { property: "og:description", content: "Advisory Board — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Advisory Board" subtitle="Guidance and governance">
      <h2>Board of Management</h2>
      <p>The school is governed by the managing committee of P.S.EDUCATIONAL SOCIETY, supported by an advisory board of educationists, alumni and professionals.</p>
      <ul>
      <li>Chairperson — [Name]</li>
      <li>Secretary — [Name]</li>
      <li>Treasurer — [Name]</li>
      <li>Academic Advisor — [Name]</li>
      <li>Alumni Representative — [Name]</li>
      </ul>
      <p>The board meets regularly to review academic performance, infrastructure planning, staff development and student welfare.</p>
    </ContentPage>
  );
}
