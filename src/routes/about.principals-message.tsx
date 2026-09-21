import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/site";

export const Route = createFileRoute("/about/principals-message")({
  head: () => ({
    meta: [
      { title: "Principal’s Message | PS Matric" },
      { name: "description", content: "Principal's Message — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "Principal’s Message | PS Matric" },
      { property: "og:description", content: "Principal's Message — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Principal’s Message" subtitle="The Architect of Tomorrow">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-5">
          <p>Dear Parents and Students,</p>
          <p>It gives me great pleasure to welcome you to our school. Education, to us, is far more than the pursuit of marks. It is the patient work of shaping curious minds, kind hearts and resilient character.</p>
          <p>Every child who walks through our gates carries a distinct spark. Our teachers take it upon themselves to discover that spark and nurture it — through questions encouraged, effort celebrated and failure treated as an honest teacher.</p>
          <p>We believe a school must prepare children not only for examinations but for life: for teamwork, for disappointment, for leadership, and for the quiet responsibility of being a good human being. Our classrooms, laboratories, playgrounds and clubs are all designed with that larger purpose in mind.</p>
          <p>Parents remain our closest partners in this journey. I encourage you to stay involved, speak with our teachers often, and share your child&apos;s world with us.</p>
          <p>I invite you to visit our campus, meet our faculty, and see for yourself the warmth that has defined this institution for decades.</p>
          <p><strong>Principal [T.MEERA DEVI]</strong><br />M.A., M.Ed.</p>
        </div>
        <figure className="flex w-full flex-col items-center justify-self-center md:mt-[125px]">
          <SmartImage
            src={IMAGES.principal}
            alt="Principal T. Meera Devi"
            className="aspect-[347/463] w-full max-w-[347px] rounded-[2rem] bg-navy p-3 shadow-card"
            imgClassName="h-full w-full rounded-[1.25rem] object-cover"
          />
          <figcaption className="mt-3 text-center text-sm text-foreground/80">
            Principal [T. Meera Devi]
            <br />
            M.A., M.Ed.
          </figcaption>
        </figure>
      </div>
    </ContentPage>
  );
}
