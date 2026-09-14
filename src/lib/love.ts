export const START_DATE = new Date(2020, 7, 22, 0, 0, 0);
export const MARRIAGE_DATE = new Date(2026, 4, 22, 0, 0, 0);

export const NAV = [
  { id: "time", label: "Время🕰️" },
  { id: "letter", label: "Письмо💌" },
  { id: "story", label: "История🎇" },
  { id: "gallery", label: "Свет🌞" },
  { id: "reasons", label: "Почему ты❔" },
  { id: "notes", label: "Записки📝" },
  { id: "gift", label: "Сюрприз🎁" },
] as const;

export type DurationParts = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function elapsed(from: Date, to: Date): DurationParts {
  if (to.getTime() < from.getTime()) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  let hours = to.getHours() - from.getHours();
  let minutes = to.getMinutes() - from.getMinutes();
  let seconds = to.getSeconds() - from.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prev = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
    days += prev;
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days, hours, minutes, seconds };
}

export function totalDays(from: Date, to: Date) {
  return Math.max(0, Math.floor((to.getTime() - from.getTime()) / 86_400_000));
}

export function totalSeconds(from: Date, to: Date) {
  return Math.max(0, Math.floor((to.getTime() - from.getTime()) / 1000));
}

export function ukPlural(n: number, one: string, few: string, many: string) {
  const abs = Math.abs(n) % 100;
  const last = abs % 10;
  if (abs > 10 && abs < 20) return many;
  if (last === 1) return one;
  if (last >= 2 && last <= 4) return few;
  return many;
}

export const UNIT_LABELS = {
  years: ["год", "года", "лет"],
  months: ["месяц", "месяца", "месяцев"],
  days: ["день", "дня", "дней"],
  hours: ["час", "часа", "часов"],
  minutes: ["минута", "минуты", "минут"],
  seconds: ["секунда", "секунды", "секунд"],
} as const;

export function unitLabel(key: keyof typeof UNIT_LABELS, n: number) {
  const [one, few, many] = UNIT_LABELS[key];
  return ukPlural(n, one, few, many);
}

export const LETTER_PARAS = [
  "Любимая, смотреть на эти цифры - настоящее счастье. Каждый день, каждый час и каждая секунда рядом с тобой - лучшее, что случалось в моей жизни.",
  "Спасибо тебе за нежность, заботу и за то, что делаешь наш дом самым тёплым местом на земле. За утра, когда ещё можно поспать. За вечера, когда можно просто молчать. За то, как ты возвращаешь меня к себе, даже когда вокруг слишком шумно.",
  "Я невероятно рад быть твоим мужем. И я выбираю тебя — снова, прямо в эту секунду, и во все следующие.",
];

export const CHAPTERS = [
  {
    date: "22 августа 2020",
    title: "Начало",
    body: "День, с которого начался наш отсчёт. Ещё не было колец и клятв - была ты, и этого уже хватило, чтобы изменить всё.",
    image: "/images/autumn.jpg",
  },
  {
    date: "Годы между",
    title: "Дом, который мы создаём",
    body: "Зимы и лета, смех и тишина, маленькие привычки, которые стали нашим языком. Каждый обычный день - кирпичик. Из них вырос наш дом.",
    image: "/images/coffee.jpg",
  },
  {
    date: "22 мая 2026",
    title: "Навсегда",
    body: "День, когда я стал твоим мужем. Не финал истории - порог. Всё самое важное начинается с этого «да».",
    image: "/images/rings.jpg",
  },
  {
    date: "Сегодня",
    title: "И эта секунда тоже",
    body: "Пока ты это читаешь, счётчик идёт дальше. Я хочу, чтобы ты видела: я считаю нас. Бережно. Каждый день.",
    image: "/images/bench.jpg",
  },
];

