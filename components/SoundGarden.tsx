"use client";
import { useState, useRef, useCallback, useEffect } from "react";

const PIANO_URL =
  "https://archive.org/download/CalmPills/Uplifting_Pills_-_Calm_Pill_11_-_The_Healing_Lake_8BE609A8-7115-4273-8A1A-CE5738459E7A.mp3";

interface TrackDef { id: string; label: string; emoji: string; color: string }

const TRACKS: TrackDef[] = [
  { id: "rain",  label: "Rain",  emoji: "🌧️", color: "#64B5F6" },
  { id: "fire",  label: "Fire",  emoji: "🔥", color: "#FF7043" },
  { id: "birds", label: "Birds", emoji: "🐦", color: "#81C784" },
  { id: "piano", label: "Piano", emoji: "🎹", color: "#CE93D8" },
];

function EqBars() {
  return (
    <span className="flex items-end gap-[3px] h-4" aria-hidden="true">
      <span className="w-[3px] bg-white rounded-full animate-eq-1" style={{ minHeight: 4 }} />
      <span className="w-[3px] bg-white rounded-full animate-eq-2" style={{ minHeight: 4 }} />
      <span className="w-[3px] bg-white rounded-full animate-eq-3" style={{ minHeight: 4 }} />
    </span>
  );
}

function makeNoise(ctx: AudioContext): AudioBuffer {
  const buf = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

function startRain(ctx: AudioContext, dest: AudioNode): () => void {
  const src = ctx.createBufferSource();
  src.buffer = makeNoise(ctx);
  src.loop = true;
  const lpf = ctx.createBiquadFilter();
  lpf.type = "lowpass";
  lpf.frequency.value = 3200;
  lpf.Q.value = 0.4;
  src.connect(lpf);
  lpf.connect(dest);
  src.start();
  return () => { try { src.stop(); } catch (_) {} };
}

function startFire(ctx: AudioContext, dest: AudioNode): () => void {
  const src = ctx.createBufferSource();
  src.buffer = makeNoise(ctx);
  src.loop = true;
  const lpf = ctx.createBiquadFilter();
  lpf.type = "lowpass";
  lpf.frequency.value = 500;
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value = 2.5;
  lfoGain.gain.value = 180;
  lfo.connect(lfoGain);
  lfoGain.connect(lpf.frequency);
  lfo.start();
  src.connect(lpf);
  lpf.connect(dest);
  src.start();
  return () => { try { src.stop(); lfo.stop(); } catch (_) {} };
}

function startBirds(ctx: AudioContext, dest: AudioNode): () => void {
  let stopped = false;
  let timerId: ReturnType<typeof setTimeout>;

  function chirp() {
    if (stopped) return;
    const now = ctx.currentTime;
    const baseFreq = 1800 + Math.random() * 1400;
    const notes = Math.random() > 0.5 ? 2 : 1;
    for (let i = 0; i < notes; i++) {
      const t = now + i * 0.09;
      const dur = 0.06 + Math.random() * 0.1;
      const osc = ctx.createOscillator();
      const env = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(baseFreq * (1 + i * 0.3), t);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * (1 + i * 0.3) * 1.6, t + dur);
      env.gain.setValueAtTime(0, t);
      env.gain.linearRampToValueAtTime(0.45, t + dur * 0.25);
      env.gain.exponentialRampToValueAtTime(0.001, t + dur);
      osc.connect(env);
      env.connect(dest);
      osc.start(t);
      osc.stop(t + dur + 0.02);
    }
    timerId = setTimeout(chirp, 600 + Math.random() * 2400);
  }

  chirp();
  return () => { stopped = true; clearTimeout(timerId); };
}

export default function SoundGarden() {
  const [open, setOpen] = useState(false);
  const [volumes, setVolumes] = useState<Record<string, number>>({ rain: 0, fire: 0, birds: 0, piano: 0 });

  const ctxRef  = useRef<AudioContext | null>(null);
  const gains   = useRef<Record<string, GainNode>>({});
  const stopFns = useRef<Record<string, () => void>>({});
  const pianoEl = useRef<HTMLAudioElement | null>(null);

  const getCtx = useCallback((): AudioContext => {
    if (!ctxRef.current) ctxRef.current = new AudioContext();
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    return ctxRef.current;
  }, []);

  const getGain = useCallback((id: string): GainNode => {
    if (!gains.current[id]) {
      const ctx = getCtx();
      const g = ctx.createGain();
      g.gain.value = 0;
      g.connect(ctx.destination);
      gains.current[id] = g;
    }
    return gains.current[id];
  }, [getCtx]);

  const updateVolume = useCallback((id: string, vol: number) => {
    setVolumes(prev => ({ ...prev, [id]: vol }));
    const ctx = getCtx();

    if (id === "piano") {
      if (!pianoEl.current) {
        const audio = new Audio(PIANO_URL);
        audio.loop = true;
        pianoEl.current = audio;
      }
      pianoEl.current.volume = vol;
      if (vol > 0 && pianoEl.current.paused) pianoEl.current.play().catch(() => {});
      if (vol === 0 && !pianoEl.current.paused) pianoEl.current.pause();
      return;
    }

    const gain = getGain(id);
    gain.gain.setTargetAtTime(vol * 0.7, ctx.currentTime, 0.05);

    if (vol > 0 && !stopFns.current[id]) {
      const starters: Record<string, (c: AudioContext, d: AudioNode) => () => void> = {
        rain: startRain, fire: startFire, birds: startBirds,
      };
      if (starters[id]) stopFns.current[id] = starters[id](ctx, gain);
    }

    if (vol === 0 && stopFns.current[id]) {
      stopFns.current[id]();
      delete stopFns.current[id];
    }
  }, [getCtx, getGain]);

  useEffect(() => {
    return () => {
      Object.values(stopFns.current).forEach(fn => fn());
      pianoEl.current?.pause();
      ctxRef.current?.close();
    };
  }, []);

  const anyActive = Object.values(volumes).some(v => v > 0);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {open && (
        <div className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-xl border border-brand-light p-5 w-64 mb-2">
          <p className="text-sm font-semibold text-brand-dark mb-4">🎧 Sound Garden</p>
          {TRACKS.map(track => (
            <div key={track.id} className="mb-4 last:mb-0">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-brand-dark/70">{track.emoji} {track.label}</span>
                <span className="text-xs text-brand-dark/40">{Math.round(volumes[track.id] * 100)}%</span>
              </div>
              <input
                type="range"
                min="0" max="1" step="0.01"
                value={volumes[track.id]}
                onChange={e => updateVolume(track.id, parseFloat(e.target.value))}
                className="w-full accent-primary cursor-pointer"
                style={{ accentColor: track.color }}
                aria-label={`${track.label} volume`}
              />
            </div>
          ))}
          <p className="text-xs text-brand-dark/30 mt-4 border-t border-brand-light pt-3">
            Set any slider above 0 to play
          </p>
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close sound garden" : "Open sound garden mixer"}
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-lg text-sm font-semibold select-none transition-all duration-300 ${
          anyActive
            ? "bg-primary text-white shadow-primary/40 scale-105"
            : "bg-white text-brand-dark/70 hover:text-primary hover:shadow-md"
        }`}
      >
        {anyActive ? <EqBars /> : <span>🎵</span>}
        <span>Sound Garden</span>
      </button>
    </div>
  );
}
