"use client";
import { useState, useEffect, useCallback } from "react";

const SEED = 1_247;
const STORAGE_KEY = "tscsnc_candles";
const MAX_VISIBLE = 18;

type CandleItem = { id: number; x: number; delay: number };

function CandleSVG({ id }: { id: number }) {
  const delay = (id % 7) * 0.15;
  return (
    <svg
      width="26" height="64" viewBox="0 0 26 64"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_8px_rgba(255,180,50,0.7)]"
    >
      {/* Flame group */}
      <g style={{ transformOrigin: "13px 18px", animation: `flame-flicker ${1.2 + (id % 5) * 0.15}s ease-in-out infinite`, animationDelay: `${delay}s` }}>
        {/* Outer glow */}
        <ellipse cx="13" cy="14" rx="7" ry="12" fill="#FFC107" opacity="0.25" />
        {/* Main flame */}
        <ellipse cx="13" cy="12" rx="5" ry="9" fill="#FFC107" opacity="0.92" />
        {/* Inner bright */}
        <ellipse cx="13" cy="13" rx="3" ry="6" fill="#FF9800" opacity="0.95" />
        {/* Hot core */}
        <ellipse cx="13" cy="15" rx="1.5" ry="3.5" fill="#FFEB3B" opacity="1" />
      </g>
      {/* Wick */}
      <line x1="13" y1="22" x2="13" y2="26" stroke="#4a3010" strokeWidth="1.5" />
      {/* Candle body */}
      <rect x="7" y="26" width="12" height="34" rx="2.5" fill="#F5E6C8" />
      <rect x="8" y="26" width="8" height="34" rx="2" fill="#EDD9AA" opacity="0.7" />
      {/* Wax drip */}
      <ellipse cx="13" cy="26" rx="6" ry="2" fill="#FAEBD7" />
      {/* Bottom */}
      <rect x="6" y="57" width="14" height="7" rx="2" fill="#D4B896" />
    </svg>
  );
}

export default function CandleLighting() {
  const [localCount, setLocalCount] = useState(0);
  const [candles, setCandles] = useState<CandleItem[]>([]);
  const [total, setTotal] = useState(SEED);
  const [justLit, setJustLit] = useState(false);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) ?? "0", 10);
    setLocalCount(stored);
    setTotal(SEED + stored);
    const initial: CandleItem[] = [];
    for (let i = 0; i < Math.min(stored, MAX_VISIBLE); i++) {
      initial.push({ id: i, x: 5 + Math.random() * 90, delay: i * 0.05 });
    }
    setCandles(initial);
  }, []);

  const light = useCallback(() => {
    const next = localCount + 1;
    setLocalCount(next);
    setTotal(SEED + next);
    localStorage.setItem(STORAGE_KEY, String(next));
    const item: CandleItem = { id: Date.now(), x: 5 + Math.random() * 90, delay: 0 };
    setCandles(prev => {
      const list = [...prev, item];
      return list.length > MAX_VISIBLE ? list.slice(list.length - MAX_VISIBLE) : list;
    });
    setJustLit(true);
    setTimeout(() => setJustLit(false), 2000);
  }, [localCount]);

  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ background: "linear-gradient(to bottom, #1a0a00, #2d1500, #1a0a00)" }}>
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.5,
              animation: `glow-pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-amber-400/80 text-sm font-semibold uppercase tracking-widest mb-3">Community Healing</p>
        <h2 className="font-heading text-3xl md:text-4xl text-amber-100 mb-3">
          Light a Candle
        </h2>
        <p className="text-amber-200/70 mb-2 text-lg">For someone you love. For yourself. For healing.</p>
        <p className="text-amber-300 font-bold text-2xl mb-10">
          🕯️ {total.toLocaleString()} candles lit in our community
        </p>

        {/* Candle display */}
        <div className="relative h-36 mx-auto max-w-xl mb-10 overflow-hidden">
          {candles.map(c => (
            <div
              key={c.id}
              className="absolute bottom-0"
              style={{
                left: `${c.x}%`,
                transform: "translateX(-50%)",
                animationDelay: `${c.delay}s`,
                animation: "candle-rise 0.6s ease-out both",
              }}
            >
              <CandleSVG id={c.id} />
            </div>
          ))}
          {candles.length === 0 && (
            <p className="absolute inset-0 flex items-center justify-center text-amber-200/30 text-sm italic">
              Be the first to light a candle…
            </p>
          )}
        </div>

        {/* Message after lighting */}
        <div className={`mb-5 text-amber-200 text-base italic transition-all duration-500 ${justLit ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          ✨ Your candle is shining — you are not alone.
        </div>

        <button
          onClick={light}
          className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-amber-950 font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-amber-500/30 transition-all duration-200 hover:scale-105"
        >
          🕯️ Light a Candle
        </button>

        {localCount > 0 && (
          <p className="mt-4 text-amber-200/50 text-sm">
            You&apos;ve lit {localCount.toLocaleString()} candle{localCount !== 1 ? "s" : ""} — thank you.
          </p>
        )}
      </div>
    </section>
  );
}
