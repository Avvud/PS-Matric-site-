import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, Briefcase } from "lucide-react";
import { PageBanner } from "@/components/PageShell";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | PS Matric" },
      {
        name: "description",
        content: "Address, phone number and admissions, careers and general enquiry emails for PS Matric, Chennai.",
      },
      { property: "og:title", content: "Contact Us | PS Matric" },
      { property: "og:description", content: "Get in touch with PS Matriculation Higher Secondary School." },
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
          <div>
            <h2 className="mb-5 font-display text-2xl font-bold uppercase text-primary">
              Address &amp; Contact Details
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 rounded-xl bg-secondary p-5">
                <MapPin className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h2 className="font-display text-lg font-bold uppercase text-primary">Address</h2>
                  <p className="mt-1 font-serif text-foreground/85">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl bg-secondary p-5">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h2 className="font-display text-lg font-bold uppercase text-primary">Phone</h2>
                  <p className="mt-1 font-serif text-foreground/85">{CONTACT.phone}</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl bg-secondary p-5">
                <Clock className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h2 className="font-display text-lg font-bold uppercase text-primary">
                    Office Hours
                  </h2>
                  <p className="mt-1 font-serif text-foreground/85">
                    Monday to Friday, 9:00 a.m. – 4:00 p.m.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-gold" />
              <h2 className="font-display text-xl font-bold uppercase text-primary">Career Opportunities</h2>
            </div>
            <p className="mt-4 font-serif text-foreground/85">
              Current openings will be listed here as opportunities become available.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Career enquiries</p>
            <a href={`mailto:${CONTACT.careers}`} className="link-underline font-serif">
              {CONTACT.careers}
            </a>
            <h3 className="mt-8 font-display text-xl font-bold uppercase text-primary">Email Us</h3>
            <ul className="mt-4 space-y-4 font-serif">
              {[
                { label: "Admissions", value: CONTACT.admissions },
                { label: "Careers", value: CONTACT.careers },
                { label: "General Information", value: CONTACT.info },
              ].map((row) => (
                <li key={row.label} className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 text-gold" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                      {row.label}
                    </span>
                    <a href={`mailto:${row.value}`} className="link-underline">
                      {row.value}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
