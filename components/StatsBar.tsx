"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  numeric: number;
}

const stats: Stat[] = [
  { label: "Families Served", value: "200+", numeric: 200, suffix: "+" },
  { label: "Years of Service", value: "5+", numeric: 5, suffix: "+" },
  { label: "Community Focused", value: "100%", numeric: 100, suffix: "%" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.numeric, 1500, active);
  return (
    <div className="text-center text-white">
      <p className="text-5xl md:text-6xl font-bold font-heading mb-2">
        {count}
        {stat.suffix}
      </p>
      <p className="text-white/80 text-lg font-medium">{stat.label}</p>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#D93600] via-[#F56A00] to-[#FF9E1B] py-16 md:py-20">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}
