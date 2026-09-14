import { useEffect, useState } from "react";
import { NAV } from "@/lib/love";
import { cn } from "@/lib/utils";
import { HeartMark } from "./heart-mark";

export function SiteNav() {
  const [active, setActive] = useState<string>("hero");
  const [solid, setSolid] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setSolid(window.scrollY > 48);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = ["hero", ...NAV.map((n) => n.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        solid ? "bg-ivory/90 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a
          href="#hero"
          className={cn(
            "flex items-center gap-2 transition-colors duration-200 hover:opacity-90",
            solid ? "text-wine" : "text-ivory",
          )}
        >
          <HeartMark className="size-4" />
          <span className="font-serif text-lg tracking-tight">Для коханої</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Розділи">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-full px-3 py-2 text-xs font-medium tracking-wide transition-colors duration-150",
                active === item.id
                  ? "bg-wine text-ivory"
                  : solid
                    ? "text-ink-soft hover:text-wine"
                    : "text-ivory/80 hover:text-ivory",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#gift"
          className="rounded-full bg-wine px-3.5 py-2 text-xs font-medium tracking-wide text-ivory transition-transform duration-150 active:scale-[0.96] md:hidden"
        >
          Сюрприз
        </a>
      </div>
      <div className="h-px bg-line/70" aria-hidden="true">
        <div
          className="h-full w-full origin-left bg-wine transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
