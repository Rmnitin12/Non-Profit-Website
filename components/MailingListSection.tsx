"use client";

import { useState } from "react";
import { LinkedInIcon, NextdoorIcon } from "@/components/icons";
import { useConfetti } from "@/hooks/useConfetti";

interface MailingListSectionProps {
  heading?: string;
  subtext?: string;
  showNameField?: boolean;
  bgClass?: string;
}

export default function MailingListSection({
  heading = "Stay Connected",
  subtext = "Get updates on events, resources, and ways to get involved.",
  showNameField = false,
  bgClass = "bg-brand-light",
}: MailingListSectionProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fireConfetti = useConfetti();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // TODO: Wire to Mailchimp or Klaviyo embed when ready
      setSubmitted(true);
      fireConfetti();
    }
  };

  return (
    <section className={`${bgClass} py-16 md:py-20`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-3">
          {heading}
        </h2>
        <p className="text-brand-dark/70 mb-8">{subtext}</p>

        {submitted ? (
          <div className="bg-white border border-primary/30 rounded-xl px-6 py-5 text-brand-dark shadow-sm">
            <p className="font-semibold text-primary text-lg mb-1">You&apos;re in!</p>
            <p className="text-sm text-brand-dark/70">
              Thank you for joining our community. We&apos;ll keep you updated on all the ways we&apos;re embracing Black mental health.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {showNameField && (
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-xl border border-brand-dark/20 bg-white text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="mailing-email" className="sr-only">Email address</label>
              <input
                id="mailing-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-xl border border-brand-dark/20 bg-white text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/shaquala-watts-b1765424/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-dark/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
            aria-label="Follow us on LinkedIn"
          >
            <LinkedInIcon className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://nextdoor.com/profile/01MSrmrzhJgqLj7wS/?init_source=search_autocomplete"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-dark/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
            aria-label="Follow us on Nextdoor"
          >
            <NextdoorIcon className="w-5 h-5" />
            Nextdoor
          </a>
        </div>
      </div>
    </section>
  );
}
