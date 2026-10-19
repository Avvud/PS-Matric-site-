import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { PageBanner } from "@/components/PageShell";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | PS Matric" },
      {
        name: "description",
        content: "Address, phone number and email contact for PS Matric, Chennai.",
      },
      { property: "og:title", content: "Contact Us | PS Matric" },
      {
        property: "og:description",
        content: "Get in touch with PS Matriculation Higher Secondary School.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" subtitle="We would love to hear from you" />
      <section className="bg-background py-14">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">
              We are here to help
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase text-primary sm:text-3xl">
              Get in touch with our school
            </h2>
            <p className="mt-3 font-serif leading-7 text-foreground/80">
              Contact the school office for enquiries about admissions, school information or a
              campus visit. We look forward to hearing from you.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-secondary p-6 shadow-soft">
              <MapPin className="h-6 w-6 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-black">Visit Us</h3>
              <p className="mt-2 font-serif text-sm leading-6 text-foreground/80">
                {CONTACT.address}
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=P.S.+Matriculation+Higher+Secondary+School%2C+No.214%2C+R.K.+Mutt+Road%2C+Mylapore%2C+Chennai+-+600004"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-primary link-underline"
              >
                Get directions <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="rounded-2xl bg-secondary p-6 shadow-soft">
              <Phone className="h-6 w-6 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-black">Call Us</h3>
              <p className="mt-2 font-serif text-sm leading-6 text-foreground/80">
                Speak with the school office during office hours.
              </p>
              <a
                href={`tel:${CONTACT.phone}`}
                className="mt-4 inline-block font-semibold link-underline"
              >
                {CONTACT.phone}
              </a>
            </div>
            <div className="rounded-2xl bg-secondary p-6 shadow-soft">
              <Mail className="h-6 w-6 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-black">Email Us</h3>
              <p className="mt-2 font-serif text-sm leading-6 text-foreground/80">
                Send your enquiry to the school and our team will be glad to assist.
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-4 inline-block break-all font-semibold link-underline"
              >
                {CONTACT.email}
              </a>
            </div>
            <div className="rounded-2xl bg-secondary p-6 shadow-soft">
              <Clock className="h-6 w-6 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-black">
                Office Hours
              </h3>
              <p className="mt-2 font-serif text-sm leading-6 text-foreground/80">
                Monday to Friday
              </p>
              <p className="mt-1 font-semibold text-foreground">9:00 a.m. – 4:00 p.m.</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-cream p-6 text-center sm:p-8">
            <h2 className="font-display text-xl font-bold uppercase text-primary">
              Planning a visit?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl font-serif leading-7 text-foreground/80">
              Please contact the school office before you visit so we can guide you to the right
              person and help make your visit worthwhile.
            </p>
            <a
              href={`tel:${CONTACT.phone}`}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Call the school office <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
