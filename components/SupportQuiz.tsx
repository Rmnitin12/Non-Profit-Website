"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, CheckCircle } from "lucide-react";

const steps = [
  {
    question: "What are you dealing with?",
    options: [
      "Anxiety or stress",
      "Sadness or depression",
      "Grief or loss",
      "Trauma or past experiences",
      "Family or relationship challenges",
      "I'm not sure — I just need support",
    ],
  },
  {
    question: "Who is this support for?",
    options: [
      "Myself",
      "A child or young person",
      "A family member",
      "My whole family",
    ],
  },
  {
    question: "What feels most comfortable right now?",
    options: [
      "Talking one-on-one with someone",
      "Connecting with a supportive group",
      "Getting resources to explore on my own",
      "Just learning what's available first",
    ],
  },
];

interface Result {
  heading: string;
  description: string;
  service: string;
  href: string;
  badge: string;
}

function getResult(answers: (number | null)[]): Result {
  const [concern, who, comfort] = answers;

  // Crisis / trauma path
  if (concern === 3) {
    return {
      heading: "Wraparound Mental Health Services",
      description:
        "For those navigating trauma or deep emotional pain, our wraparound services provide coordinated, holistic care — connecting you with clinical support, community resources, and continuity of care.",
      service: "Wraparound Services",
      href: "/services#intake",
      badge: "Recommended for you",
    };
  }

  // Family / whole family path
  if (who === 3 || who === 2) {
    return {
      heading: "Community Support & Resources",
      description:
        "We provide culturally affirming support for families — connecting you with resources, referrals, and wraparound care designed for the whole family unit.",
      service: "Community Support",
      href: "/services#intake",
      badge: "Great fit for families",
    };
  }

  // Youth path
  if (who === 1) {
    return {
      heading: "Community Support & Youth Resources",
      description:
        "We support Black youth and their caregivers with culturally relevant resources, group programming, and referrals to trusted youth mental health providers.",
      service: "Resources & Referrals",
      href: "/resources",
      badge: "Youth & family focused",
    };
  }

  // Group comfort path
  if (comfort === 1) {
    return {
      heading: "Supportive Groups",
      description:
        "Our peer-led and facilitated groups are safe, affirming spaces where Black individuals connect, share experiences, and heal together. You don't have to do this alone.",
      service: "Supportive Groups",
      href: "/services#intake",
      badge: "Perfect match",
    };
  }

  // Self-guided path
  if (comfort === 2 || comfort === 3) {
    return {
      heading: "Resources & Referrals",
      description:
        "We can connect you with curated mental health resources, trusted providers, and educational tools — on your own timeline, at your own pace.",
      service: "Resources & Referrals",
      href: "/resources",
      badge: "Start here",
    };
  }

  // Default
  return {
    heading: "Community Support",
    description:
      "Our community support services are a great starting point — we'll help you understand what's available and connect you with exactly the right type of care.",
    service: "Community Support",
    href: "/services#intake",
    badge: "A strong start",
  };
}

export default function SupportQuiz() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);
  const [done, setDone] = useState(false);

  const handleSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[step] = optionIndex;
    setAnswers(newAnswers);

    if (step < steps.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setDone(true), 300);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([null, null, null]);
    setDone(false);
  };

  const result = done ? getResult(answers) : null;
  const progress = done ? 100 : (step / steps.length) * 100;

  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Personalized for You
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Find Your Support
          </h2>
          <p className="text-brand-dark/70">
            Answer 3 quick questions and we&apos;ll point you to the service that fits best.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-brand-light p-8 md:p-10">
          {/* Progress bar */}
          <div className="h-1.5 bg-brand-light rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Quiz progress"
            />
          </div>

          {!done ? (
            <>
              <p className="text-xs font-semibold text-brand-dark/40 uppercase tracking-wider mb-2">
                Step {step + 1} of {steps.length}
              </p>
              <h3
                className="font-heading font-bold text-2xl text-brand-dark mb-6"
                aria-live="polite"
              >
                {steps[step].question}
              </h3>
              <div className="space-y-3">
                {steps[step].options.map((option, i) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(i)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                      answers[step] === i
                        ? "border-primary bg-brand-light text-primary"
                        : "border-brand-light hover:border-primary/50 text-brand-dark hover:bg-brand-bg"
                    }`}
                    aria-pressed={answers[step] === i}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div style={{ animation: "fadeInUp 0.5s ease-out" }}>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {result!.badge}
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3">
                {result!.heading}
              </h3>
              <p className="text-brand-dark/70 leading-relaxed mb-6">
                {result!.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={result!.href}
                  className="flex-1 text-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                  aria-label={`Get started with ${result!.service}`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <button
                  onClick={reset}
                  className="px-6 py-3 border-2 border-brand-dark/20 text-brand-dark/70 hover:border-primary hover:text-primary font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                  aria-label="Retake the quiz"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  Retake
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
