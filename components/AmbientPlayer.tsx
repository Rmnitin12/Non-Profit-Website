"use client";

import { useState, useRef, useCallback } from "react";

/* Animated equalizer bars shown when music is playing */
function EqBars() {
  return (
    <span className="flex items-end gap-[3px] h-4" aria-hidden="true">
      {[
        "animate-eq-1",
        "animate-eq-2",
        "animate-eq-3",
      ].map((cls, i) => (
        <span
          key={i}
          className={`w-[3px] bg-white rounded-full ${cls}`}
          style={{ minHeight: "4px" }}
        />
      ))}
    </span>
  );
}

type Layer = {
  freq: number;
  type: OscillatorType;
  gain: number;
  lfoRate: number;
  lfoDepth: number;
};

const LAYERS: Layer[] = [
  { freq: 60,  type: "sine",     gain: 0.40, lfoRate: 0.05, lfoDepth: 0.02 },
  { freq: 174, type: "sine",     gain: 0.22, lfoRate: 0.07, lfoDepth: 0.03 },
  { freq: 285, type: "triangle", gain: 0.14, lfoRate: 0.03, lfoDepth: 0.02 },
  { freq: 396, type: "sine",     gain: 0.09, lfoRate: 0.09, lfoDepth: 0.015 },
  { freq: 528, type: "sine",     gain: 0.05, lfoRate: 0.04, lfoDepth: 0.01 },
];

export default function AmbientPlayer() {
  const [playing, setPlaying] = useState(false);
  const ctxRef    = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const nodesRef  = useRef<(OscillatorNode | GainNode | BiquadFilterNode)[]>([]);

  const start = useCallback(() => {
    const ctx = new AudioContext();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 3.5);
    master.connect(ctx.destination);
    masterRef.current = master;

    LAYERS.forEach(({ freq, type, gain: g, lfoRate, lfoDepth }) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;

      const oscGain = ctx.createGain();
      oscGain.gain.value = g;

      /* LFO — gentle volume swell */
      const lfo = ctx.createOscillator();
      lfo.frequency.value = lfoRate;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = lfoDepth;
      lfo.connect(lfoGain);
      lfoGain.connect(oscGain.gain);
      lfo.start();

      /* Soft low-pass filter */
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 700;
      filter.Q.value = 0.4;

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(master);
      osc.start();

      nodesRef.current.push(osc, lfo, oscGain, lfoGain, filter);
    });
  }, []);

  const stop = useCallback(() => {
    const ctx    = ctxRef.current;
    const master = masterRef.current;
    if (!ctx || !master) return;

    master.gain.linearRampToValueAtTime(0, ctx.currentTime + 2.5);

    setTimeout(() => {
      nodesRef.current.forEach((n) => {
        try { (n as OscillatorNode).stop?.(); } catch { /* already stopped */ }
      });
      nodesRef.current = [];
      ctx.close();
      ctxRef.current    = null;
      masterRef.current = null;
    }, 2700);
  }, []);

  const toggle = () => {
    if (playing) {
      stop();
      setPlaying(false);
    } else {
      start();
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Stop ambient music" : "Play calming ambient music"}
      title={playing ? "Click to stop music" : "Play calming background music"}
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold select-none ${
        playing
          ? "bg-primary text-white shadow-primary/40 scale-105"
          : "bg-white text-brand-dark/70 hover:text-primary hover:shadow-md"
      }`}
    >
      {playing ? (
        <>
          <EqBars />
          <span>Playing</span>
        </>
      ) : (
        <>
          {/* Music note SVG */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          <span>Calm music</span>
        </>
      )}
    </button>
  );
}
