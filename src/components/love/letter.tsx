import { LETTER_PARAS } from "@/lib/love";
import { Reveal } from "./reveal";

export function Letter() {
  return (
    <section id="letter" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <img
        src="/images/letter.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-cream/80" />
      <div className="relative mx-auto max-w-2xl px-5 sm:px-6">
        <Reveal>
          <p className="kicker text-center">От руки</p>
          <h2 className="mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-5xl">
            Письмо, которое я кладу тебе в сердце
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <article className="paper-card mt-10 rounded-2xl px-6 py-10 sm:px-12 sm:py-14">
            <p className="font-serif text-sm tracking-[0.2em] uppercase text-wine">
              Любимая
            </p>
            <div className="mt-6 space-y-5 font-serif text-lg leading-relaxed text-ink-soft sm:text-xl">
              {LETTER_PARAS.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-10 text-right font-serif text-xl italic text-wine">
              Твой муж
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
