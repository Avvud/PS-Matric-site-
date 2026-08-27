import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/about/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities | PS Matric" },
      { name: "description", content: "Facilities — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Facilities | PS Matric" },
      { property: "og:description", content: "Facilities — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Facilities" subtitle="Learning, safety and enrichment">
      <h2>Extra Curricular Activities</h2>
      <ol>
        <li>Various associations and clubs function in the school, including the Literary Association, Sanskrit Club, Socio-Economic Club, Science Club and Eco Club. Membership is open to students of Standards VII to XII and is optional. Activities include discussions, debates, guest lectures, project work, exhibitions, educational excursions and field trips.</li>
        <li>Quiz programmes are conducted for Standards I to XII according to their respective levels on an inter-house basis.</li>
        <li>Elocution, handwriting and recitation competitions are held for Standards I to V.</li>
        <li>Scouts and Guides and RSP membership are optional.</li>
        <li>Clubs and Bull Bull for Standards IV and V are optional.</li>
        <li>Essay-writing, extempore speech and debate competitions are conducted for Standards VI to XII.</li>
        <li>Arts and crafts competitions are held for all standards.</li>
        <li>Students are encouraged and guided to take part in various inter-school competitions.</li>
        <li>Students are encouraged and trained to take part in zonal and district-level sports and games meets. Inter-house matches are also held.</li>
      </ol>
      <h2>Students Safety Insurance Scheme</h2>
      <p>An innovative Students Safety Insurance Scheme covering all the students of the school has been introduced. The premium for this insurance scheme is borne by the Management.</p>
      <h2>Smart Class</h2>
      <p>Classroom learning has undergone a metamorphosis. Smart Classes enhance children&apos;s learning skills by empowering teachers with computer-based technology such as smart panels. All classrooms and two labs in the school have this facility.</p>
    </ContentPage>
  );
}