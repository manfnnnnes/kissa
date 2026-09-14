import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/lib/love";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setOpen((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const current = open !== null ? GALLERY[open] : null;

  return (
    <section id="gallery" className="bg-ink py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-center text-rose">Атмосфера</p>
          <h2 className="mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-5xl">
            Свет, в котором я тебя вижу
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-lg italic text-rose-soft">
            Это не наши фотографии. Это цвет дней, которыми я тебя помню — пока мы не
            вставим сюда свои.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={i * 40} className={cn(item.span === "wide" && "col-span-2")}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-xl text-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-3 font-serif text-sm text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4 sm:text-base">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && open !== null ? (
        <div
          className="lightbox fixed inset-0 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-ivory/10 p-3 text-ivory transition-colors hover:bg-ivory/20"
            onClick={() => setOpen(null)}
            aria-label="Закрыть"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-3 text-ivory hover:bg-ivory/20"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + GALLERY.length) % GALLERY.length);
            }}
            aria-label="Предыдущее"
          >
            <ChevronLeft className="size-5" />
          </button>
          <figure
            className="max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[75vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center font-serif text-lg text-rose-soft">
              {current.caption}
            </figcaption>
          </figure>
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-3 text-ivory hover:bg-ivory/20"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % GALLERY.length);
            }}
            aria-label="Следующее"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
