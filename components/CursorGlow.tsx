"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let targetX = -500, targetY = -500;
    let lerpX = targetX, lerpY = targetY;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      lerpX += (targetX - lerpX) * 0.08;
      lerpY += (targetY - lerpY) * 0.08;
      glow.style.transform = `translate(${lerpX - 200}px, ${lerpY - 200}px)`;
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] z-[9998] mix-blend-screen opacity-20"
      aria-hidden="true"
      style={{
        background: "radial-gradient(circle, #FF9E1B 0%, #F56A00 35%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
