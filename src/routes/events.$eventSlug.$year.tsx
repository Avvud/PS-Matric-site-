import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { PageBanner } from "@/components/PageShell";
import { SmartImage } from "@/components/SmartImage";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { EVENT_GALLERIES } from "@/lib/event-galleries";

export const Route = createFileRoute("/events/$eventSlug/$year")({
  head: () => ({
    meta: [
      { title: "Event Gallery | PS Matric" },
      {
        name: "description",
        content: "Event photographs from PS Matriculation Higher Secondary School.",
      },
    ],
  }),
  component: EventYearGallery,
});

function EventYearGallery() {
  const { eventSlug, year } = Route.useParams();
  const event = EVENT_GALLERIES[eventSlug as keyof typeof EVENT_GALLERIES];
  const gallery = event?.years[year];

  if (!event || !gallery) {
    return (
      <>
        <PageBanner
          title="Gallery not found"
          subtitle="The requested event or school year is unavailable."
        />
        <section className="bg-background py-14">
          <div className="container-page">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-semibold text-primary underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Return to home
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageBanner title={`${event.title} ${year}`} subtitle="Event photographs" />
      <section className="bg-background py-14">
        <div className="container-page">
          <a
            href={`/events/${eventSlug}`}
            className="mb-8 inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All {event.title} years
          </a>
          {gallery.photos.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.photos.map((photo) => (
                <figure key={photo.src} className="overflow-hidden rounded-xl shadow-soft">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        aria-label={`Expand ${event.title} photo`}
                        className="block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <SmartImage
                          src={photo.thumbnail}
                          alt={`${event.title} ${year}`}
                          className="aspect-[4/3]"
                        />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl border-0 bg-transparent p-2 shadow-none">
                      <DialogTitle className="sr-only">{`${event.title} ${year} photo`}</DialogTitle>
                      <img
                        src={photo.src}
                        alt={`${event.title} ${year}`}
                        decoding="async"
                        className="mx-auto max-h-[85vh] w-auto max-w-full rounded object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </figure>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-card px-6 py-12 text-center shadow-soft">
              <ImageIcon className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden />
              <p className="mt-4 font-display text-xl font-semibold text-primary">
                Photos for this year will be added soon.
              </p>
              <p className="mt-2 font-serif text-sm text-muted-foreground">
                Add images to{" "}
                <code className="rounded bg-muted px-2 py-1">{gallery.folderUrl}</code> and list
                their filenames in <code className="rounded bg-muted px-2 py-1">photos</code> in{" "}
                <code className="rounded bg-muted px-2 py-1">src/lib/event-galleries.ts</code>, then
                run{" "}
                <code className="rounded bg-muted px-2 py-1">npm run optimize:event-images</code>.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