export const GALLERY = [
  {
    src: "/images/hands.jpg",
    alt: "Две ладони, которые держатся за руки",
    caption: "Твоя рука в моей - самый короткий путь домой.",
    span: "wide" as const,
  },
  {
    src: "/images/rings.jpg",
    alt: "Обручальные кольца рядом с розой",
    caption: "22.05.2026 - день, который я ношу на пальце.",
    span: "square" as const,
  },
  {
    src: "/images/coffee.jpg",
    alt: "Две чашки у окна",
    caption: "Наши утра. Тихий разговор без слов.",
    span: "square" as const,
  },
  {
    src: "/images/bouquet.jpg",
    alt: "Свадебный букет",
    caption: "Цветы увядают. Ты - нет.",
    span: "square" as const,
  },
  {
    src: "/images/dinner.jpg",
    alt: "Ужин на двоих",
    caption: "Стол на двоих. Всегда на двоих.",
    span: "square" as const,
  },
  {
    src: "/images/letter.jpg",
    alt: "Письмо и сургуч",
    caption: "Если бы слова умели пахнуть - они пахли бы тобой.",
    span: "wide" as const,
  },
  {
    src: "/images/bench.jpg",
    alt: "Скамейка под розами",
    caption: "Место, где хочется задержаться.",
    span: "square" as const,
  },
  {
    src: "/images/autumn.jpg",
    alt: "Осенняя аллея",
    caption: "Август 2020-го всё ещё шелестит в листьях.",
    span: "square" as const,
  },
  {
    src: "/images/stars.jpg",
    alt: "Звёздное небо",
    caption: "Сколько звёзд - столько раз я скажу «люблю».",
    span: "wide" as const,
  },
];

export const REASONS = [
  {
    title: "За твой смех",
    body: "Когда ты смеёшься, в комнате становится светлее. Я собираю этот звук серьёзнее, чем любые даты.",
  },
  {
    title: "За нежность без свидетелей",
    body: "Не за праздники. За то, как ты прикасаешься ко мне, когда никто не видит и ничего не нужно доказывать.",
  },
  {
    title: "За наш дом",
    body: "Ты делаешь стены тёплыми. Не мебелью - собой. Где ты, там я перестаю искать другое место.",
  },
  {
    title: "За спокойствие",
    body: "Рядом с тобой мысли укладываются по местам. Мир может быть громким — ты всё равно тише и сильнее его.",
  },
  {
    title: "За твою руку",
    body: "Я могу заблудиться где угодно. Если ты держишь меня за руку - я уже дома.",
  },
  {
    title: "За силу и мягкость",
    body: "Ты умеешь быть твёрдой, когда нужно, и мягкой, когда я этого не прошу, но очень нуждаюсь.",
  },
  {
    title: "За обычные дни",
    body: "Не только за путешествия и праздники. За чай, за усталость, за искреннее «как ты?» даже в десятый раз.",
  },
  {
    title: "За то, что выбираешь меня",
    body: "Любовь - не один день в мае. Это то, что ты делаешь каждое утро. Я это вижу. Я этого не забуду.",
  },
];

export const NOTES = [
  {
    label: "Утро",
    text: "Просыпайся медленно. Я уже люблю этот день, потому что в нём есть ты.",
  },
  {
    label: "День",
    text: "Если будет тяжело — вспомни, что вечером я встречу тебя как самого важного человека на земле.",
  },
  {
    label: "Вечер",
    text: "Можно не рассказывать всё. Просто сядь рядом. Мне хватит твоего плеча.",
  },
  {
    label: "Ночь",
    text: "Спи. Я берегу наш покой. Завтра тоже буду здесь.",
  },
  {
    label: "Тишина",
    text: "Нам не всегда нужны слова. И это — один из самых дорогих подарков между нами.",
  },
  {
    label: "Смех",
    text: "Давай ещё раз пошутим о мелочах. Я хочу, чтобы наш дом умел смеяться.",
  },
  {
    label: "Навсегда",
    text: "Это не поэтическое слово. Это рабочий план. Я его выполняю.",
  },
];

export const SURPRISE = {
  teaser: "Нажми, когда будешь одна",
  title: "Это не обёртка. Это я.",
  paras: [
    "Люблю тебя безумно.",
    "Этот сайт - лишь тихий способ сказать вслух то, что я ношу в себе каждый день. Главный подарок ждёт не в коробке. Он - в том, что я буду рядом: по утрам, когда мы не выспались; по вечерам, когда молчим; во все дни, у которых пока ещё нет названия.",
    "Спасибо, что стала моей женой 22 мая 2026 года. Спасибо, что позволила мне стать твоим мужем.",
    "Твой. Всегда. Муж.",
  ],
};
