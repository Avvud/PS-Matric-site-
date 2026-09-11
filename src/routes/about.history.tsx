import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";
import { SmartImage } from "@/components/SmartImage";

export const Route = createFileRoute("/about/history")({
  head: () => ({
    meta: [
      { title: "History | PS Matric" },
      { name: "description", content: "History — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
      { property: "og:title", content: "History | PS Matric" },
      { property: "og:description", content: "History — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="History">
      <p>
        P S Senior Secondary School was established in June 1976 with a vision of providing quality
        education to students at a highly competitive cost. The school opened its doors with 265
        students and today stands proud with a strength of 2751 students. Needless to say, the
        institution&apos;s dynamic educational environment has evolved and enlightened several generations
        of learners.
      </p>
      <p>
        The institution is a unit of P.S. Educational Society, the educational wing of P. S. Charities,
        founded in 1905, which has upheld the cause of Education with character building. The school
        was granted permanent affiliation by the CBSE on April 1, 1987.
      </p>
      <h2 className="pt-4 normal-case">Founder:</h2>
      <div className="grid gap-8 md:grid-cols-[1fr_250px] md:items-start">
        <p>
          Brahmasri Pennathur Subramanya Iyer was born in March, 1860 in a middle class family at
          Chittoor. He was a man of great courage, dedication and generosity. His graceful demeanour
          and elegance in manners made him stand out. In 1890, he was made the Commissioner for the
          Mylapore Division, a seat he retained till his death in 1901. It was at his instance and
          through his influence that the underground drainage works were done in the Mylapore Division,
          replacing the open drains that had existed before as a hotbed of infections of various kinds.
          He thought that the best use he could make of his wealth was to utilise it for the spread of
          knowledge and education of the upcoming generations. This led to the formation of the P. S.
          Charities which has expanded its service in the cause of education and stands glorious after
          100+ years. He bequeathed all his property towards P.S. Charities.
        </p>
        <figure className="md:justify-self-end">
          <SmartImage
            src="/images/Founder.png"
            alt="Shri. Pennathur Subramanya Iyer"
            className="mx-auto aspect-[4/5] w-full max-w-[250px] border-2 border-primary p-1"
          />
          <figcaption className="mt-2 text-center font-sans text-sm leading-5 text-foreground">
            Shri. Pennathur Subramanya Iyer
            <br />
            (1830- 1901)
          </figcaption>
        </figure>
      </div>
    </ContentPage>
  );
}
