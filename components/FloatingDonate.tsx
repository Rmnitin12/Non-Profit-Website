"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export default function FloatingDonate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://www.paypal.com/donate/?business=BRMKTTT842JTU&no_recurring=0&currency_code=USD"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Make a donation via PayPal"
      className={`fixed bottom-6 right-4 z-50 md:hidden flex items-center gap-2 px-4 py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm rounded-full shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Heart className="w-4 h-4" aria-hidden="true" />
      Donate
    </a>
  );
}
