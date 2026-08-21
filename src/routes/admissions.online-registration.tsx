import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/admissions/online-registration")({
  head: () => ({
    meta: [
      { title: "Online Registration | PS Matric" },
      { name: "description", content: "Online Registration — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Online Registration | PS Matric" },
      { property: "og:description", content: "Online Registration — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Online Registration" subtitle="Join our school">
      <h2>Admission Process</h2>
      <ul>
      <li>Fill the online registration form and pay the registration fee.</li>
      <li>Submit required documents at the school office.</li>
      <li>Interaction / assessment as applicable to the class applied for.</li>
      <li>Confirmation of admission and fee payment.</li>
      </ul>
      <h2>Documents Required</h2>
      <ul>
      <li>Birth certificate (original and copy)</li>
      <li>Transfer certificate from previous school</li>
      <li>Previous year's report card</li>
      <li>Aadhaar copy of student and parents</li>
      <li>Four passport-size photographs</li>
      </ul>
      <h2>Enquiries</h2>
      <p>Write to admissions@psmatric.in or call the school office during working hours.</p>
    </ContentPage>
  );
}
