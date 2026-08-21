import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV, SCHOOL_NAME, SCHOOL_TAGLINE, IMAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-navy-deep text-secondary transition-shadow",
        scrolled && "shadow-card",
      )}
    >
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={IMAGES.logo}
            alt=""
            className="h-12 w-12 rounded-full bg-cream/10 object-contain"
            onError={(e) => {
              e.currentTarget.style.visibility = "hidden";
            }}
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold uppercase tracking-wide text-cream sm:text-xl">
              {SCHOOL_NAME}
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-gold">
              {SCHOOL_TAGLINE}
            </span>
          </span>
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-cream lg:hidden"
        >
          {open ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <nav className="hidden border-t border-cream/10 lg:block">
        <ul className="container-page flex items-stretch justify-center gap-1">
          {NAV.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                to={item.to}
                className="flex items-center gap-1 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-cream/90 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                <span className="pointer-events-none absolute inset-x-3 bottom-0 h-[3px] scale-x-0 bg-gold transition-transform group-hover:scale-x-100" />
              </Link>
              {item.children && (
                <ul className="invisible absolute left-0 top-full z-50 min-w-60 translate-y-1 rounded-b-lg border-t-2 border-gold bg-background py-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <li key={c.to}>
                      <Link
                        to={c.to}
                        className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary"
                        activeProps={{ className: "text-primary font-semibold" }}
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="flex items-center justify-between border-t border-cream/10 px-5 py-2">
            <span className="text-xs uppercase tracking-widest text-gold">Menu</span>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5 text-cream" />
            </button>
          </div>
          <ul className="max-h-[70vh] overflow-y-auto border-t border-cream/10 pb-4">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-cream/10">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between px-5 py-3 text-sm font-semibold uppercase tracking-wider text-cream"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expanded === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    {expanded === item.label && (
                      <ul className="bg-navy pb-2">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link
                              to={c.to}
                              className="block px-8 py-2 text-sm text-cream/85 hover:text-gold"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className="block px-5 py-3 text-sm font-semibold uppercase tracking-wider text-cream"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
