import { GalleryCarousel } from "@/components/Carousels";
import { PageBanner } from "@/components/PageShell";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/site";

export function EventPage({ title }: { title: string }) {
  return (
    <>
      <PageBanner title={title} subtitle="School events and celebrations" />
      <section className="bg-background py-14">
        <div className="container-page">
          <p className="mb-8 max-w-3xl font-serif text-lg leading-8 text-foreground/85">
            Details and photographs from {title} will be added here soon.
          </p>
          <GalleryCarousel slides={IMAGES.gallery} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {IMAGES.gallery.slice(0, 6).map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-xl shadow-soft">
                <SmartImage src={image.src} alt={image.caption} className="aspect-[4/3]" />
                <figcaption className="bg-secondary px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}