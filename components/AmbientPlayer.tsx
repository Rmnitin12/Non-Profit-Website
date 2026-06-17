"use client";

import { useState, useRef } from "react";

const TRACK_URL =
  "https://archive.org/download/CalmPills/Uplifting_Pills_-_Calm_Pill_11_-_The_Healing_Lake_8BE609A8-7115-4273-8A1A-CE5738459E7A.mp3";

function EqBars() {
  return (
    <span className="flex items-end gap-[3px] h-4" aria-hidden="true">
      <span className="w-[3px] bg-white rounded-full animate-eq-1" style={{ minHeight: 4 }} />
      <span className="w-[3px] bg-white rounded-full animate-eq-2" style={{ minHeight: 4 }} />
      <span className="w-[3px] bg-white rounded-full animate-eq-3" style={{ minHeight: 4 }} />
    </span>
  );
}

function LoadingDots() {
  return (
    <span className="flex items-center gap-[3px]" aria-hidden="true">
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0ms]" />
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:150ms]" />
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:300ms]" />
    </span>
  );
}

export default function AmbientPlayer() {
  const [playing, setPlaying]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioRef.current) {
      const audio = new Audio(TRACK_URL);
      audio.loop   = true;
      audio.volume = 0.35;

      audio.addEventListener("canplaythrough", () => setLoading(false), { once: true });
      audio.addEventListener("waiting",  () => setLoading(true));
      audio.addEventListener("playing",  () => setLoading(false));

      audioRef.current = audio;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      setLoading(true);
      audioRef.current.play().then(() => {
        setPlaying(true);
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Stop ambient music" : "Play calming ambient music"}
      title={playing ? "Click to stop music" : "The Healing Lake — calming ambient music"}
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold select-none ${
        playing
          ? "bg-primary text-white shadow-primary/40 scale-105"
          : "bg-white text-brand-dark/70 hover:text-primary hover:shadow-md"
      }`}
    >
      {loading ? (
        <>
          <LoadingDots />
          <span className="text-brand-dark/50">Loading…</span>
        </>
      ) : playing ? (
        <>
          <EqBars />
          <span>Playing</span>
        </>
      ) : (
        <>
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
