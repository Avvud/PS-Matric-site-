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

  const renderDesktopNavItems = (items: typeof NAV, depth = 0) =>
    items.map((item) => {
      const hasChildren = !!item.children?.length;

      return (
        <li key={item.to} className={cn("group relative", depth > 0 && "relative")}>
          <div className="flex items-center">
            <Link
              to={item.to}
              className={cn(
                "flex items-center gap-1 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-gold",
                depth > 0 && "px-3 py-2 text-xs text-black",
              )}
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
            {hasChildren && <ChevronDown className={cn("h-3.5 w-3.5", depth > 0 ? "text-black" : "text-white")} />}
            {depth === 0 && (
              <span className="pointer-events-none absolute inset-x-3 bottom-0 h-[3px] scale-x-0 bg-gold transition-transform group-hover:scale-x-100" />
            )}
          </div>
          {hasChildren && (
            <ul
              className={cn(
                "invisible absolute z-50 min-w-60 rounded-b-lg border-t-2 border-gold bg-background py-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                depth === 0 ? "left-0 top-full" : "left-full top-0 ml-1",
              )}
            >
              {renderDesktopNavItems(item.children!, depth + 1)}
            </ul>
          )}
        </li>
      );
    });

  const renderMobileNavItems = (items: typeof NAV, depth = 0) =>
    items.map((item) => {
      const hasChildren = !!item.children?.length;
      const isExpanded = expanded === item.label;

      if (hasChildren) {
        return (
          <li key={item.to} className="border-b border-cream/10">
            <button
              type="button"
              onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
              className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider text-white"
              style={{ paddingLeft: `${0.65 + depth * 1.15}rem` }}
            >
              {item.label}
              <ChevronDown className={cn("h-4 w-4 transition-transform text-white", isExpanded && "rotate-180")} />
            </button>
            {isExpanded && (
              <ul className="bg-navy pb-2">
                {renderMobileNavItems(item.children!, depth + 1)}
              </ul>
            )}
          </li>
        );
      }

      return (
        <li key={item.to} className="border-b border-cream/10">
          <Link
            to={item.to}
            className="block px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white"
            style={{ paddingLeft: `${0.65 + depth * 1.15}rem` }}
          >
            {item.label}
          </Link>
        </li>
      );
    });

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
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-full bg-cream/10 shadow-soft ring-2 ring-gold/50 sm:h-20 sm:w-20">
            <img
              src={IMAGES.bro}
              alt="School bro image"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.style.background = "#f6f3eb";
                e.currentTarget.parentElement!.innerHTML = "<span class=\'flex h-full w-full items-center justify-center text-[10px] font-bold uppercase tracking-[0.24em] text-gold\'>BRO</span>";
              }}
            />
          </div>

          <Link to="/" className="flex items-center gap-3">
            <img
              src={IMAGES.logo}
              alt="PS Matric logo"
              className="h-16 w-16 rounded-full bg-cream/10 object-cover shadow-soft ring-2 ring-gold/50 sm:h-20 sm:w-20"
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
            />
            <span className="leading-tight">
              <span className="block font-display text-xl font-bold uppercase tracking-wide text-cream sm:text-2xl lg:text-[1.8rem]">
                {SCHOOL_NAME}
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-gold sm:text-xs">
                {SCHOOL_TAGLINE}
              </span>
            </span>
          </Link>
        </div>

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
          {renderDesktopNavItems(NAV)}
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
            {renderMobileNavItems(NAV)}
          </ul>
        </div>
      )}
    </header>
  );
}
