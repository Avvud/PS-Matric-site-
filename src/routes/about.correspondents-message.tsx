import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/site";

export const Route = createFileRoute("/about/correspondents-message")({
  head: () => ({
    meta: [
      { title: "Correspondent’s Message | PS Matric" },
      {
        name: "description",
        content:
          "A message from the Correspondent of PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY.",
      },
      { property: "og:title", content: "Correspondent’s Message | PS Matric" },
      {
        property: "og:description",
        content:
          "A message from the Correspondent of PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="Correspondent’s Message" subtitle="From the Correspondent’s Desk">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-5">
          <p>
            Our respectful salutations to our revered Founder, Sri Pennathur Subramania Iyer, a true
            philanthropist who devoted his wealth, efforts and vision to the cause of education,
            whose ideals continue to illuminate our path.
          </p>
          <p>Welcome to the website of P.S. Matriculation Higher Secondary School.</p>
          <p className="font-semibold italic text-gold">“Tamaso Mā Jyotir Gamaya”</p>
          <p>
            This timeless prayer beautifully reflects the purpose of education: to dispel ignorance,
            awaken knowledge, nurture values and empower every child to move towards a brighter and
            more meaningful future.
          </p>
          <p>
            At P.S. Matriculation Higher Secondary School, we strive to blend our rich heritage with
            the aspirations of the present, providing our students with a safe, nurturing and
            inspiring environment in which they can learn, grow and serve society in all walks of
            life.
          </p>
          <p>
            Guided by the ideals of our Founder and strengthened by the commitment of our teachers,
            staff, parents, alumni and well-wishers, we remain dedicated to academic excellence,
            character, discipline and responsible citizenship.
          </p>
          <p>
            May the light of knowledge and wisdom continue to guide every member of our school
            family.
          </p>
          <p className="font-semibold italic text-gold">Tamaso Mā Jyotir Gamaya.</p>
        </div>
        <figure className="flex w-full flex-col items-center justify-self-center md:mt-4">
          <SmartImage
            src={IMAGES.correspondent}
            alt="Correspondent T.G. Shankar"
            className="aspect-[3/4] w-full max-w-[280px] rounded-[2rem] bg-navy p-3 shadow-card"
            imgClassName="h-full w-full rounded-[1.25rem] object-cover"
          />
          <figcaption className="mt-3 text-center text-sm text-foreground/80">
            Honorary Correspondent [T.G. Shankar]
            <br />
            B.Sc., ACA
          </figcaption>
        </figure>
      </div>
    </ContentPage>
  );
}
