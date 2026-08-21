import type { ReactNode } from "react";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/site";

export function PageBanner({ title, subtitle }: { title: string; subtitle?: string | undefined }) {
  return (
    <section className="relative h-56 w-full overflow-hidden bg-navy-deep sm:h-64">
      <SmartImage src={IMAGES.banner} alt="" className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-navy-deep/70" />
      <div className="container-page relative flex h-full flex-col justify-center">
        <h1 className="font-display text-3xl font-bold uppercase text-cream sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-2 max-w-2xl font-serif text-cream/80">{subtitle}</p>}
        <span className="mt-4 h-1 w-20 bg-gold" />
      </div>
    </section>
  );
}

export function ContentPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string | undefined;
  children: ReactNode;
}) {
  return (
    <>
      <PageBanner title={title} subtitle={subtitle} />
      <section className="bg-background py-14">
        <article className="container-page max-w-4xl space-y-5 font-serif text-[17px] leading-8 text-foreground/90 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-primary [&_li]:ml-5 [&_li]:list-disc">
          {children}
        </article>
      </section>
    </>
  );
}
