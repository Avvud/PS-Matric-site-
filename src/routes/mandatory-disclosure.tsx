import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/mandatory-disclosure")({
  head: () => ({
    meta: [
      { title: "Mandatory Disclosure | PS Matric" },
      { name: "description", content: "Mandatory Disclosure — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Mandatory Disclosure | PS Matric" },
      { property: "og:description", content: "Mandatory Disclosure — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Mandatory Disclosure" subtitle="Statutory information">
      <h2>General Information</h2>
      <ul>
      <li>Name of school: PS Matriculation Higher Secondary School</li>
      <li>Managed by: P.S.EDUCATIONAL SOCIETY</li>
      <li>Recognition / affiliation details: [To be updated]</li>
      <li>School code: [To be updated]</li>
      </ul>
      <h2>Documents &amp; Information</h2>
      <p>Copies of the recognition certificate, trust deed, no-objection certificate, building safety certificate, fire safety certificate and fee structure are available at the school office and will be published here.</p>
      <h2>Staff Details</h2>
      <p>Principal, teaching and non-teaching staff details, along with teacher-student ratio, are available on request.</p>
    </ContentPage>
  );
}
