"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Phone, RotateCcw, Share2 } from "lucide-react";
import {
  ARCHETYPES,
  ATTACHMENT,
  HEALING_PLAN,
  PARTS,
  SHADOW,
  TOTAL_Q,
  TRAUMA,
  WOUNDS,
} from "./mirrorWithinData";

type Screen = "intro" | "quiz" | "results";
type Tab = "learn" | "journal" | "plan";

const flat = PARTS.flatMap((part, partIndex) => part.qs.map((q) => ({ partIndex, q })));
const LETTERS = ["A", "B", "C", "D"];

const FEATURES = [
  ["✨", "Your Core Personality Archetype"],
  ["🪶", "Your Hidden Gifts"],
  ["🌑", "Your Shadow Pattern"],
  ["❤️", "Your Attachment Style"],
  ["🔥", "Your Trauma Response"],
  ["🩹", "Your Core Emotional Wound"],
  ["📝", "Personalized Journal Prompts"],
];

function topKey(keys: string[], fallback: string) {
  const counts: Record<string, number> = {};
  for (const k of keys) counts[k] = (counts[k] ?? 0) + 1;
  let best = fallback;
  let bestN = 0;
  for (const [k, n] of Object.entries(counts)) {
    if (n > bestN) {
      best = k;
      bestN = n;
    }
  }
  return best;
}

