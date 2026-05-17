"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

const moods = [
  {
    emoji: "😊",
    label: "Doing Well",
    color: "bg-green-50 border-green-200 hover:border-green-400",
    selectedColor: "bg-green-100 border-green-500",
    response: {
      heading: "That's wonderful to hear!",
      message:
        "Keep nurturing those healthy habits. Wellness is a daily practice, and you're showing up for yourself.",
      cta: "Explore Resources",
      href: "/resources",
      accent: "text-green-700",
      bg: "bg-green-50 border-green-200",
    },
  },
  {
    emoji: "😐",
    label: "Getting By",
    color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400",
    selectedColor: "bg-yellow-100 border-yellow-500",
    response: {
      heading: "That's okay — we all have those days.",
      message:
        "Many in our community are right there with you. Small steps toward support can make a real difference.",
      cta: "Browse Our Services",
      href: "/services",
      accent: "text-yellow-700",
      bg: "bg-yellow-50 border-yellow-200",
    },
  },
  {
    emoji: "😔",
    label: "Struggling",
    color: "bg-orange-50 border-orange-200 hover:border-orange-400",
    selectedColor: "bg-orange-100 border-orange-500",
    response: {
      heading: "Thank you for being honest with yourself.",
      message:
        "You deserve real support. TSCSNC offers group sessions, community resources, and wraparound care designed just for you.",
      cta: "Get Support",
      href: "/services",
      accent: "text-primary",
      bg: "bg-orange-50 border-orange-200",
    },
  },
  {
    emoji: "😰",
    label: "Overwhelmed",
    color: "bg-red-50 border-red-200 hover:border-red-400",
    selectedColor: "bg-red-100 border-red-500",
    response: {
      heading: "We hear you. You don't have to carry this alone.",
      message:
        "Feeling overwhelmed is a signal that you need more support — and that's okay. Let's connect you with someone today.",
      cta: "Contact Us Now",
      href: "/contact",
      accent: "text-accent",
      bg: "bg-red-50 border-red-200",
    },
  },
  {
    emoji: "🆘",
    label: "In Crisis",
    color: "bg-accent/10 border-accent/40 hover:border-accent",
    selectedColor: "bg-accent/20 border-accent",
    response: {
      heading: "You matter. Please reach out right now.",
      message:
        "If you are in crisis, call or text 988 immediately — free, confidential, available 24/7. You are not alone, and your life has immeasurable value.",
      cta: "View Crisis Resources",
      href: "/resources",
      accent: "text-accent",
      bg: "bg-red-50 border-red-300",
      crisis: true,
    },
  },
];

export default function MoodCheckIn() {
  const [selected, setSelected] = useState<number | null>(null);

  const response = selected !== null ? moods[selected].response : null;

  return (
    <section className="bg-brand-bg py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Check In With Yourself
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
            How are you feeling today?
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {moods.map((mood, i) => (
            <button
              key={mood.label}
              onClick={() => setSelected(i === selected ? null : i)}
              aria-pressed={selected === i}
              aria-label={`I am feeling: ${mood.label}`}
              className={`flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border-2 transition-all duration-200 min-w-[90px] ${
                selected === i ? mood.selectedColor : mood.color
              }`}
            >
              <span className="text-3xl" aria-hidden="true">{mood.emoji}</span>
              <span className="text-xs font-semibold text-brand-dark/80 whitespace-nowrap">
                {mood.label}
              </span>
            </button>
          ))}
        </div>

        {/* Response panel */}
        {response && (
          <div
            className={`relative rounded-2xl border-2 p-6 md:p-8 ${response.bg}`}
            style={{ animation: "fadeInUp 0.4s ease-out" }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-brand-dark/40 hover:text-brand-dark transition-colors duration-200"
              aria-label="Close response"
            >
              <X className="w-4 h-4" />
            </button>

            {response.crisis && (
              <div className="mb-4 px-4 py-3 bg-accent text-white rounded-xl font-bold text-center text-lg tracking-wide">
                📞 Call or Text <span className="text-2xl">988</span> — Available 24/7
              </div>
            )}

            <h3 className={`font-heading font-bold text-xl md:text-2xl mb-2 ${response.accent}`}>
              {response.heading}
            </h3>
            <p className="text-brand-dark/80 leading-relaxed mb-5">{response.message}</p>
            <Link
              href={response.href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-sm transition-all duration-200"
            >
              {response.cta}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
