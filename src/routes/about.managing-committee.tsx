import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/about/managing-committee")({
  head: () => ({
    meta: [
      { title: "Managing Committee | PS Matric" },
      { name: "description", content: "Managing Committee — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Managing Committee | PS Matric" },
      { property: "og:description", content: "Managing Committee — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Managing Committee" subtitle="School leadership and governance">
      <h2>Members of the P.S.EDUCATIONAL Society 2026-27</h2>
      <ul>
        <li>Dr. Sri. K.V.S. Gopalakrishnan - President</li>
        <li>Sri. C.V. Krishnan - Secretary</li>
        <li>Sri. P.S. Prabhakar - Treasurer</li>
        <li>Sri. PC. Ramakrishna - Trustee Member</li>
        <li>Sri. K.V. Ramani - Trustee Member</li>
        <li>Dr. Sri. T.K. Varadarajan - Trustee Member</li>
        <li>Sri. T.G. Suresh - Trustee Member</li>
        <li>Sri. K. Harishankar - Trustee Member</li>
        <li>Sri. S. Chandrasekaran - Trustee Member</li>
        <li>Gp. Capt. (Retd) R. Vijayakumar - Honorary Member</li>
        <li>Dr. Dharini Krishnan - Honorary Member</li>
        <li>Col. C. R. Devanathan - Honorary Member</li>
        <li>Smt. Shyamala Jayaraman - Honorary Member</li>
        <li>Sri. R.D. Dhamodharan - Honorary Member</li>
      </ul>
      <h2>School Managing Committee 2026-27</h2>
      <ul>
        <li>Sri. K. Hari Shankar - President</li>
        <li>Sri. T.G. Shankar - Secretary / Correspondent</li>
        <li>Dr. Sri. R. Dhamodharan - Member</li>
        <li>Dr. Smt. Dharini Krishnan - Member</li>
        <li>Sri. R. Uppili - Member</li>
        <li>Smt. T. Meeradevi - Principal</li>
        <li>Smt. Jithender Kataria - Member (Vice Principal)</li>
        <li>Smt. T. Rama Kalpana - Member (Vice Principal)</li>
        <li>Smt. Sudha Prabha - Member (Teacher)</li>
        <li>Smt. Usha Balasubramaniam - Member (Office Staff)</li>
        <li>Sri. V. Sriram - President (PTA)</li>
      </ul>
      <h2>Parents Teachers Association</h2>
      <h3>Executive Committee Members 2026-27</h3>
      <ul>
        <li>Sri. V. Sriram - President</li>
        <li>Smt. A. Dhivya - Vice President</li>
        <li>Sri. T.G. Shankar - Treasurer / Correspondent</li>
        <li>Sri. M. Venkatesan - Secretary (P)</li>
        <li>Smt. S. Santhi - Joint Secretary / Parent</li>
        <li>Smt. T. Meera Devi - Secretary / Principal</li>
        <li>Smt. T. Rama Kalpana - Joint Secretary / Vice Principal</li>
        <li>Smt. Eswari - Member (P)</li>
        <li>Smt. V. Ramachandran - Member (P)</li>
        <li>Smt. Jithendar Kataria - Member (Vice Principal)</li>
        <li>Sri. Boopathi - Member (P)</li>
      </ul>
    </ContentPage>
  );
}