export default function MirrorWithin() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(TOTAL_Q).fill(null));
  const [tab, setTab] = useState<Tab>("learn");
  const [shareNote, setShareNote] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstRender = useRef(true);

  useEffect(
    () => () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    },
    []
  );

  // Keep the card in view when moving between screens/questions.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [screen, index]);

  const result = useMemo(() => {
    if (screen !== "results") return null;
    const keysIn = (part: number) =>
      flat.flatMap((item, i) => {
        const a = answers[i];
        return item.partIndex === part && a !== null ? [item.q.keys[a]] : [];
      });
    const A = ARCHETYPES[topKey(keysIn(0), "caregiver")];
    return {
      A,
      T: ATTACHMENT[topKey(keysIn(1), "secure")],
      R: TRAUMA[topKey(keysIn(2), "fawn")],
      S: SHADOW[topKey(keysIn(3), "pleaser")],
      W: WOUNDS[A.wound],
    };
  }, [screen, answers]);

  function start() {
    setAnswers(Array(TOTAL_Q).fill(null));
    setIndex(0);
    setScreen("quiz");
  }

  function restart() {
    setShareNote("");
    setTab("learn");
    setScreen("intro");
  }

  function advance(from: number) {
    if (from < TOTAL_Q - 1) setIndex(from + 1);
    else setScreen("results");
  }

  function select(oi: number) {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setAnswers((prev) => prev.map((a, i) => (i === index ? oi : a)));
    const from = index;
    advanceTimer.current = setTimeout(() => advance(from), 250);
  }

  function back() {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    if (index === 0) setScreen("intro");
    else setIndex(index - 1);
  }

  async function share() {
    if (!result) return;
    const { A, T, R, S, W } = result;
    const text = `My Mirror Within Profile 🪞\n\nArchetype: ${A.name}\nAttachment: ${T.name}\nTrauma Response: ${R.name}\nShadow Pattern: ${S.name}\nCore Wound: ${W.name}\n\n"${A.affirmation}"`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "The Mirror Within", text });
      } else {
        await navigator.clipboard.writeText(text);
        setShareNote("Results copied — paste anywhere to share.");
      }
    } catch {
      /* share dismissed or clipboard unavailable */
    }
  }

  const card = "rounded-2xl border border-parchment/15 bg-parchment/[0.03]";

  return (
    <div
      ref={rootRef}
      className="scroll-mt-24 rounded-3xl bg-[#241A26] text-parchment shadow-xl overflow-hidden"
    >
      <div className="max-w-xl mx-auto px-5 sm:px-6 py-8 sm:py-10">
        {screen === "intro" && (
          <div className="animate-fade-in-up flex flex-col">
            <div className="mx-auto mb-5 w-32 h-32 rounded-full bg-[#3A2E3D] ring-1 ring-parchment/15 flex items-center justify-center text-5xl shadow-inner">
              <span aria-hidden="true">🪞</span>
            </div>
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8FA290] mb-2">
              Personality · Trauma · Shadow Work
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-center mb-3">The Mirror Within</h2>
            <p className="text-center text-parchment/70 leading-relaxed mb-2">
              A {TOTAL_Q}-question self-discovery experience. Answer honestly — there are no wrong reflections.
            </p>
            <p className="text-center text-sm text-parchment/55 mb-6">{TOTAL_Q} Questions · 8–10 Minutes</p>

            <ul className="grid gap-2.5 mb-7">
              {FEATURES.map(([icon, label]) => (
                <li key={label} className={`${card} flex items-center gap-3 px-4 py-3 text-[15px]`}>
                  <span className="w-6 text-center" aria-hidden="true">
                    {icon}
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <button
              onClick={start}
              className="w-full rounded-xl bg-gradient-to-b from-[#C6934B] to-[#b17c37] py-4 font-bold text-[#241A26] shadow-lg shadow-[#C6934B]/25 transition active:scale-[0.98]"
            >
              Begin the Assessment
            </button>
            <p className="text-center text-xs text-parchment/45 mt-3">
              For self-reflection and growth — not a clinical diagnosis.
            </p>
          </div>
        )}

        {screen === "quiz" && (
          <div key={index} className="animate-fade-in-up">
            <div className="flex items-center justify-between mb-4 text-xs font-bold uppercase tracking-widest text-[#8FA290]">
              <span>
                Part {flat[index].partIndex + 1} · {PARTS[flat[index].partIndex].short}
              </span>
              <span>
                {index + 1} / {TOTAL_Q}
              </span>
            </div>
            <div
              className="h-1 rounded bg-parchment/10 overflow-hidden mb-6"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={TOTAL_Q}
              aria-valuenow={index + 1}
            >
              <div
                className="h-full bg-[#C6934B] transition-[width] duration-300"
                style={{ width: `${((index + 1) / TOTAL_Q) * 100}%` }}
              />
            </div>

            <h3 className="font-heading text-xl sm:text-2xl leading-snug mb-5">{flat[index].q.t}</h3>

            <div className="grid gap-3" role="radiogroup" aria-label={flat[index].q.t}>
              {flat[index].q.o.map((text, oi) => {
                const selected = answers[index] === oi;
                return (
                  <button
                    key={oi}
                    role="radio"
                    aria-checked={selected}
                    onClick={() => select(oi)}
                    className={`flex items-start gap-3.5 text-left rounded-xl border px-4 py-3.5 transition ${
                      selected
                        ? "border-[#C6934B] bg-[#C6934B]/15"
                        : "border-parchment/15 bg-parchment/[0.03] hover:border-[#C6934B]/55"
                    }`}
                  >
                    <span
                      className={`shrink-0 w-6 h-6 rounded-full border text-xs font-bold flex items-center justify-center ${
                        selected
                          ? "bg-[#C6934B] border-[#C6934B] text-[#241A26]"
                          : "border-parchment/20 text-parchment/65"
                      }`}
                    >
                      {LETTERS[oi]}
                    </span>
                    <span className="text-[15.5px] leading-snug pt-0.5">{text}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex gap-2.5 mt-7">
              <button
                onClick={back}
                aria-label="Previous question"
                className="w-14 shrink-0 rounded-xl border border-parchment/15 hover:border-[#C6934B]/55 transition flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => advance(index)}
                disabled={answers[index] === null}
                className="flex-1 rounded-xl bg-gradient-to-b from-[#C6934B] to-[#b17c37] py-3.5 font-bold text-[#241A26] transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {index === TOTAL_Q - 1 ? "See My Results" : "Continue"}
              </button>
            </div>
          </div>
        )}

        {screen === "results" && result && (
          <div className="animate-fade-in-up">
            <div className="text-center pb-5">
              <span className="block text-6xl mb-2" aria-hidden="true">
                {result.A.emoji}
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8FA290] mb-1.5">
                Your Mirror Profile
              </p>
              <h2 className="font-heading text-3xl mb-2">{result.A.name}</h2>
              <p className="text-parchment/75 max-w-sm mx-auto">{result.A.tagline}</p>
            </div>

            <dl className="grid gap-2.5 my-6">
              {[
                ["Primary Archetype", result.A.name.replace("The ", "")],
                ["Attachment Style", result.T.name.replace(" Attachment", "")],
                ["Trauma Response", `${result.R.emoji} ${result.R.name}`],
                ["Dominant Shadow", result.S.name],
                ["Core Wound", result.W.name],
              ].map(([k, v]) => (
                <div key={k} className={`${card} flex items-center justify-between gap-3 px-4 py-3.5`}>
                  <dt className="text-xs uppercase tracking-wider text-parchment/55">{k}</dt>
                  <dd className="font-bold text-right">{v}</dd>
                </div>
              ))}
            </dl>

            {(
              [
                ["Your Gifts", result.A.gifts],
                ["Your Growth Edges", result.A.growth],
              ] as [string, string[]][]
            ).map(([title, items]) => (
              <section key={title} className={`${card} p-5 mb-3.5`}>
                <h3 className="font-heading text-lg text-[#C6934B] mb-3">{title}</h3>
                <ul className="grid gap-2">
                  {items.map((g) => (
                    <li key={g} className="relative pl-5 text-[14.5px] leading-relaxed">
                      <span className="absolute left-0 text-[#C98B7A]" aria-hidden="true">
                        —
                      </span>
                      {g}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <p className="rounded-2xl border border-dashed border-[#C6934B]/50 bg-[#C6934B]/[0.06] p-5 mb-3.5 font-heading italic text-lg leading-snug">
              “{result.A.journal}”
            </p>
            <p className="text-center rounded-2xl border border-[#C6934B]/30 bg-gradient-to-b from-[#C6934B]/15 to-[#C6934B]/[0.04] p-5 mb-6 font-heading text-lg leading-relaxed">
              “{result.A.affirmation}”
            </p>

            <div className="flex gap-2 overflow-x-auto pb-1 mb-4" role="tablist">
              {(
                [
                  ["learn", "Learn More"],
                  ["journal", "Journal Prompts"],
                  ["plan", "Healing Plan"],
                ] as [Tab, string][]
              ).map(([id, label]) => (
                <button
                  key={id}
                  role="tab"
                  aria-selected={tab === id}
                  onClick={() => setTab(id)}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-[13.5px] font-semibold transition ${
                    tab === id
                      ? "bg-[#C6934B] border-[#C6934B] text-[#241A26]"
                      : "border-parchment/15 bg-parchment/5 hover:border-[#C6934B]/55"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {tab === "learn" && (
              <div className="animate-fade-in-up">
                {[
                  [`About ${result.A.name}`, result.A.desc],
                  [`About ${result.T.name}`, result.T.desc],
                  [`About the ${result.R.name} Response`, result.R.desc],
                  [`About the ${result.S.name} Pattern`, result.S.desc],
                ].map(([title, desc]) => (
                  <section key={title} className={`${card} p-5 mb-3.5`}>
                    <h3 className="font-heading text-lg text-[#C6934B] mb-2">{title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-parchment/85">{desc}</p>
                  </section>
                ))}
              </div>
            )}

            {tab === "journal" && (
              <section className={`${card} p-5 animate-fade-in-up`}>
                <h3 className="font-heading text-lg text-[#C6934B] mb-3">Prompts For You</h3>
                <ul className="grid gap-3">
                  {[
                    result.A.journal,
                    `What would change if I let go of my ${result.S.name.toLowerCase()} pattern for one day?`,
                    `Where in my life does my ${result.T.name.toLowerCase()} show up the strongest?`,
                    `What does my ${result.R.name.toLowerCase()} response protect me from feeling?`,
                    `If my ${result.W.name.toLowerCase()} wound could speak, what would it want me to know?`,
                  ].map((p) => (
                    <li key={p} className="relative pl-5 text-[14.5px] leading-relaxed">
                      <span className="absolute left-0 text-[#C98B7A]" aria-hidden="true">
                        —
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {tab === "plan" && (
              <div className="animate-fade-in-up">
                {HEALING_PLAN.map((day, i) => (
                  <div key={day.title} className={`${card} flex gap-3.5 px-4 py-3.5 mb-2.5`}>
                    <div className="shrink-0 w-9 h-9 rounded-full bg-[#8FA290]/20 text-[#8FA290] font-bold flex items-center justify-center text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-heading text-[16.5px] mb-1">
                        Day {i + 1} · {day.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-parchment/75">
                        {day.body(
                          result.A.name.replace("The ", "").toLowerCase(),
                          result.S.name.toLowerCase(),
                          result.W.name.toLowerCase()
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-parchment/15 bg-parchment/[0.04] p-4 flex gap-3 items-start text-sm text-parchment/80">
              <Phone className="w-5 h-5 shrink-0 mt-0.5 text-[#C6934B]" aria-hidden="true" />
              <p>
                Some of what comes up here can be heavy. If you&apos;re struggling or in crisis, call or text{" "}
                <strong className="text-parchment">988</strong> any time, or{" "}
                <a href="/services#intake" className="underline underline-offset-2 hover:text-[#C6934B]">
                  reach out to us for support
                </a>
                .
              </p>
            </div>

            <div className="grid gap-3 mt-6">
              <button
                onClick={share}
                className="w-full rounded-xl bg-gradient-to-b from-[#C6934B] to-[#b17c37] py-4 font-bold text-[#241A26] flex items-center justify-center gap-2 transition active:scale-[0.98]"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" /> Share My Results
              </button>
              {shareNote && (
                <p className="text-center text-sm text-parchment/70" role="status">
                  {shareNote}
                </p>
              )}
              <button
                onClick={restart}
                className="mx-auto flex items-center gap-1.5 p-2.5 text-sm font-semibold text-[#C6934B] hover:underline"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" /> Retake the Assessment
              </button>
            </div>

            <p className="text-center text-xs text-parchment/40 mt-6 leading-relaxed">
              The Mirror Within is a self-reflection tool for personal growth, not a clinical or diagnostic
              instrument.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
