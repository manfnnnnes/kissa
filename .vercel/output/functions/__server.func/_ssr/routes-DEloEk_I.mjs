import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronDown, i as ChevronLeft, r as ChevronRight, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DEloEk_I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var START_DATE = new Date(2020, 7, 22, 0, 0, 0);
var MARRIAGE_DATE = new Date(2026, 4, 22, 0, 0, 0);
var NAV = [
	{
		id: "time",
		label: "Час"
	},
	{
		id: "letter",
		label: "Лист"
	},
	{
		id: "story",
		label: "Історія"
	},
	{
		id: "gallery",
		label: "Світло"
	},
	{
		id: "reasons",
		label: "Чому ти"
	},
	{
		id: "notes",
		label: "Записки"
	},
	{
		id: "gift",
		label: "Сюрприз"
	}
];
function elapsed(from, to) {
	if (to.getTime() < from.getTime()) return {
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};
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
	return {
		years,
		months,
		days,
		hours,
		minutes,
		seconds
	};
}
function totalDays(from, to) {
	return Math.max(0, Math.floor((to.getTime() - from.getTime()) / 864e5));
}
function totalSeconds(from, to) {
	return Math.max(0, Math.floor((to.getTime() - from.getTime()) / 1e3));
}
function ukPlural(n, one, few, many) {
	const abs = Math.abs(n) % 100;
	const last = abs % 10;
	if (abs > 10 && abs < 20) return many;
	if (last === 1) return one;
	if (last >= 2 && last <= 4) return few;
	return many;
}
var UNIT_LABELS = {
	years: [
		"рік",
		"роки",
		"років"
	],
	months: [
		"місяць",
		"місяці",
		"місяців"
	],
	days: [
		"день",
		"дні",
		"днів"
	],
	hours: [
		"година",
		"години",
		"годин"
	],
	minutes: [
		"хвилина",
		"хвилини",
		"хвилин"
	],
	seconds: [
		"секунда",
		"секунди",
		"секунд"
	]
};
function unitLabel(key, n) {
	const [one, few, many] = UNIT_LABELS[key];
	return ukPlural(n, one, few, many);
}
var LETTER_PARAS = [
	"Кохана, дивитися на ці цифри — чисте щастя. Кожен день, кожна година і кожна секунда поруч із тобою — це найкраще, що відбувалося у моєму житті.",
	"Дякую тобі за твою ніжність, турботу та за те, що робиш наш дім найтеплішим місцем на землі. За ранки, в яких ще спиться. За вечори, коли можна мовчати. За те, як ти повертаєш мене до себе, навіть коли світ галасливий.",
	"Я неймовірно радий бути твоїм чоловіком. І я обираю тебе — знову, в цю секунду, і в усі наступні."
];
var CHAPTERS = [
	{
		date: "22 серпня 2020",
		title: "Початок",
		body: "День, з якого почався наш рахунок. Ще не було кілець і клятв — була ти, і цього вже вистачило, щоб змінити все.",
		image: "/images/autumn.jpg"
	},
	{
		date: "Роки поміж",
		title: "Дім, який ми зшиваємо",
		body: "Зими й літа, сміх і тиша, дрібні звички, які стали нашою мовою. Кожен звичайний день — це цеглина. З них вийшов дім.",
		image: "/images/coffee.jpg"
	},
	{
		date: "22 травня 2026",
		title: "Назавжди",
		body: "День, коли я став твоїм чоловіком. Не фінал історії — поріг. Усе найважливіше починається з цього «так».",
		image: "/images/rings.jpg"
	},
	{
		date: "Сьогодні",
		title: "І ця секунда теж",
		body: "Поки ти це читаєш, лічильник іде далі. Я хочу, щоб ти бачила: я рахую нас. Бережно. Щодня.",
		image: "/images/bench.jpg"
	}
];
var GALLERY = [
	{
		src: "/images/hands.jpg",
		alt: "Дві долоні, що тримаються",
		caption: "Твоя рука в моїй — найкоротша дорога додому.",
		span: "wide"
	},
	{
		src: "/images/rings.jpg",
		alt: "Обручки біля троянди",
		caption: "22.05.2026 — день, який я ношу на пальці.",
		span: "square"
	},
	{
		src: "/images/coffee.jpg",
		alt: "Дві чашки біля вікна",
		caption: "Наші ранки. Тиха розмова без слів.",
		span: "square"
	},
	{
		src: "/images/bouquet.jpg",
		alt: "Весільний букет",
		caption: "Квіти в’януть. Ти — ні.",
		span: "square"
	},
	{
		src: "/images/dinner.jpg",
		alt: "Вечеря на двох",
		caption: "Стіл на двох. Завжди на двох.",
		span: "square"
	},
	{
		src: "/images/letter.jpg",
		alt: "Лист і сургуч",
		caption: "Якщо б слова вміли пахнути — пахли б тобою.",
		span: "wide"
	},
	{
		src: "/images/bench.jpg",
		alt: "Лавка під трояндами",
		caption: "Місце, де хочеться затриматись.",
		span: "square"
	},
	{
		src: "/images/autumn.jpg",
		alt: "Осіння алея",
		caption: "Серпень 2020-го ще шелестить у листі.",
		span: "square"
	},
	{
		src: "/images/stars.jpg",
		alt: "Зоряне небо",
		caption: "Скільки зірок — стільки разів я скажу «кохаю».",
		span: "wide"
	}
];
var REASONS = [
	{
		title: "За твій сміх",
		body: "Коли ти смієшся, в кімнаті стає світліше. Я колекціоную цей звук серйозніше, ніж будь-які дати."
	},
	{
		title: "За ніжність без свідків",
		body: "Не за свята. За те, як ти торкаєшся мене, коли ніхто не бачить і нічого не треба доводити."
	},
	{
		title: "За наш дім",
		body: "Ти робиш стіни теплими. Не меблями — собою. Де ти є, там я перестаю шукати інше місце."
	},
	{
		title: "За спокій",
		body: "Поруч із тобою думки вкладаються. Світ може бути гучним — ти все одно тихіша і сильніша за нього."
	},
	{
		title: "За твою руку",
		body: "Я можу заблукати де завгодно. Якщо ти тримаєш мене за руку — я вже вдома."
	},
	{
		title: "За силу і м’якість",
		body: "Ти вмієш бути твердою, коли треба, і м’якою, коли я цього не прошу, але дуже потребую."
	},
	{
		title: "За звичайні дні",
		body: "Не лише за подорожі й свята. За чай, за втому, за «як ти?», сказане в десятий раз щиро."
	},
	{
		title: "За те, що обираєш мене",
		body: "Кохання — не один день у травні. Це те, що ти робиш щоранку. Я це бачу. Я цього не забуду."
	}
];
var NOTES = [
	{
		label: "Ранок",
		text: "Прокидайся повільно. Я вже люблю цей день, бо в ньому є ти."
	},
	{
		label: "День",
		text: "Якщо буде важко — згадай, що ввечері я зустріну тебе як найважливішу людину на землі."
	},
	{
		label: "Вечір",
		text: "Можна не розповідати все. Просто сядь поруч. Мені вистачить твого плеча."
	},
	{
		label: "Ніч",
		text: "Спи. Я стережу наш спокій. Завтра теж буду тут."
	},
	{
		label: "Тиша",
		text: "Нам не завжди потрібні слова. І це — один із найдорожчих дарів між нами."
	},
	{
		label: "Сміх",
		text: "Давай ще раз пожартуємо про дрібниці. Я хочу, щоб наш дім умів сміятися."
	},
	{
		label: "Назавжди",
		text: "Це не поетичне слово. Це робочий план. Я його виконую."
	}
];
var SURPRISE = {
	teaser: "Натисни, коли будеш сама",
	title: "Це не обгортка. Це я.",
	paras: [
		"Кохаю тебе безмежно.",
		"Цей сайт — лише тихий спосіб сказати вголос те, що я ношу щодня. Головний подарунок чекає не в коробці. Він — у тому, що я буду поруч: на ранки, коли не виспались; на вечори, коли мовчимо; на усі дні, які ще не мають назви.",
		"Дякую, що стала моєю дружиною 22 травня 2026 року. Дякую, що дозволила мені стати твоїм чоловіком.",
		"Твій. Завжди."
	]
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setShown(true);
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", shown && "reveal-in", className),
		style: delay ? { transitionDelay: `${delay}ms` } : void 0,
		children
	});
}
function HeartMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21s-6.2-4.35-9.14-8.22C.7 10.1.9 6.7 3.4 4.9c2.1-1.52 4.7-.86 6.1 1.12C10.9 4.04 13.5 3.38 15.6 4.9c2.5 1.8 2.7 5.2.54 7.88C18.2 16.65 12 21 12 21z" })
	});
}
var UNITS = [
	"years",
	"months",
	"days",
	"hours",
	"minutes",
	"seconds"
];
function useNow() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		const id = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	return now;
}
function ClockFace({ title, from, now, kicker }) {
	const parts = now ? elapsed(from, now) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "paper-card rounded-2xl p-5 sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-serif text-2xl font-medium text-ink sm:text-3xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3",
				children: UNITS.map((key) => {
					const value = parts ? parts[key] : 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-ivory px-1.5 py-3 text-center sm:py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-2xl font-medium tabular-nums text-wine sm:text-3xl",
							children: parts ? value : "—"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs font-medium uppercase tracking-wider text-muted",
							children: unitLabel(key, value)
						})]
					}, key);
				})
			})
		]
	});
}
function formatInt(n) {
	return new Intl.NumberFormat("uk-UA").format(n);
}
function Clocks() {
	const now = useNow();
	const daysTogether = now ? totalDays(START_DATE, now) : 0;
	const daysMarried = now ? totalDays(MARRIAGE_DATE, now) : 0;
	const secondsTogether = now ? totalSeconds(START_DATE, now) : 0;
	const heartbeats = Math.floor(secondsTogether * (72 / 60));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "time",
		className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-center",
					children: "Живий рахунок"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl font-medium tracking-tight text-ink sm:text-5xl",
					children: "Час, який належить нам"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-center font-serif text-lg italic text-ink-soft",
					children: "Цифри змінюються щосекунди — так само, як і те, як я тебе кохаю: більше, ніж учора."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClockFace, {
					kicker: "З першого дня",
					title: "Ми разом уже",
					from: START_DATE,
					now
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClockFace, {
						kicker: "З 22 травня 2026",
						title: "У шлюбі — назавжди",
						from: MARRIAGE_DATE,
						now
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3",
				children: [
					{
						n: formatInt(daysTogether),
						l: unitLabel("days", daysTogether),
						s: "світанків поруч"
					},
					{
						n: formatInt(daysMarried),
						l: unitLabel("days", daysMarried),
						s: "у шлюбі"
					},
					{
						n: formatInt(heartbeats),
						l: "ударів",
						s: "серця, поки я думаю про тебе"
					}
				].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-line bg-paper px-5 py-5 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 text-wine",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartMark, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-3xl tabular-nums",
							children: stat.n
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							stat.l,
							" ",
							stat.s
						]
					})]
				}, stat.s))
			}) })
		]
	});
}
function Gallery() {
	const [open, setOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (open === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(null);
			if (e.key === "ArrowRight") setOpen((i) => i === null ? i : (i + 1) % GALLERY.length);
			if (e.key === "ArrowLeft") setOpen((i) => i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length);
		};
		window.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [open]);
	const current = open !== null ? GALLERY[open] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "bg-ink py-20 text-ivory sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-center text-rose",
					children: "Атмосфера"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-5xl",
					children: "Світло, в якому я тебе бачу"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-center font-serif text-lg italic text-rose-soft",
					children: "Це не наші знімки. Це колір днів, якими я тебе пам’ятаю — поки ми не вставимо сюди свої."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",
				children: GALLERY.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 40,
					className: cn(item.span === "wide" && "col-span-2"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(i),
						className: "group relative block w-full overflow-hidden rounded-xl text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.src,
								alt: item.alt,
								className: "aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-x-0 bottom-0 p-3 font-serif text-sm text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4 sm:text-base",
								children: item.caption
							})
						]
					})
				}, item.src))
			})]
		}), current && open !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lightbox fixed inset-0 flex items-center justify-center bg-ink/90 p-4",
			onClick: () => setOpen(null),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": current.alt,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute right-4 top-4 rounded-full bg-ivory/10 p-3 text-ivory transition-colors hover:bg-ivory/20",
					onClick: () => setOpen(null),
					"aria-label": "Закрити",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-3 text-ivory hover:bg-ivory/20",
					onClick: (e) => {
						e.stopPropagation();
						setOpen((open - 1 + GALLERY.length) % GALLERY.length);
					},
					"aria-label": "Попереднє",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "max-h-[85vh] max-w-4xl",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.src,
						alt: current.alt,
						className: "max-h-[75vh] w-full rounded-lg object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-4 text-center font-serif text-lg text-rose-soft",
						children: current.caption
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-3 text-ivory hover:bg-ivory/20",
					onClick: (e) => {
						e.stopPropagation();
						setOpen((open + 1) % GALLERY.length);
					},
					"aria-label": "Наступне",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
				})
			]
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink px-5 py-14 text-center text-rose-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartMark, { className: "mx-auto size-5 text-rose" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-serif text-2xl italic text-ivory",
				children: "Назавжди твій"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs tracking-[0.22em] uppercase text-rose",
				children: "22.08.2020 · 22.05.2026 · і кожна секунда далі"
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "relative flex min-h-[100svh] items-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/15" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-4xl px-5 pb-16 pt-28 text-center sm:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartMark, { className: "heart-pulse size-8 text-rose-soft" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-rose-soft",
						children: "З 22 серпня 2020"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ivory sm:text-6xl md:text-7xl",
						children: "Для моєї коханої дружини"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-lg font-serif text-lg italic text-rose-soft sm:text-2xl",
						children: "Історія нашого кохання — у кожній секунді"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#time",
						className: "mt-10 inline-flex flex-col items-center gap-1 text-ivory/80 transition-colors duration-200 hover:text-ivory",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-[0.2em] uppercase",
							children: "Далі"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
							className: "size-5 animate-bounce",
							strokeWidth: 1.5
						})]
					})
				]
			})
		]
	});
}
function Letter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "letter",
		className: "relative overflow-hidden bg-cream py-20 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/letter.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-cream/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-2xl px-5 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-center",
					children: "Від руки"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-5xl",
					children: "Лист, який я кладу тобі в серце"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "paper-card mt-10 rounded-2xl px-6 py-10 sm:px-12 sm:py-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-sm tracking-[0.2em] uppercase text-wine",
								children: "Кохана"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-5 font-serif text-lg leading-relaxed text-ink-soft sm:text-xl",
								children: LETTER_PARAS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 text-right font-serif text-xl italic text-wine",
								children: "Твій чоловік"
							})
						]
					})
				})]
			})
		]
	});
}
function SiteNav() {
	const [active, setActive] = (0, import_react.useState)("hero");
	const [solid, setSolid] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setSolid(window.scrollY > 48);
			setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		const sections = ["hero", ...NAV.map((n) => n.id)].map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-35% 0px -50% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		sections.forEach((s) => io.observe(s));
		return () => {
			window.removeEventListener("scroll", onScroll);
			io.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300", solid ? "bg-ivory/90 shadow-soft backdrop-blur-md" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#hero",
					className: "flex items-center gap-2 text-wine transition-opacity duration-150 hover:opacity-80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartMark, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg tracking-tight",
						children: "Для коханої"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Розділи",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.id}`,
						className: cn("rounded-full px-3 py-2 text-xs font-medium tracking-wide transition-colors duration-150", active === item.id ? "bg-wine text-ivory" : "text-ink-soft hover:text-wine"),
						children: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#gift",
					className: "rounded-full bg-wine px-3.5 py-2 text-xs font-medium tracking-wide text-ivory transition-transform duration-150 active:scale-[0.96] md:hidden",
					children: "Сюрприз"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-px bg-line/70",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full w-full origin-left bg-wine transition-transform duration-150",
				style: { transform: `scaleX(${progress})` }
			})
		})]
	});
}
var TILTS = [
	"-rotate-2",
	"rotate-1",
	"-rotate-1",
	"rotate-2",
	"-rotate-2",
	"rotate-1",
	"rotate-0"
];
function Notes() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "notes",
		className: "bg-cream py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-center",
					children: "У шухляді"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-5xl",
					children: "Сім записок"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-center font-serif text-lg italic text-ink-soft",
					children: "На випадок, якщо мене немає поруч, а тобі треба почути мій голос."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: NOTES.map((note, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 40,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(isOpen ? null : i),
							className: cn("paper-card min-h-44 w-full rounded-lg px-4 py-5 text-left transition-transform duration-200 active:scale-[0.96]", TILTS[i], isOpen && "rotate-0 ring-1 ring-wine/30"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker",
								children: note.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 block font-serif text-base leading-relaxed text-ink-soft sm:text-lg",
								children: note.text
							})]
						})
					}, note.label);
				})
			})]
		})
	});
}
function spawn(w, h, fromTop) {
	return {
		x: Math.random() * w,
		y: fromTop ? -20 : Math.random() * h,
		r: 5 + Math.random() * 8,
		s: .6 + Math.random() * .8,
		rot: Math.random() * Math.PI * 2,
		vr: (Math.random() - .5) * .04,
		vx: -.35 + Math.random() * .2,
		vy: .35 + Math.random() * .55,
		a: .35 + Math.random() * .4,
		hue: Math.random() > .55 ? .35 : .7
	};
}
function Petals() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let running = true;
		const petals = [];
		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = window.innerWidth * dpr;
			canvas.height = window.innerHeight * dpr;
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		const count = window.innerWidth < 640 ? 18 : 28;
		for (let i = 0; i < count; i++) petals.push(spawn(window.innerWidth, window.innerHeight, false));
		const draw = (p) => {
			ctx.save();
			ctx.translate(p.x, p.y);
			ctx.rotate(p.rot);
			ctx.scale(p.s, p.s * .72);
			ctx.globalAlpha = p.a;
			ctx.fillStyle = p.hue > .5 ? "#7a2e3a" : "#c9898c";
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.bezierCurveTo(p.r, -p.r, p.r * 1.6, p.r * .3, 0, p.r * 1.7);
			ctx.bezierCurveTo(-p.r * 1.6, p.r * .3, -p.r, -p.r, 0, 0);
			ctx.fill();
			ctx.restore();
		};
		const tick = () => {
			if (!running) return;
			const w = window.innerWidth;
			const h = window.innerHeight;
			ctx.clearRect(0, 0, w, h);
			for (const p of petals) {
				p.x += p.vx + Math.sin(p.y * .012) * .25;
				p.y += p.vy;
				p.rot += p.vr;
				if (p.y > h + 30) Object.assign(p, spawn(w, h, true));
				draw(p);
			}
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		window.addEventListener("resize", resize);
		return () => {
			running = false;
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "pointer-events-none fixed inset-0 z-50",
		"aria-hidden": "true"
	});
}
function Reasons() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "reasons",
		className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker text-center",
				children: "Не повний список"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-5xl",
				children: "Чому я обираю тебе знову"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-4 max-w-xl text-center font-serif text-lg italic text-ink-soft",
				children: "Вісім з тисячі. Решту я говоритиму тобі вголос — поки вистачить життя."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-3 sm:grid-cols-2",
			children: REASONS.map((reason, i) => {
				const isOpen = open === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 30,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(isOpen ? null : i),
						className: cn("w-full rounded-2xl border px-5 py-5 text-left transition-[border-color,background-color,box-shadow] duration-200 sm:px-6", isOpen ? "border-wine/30 bg-paper shadow-soft" : "border-line bg-paper/60 hover:border-rose"),
						"aria-expanded": isOpen,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartMark, { className: cn("mt-1 size-4 shrink-0 transition-colors duration-200", isOpen ? "text-wine" : "text-rose") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-serif text-xl font-medium text-ink sm:text-2xl",
									children: reason.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("mt-2 block overflow-hidden font-serif text-base leading-relaxed text-ink-soft transition-[max-height,opacity] duration-300", isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"),
									children: reason.body
								}),
								!isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs tracking-wide text-muted",
									children: "Відкрити"
								}) : null
							] })]
						})
					})
				}, reason.title);
			})
		})]
	});
}
function Story() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "story",
		className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker text-center",
				children: "Хроніка"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-5xl",
				children: "Розділи нас"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-4 max-w-xl text-center font-serif text-lg italic text-ink-soft",
				children: "Не вигадана біографія — лише ті двері, які я можу назвати напевно."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-14 space-y-12",
			children: CHAPTERS.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 40,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid items-center gap-6 md:grid-cols-2 md:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: i % 2 === 1 ? "md:order-2" : void 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ch.image,
								alt: "",
								className: "aspect-[3/2] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: i % 2 === 1 ? "md:order-1" : void 0,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: ch.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-serif text-3xl font-medium",
								children: ch.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md font-serif text-lg leading-relaxed text-ink-soft",
								children: ch.body
							})
						]
					})]
				})
			}) }, ch.title))
		})]
	});
}
function Surprise() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gift",
		className: "relative overflow-hidden py-20 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/stars.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/75" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-xl px-5 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-rose-soft",
						children: "Для тебе"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif text-3xl font-medium tracking-tight text-ivory sm:text-5xl",
						children: "Сюрприз"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-lg italic text-rose-soft",
						children: SURPRISE.teaser
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(true),
							disabled: open,
							className: cn("relative h-36 w-56 transition-transform duration-200", !open && "hover:-translate-y-1 active:scale-[0.96]", open && "pointer-events-none opacity-0"),
							"aria-label": "Відкрити конверт",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 bottom-0 h-24 rounded-sm bg-cream shadow-lift" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "envelope-flap absolute inset-x-0 top-2 h-20 origin-top rounded-sm bg-ivory shadow-soft" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "wax-seal absolute left-1/2 top-16 flex size-12 -translate-x-1/2 items-center justify-center rounded-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartMark, { className: "size-5 text-ivory" })
								})
							]
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "paper-card mt-6 w-full rounded-2xl px-6 py-10 text-left sm:px-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartMark, { className: "heart-pulse size-6 text-wine" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-serif text-2xl font-medium text-ink sm:text-3xl",
									children: SURPRISE.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 space-y-4 font-serif text-lg leading-relaxed text-ink-soft",
									children: SURPRISE.paras.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
								})
							]
						}) : null]
					})
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-svh bg-ivory text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grain",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petals, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clocks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reasons, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notes, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Surprise, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
