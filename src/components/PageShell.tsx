import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SmartImage } from "@/components/SmartImage";
import { getOptimizedBannerImage, getPageBannerImage, IMAGES } from "@/lib/site";

export function PageBanner({
  title,
  subtitle,
  showImage = true,
}: {
  title: string;
  subtitle?: string | undefined;
  showImage?: boolean;
}) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const bannerImage = getOptimizedBannerImage(getPageBannerImage(pathname));

  return (
    <section
      className={`relative w-full overflow-hidden ${
        showImage ? "h-56 bg-navy-deep sm:h-64" : "border-b border-border bg-cream py-10 sm:py-14"
      }`}
    >
      {showImage && (
        <>
          <SmartImage
            key={bannerImage}
            src={bannerImage}
            fallbackSrc={getOptimizedBannerImage(IMAGES.banner)}
            alt=""
            className="absolute inset-0 h-full w-full"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}
      <div
        className={`container-page relative flex flex-col justify-center ${
          showImage ? "h-full" : "border-l-4 border-gold py-1 pl-5 sm:pl-7"
        }`}
      >
        <h1
          className={`font-display text-3xl font-bold uppercase sm:text-5xl ${
            showImage ? "text-cream" : "text-primary"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-2 max-w-2xl font-serif ${
              showImage ? "text-cream/80" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        )}
        {showImage && <span className="mt-4 h-1 w-20 bg-gold" />}
      </div>
    </section>
  );
}

export function ContentPage({
  title,
  subtitle,
  children,
  showBannerImage = true,
}: {
  title: string;
  subtitle?: string | undefined;
  children: ReactNode;
  showBannerImage?: boolean;
}) {
  return (
    <>
      <PageBanner title={title} subtitle={subtitle} showImage={showBannerImage} />
      <section className="bg-background py-8 sm:py-14">
        <article className="container-page max-w-4xl space-y-5 font-serif text-base leading-7 text-foreground/90 sm:text-[17px] sm:leading-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-primary [&_li]:ml-5 [&_li]:list-disc">
          {children}
        </article>
      </section>
    </>
  );
}
