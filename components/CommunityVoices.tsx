"use client";

const voices = [
  {
    quote: "For the first time in my life, I felt like someone truly understood what I was going through.",
    name: "Community Member, Oakland",
  },
  {
    quote: "The group sessions gave me language for feelings I'd been carrying silently for years.",
    name: "TSCSNC Participant",
  },
  {
    quote: "I didn't know support like this existed. It changed everything for our family.",
    name: "Parent, East Bay",
  },
  {
    quote: "Walking into that room felt like coming home. I didn't have to explain myself.",
    name: "Community Member",
  },
  {
    quote: "TSCSNC helped me see that asking for help is one of the strongest things I've ever done.",
    name: "Program Participant",
  },
  {
    quote: "My children are healing because I finally got the support I needed to show up for them.",
    name: "Mother, Oakland",
  },
  {
    quote: "I came for myself and found a whole community I didn't know I was missing.",
    name: "Community Member",
  },
  {
    quote: "The wraparound services connected me to resources I didn't even know were available.",
    name: "TSCSNC Client",
  },
  {
    quote: "They treat you like a whole person — not just a diagnosis, not just a case number.",
    name: "Program Participant",
  },
  {
    quote: "For the first time, I'm not just surviving. I'm actually building something better.",
    name: "Community Member, Bay Area",
  },
];

// Duplicate for seamless loop
const allVoices = [...voices, ...voices];

export default function CommunityVoices() {
  return (
    <section className="bg-brand-light py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Community Voices
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
          Words from Those We Serve
        </h2>
        <p className="text-brand-dark/60 mt-2 text-sm">
          Shared anonymously with permission — names reflect community, not identity.
        </p>
      </div>

      {/* Ticker track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-brand-light to-transparent pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-brand-light to-transparent pointer-events-none" aria-hidden="true" />

        <div
          className="flex gap-5"
          style={{
            width: "max-content",
            animation: "ticker 40s linear infinite",
          }}
          aria-hidden="true"
        >
          {allVoices.map((voice, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-brand-light/80 flex flex-col justify-between"
              style={{ width: "300px", flexShrink: 0 }}
            >
              <div className="text-3xl mb-3 text-primary/30 font-heading leading-none">&ldquo;</div>
              <p className="text-brand-dark/80 text-sm leading-relaxed flex-1 italic">
                {voice.quote}
              </p>
              <p className="text-primary text-xs font-semibold mt-4">— {voice.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible static version (screen reader only) */}
      <ul className="sr-only" aria-label="Community voices">
        {voices.map((voice, i) => (
          <li key={i}>
            &ldquo;{voice.quote}&rdquo; — {voice.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
