import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/admissions/fee")({
  head: () => ({ meta: [{ title: "School Fee | PS Matric" }, { name: "description", content: "School Fee — PS Matriculation Higher Secondary School." }] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="School Fee" subtitle="Fee information">
      <h2>School Terms</h2>
      <p>The academic year is divided into three terms of four months each for the purpose of payment of fees.</p>
      <ul>
        <li>I Term - June to September</li>
        <li>II Term - October to January</li>
        <li>III Term - February to May</li>
      </ul>
      <h2>Fee Structure</h2>
      <p>School fee will be collected as per the Private Schools Fee Determination Committee&apos;s Order.</p>
      <h2>Book Deposit</h2>
      <p>An approximate amount towards books and notebooks will be collected along with the I Term Fee.</p>
      <h2>Other Payments</h2>
      <p>Fine Arts fee will be charged separately for each term for Standards I to VIII depending on the nature of the art, craft or keyboard activity.</p>
      <p>Five disciplines are taught: Vocal, Dance, Keyboard, Chess and Mirudhangam.</p>
      <ul>
        <li>Standards I to III: Vocal, conducted within school timings.</li>
        <li>Standards IV to IX: Students may opt for any one of the five disciplines.</li>
        <li>Standards VI and VII: Wednesday, 3:15 to 3:45 p.m.</li>
        <li>Standards VIII and IX: Monday and Wednesday, 3:15 to 3:45 p.m.</li>
        <li>Standards IV and V: Wednesday and Thursday, 2:35 to 3:15 p.m.</li>
      </ul>
    </ContentPage>
  );
}