"use client";

import { useState, useEffect, useRef } from "react";

type Pattern = "478" | "box";

const patterns = {
  "478": {
    label: "4-7-8 Breathing",
    description: "Inhale 4s · Hold 7s · Exhale 8s",
    phases: [
      { name: "Inhale", duration: 4, scale: 1.6 },
      { name: "Hold", duration: 7, scale: 1.6 },
      { name: "Exhale", duration: 8, scale: 1 },
    ],
  },
  box: {
    label: "Box Breathing",
    description: "Inhale 4s · Hold 4s · Exhale 4s · Hold 4s",
    phases: [
      { name: "Inhale", duration: 4, scale: 1.6 },
      { name: "Hold", duration: 4, scale: 1.6 },
      { name: "Exhale", duration: 4, scale: 1 },
      { name: "Hold", duration: 4, scale: 1 },
    ],
  },
};

export default function BreathingExercise() {
  const [active, setActive] = useState(false);
  const [patternKey, setPatternKey] = useState<Pattern>("478");
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [scale, setScale] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseRef = useRef(0);

  const pattern = patterns[patternKey];

  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActive(false);
    setPhaseIndex(0);
    setCountdown(0);
    setScale(1);
    phaseRef.current = 0;
  };

  const start = () => {
    phaseRef.current = 0;
    const firstPhase = pattern.phases[0];
    setPhaseIndex(0);
    setCountdown(firstPhase.duration);
    setScale(firstPhase.scale);
    setActive(true);
  };

  useEffect(() => {
    if (!active) return;

    let remaining = pattern.phases[phaseRef.current].duration;
    setCountdown(remaining);

    timerRef.current = setInterval(() => {
      remaining -= 1;
      setCountdown(remaining);

      if (remaining <= 0) {
        phaseRef.current = (phaseRef.current + 1) % pattern.phases.length;
        const nextPhase = pattern.phases[phaseRef.current];
        remaining = nextPhase.duration;
        setPhaseIndex(phaseRef.current);
        setCountdown(nextPhase.duration);
        setScale(nextPhase.scale);
      }
    }, 1000);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, patternKey]);

  const currentPhase = pattern.phases[phaseIndex];

  return (
    <section className="bg-gradient-to-br from-[#1C0300] via-[#7A1A00] to-[#1C0300] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
          Breathe With Me
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          A Moment of Calm
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Controlled breathing reduces anxiety, lowers your heart rate, and helps ground you in the present moment.
        </p>

        {/* Pattern selector */}
        <div className="flex justify-center gap-3 mb-10">
          {(Object.keys(patterns) as Pattern[]).map((key) => (
            <button
              key={key}
              onClick={() => { stop(); setPatternKey(key); }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                patternKey === key
                  ? "bg-primary text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
              aria-pressed={patternKey === key}
            >
              {patterns[key].label}
            </button>
          ))}
        </div>

        {/* Breathing circle */}
        <div className="relative flex items-center justify-center mb-10" style={{ height: "240px" }}>
          {/* Outer glow ring */}
          <div
            className="absolute rounded-full bg-primary/10"
            style={{
              width: "220px",
              height: "220px",
              transform: `scale(${active ? scale * 0.9 : 1})`,
              transition: active
                ? `transform ${currentPhase?.duration ?? 4}s ease-in-out`
                : "transform 0.5s ease",
            }}
            aria-hidden="true"
          />
          {/* Middle ring */}
          <div
            className="absolute rounded-full bg-primary/20"
            style={{
              width: "180px",
              height: "180px",
              transform: `scale(${active ? scale * 0.95 : 1})`,
              transition: active
                ? `transform ${currentPhase?.duration ?? 4}s ease-in-out`
                : "transform 0.5s ease",
            }}
            aria-hidden="true"
          />
          {/* Core circle */}
          <div
            className="relative z-10 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-2xl"
            style={{
              width: "140px",
              height: "140px",
              transform: `scale(${active ? scale : 1})`,
              transition: active
                ? `transform ${currentPhase?.duration ?? 4}s ease-in-out`
                : "transform 0.5s ease",
            }}
            role="status"
            aria-live="polite"
            aria-label={active ? `${currentPhase.name} — ${countdown} seconds` : "Breathing exercise ready"}
          >
            {active ? (
              <>
                <span className="font-heading font-bold text-xl">{currentPhase.name}</span>
                <span className="text-3xl font-bold mt-1">{countdown}</span>
              </>
            ) : (
              <span className="font-heading font-bold text-lg">Ready</span>
            )}
          </div>
        </div>

        <p className="text-white/50 text-sm mb-6">{pattern.description}</p>

        {active ? (
          <button
            onClick={stop}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20"
            aria-label="Stop breathing exercise"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={start}
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-200 shadow-lg"
            aria-label="Start breathing exercise"
          >
            Start Breathing
          </button>
        )}
      </div>
    </section>
  );
}
