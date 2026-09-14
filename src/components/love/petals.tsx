const PETALS = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 17 + 3) % 100}%`,
  delay: `${((i * 13) % 90) / 10}s`,
  duration: `${12 + (i % 7)}s`,
  size: 7 + (i % 6),
  drift: i % 2 === 0 ? 18 : -14,
  wine: i % 3 !== 0,
}));

export function Petals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className={p.wine ? "petal petal-wine" : "petal petal-rose"}
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.45,
            animationDelay: p.delay,
            animationDuration: p.duration,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
