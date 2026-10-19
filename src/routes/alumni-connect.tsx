import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MessageCircle,
  UsersRound,
} from "lucide-react";
import { PageBanner } from "@/components/PageShell";
import { CONTACT } from "@/lib/site";

const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdOGX6HjJPYuJWGXm5vmHEbTsUkzd9WLvz0n99Prej9dm7ifw/viewform?usp=publish-editor";

export const Route = createFileRoute("/alumni-connect")({
  head: () => ({
    meta: [
      { title: "Alumni Connect | PS Matric" },
      {
        name: "description",
        content:
          "Reconnect with PS Matric, share your journey and support the next generation of students.",
      },
      { property: "og:title", content: "Alumni Connect | PS Matric" },
      {
        property: "og:description",
        content:
          "Reconnect with PS Matric, share your journey and support the next generation of students.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageBanner
        title="Alumni Connect"
        subtitle="Your journey began here. Stay part of the PS Matric community."
      />
      <section className="bg-background py-12 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Once a part of PS Matric, always part of our community
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase text-primary sm:text-3xl">
              Keep the connection alive
            </h2>
            <p className="mt-4 font-serif text-base leading-7 text-foreground/80 sm:text-lg">
              Whether you left our classrooms recently or many years ago, your experiences are an
              important part of the school’s story. Reconnect with your school, share your journey
              and help today’s students imagine what comes next.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-secondary p-6 shadow-soft">
              <UsersRound className="h-7 w-7 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-black">
                Reconnect
              </h3>
              <p className="mt-2 font-serif leading-7 text-foreground/80">
                Share your batch and updates so we can help you stay in touch with the wider school
                community.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-secondary p-6 shadow-soft">
              <GraduationCap className="h-7 w-7 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-black">
                Inspire students
              </h3>
              <p className="mt-2 font-serif leading-7 text-foreground/80">
                Offer to share your learning and career experiences with students exploring their
                own paths.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-secondary p-6 shadow-soft">
              <BriefcaseBusiness className="h-7 w-7 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-black">
                Share opportunities
              </h3>
              <p className="mt-2 font-serif leading-7 text-foreground/80">
                Let the school know about internships, career guidance or other opportunities that
                could benefit students and fellow alumni.
              </p>
            </article>
          </div>

          <div className="mt-12 grid gap-8 rounded-2xl bg-navy-deep p-7 text-cream sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">
                Take the next step
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase sm:text-3xl">
                Tell us where your journey has taken you
              </h2>
              <p className="mt-3 max-w-2xl font-serif leading-7 text-cream/80">
                Register your details, including your name, school batch and current profession. You
                can also let us know how you would like to stay involved with PS Matric.
              </p>
              <p className="mt-4 flex items-center gap-2 font-serif text-sm text-cream/75">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                Questions? Email us at{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-semibold text-cream link-underline"
                >
                  {CONTACT.email}
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 font-semibold text-navy-deep transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
              >
                Register as an alum
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-cream/30 px-5 py-3 font-semibold text-cream transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email the school
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
