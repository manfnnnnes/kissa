import { useEffect, useState } from "react";
import {
  START_DATE,
  MARRIAGE_DATE,
  elapsed,
  totalDays,
  totalSeconds,
  unitLabel,
  type DurationParts,
} from "@/lib/love";
import { Reveal } from "./reveal";
import { HeartMark } from "./heart-mark";

const UNITS: (keyof DurationParts)[] = [
  "years",
  "months",
  "days",
  "hours",
  "minutes",
  "seconds",
];

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

function ClockFace({
  title,
  from,
  now,
  kicker,
}: {
  title: string;
  from: Date;
  now: Date | null;
  kicker: string;
}) {
  const parts = now ? elapsed(from, now) : null;
  return (
    <article className="paper-card rounded-2xl p-5 sm:p-7">
      <p className="kicker">{kicker}</p>
      <h3 className="mt-2 font-serif text-2xl font-medium text-ink sm:text-3xl">
        {title}
      </h3>
      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
        {UNITS.map((key) => {
          const value = parts ? parts[key] : 0;
          return (
            <div
              key={key}
              className="rounded-lg bg-ivory px-1.5 py-3 text-center sm:py-4"
            >
              <div className="font-serif text-2xl font-medium tabular-nums text-wine sm:text-3xl">
                {parts ? value : "—"}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                {unitLabel(key, value)}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function formatInt(n: number) {
  return new Intl.NumberFormat("uk-UA").format(n);
}

export function Clocks() {
  const now = useNow();
  const daysTogether = now ? totalDays(START_DATE, now) : 0;
  const daysMarried = now ? totalDays(MARRIAGE_DATE, now) : 0;
  const secondsTogether = now ? totalSeconds(START_DATE, now) : 0;
  const heartbeats = Math.floor(secondsTogether * (72 / 60));

  return (
    <section id="time" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <p className="kicker text-center">Живий рахунок</p>
        <h2 className="mt-3 text-center font-serif text-3xl font-medium tracking-tight text-ink sm:text-5xl">
          Час, який належить нам
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-serif text-lg italic text-ink-soft">
          Цифри змінюються щосекунди — так само, як і те, як я тебе кохаю: більше,
          ніж учора.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5">
        <Reveal>
          <ClockFace
            kicker="З першого дня"
            title="Ми разом уже"
            from={START_DATE}
            now={now}
          />
        </Reveal>
        <Reveal delay={80}>
          <ClockFace
            kicker="З 22 травня 2026"
            title="У шлюбі — назавжди"
            from={MARRIAGE_DATE}
            now={now}
          />
        </Reveal>
      </div>

      <Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              n: formatInt(daysTogether),
              l: unitLabel("days", daysTogether),
              s: "світанків поруч",
            },
            {
              n: formatInt(daysMarried),
              l: unitLabel("days", daysMarried),
              s: "у шлюбі",
            },
            {
              n: formatInt(heartbeats),
              l: "ударів",
              s: "серця, поки я думаю про тебе",
            },
          ].map((stat) => (
            <li
              key={stat.s}
              className="rounded-xl border border-line bg-paper px-5 py-5 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-wine">
                <HeartMark className="size-3.5" />
                <span className="font-serif text-3xl tabular-nums">{stat.n}</span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {stat.l} {stat.s}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
