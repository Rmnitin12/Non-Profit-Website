"use client";
import { useRef, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -12;
    const ry = ((x - rect.width / 2) / rect.width) * 12;
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    card.style.boxShadow = `${-ry * 1.5}px ${rx * 1.5}px 40px rgba(245,106,0,0.22)`;
  };

  const onEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "none";
  };

  const onLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.45s ease, box-shadow 0.45s ease";
    card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0)";
    card.style.boxShadow = "";
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
