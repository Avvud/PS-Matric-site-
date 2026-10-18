import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Briefcase,
  ExternalLink,
  GraduationCap,
  UsersRound,
} from "lucide-react";
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
      <PageBanner title="Contact" subtitle="We would love to hear from you" />
      <section className="bg-background py-14">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start rounded-2xl bg-secondary p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-gold" />
              <h2 className="font-display text-2xl font-bold uppercase text-black">
                Alumni Connect
              </h2>
            </div>
            <p className="mt-4 font-serif leading-7 text-foreground/85">
              Are you a PS Matric alumnus? Stay connected with your school community and share
              career opportunities with fellow alumni and current students. Register to help us
              build a stronger network for mentorship, professional connections and future
              opportunities.
            </p>
            <div className="mt-6 w-full rounded-xl border border-border bg-background p-5">
              <h3 className="font-display text-lg font-bold uppercase text-black">
                Ways to get involved
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3">
                  <Briefcase className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-black">Share career opportunities</h4>
                    <p className="mt-1 font-serif text-sm leading-6 text-foreground/75">
                      Let fellow alumni and students know about openings in your field.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-black">Guide the next generation</h4>
                    <p className="mt-1 font-serif text-sm leading-6 text-foreground/75">
                      Share your experience and help students explore career paths.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <UsersRound className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-black">Reconnect with alumni</h4>
                    <p className="mt-1 font-serif text-sm leading-6 text-foreground/75">
                      Build professional connections across batches and industries.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdOGX6HjJPYuJWGXm5vmHEbTsUkzd9WLvz0n99Prej9dm7ifw/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Register as an Alum
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div>
            <h2 className="mb-5 font-display text-2xl font-bold uppercase text-black">
              Address &amp; Contact Details
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 rounded-xl bg-secondary p-5">
                <MapPin className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-black">Address</h3>
                  <p className="mt-1 font-serif text-foreground/85">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl bg-secondary p-5">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-black">Phone</h3>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="mt-1 inline-block font-serif link-underline"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl bg-secondary p-5">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-black">Email</h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 inline-block font-serif link-underline"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl bg-secondary p-5">
                <Clock className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-black">
                    Office Hours
                  </h3>
                  <p className="mt-1 font-serif text-foreground/85">
                    Monday to Friday, 9:00 a.m. – 4:00 p.m.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
