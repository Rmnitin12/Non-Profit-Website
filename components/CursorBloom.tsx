"use client";
import { useEffect, useRef, useCallback } from "react";

const FLOWERS = [
  // Cherry blossom (5 petals)
  (c: string) => `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">${[0,72,144,216,288].map(r=>`<ellipse cx="11" cy="4.5" rx="3" ry="5.5" fill="${c}" opacity="0.88" transform="rotate(${r} 11 11)"/>`).join("")}<circle cx="11" cy="11" r="2.8" fill="#FFE4B5"/><circle cx="11" cy="11" r="1.2" fill="#FFB347"/></svg>`,
  // Daisy (8 petals)
  (c: string) => `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">${[0,45,90,135,180,225,270,315].map(r=>`<ellipse cx="11" cy="3.5" rx="2.2" ry="4.5" fill="${c}" opacity="0.82" transform="rotate(${r} 11 11)"/>`).join("")}<circle cx="11" cy="11" r="3.2" fill="#FFD700"/></svg>`,
  // Sparkle star
  (c: string) => `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 1 L11.8 7.5 L18 6 L13 10 L18 14 L11.8 12.5 L10 19 L8.2 12.5 L2 14 L7 10 L2 6 L8.2 7.5 Z" fill="${c}" opacity="0.9"/><circle cx="10" cy="10" r="2" fill="white" opacity="0.7"/></svg>`,
  // Heart
  (c: string) => `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path d="M10 17 C10 17 1 11 1 5.5 C1 3 3 1 5.5 1 C7.2 1 8.8 2 10 3.5 C11.2 2 12.8 1 14.5 1 C17 1 19 3 19 5.5 C19 11 10 17 10 17Z" fill="${c}" opacity="0.85"/></svg>`,
];

const COLORS = ["#FFB7C5","#FF9E1B","#A8D5BA","#D4B3FF","#FFD700","#FF8FAB","#98D8C8"];

export default function CursorBloom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: -999, y: -999 });

  const spawn = useCallback((cx: number, cy: number) => {
    const container = containerRef.current;
    if (!container) return;
    const size = 16 + Math.random() * 14;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const svgFn = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];
    const rotation = Math.random() * 360;
    const el = document.createElement("div");
    el.style.cssText = `position:fixed;left:${cx - size/2}px;top:${cy - size/2}px;width:${size}px;height:${size}px;pointer-events:none;z-index:9999;`;
    el.innerHTML = svgFn(color);
    container.appendChild(el);
    const driftY = 35 + Math.random() * 25;
    const driftX = (Math.random() - 0.5) * 20;
    const startTop = cy - size / 2;
    const startLeft = cx - size / 2;
    el.animate(
      [
        { top: `${startTop}px`, left: `${startLeft}px`, opacity: "0", transform: `rotate(${rotation}deg) scale(0)` },
        { top: `${startTop - driftY * 0.3}px`, left: `${startLeft + driftX * 0.3}px`, opacity: "1", transform: `rotate(${rotation + 15}deg) scale(1.15)`, offset: 0.2 },
        { top: `${startTop - driftY}px`, left: `${startLeft + driftX}px`, opacity: "0", transform: `rotate(${rotation + 45}deg) scale(0.7)` },
      ] as Keyframe[],
      { duration: 1000, easing: "ease-out", fill: "forwards" }
    );
    setTimeout(() => el.remove(), 1050);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      const { x, y } = lastPos.current;
      const dx = e.clientX - x, dy = e.clientY - y;
      if (dx * dx + dy * dy > 35 * 35) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        spawn(e.clientX, e.clientY);
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [spawn]);

  return <div ref={containerRef} aria-hidden="true" className="pointer-events-none" />;
}
