"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { LinkedInIcon, NextdoorIcon } from "@/components/icons";
import { useConfetti } from "@/hooks/useConfetti";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const fireConfetti = useConfetti();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // TODO: Wire to Mailchimp or Klaviyo embed when ready
      setSubscribed(true);
      setEmail("");
      fireConfetti();
    }
  };

  return (
    <footer className="bg-brand-dark text-white">
      {/* Orange top accent border */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <p className="text-2xl font-bold text-primary font-heading mb-2">TSCSNC</p>
            <p className="text-xs text-white/60 uppercase tracking-widest mb-4">
              Embracing Black Mental Health
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Twins Sisters Cumulative Supportive Networking Corporation is dedicated to embracing and uplifting Black mental health through community, compassion, and culturally affirming care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span>Oakland, CA</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <a href="tel:+19257273583" className="hover:text-primary transition-colors duration-200">(925) 727-3583</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                {/* TODO: Replace with real email */}
                <a href="mailto:info@twinssisterscsnc.org" className="hover:text-primary transition-colors duration-200">
                  info@twinssisterscsnc.org
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/in/shaquala-watts-b1765424/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors duration-200 text-white"
                aria-label="TSCSNC on LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://nextdoor.com/profile/01MSrmrzhJgqLj7wS/?init_source=search_autocomplete"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors duration-200 text-white"
                aria-label="TSCSNC on Nextdoor"
              >
                <NextdoorIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mailing List */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Stay Connected</h3>
            <p className="text-white/70 text-sm mb-4">
              Get updates on events, resources, and ways to get involved.
            </p>
            {subscribed ? (
              <div className="bg-primary/20 border border-primary/40 rounded-lg px-4 py-3 text-sm text-white">
                Thank you for subscribing! We&apos;ll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Twins Sisters Cumulative Supportive Networking Corporation. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary inline" aria-hidden="true" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
}
