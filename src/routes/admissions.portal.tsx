import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/admissions/portal")({
  head: () => ({ meta: [{ title: "Student & Parent Portal | PS Matric" }, { name: "description", content: "Student and Parent Portal — PS Matriculation Higher Secondary School." }] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Student & Parent Portal" subtitle="School information for students and parents">
      <h2>Examinations</h2>
      <p>Academic performance of students from Standards I to VII will be assessed through Continuous Comprehensive Evaluation (C.C.E.).</p>
      <ul>
        <li>Formative (a and b) tests will be held periodically to assess students term-wise for 40 marks, which will be added to the terminal examinations.</li>
        <li>A summative examination will be held for 60 marks at the end of each term. Students may not be allowed to take the summative examination if they are absent for formative a and b tests.</li>
        <li>The Principal&apos;s decision will be final and binding for students absenting themselves or not cooperating to write formative or summative tests without a valid reason.</li>
        <li>For Classes VIII to XII, the usual pattern of mid-term tests and terminal examinations will be followed.</li>
        <li>Students in default of prescribed fees or other outstanding arrears may not be allowed to write tests or examinations.</li>
        <li>I Terminal and II Terminal examination answer papers, after valuation, will be shown to parents for perusal. In case of a complaint, the Principal will review the scripts.</li>
        <li>Annual examination papers will not be returned to parents, guardians, private tutors or any other persons.</li>
        <li>Promotion results will be announced on predetermined dates and intimated by post whenever necessary.</li>
        <li>Parents are expected to ensure regularity and discipline, take a keen interest in their children&apos;s progress, encourage extracurricular participation and respond to school-function invitations.</li>
      </ul>
      <h2>School Work Schedule</h2>
      <ul>
        <li>School works from Monday to Friday for Standards LKG to V. Prior announcement will be made if Standards I to V work on Saturdays.</li>
        <li>School works from Monday to Saturday for Standards VI to XII.</li>
        <li>Fine Arts sessions for Standards I to III are conducted within school timings.</li>
        <li>Club activities, excursions, field trips and competitions are organised on Fridays and Saturdays within school timings for Standards VI to IX.</li>
      </ul>
      <h2>School Timings</h2>
      <ul>
        <li>LKG: 8:45 a.m. to 12:00 noon</li>
        <li>UKG: 8:45 a.m. to 1:45 p.m.</li>
        <li>Standards I and II: 8:45 a.m. to 2:25 p.m.</li>
        <li>Standards III to V: 8:45 a.m. to 3:20 p.m.</li>
        <li>Standards VI to XII: 8:45 a.m. to 4:00 p.m.</li>
        <li>Lunch break: 12:35 p.m. to 1:05 p.m.</li>
        <li>Morning assembly: 8:45 a.m. to 9:00 a.m.</li>
      </ul>
      <h2>School Terms</h2>
      <ul>
        <li>I Term: June to September</li>
        <li>II Term: October to January</li>
        <li>III Term: February to May</li>
      </ul>
      <h2>Withdrawing Wards</h2>
      <ol>
        <li>When a student is withdrawn during any term, the whole term fee will be charged. The Transfer Certificate will not be issued unless the full term fee is paid. Fees once paid will not be refunded.</li>
        <li>Application for a Transfer Certificate at the close of an academic year must be made in the prescribed form by the parent or guardian before the date specified by the Principal.</li>
        <li>For a Transfer Certificate applied for after the specified date, the I Term fee of the ensuing year must be paid. No Transfer Certificate will be issued unless all arrears due to the school are paid in full.</li>
        <li>The Transfer Certificate will be issued, but the parent or guardian must get it countersigned by the Inspector of Matriculation Schools.</li>
      </ol>
    </ContentPage>
  );
}