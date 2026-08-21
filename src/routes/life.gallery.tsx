import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/PageShell";
import { GalleryCarousel } from "@/components/Carousels";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/site";

export const Route = createFileRoute("/life/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | PS Matric" },
      {
        name: "description",
        content: "Photographs of classrooms, laboratories, sports, events and campus life at PS Matric.",
      },
      { property: "og:title", content: "Gallery | PS Matric" },
      { property: "og:description", content: "Moments from campus life at PS Matric." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageBanner title="Gallery" subtitle="Moments from campus life" />
      <section className="bg-background py-14">
        <div className="container-page">
          <GalleryCarousel slides={IMAGES.gallery} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {IMAGES.gallery.map((g) => (
              <figure key={g.src} className="group overflow-hidden rounded-xl shadow-soft">
                <SmartImage
                  src={g.src}
                  alt={g.caption}
                  className="aspect-[4/3]"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="bg-secondary px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
