"use client";

import { useCallback } from "react";
import confetti from "canvas-confetti";

export function useConfetti() {
  const fire = useCallback(() => {
    const brandColors = ["#E8632A", "#F4A44A", "#C0392B", "#FEF0E7", "#FFFFFF"];

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x: 0.3, y: 0.6 },
      colors: brandColors,
      scalar: 1.1,
    });
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x: 0.7, y: 0.6 },
      colors: brandColors,
      scalar: 1.1,
    });
    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 100,
        origin: { x: 0.5, y: 0.4 },
        colors: brandColors,
        gravity: 0.8,
      });
    }, 200);
  }, []);

  return fire;
}
