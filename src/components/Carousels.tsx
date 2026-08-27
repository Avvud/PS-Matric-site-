import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SmartImage } from "@/components/SmartImage";
import { cn } from "@/lib/utils";

function useAutoplay(length: number, delay: number, paused: boolean) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || length < 2) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % length), delay);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [length, delay, paused]);

  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + length) % length), [length]);
  return { index, setIndex, next, prev };
}

function Arrows({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={onPrev}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/85 p-2 text-primary shadow-soft transition hover:bg-gold hover:text-navy-deep"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={onNext}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/85 p-2 text-primary shadow-soft transition hover:bg-gold hover:text-navy-deep"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </>
  );
}

function Dots({
  count,
  index,
  onSelect,
}: {
  count: number;
  index: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className={cn(
            "h-2.5 rounded-full transition-all",
            i === index ? "w-7 bg-gold" : "w-2.5 bg-background/70",
          )}
        />
      ))}
    </div>
  );
}

export function HeroCarousel({
  images,
  tagline,
  subline,
}: {
  images: string[];
  tagline: string;
  subline: string;
}) {
  const [paused, setPaused] = useState(false);
  const { index, setIndex, next, prev } = useAutoplay(images.length, 5000, paused);

  return (
    <section
      className="relative h-[62vh] min-h-[420px] w-full overflow-hidden bg-navy-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <SmartImage src={src} alt="Campus" className="h-full w-full" />
        </div>
      ))}

      <div className="container-page relative z-10 flex h-full flex-col items-start justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">{subline}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-tight text-cream sm:text-6xl">
          {tagline}
        </h1>
        <a
          href="/about/vision-mission"
          className="mt-8 inline-flex rounded-md bg-gold px-7 py-3 text-sm font-bold uppercase tracking-widest text-navy-deep transition hover:bg-gold-soft"
        >
          Know More
        </a>
      </div>

      <Arrows onPrev={prev} onNext={next} />
      <Dots count={images.length} index={index} onSelect={setIndex} />
    </section>
  );
}

export function GalleryCarousel({
  slides,
}: {
  slides: { src: string; caption?: string }[];
}) {
  const [paused, setPaused] = useState(false);
  const { index, setIndex, next, prev } = useAutoplay(slides.length, 4000, paused);

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/9] w-full">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            <SmartImage src={s.src} alt={s.caption ?? "Gallery image"} className="h-full w-full" />
            {s.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent px-6 pb-12 pt-16">
                <p className="font-display text-xl font-bold uppercase tracking-wide text-cream">
                  {s.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Arrows onPrev={prev} onNext={next} />
      <Dots count={slides.length} index={index} onSelect={setIndex} />
    </div>
  );
}

export function TestimonialCarousel({
  items,
}: {
  items: { quote: string; name: string; batch: string; photo: string }[];
}) {
  const [paused, setPaused] = useState(false);
  const { index, setIndex } = useAutoplay(items.length, 6000, paused);
  const active = items[index];
  if (!active) return null;

  return (
    <div
      className="mx-auto max-w-3xl text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="font-serif text-lg italic leading-relaxed text-foreground sm:text-xl">
        &ldquo;{active.quote}&rdquo;
      </p>
      <p className="mt-6 font-display text-lg font-bold uppercase text-primary">{active.name}</p>
      <p className="text-sm text-muted-foreground">{active.batch}</p>
      <div className="mt-6 flex justify-center gap-4">
        {items.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial from ${t.name}`}
            className={cn(
              "rounded-full ring-2 transition",
              i === index ? "ring-gold" : "ring-transparent opacity-60 hover:opacity-100",
            )}
          >
            <SmartImage src={t.photo} alt={t.name} className="h-14 w-14 rounded-full" />
          </button>
        ))}
      </div>
    </div>
  );
}
