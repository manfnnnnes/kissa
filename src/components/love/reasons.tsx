import { useState } from "react";
import { REASONS } from "@/lib/love";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { HeartMark } from "./heart-mark";

export function Reasons() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="reasons" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <p className="kicker text-center">Не полный список</p>
        <h2 className="mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-5xl">
          Почему я снова выбираю тебя
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-serif text-lg italic text-ink-soft">
          Восемь из тысячи. Остальное я буду говорить тебе вслух — пока хватит жизни.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        {REASONS.map((reason, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={reason.title} delay={i * 30}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "w-full rounded-2xl border px-5 py-5 text-left transition-[border-color,background-color,box-shadow] duration-200 sm:px-6",
                  isOpen
                    ? "border-wine/30 bg-paper shadow-soft"
                    : "border-line bg-paper/60 hover:border-rose",
                )}
                aria-expanded={isOpen}
              >
                <span className="flex items-start gap-3">
                  <HeartMark
                    className={cn(
                      "mt-1 size-4 shrink-0 transition-colors duration-200",
                      isOpen ? "text-wine" : "text-rose",
                    )}
                  />
                  <span>
                    <span className="block font-serif text-xl font-medium text-ink sm:text-2xl">
                      {reason.title}
                    </span>
                    <span
                      className={cn(
                        "mt-2 block overflow-hidden font-serif text-base leading-relaxed text-ink-soft transition-[max-height,opacity] duration-300",
                        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      {reason.body}
                    </span>
                    {!isOpen ? (
                      <span className="mt-1 block text-xs tracking-wide text-muted">
                        Открыть
                      </span>
                    ) : null}
                  </span>
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
