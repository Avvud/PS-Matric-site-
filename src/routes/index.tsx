import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Users, Award, CalendarDays } from "lucide-react";
import { HeroCarousel, GalleryCarousel, TestimonialCarousel } from "@/components/Carousels";
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
  { icon: CalendarDays, value: "60+", label: "Years of Legacy" },
  { icon: Users, value: "2,500+", label: "Students" },
  { icon: GraduationCap, value: "150+", label: "Faculty Members" },
  { icon: Award, value: "100%", label: "Board Results" },
];

const TESTIMONIALS = [
  {
    quote:
      "The years I spent here shaped how I think, work and treat people. The teachers believed in us long before we believed in ourselves.",
    name: "Alumni Name",
    batch: "Batch of 2012",
    photo: IMAGES.alumni[0]!,
  },
  {
    quote:
      "From the science labs to the sports ground, every corner of this campus taught me something that a textbook could not.",
    name: "Alumni Name",
    batch: "Batch of 2016",
    photo: IMAGES.alumni[1]!,
  },
  {
    quote:
      "A school that quietly builds character. I carry its discipline and warmth into everything I do today.",
    name: "Alumni Name",
    batch: "Batch of 2019",
    photo: IMAGES.alumni[2]!,
  },
];

function Home() {
  return (
    <>
      <HeroCarousel
        images={IMAGES.hero}
        subline="P.S.EDUCATIONAL SOCIETY"
        tagline="Welcome to a new culture of education"
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
                Principal [Name]
              </p>
              <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
                M.A., M.Ed.
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

      {/* Gallery carousel */}
      <section className="bg-background py-16">
        <div className="container-page">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Campus Life</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-primary sm:text-4xl">
              Moments from our school
            </h2>
          </div>
          <GalleryCarousel slides={IMAGES.gallery} />
          <div className="mt-8 text-center">
            <Link to="/life/gallery" className="link-underline font-semibold">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Alumni testimonials */}
      <section className="bg-secondary py-16">
        <div className="container-page">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Alumni Voices</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-primary sm:text-4xl">
              Once ours, always ours
            </h2>
          </div>
          <TestimonialCarousel items={TESTIMONIALS} />
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
