import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/site";

export const Route = createFileRoute("/about/principals-message")({
  head: () => ({
    meta: [
      { title: "Principal’s Message | PS Matric" },
      {
        name: "description",
        content:
          "Principal's Message — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY.",
      },
      { property: "og:title", content: "Principal’s Message | PS Matric" },
      {
        property: "og:description",
        content:
          "Principal's Message — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Principal’s Message" subtitle="The Architect of Tomorrow">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-5">
          <p>
            It gives me immense pleasure to welcome you to our school. We believe education goes
            beyond marks and academic excellence. Our aim is to nurture curious minds, compassionate
            hearts, confident individuals and strong character.
          </p>
          <p>
            Every child is unique with immense potential. Our dedicated teachers strive to nurture
            their talents, encourage creativity and help them learn from challenges. We prepare
            students not only for examinations but also for life, instilling teamwork, courage,
            responsibility, leadership and compassion.
          </p>
          <p>
            Our classrooms, laboratories, libraries, playgrounds and co-curricular activities
            support the holistic development of every child.
          </p>
          <p>
            Parents are our valued partners in this journey. Your involvement and encouragement play
            a vital role in your child&apos;s growth.
          </p>
          <p>
            I warmly invite you to visit our campus, interact with our faculty and experience the
            values and commitment that define our institution. Together we shall inspire every child
            to learn with curiosity, grow with confidence, lead with integrity and live with
            purpose.
          </p>
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
            M.Com., M.Ed.
          </figcaption>
        </figure>
      </div>
    </ContentPage>
  );
}
