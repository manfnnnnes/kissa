import { useState } from "react";
import { SURPRISE } from "@/lib/love";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { HeartMark } from "./heart-mark";

export function Surprise() {
  const [open, setOpen] = useState(false);

  return (
    <section id="gift" className="relative overflow-hidden py-20 sm:py-28">
      <img
        src="/images/stars.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative mx-auto max-w-xl px-5 text-center">
        <Reveal>
          <p className="kicker text-rose-soft">Для тебе</p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ivory sm:text-5xl">
            Сюрприз
          </h2>
          <p className="mt-4 font-serif text-lg italic text-rose-soft">
            {SURPRISE.teaser}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-col items-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              disabled={open}
              className={cn(
                "relative h-36 w-56 transition-transform duration-200",
                !open && "hover:-translate-y-1 active:scale-[0.96]",
                open && "pointer-events-none opacity-0",
              )}
              aria-label="Відкрити конверт"
            >
              <span className="absolute inset-x-0 bottom-0 h-24 rounded-sm bg-cream shadow-lift" />
              <span className="envelope-flap absolute inset-x-0 top-2 h-20 origin-top rounded-sm bg-ivory shadow-soft" />
              <span className="wax-seal absolute left-1/2 top-16 flex size-12 -translate-x-1/2 items-center justify-center rounded-full">
                <HeartMark className="size-5 text-ivory" />
              </span>
            </button>

            {open ? (
              <article className="paper-card mt-6 w-full rounded-2xl px-6 py-10 text-left sm:px-10">
                <HeartMark className="heart-pulse size-6 text-wine" />
                <h3 className="mt-4 font-serif text-2xl font-medium text-ink sm:text-3xl">
                  {SURPRISE.title}
                </h3>
                <div className="mt-6 space-y-4 font-serif text-lg leading-relaxed text-ink-soft">
                  {SURPRISE.paras.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
