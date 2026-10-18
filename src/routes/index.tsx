import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Users, CalendarDays } from "lucide-react";
import { HeroCarousel } from "@/components/Carousels";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES, SCHOOL_NAME } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PS Matric — P.S.EDUCATIONAL SOCIETY | Chennai" },
      {
        name: "description",
        content:
          "PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY — academics, admissions, campus life and alumni.",
      },
      { property: "og:title", content: "PS Matric — P.S.EDUCATIONAL SOCIETY" },
      {
        property: "og:description",
        content: "A modern learning community rooted in tradition, values and academic excellence.",
      },
    ],
  }),
  component: Home,
});

const STATS = [
  { icon: CalendarDays, value: "35+", label: "Years of Legacy" },
  { icon: Users, value: "1200+", label: "Students" },
  { icon: GraduationCap, value: "50+", label: "Faculty Members" },
];

function Home() {
  return (
    <>
      <HeroCarousel
        images={IMAGES.hero}
      />

      {/* Welcome / About blurb */}
      <section className="bg-background py-16">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <SmartImage
            src={IMAGES.about}
            alt="Campus"
            className="aspect-[4/3] rounded-2xl shadow-card"
          />
          <div className="animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">About Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase text-primary sm:text-4xl">
              A legacy of learning
            </h2>
            <div className="mt-5 space-y-4 font-serif text-[17px] leading-8 text-foreground/85">
              <p>
                Founded under the aegis of P.S.EDUCATIONAL SOCIETY, {SCHOOL_NAME} has grown from a
                small neighbourhood school into one of the city&apos;s most trusted institutions.
              </p>
              <p>
                Our classrooms blend a rigorous curriculum with modern teaching practice, while
                sport, art and service keep learning joyful and grounded in values.
              </p>
            </div>
            <Link to="/about/history" className="link-underline mt-6 inline-block font-semibold">
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* Correspondent's Desk */}
      <section className="bg-secondary py-16">
        <div className="container-page">
          <div className="grid gap-10 rounded-2xl bg-background p-6 shadow-card sm:p-10 md:grid-cols-[320px_1fr] md:items-center">
            <div>
              <div className="rounded-2xl bg-navy p-3 shadow-soft">
                <SmartImage
                  src={IMAGES.correspondent}
                  alt="Correspondent placeholder"
                  className="aspect-[3/4] rounded-xl"
                />
              </div>
              <p className="mt-4 text-center font-display text-lg font-bold uppercase text-primary">
                Honorary Correspondent [T.G.SHANKAR]
              </p>
              <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
                B.Sc., ACA
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Correspondent&apos;s Desk
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase text-primary sm:text-4xl">
                From the Correspondent&apos;s Desk
              </h2>
              <div className="mt-5 space-y-4 font-serif text-[17px] leading-8 text-foreground/85">
                <p>
                  Our respectful salutations to our revered Founder, Sri Pennathur Subramania Iyer,
                  a true philanthropist who devoted his wealth, efforts and vision to the cause of
                  education, whose ideals continue to illuminate our path.
                </p>
                <p>Welcome to the website of P.S. Matriculation Higher Secondary School.</p>
                <p className="font-semibold italic text-gold">“Tamaso Mā Jyotir Gamaya”</p>
                <p>
                  This timeless prayer beautifully reflects the purpose of education: to dispel
                  ignorance, awaken knowledge, nurture values and empower every child to move
                  towards a brighter and more meaningful future.
                </p>
              </div>
              <Link
                to="/about/correspondents-message"
                className="link-underline mt-6 inline-block font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-secondary py-16">
        <div className="container-page">
          <div className="grid gap-10 rounded-2xl bg-background p-6 shadow-card sm:p-10 md:grid-cols-[320px_1fr] md:items-center">
            <div>
              <div className="rounded-2xl bg-navy p-3 shadow-soft">
                <SmartImage
                  src={IMAGES.principal}
                  alt="Principal"
                  className="aspect-[3/4] rounded-xl"
                />
              </div>
              <p className="mt-4 text-center font-display text-lg font-bold uppercase text-primary">
                Principal [T.MEERA DEVI]
              </p>
              <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
                M.Com., M.Ed.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold uppercase text-primary sm:text-4xl">
                Welcome to {SCHOOL_NAME}
              </h2>
              <p className="mt-2 font-serif text-lg italic text-gold">
                The Architect of Tomorrow
              </p>
              <div className="mt-5 space-y-4 font-serif text-[17px] leading-8 text-foreground/85">
                <p>
                  Education, to us, is far more than the pursuit of marks. It is the patient work of
                  shaping curious minds, kind hearts and resilient character.
                </p>
                <p>
                  Every child who walks through our gates carries a distinct spark, and our teachers
                  take it upon themselves to discover and nurture it. We encourage questions,
                  celebrate effort and treat failure as an honest teacher.
                </p>
                <p>
                  I invite you to visit our campus, meet our faculty and see for yourself the warmth
                  that has defined this school for decades.
                </p>
              </div>
              <Link
                to="/about/principals-message"
                className="link-underline mt-6 inline-block font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-deep py-14">
        <div className="container-page grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <s.icon className="mx-auto h-7 w-7 text-gold" />
              <p className="mt-3 font-display text-3xl font-bold text-cream">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-cream/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
