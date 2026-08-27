import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/academics/activity-schedule")({
  head: () => ({ meta: [{ title: "Activity Schedule | PS Matric" }, { name: "description", content: "Activity Schedule — PS Matriculation Higher Secondary School." }] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Activity Schedule" subtitle="School day and activity timings">
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
      <h2>Duration of Periods</h2>
      <ul>
        <li>First bell: 8:45 a.m.</li>
        <li>Assembly: 8:45 a.m. to 9:00 a.m.</li>
        <li>I Period: 9:00 a.m. to 9:40 a.m.</li>
        <li>II Period: 9:40 a.m. to 10:20 a.m.</li>
        <li>III Period: 10:20 a.m. to 11:00 a.m.</li>
        <li>Local break: 11:00 a.m. to 11:15 a.m.</li>
        <li>IV Period: 11:15 a.m. to 11:55 a.m.</li>
        <li>V Period: 11:55 a.m. to 12:35 p.m.</li>
        <li>VI Period: 1:05 p.m. to 1:45 p.m.</li>
        <li>VII Period: 1:45 p.m. to 2:25 p.m. (Standards I and II dispersal)</li>
        <li>Local break: 2:25 p.m. to 2:40 p.m.</li>
        <li>VIII Period: 2:40 p.m. to 3:20 p.m. (Standards III to V dispersal)</li>
        <li>IX Period: 3:20 p.m. to 4:00 p.m. (Standards VI to XII dispersal)</li>
        <li>Fine Arts and special classes: 2:40 p.m. to 3:20 p.m. for Primary, and 3:20 p.m. to 4:00 p.m. for Standards VI to VIII.</li>
      </ul>
      <h2>School Terms</h2>
      <p>The academic year is divided into three terms of four months each for the purpose of payment of fees.</p>
      <ul>
        <li>I Term: June to September</li>
        <li>II Term: October to January</li>
        <li>III Term: February to May</li>
      </ul>
    </ContentPage>
  );
}