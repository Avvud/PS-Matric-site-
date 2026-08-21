import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/admissions/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | PS Matric" },
      { name: "description", content: "FAQs — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "FAQs | PS Matric" },
      { property: "og:description", content: "FAQs — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="FAQs" subtitle="Admission questions answered">
      <h2>When do admissions open?</h2>
      <p>Registration for the next academic year typically opens in December and closes once seats are filled.</p>
      <h2>Is there an entrance test?</h2>
      <p>Classes I to VIII involve an informal interaction. Classes IX and above have a written assessment in core subjects.</p>
      <h2>What is the medium of instruction?</h2>
      <p>English, with Tamil and Hindi offered as language options.</p>
      <h2>Is transport available?</h2>
      <p>Yes, school buses operate on major routes across the city. Details are available at the office.</p>
      <h2>What are the school timings?</h2>
      <p>8:45 a.m. to 3:45 p.m., Monday to Friday, with select Saturdays for activities.</p>
    </ContentPage>
  );
}
