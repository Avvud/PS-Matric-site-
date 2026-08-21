import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";

export const Route = createFileRoute("/about/founders-vision")({
  head: () => ({
    meta: [
      { title: "Founders Vision | PS Matric" },
      { name: "description", content: "Founders Vision — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Founders Vision | PS Matric" },
      { property: "og:description", content: "Founders Vision — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Founders Vision" subtitle="The idea that started it all">
      <h2>A School for Every Family</h2>
      <p>Our founders believed that quality education should never be a privilege of a few. They envisioned a school where children from every background could learn together with dignity.</p>
      <h2>Values Before Everything</h2>
      <p>They insisted that discipline, honesty and service be taught as seriously as mathematics and science — a principle that continues to shape school life today.</p>
      <h2>Carrying It Forward</h2>
      <p>Each new facility, programme and appointment is measured against that founding intent: does it serve the child, and does it serve the community?</p>
    </ContentPage>
  );
}
