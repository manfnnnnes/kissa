import { ChevronDown } from "lucide-react";
import { HeartMark } from "./heart-mark";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/15" />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-16 pt-28 text-center sm:pb-20">
        <div className="mb-6 flex justify-center">
          <HeartMark className="heart-pulse size-8 text-rose-soft" />
        </div>
        <p className="kicker text-rose-soft">С 22 августа 2020 года</p>
        <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ivory sm:text-6xl md:text-7xl">
          Для моей любимой жены
        </h1>
        <p className="mx-auto mt-5 max-w-lg font-serif text-lg italic text-rose-soft sm:text-2xl">
          История нашей любви — в каждой секунде
        </p>
        <a
          href="#time"
          className="mt-10 inline-flex flex-col items-center gap-1 text-ivory/80 transition-colors duration-200 hover:text-ivory"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Дальше</span>
          <ChevronDown className="size-5 animate-bounce" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
