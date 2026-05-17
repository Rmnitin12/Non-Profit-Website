"use client";

import { useState } from "react";
import { Heart, ExternalLink } from "lucide-react";

const amounts = ["$10", "$25", "$50", "$100"];

const impactMap: Record<string, string> = {
  "$10": "provides a resource guide and referral packet for one family in need",
  "$25": "covers two supportive group sessions for a community member",
  "$50": "funds a full month of community outreach and resource coordination",
  "$100": "sponsors a family through our wraparound mental health services program",
};

function getCustomImpact(amount: string): string {
  const num = parseFloat(amount);
  if (!num || num <= 0) return "makes a meaningful difference for Black mental health";
  if (num < 10) return "helps cover materials and resources for a community member";
  if (num < 25) return "provides a resource guide and referral support for a family";
  if (num < 50) return "covers supportive group sessions for community members";
  if (num < 100) return "funds outreach and resource coordination for the month";
  return "makes a transformative impact for families in our community";
}

export default function DonateSection() {
  const [selected, setSelected] = useState("$25");
  const [custom, setCustom] = useState("");

  const impactText = custom
    ? getCustomImpact(custom)
    : impactMap[selected] ?? "makes a real difference";

  const displayAmount = custom ? `$${custom}` : selected;

  return (
    <div className="flex flex-col items-center">
      <p className="text-brand-dark/70 text-lg leading-relaxed max-w-xl text-center mb-8">
        Every dollar you give directly funds programs and resources that uplift Black mental health. Your generosity creates real, lasting change for individuals and families in our community.
      </p>

      {/* Amount selector */}
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        {amounts.map((amt) => (
          <button
            key={amt}
            onClick={() => { setSelected(amt); setCustom(""); }}
            className={`px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-200 ${
              selected === amt && !custom
                ? "bg-primary border-primary text-white shadow-md"
                : "bg-white border-primary/30 text-primary hover:border-primary"
            }`}
            aria-pressed={selected === amt && !custom}
            aria-label={`Donate ${amt}`}
          >
            {amt}
          </button>
        ))}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-dark/50 font-semibold text-sm">$</span>
          <input
            type="number"
            value={custom}
            onChange={(e) => { setCustom(e.target.value); setSelected(""); }}
            placeholder="Custom"
            min="1"
            className={`w-28 pl-7 pr-3 py-3 rounded-xl font-bold text-sm border-2 text-brand-dark placeholder-brand-dark/30 focus:outline-none transition-all duration-200 ${
              custom
                ? "border-primary bg-white"
                : "border-primary/30 bg-white hover:border-primary"
            }`}
            aria-label="Enter a custom donation amount"
          />
        </div>
      </div>

      {/* Impact calculator */}
      <div
        className="mb-6 px-6 py-4 bg-brand-light border border-primary/20 rounded-2xl text-center max-w-md transition-all duration-300"
        aria-live="polite"
        aria-label="Donation impact"
      >
        <p className="text-brand-dark text-sm leading-relaxed">
          <span className="font-bold text-primary text-base">{displayAmount}</span>{" "}
          <span className="text-brand-dark/80">{impactText}.</span>
        </p>
      </div>

      <a
        href="https://www.paypal.com/donate/?business=BRMKTTT842JTU&no_recurring=0&currency_code=USD"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-base rounded-xl transition-colors duration-200 flex items-center gap-2.5 shadow-lg hover:shadow-xl"
        aria-label="Donate now via PayPal"
      >
        <Heart className="w-5 h-5" aria-hidden="true" />
        Donate Now via PayPal
        <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </a>

      <p className="mt-3 text-brand-dark/50 text-xs flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
        Secure donation powered by PayPal
      </p>
    </div>
  );
}
