import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, SCHOOL_NAME, SCHOOL_TAGLINE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream/85">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold uppercase text-cream">{SCHOOL_NAME}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gold">{SCHOOL_TAGLINE}</p>
          <p className="mt-4 font-serif text-sm leading-relaxed text-cream/70">
            Nurturing knowledge, character and confidence for generations of learners.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="rounded-full border border-cream/25 p-2 text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {CONTACT.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {CONTACT.phone}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {CONTACT.admissions}
                <br />
                {CONTACT.careers}
                <br />
                {CONTACT.info}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Location</h4>
          <div className="mt-4 overflow-hidden rounded-lg border border-cream/20">
            <iframe
              title="School location map"
              src="https://www.google.com/maps?q=13.031633064717822,80.26810102109985&output=embed"
              className="h-56 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/60">
        Managed by P.S.EDUCATIONAL SOCIETY &middot; &copy; {new Date().getFullYear()} {SCHOOL_NAME}
      </div>
    </footer>
  );
}
