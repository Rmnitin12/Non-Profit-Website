"use client";

import { useState, useEffect } from "react";
import { Sparkles, RefreshCw } from "lucide-react";

const affirmations = [
  "Your mental health matters. You are worthy of care and healing.",
  "You are not your struggles. You are resilient, powerful, and deeply loved.",
  "Healing is not linear. Every step forward — no matter how small — counts.",
  "You deserve to be supported, not just to survive, but to truly thrive.",
  "Your feelings are valid. You don't have to pretend to be okay.",
  "The strength in seeking help is greater than any stigma.",
  "Rest is productive. Healing is work. Give yourself grace today.",
  "You carry the strength of generations. You are never alone.",
  "Your joy is an act of resistance. Embrace it fully and unapologetically.",
  "There is no shame in asking for help. It takes incredible courage.",
  "You are worthy of the same compassion you so freely give to others.",
  "Your story is still being written. Today is not the final chapter.",
  "Community is medicine. You belong to something far greater than yourself.",
  "You deserve a life filled with peace — not just survival, but flourishing.",
  "Your needs are not a burden. They are valid and worthy of care.",
  "Healing happens in layers. Be patient and gentle with yourself.",
  "You are not broken. You are in the beautiful process of becoming.",
  "Your presence is powerful. The world needs you whole and well.",
  "Taking care of your mind is an act of love — for yourself and everyone around you.",
  "You are allowed to grow at your own pace. There is no rush.",
  "Your ancestors survived the unimaginable. You carry that power within you.",
  "You are worthy of every good thing life has to offer.",
  "Asking for support is strength, not weakness. Never forget that.",
  "You have the right to prioritize your peace. Guard it fiercely.",
  "Every day you show up is a victory. Take a moment to acknowledge that.",
  "Your mental health journey is uniquely yours. Honor it completely.",
  "You deserve tenderness — especially from yourself.",
  "The work of healing is sacred. And so are you.",
  "You are seen. You are heard. You matter deeply.",
  "Your healing uplifts your entire community. We rise together.",
  "You are enough — exactly as you are, right now, in this moment.",
  "Give yourself permission to receive the care you so freely give.",
];

function getDailyIndex(): number {
  const now = new Date();
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dayOfYear % affirmations.length;
}

export default function AffirmationOfDay() {
  const [index, setIndex] = useState(getDailyIndex());
  const [animating, setAnimating] = useState(false);

  const cycle = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % affirmations.length);
      setAnimating(false);
    }, 300);
  };

  // Keep a "today's" affirmation stable on mount but allow manual cycling
  useEffect(() => {
    setIndex(getDailyIndex());
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#1C0300] via-[#8B2000] to-[#1C0300] py-16 md:py-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-6 left-10 w-40 h-40 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-6 right-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-5">
          <Sparkles className="w-4 h-4 text-secondary" aria-hidden="true" />
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest">
            Affirmation of the Day
          </p>
          <Sparkles className="w-4 h-4 text-secondary" aria-hidden="true" />
        </div>

        <blockquote
          className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          &ldquo;{affirmations[index]}&rdquo;
        </blockquote>

        <button
          onClick={cycle}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/60 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-200 group"
          aria-label="Show another affirmation"
        >
          <RefreshCw
            className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500"
            aria-hidden="true"
          />
          Another affirmation
        </button>
      </div>
    </section>
  );
}
