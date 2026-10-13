"use client";
import { useState, useEffect } from "react";

type Period = "dawn" | "morning" | "afternoon" | "evening" | "night";

const THEMES: Record<Period, { overlay: string; opacity: number }> = {
  dawn:      { overlay: "#FFCBA4", opacity: 0.10 },
  morning:   { overlay: "#FFE082", opacity: 0.07 },
  afternoon: { overlay: "#FFF3CD", opacity: 0.05 },
  evening:   { overlay: "#FF8A65", opacity: 0.12 },
  night:     { overlay: "#283593", opacity: 0.18 },
};

function getPeriod(): Period {
  const h = new Date().getHours();
  if (h >= 5 && h < 7)  return "dawn";
  if (h >= 7 && h < 12) return "morning";
  if (h >= 12 && h < 17) return "afternoon";
  if (h >= 17 && h < 20) return "evening";
  return "night";
}

export default function TimeTheme() {
  const [period, setPeriod] = useState<Period>("afternoon");

  useEffect(() => {
    setPeriod(getPeriod());
    const id = setInterval(() => setPeriod(getPeriod()), 60_000);
    return () => clearInterval(id);
  }, []);

  const { overlay, opacity } = THEMES[period];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{
        backgroundColor: overlay,
        opacity,
        zIndex: 2,
        transition: "background-color 3s ease, opacity 3s ease",
      }}
    />
  );
}
