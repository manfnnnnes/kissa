import { CHAPTERS } from "@/lib/love";
import { Reveal } from "./reveal";

export function Story() {
  return (
    <section id="story" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <p className="kicker text-center">Хроника</p>
        <h2 className="mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-5xl">
          Главы нашей истории
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-serif text-lg italic text-ink-soft">
          Не выдуманная биография — только те двери, которые я могу назвать наверняка.
        </p>
      </Reveal>

      <ol className="mt-14 space-y-12">
        {CHAPTERS.map((ch, i) => (
          <li key={ch.title}>
            <Reveal delay={i * 40}>
              <article className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
                <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={ch.image}
                      alt=""
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : undefined}>
                  <p className="kicker">{ch.date}</p>
                  <h3 className="mt-2 font-serif text-3xl font-medium">{ch.title}</h3>
                  <p className="mt-4 max-w-md font-serif text-lg leading-relaxed text-ink-soft">
                    {ch.body}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
