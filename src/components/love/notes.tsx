import { useState } from "react";
import { NOTES } from "@/lib/love";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-1", "rotate-0"];

export function Notes() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="notes" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-center">В ящике</p>
          <h2 className="mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-5xl">
            Семь записок
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-lg italic text-ink-soft">
            На случай, если меня нет рядом, а тебе нужно услышать мой голос.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {NOTES.map((note, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={note.label} delay={i * 40}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={cn(
                    "paper-card min-h-44 w-full rounded-lg px-4 py-5 text-left transition-transform duration-200 active:scale-[0.96]",
                    TILTS[i],
                    isOpen && "rotate-0 ring-1 ring-wine/30",
                  )}
                >
                  <span className="kicker">{note.label}</span>
                  <span className="mt-3 block font-serif text-base leading-relaxed text-ink-soft sm:text-lg">
                    {note.text}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
