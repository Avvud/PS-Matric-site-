import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/PageShell";
import { EVENT_GALLERY_YEARS } from "@/lib/site";

export function EventPage({ title }: { title: string }) {
  const slug = title.toLowerCase().replaceAll(" ", "-");

  return (
    <>
      <PageBanner title={title} subtitle="School events and celebrations" />
      <section className="bg-background py-14">
        <div className="container-page">
          <p className="mb-8 max-w-3xl font-serif text-lg leading-8 text-foreground/85">
            Browse photographs from {title} by school year.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EVENT_GALLERY_YEARS.map((year) => (
              <article
                key={year}
                className="flex min-h-64 flex-col items-center justify-center rounded-xl bg-card px-6 py-8 text-center shadow-soft"
              >
                <h2 className="font-display text-3xl font-bold text-primary">
                  Events
                  <span className="mt-1 block">{year}</span>
                </h2>
                <Link
                  to="/events/$eventSlug/$year"
                  params={{ eventSlug: slug, year }}
                  className="mt-7 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-semibold text-navy-deep shadow-soft transition hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Click Here
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}