export const START_DATE = new Date(2020, 7, 22, 0, 0, 0);
export const MARRIAGE_DATE = new Date(2026, 4, 22, 0, 0, 0);

export const NAV = [
  { id: "time", label: "Час" },
  { id: "letter", label: "Лист" },
  { id: "story", label: "Історія" },
  { id: "gallery", label: "Світло" },
  { id: "reasons", label: "Чому ти" },
  { id: "notes", label: "Записки" },
  { id: "gift", label: "Сюрприз" },
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
  years: ["рік", "роки", "років"],
  months: ["місяць", "місяці", "місяців"],
  days: ["день", "дні", "днів"],
  hours: ["година", "години", "годин"],
  minutes: ["хвилина", "хвилини", "хвилин"],
  seconds: ["секунда", "секунди", "секунд"],
} as const;

export function unitLabel(key: keyof typeof UNIT_LABELS, n: number) {
  const [one, few, many] = UNIT_LABELS[key];
  return ukPlural(n, one, few, many);
}

export const LETTER_PARAS = [
  "Кохана, дивитися на ці цифри — чисте щастя. Кожен день, кожна година і кожна секунда поруч із тобою — це найкраще, що відбувалося у моєму житті.",
  "Дякую тобі за твою ніжність, турботу та за те, що робиш наш дім найтеплішим місцем на землі. За ранки, в яких ще спиться. За вечори, коли можна мовчати. За те, як ти повертаєш мене до себе, навіть коли світ галасливий.",
  "Я неймовірно радий бути твоїм чоловіком. І я обираю тебе — знову, в цю секунду, і в усі наступні.",
];

export const CHAPTERS = [
  {
    date: "22 серпня 2020",
    title: "Початок",
    body: "День, з якого почався наш рахунок. Ще не було кілець і клятв — була ти, і цього вже вистачило, щоб змінити все.",
    image: "/images/autumn.jpg",
  },
  {
    date: "Роки поміж",
    title: "Дім, який ми зшиваємо",
    body: "Зими й літа, сміх і тиша, дрібні звички, які стали нашою мовою. Кожен звичайний день — це цеглина. З них вийшов дім.",
    image: "/images/coffee.jpg",
  },
  {
    date: "22 травня 2026",
    title: "Назавжди",
    body: "День, коли я став твоїм чоловіком. Не фінал історії — поріг. Усе найважливіше починається з цього «так».",
    image: "/images/rings.jpg",
  },
  {
    date: "Сьогодні",
    title: "І ця секунда теж",
    body: "Поки ти це читаєш, лічильник іде далі. Я хочу, щоб ти бачила: я рахую нас. Бережно. Щодня.",
    image: "/images/bench.jpg",
  },
];

export const GALLERY = [
  {
    src: "/images/hands.jpg",
    alt: "Дві долоні, що тримаються",
    caption: "Твоя рука в моїй — найкоротша дорога додому.",
    span: "wide" as const,
  },
  {
    src: "/images/rings.jpg",
    alt: "Обручки біля троянди",
    caption: "22.05.2026 — день, який я ношу на пальці.",
    span: "square" as const,
  },
  {
    src: "/images/coffee.jpg",
    alt: "Дві чашки біля вікна",
    caption: "Наші ранки. Тиха розмова без слів.",
    span: "square" as const,
  },
  {
    src: "/images/bouquet.jpg",
    alt: "Весільний букет",
    caption: "Квіти в’януть. Ти — ні.",
    span: "square" as const,
  },
  {
    src: "/images/dinner.jpg",
    alt: "Вечеря на двох",
    caption: "Стіл на двох. Завжди на двох.",
    span: "square" as const,
  },
  {
    src: "/images/letter.jpg",
    alt: "Лист і сургуч",
    caption: "Якщо б слова вміли пахнути — пахли б тобою.",
    span: "wide" as const,
  },
  {
    src: "/images/bench.jpg",
    alt: "Лавка під трояндами",
    caption: "Місце, де хочеться затриматись.",
    span: "square" as const,
  },
  {
    src: "/images/autumn.jpg",
    alt: "Осіння алея",
    caption: "Серпень 2020-го ще шелестить у листі.",
    span: "square" as const,
  },
  {
    src: "/images/stars.jpg",
    alt: "Зоряне небо",
    caption: "Скільки зірок — стільки разів я скажу «кохаю».",
    span: "wide" as const,
  },
];

export const REASONS = [
  {
    title: "За твій сміх",
    body: "Коли ти смієшся, в кімнаті стає світліше. Я колекціоную цей звук серйозніше, ніж будь-які дати.",
  },
  {
    title: "За ніжність без свідків",
    body: "Не за свята. За те, як ти торкаєшся мене, коли ніхто не бачить і нічого не треба доводити.",
  },
  {
    title: "За наш дім",
    body: "Ти робиш стіни теплими. Не меблями — собою. Де ти є, там я перестаю шукати інше місце.",
  },
  {
    title: "За спокій",
    body: "Поруч із тобою думки вкладаються. Світ може бути гучним — ти все одно тихіша і сильніша за нього.",
  },
  {
    title: "За твою руку",
    body: "Я можу заблукати де завгодно. Якщо ти тримаєш мене за руку — я вже вдома.",
  },
  {
    title: "За силу і м’якість",
    body: "Ти вмієш бути твердою, коли треба, і м’якою, коли я цього не прошу, але дуже потребую.",
  },
  {
    title: "За звичайні дні",
    body: "Не лише за подорожі й свята. За чай, за втому, за «як ти?», сказане в десятий раз щиро.",
  },
  {
    title: "За те, що обираєш мене",
    body: "Кохання — не один день у травні. Це те, що ти робиш щоранку. Я це бачу. Я цього не забуду.",
  },
];

export const NOTES = [
  {
    label: "Ранок",
    text: "Прокидайся повільно. Я вже люблю цей день, бо в ньому є ти.",
  },
  {
    label: "День",
    text: "Якщо буде важко — згадай, що ввечері я зустріну тебе як найважливішу людину на землі.",
  },
  {
    label: "Вечір",
    text: "Можна не розповідати все. Просто сядь поруч. Мені вистачить твого плеча.",
  },
  {
    label: "Ніч",
    text: "Спи. Я стережу наш спокій. Завтра теж буду тут.",
  },
  {
    label: "Тиша",
    text: "Нам не завжди потрібні слова. І це — один із найдорожчих дарів між нами.",
  },
  {
    label: "Сміх",
    text: "Давай ще раз пожартуємо про дрібниці. Я хочу, щоб наш дім умів сміятися.",
  },
  {
    label: "Назавжди",
    text: "Це не поетичне слово. Це робочий план. Я його виконую.",
  },
];

export const SURPRISE = {
  teaser: "Натисни, коли будеш сама",
  title: "Це не обгортка. Це я.",
  paras: [
    "Кохаю тебе безмежно.",
    "Цей сайт — лише тихий спосіб сказати вголос те, що я ношу щодня. Головний подарунок чекає не в коробці. Він — у тому, що я буду поруч: на ранки, коли не виспались; на вечори, коли мовчимо; на усі дні, які ще не мають назви.",
    "Дякую, що стала моєю дружиною 22 травня 2026 року. Дякую, що дозволила мені стати твоїм чоловіком.",
    "Твій. Завжди.",
  ],
};
