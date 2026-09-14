import { HeartMark } from "./heart-mark";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-14 text-center text-rose-soft">
      <HeartMark className="mx-auto size-5 text-rose" />
      <p className="mt-4 font-serif text-2xl italic text-ivory">Навсегда твой</p>
      <p className="mt-2 text-xs tracking-[0.22em] uppercase text-rose">
        22.08.2020 · 22.05.2026 · и каждая секунда дальше
      </p>
    </footer>
  );
}
