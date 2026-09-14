import { HeartMark } from "./heart-mark";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-14 text-center text-rose-soft">
      <HeartMark className="mx-auto size-5 text-rose" />
      <p className="mt-4 font-serif text-2xl italic text-ivory">Назавжди твій</p>
      <p className="mt-2 text-xs tracking-[0.22em] uppercase text-rose">
        22.08.2020 · 22.05.2026 · і кожна секунда далі
      </p>
    </footer>
  );
}
