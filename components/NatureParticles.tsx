"use client";

import { useState, useEffect, useRef } from "react";

type Mode = "leaves" | "petals" | "off";

const LEAF_COLORS  = ["#C4572A","#D4A020","#8B5430","#E8904A","#6B8C3A","#A07828","#5A7A2A","#D96030"];
const PETAL_COLORS = ["#FFB7C5","#FFCDD5","#FFE4E8","#FFC0CB","#FF9CB5","#FFDDE5","#FFB3C6","#FFFFFF"];

type Particle = {
  pageX:      number; // x in viewport space (no horizontal scroll)
  pageY:      number; // y in full document space
  size:       number;
  speedY:     number;
  speedX:     number;
  angle:      number;
  rotSpeed:   number;
  color:      string;
  swaySpeed:  number;
  swayOffset: number;
  opacity:    number;
  frame:      number;
};

function drawLeaf(ctx: CanvasRenderingContext2D, x: number, y: number, p: Particle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(p.angle);
  ctx.globalAlpha = p.opacity;
  const s = p.size;
  ctx.fillStyle = p.color;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo( s * 0.9, -s * 0.4,  s * 0.9,  s * 0.4, 0,  s);
  ctx.bezierCurveTo(-s * 0.9,  s * 0.4, -s * 0.9, -s * 0.4, 0, -s);
  ctx.fill();
  ctx.strokeStyle = "rgba(0,0,0,0.18)";
  ctx.lineWidth = s * 0.1;
  ctx.beginPath(); ctx.moveTo(0, -s * 0.85); ctx.lineTo(0, s * 0.85); ctx.stroke();
  ctx.lineWidth = s * 0.06;
  [[-0.5,-0.3],[-0.2,0.1],[0.15,0.45]].forEach(([ty,tx]) => {
    ctx.beginPath(); ctx.moveTo(0, ty*s); ctx.lineTo( s*0.55, (ty+tx*0.4)*s); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, ty*s); ctx.lineTo(-s*0.55, (ty+tx*0.4)*s); ctx.stroke();
  });
  ctx.lineWidth = s * 0.12;
  ctx.strokeStyle = "rgba(0,0,0,0.22)";
  ctx.beginPath(); ctx.moveTo(0, s); ctx.lineTo(0, s * 1.35); ctx.stroke();
  ctx.restore();
}

function drawPetal(ctx: CanvasRenderingContext2D, x: number, y: number, p: Particle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(p.angle);
  ctx.globalAlpha = p.opacity;
  const s = p.size;
  ctx.fillStyle = p.color;
  ctx.beginPath();
  ctx.ellipse(0, 0, s * 0.55, s, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = `${p.color}bb`;
  ctx.beginPath();
  ctx.arc(0, -s * 0.88, s * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(255,140,160,0.28)";
  ctx.lineWidth = s * 0.06;
  ctx.beginPath(); ctx.moveTo(0, -s * 0.7); ctx.lineTo(0, s * 0.7); ctx.stroke();
  ctx.restore();
}

function pageHeight() {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

export default function NatureParticles() {
  const [mode, setMode] = useState<Mode>("leaves");
  const modeRef  = useRef<Mode>("leaves");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const particles = useRef<Particle[]>([]);
  const tickRef   = useRef(0);

  useEffect(() => { modeRef.current = mode; }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      canvas!.width  = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    function spawn(startY?: number) {
      const isPetal = modeRef.current === "petals";
      const colors  = isPetal ? PETAL_COLORS : LEAF_COLORS;
      particles.current.push({
        pageX:      Math.random() * (window.innerWidth + 100) - 50,
        pageY:      startY ?? -20,
        size:       isPetal ? 5 + Math.random() * 7 : 7 + Math.random() * 11,
        speedY:     0.3 + Math.random() * 0.5,
        speedX:     (Math.random() - 0.5) * 0.3,
        angle:      Math.random() * Math.PI * 2,
        rotSpeed:   (Math.random() - 0.5) * 0.018,
        color:      colors[Math.floor(Math.random() * colors.length)],
        swaySpeed:  0.008 + Math.random() * 0.014,
        swayOffset: Math.random() * Math.PI * 2,
        opacity:    0.38 + Math.random() * 0.38,
        frame:      0,
      });
    }

    /* Pre-seed particles spread across the full page height */
    const ph = pageHeight();
    for (let i = 0; i < 22; i++) spawn(Math.random() * ph);

    function animate() {
      animRef.current = requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      if (modeRef.current === "off") return;

      tickRef.current++;
      if (tickRef.current % 90 === 0) spawn();

      const scrollY  = window.scrollY;
      const ph       = pageHeight();
      const isLeaves = modeRef.current === "leaves";

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.frame++;
        p.pageX += Math.sin(p.frame * p.swaySpeed + p.swayOffset) * 0.7 + p.speedX;
        p.pageY += p.speedY;
        p.angle += p.rotSpeed;

        if (p.pageY > ph + 50) { particles.current.splice(i, 1); continue; }

        const vy = p.pageY - scrollY;
        if (vy < -30 || vy > canvas!.height + 30) continue;

        isLeaves ? drawLeaf(ctx!, p.pageX, vy, p) : drawPetal(ctx!, p.pageX, vy, p);
      }
    }

    animate();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* When mode switches, re-colour existing particles */
  useEffect(() => {
    if (mode === "off") return;
    const colors = mode === "petals" ? PETAL_COLORS : LEAF_COLORS;
    particles.current.forEach(p => {
      p.color = colors[Math.floor(Math.random() * colors.length)];
    });
  }, [mode]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      />

      {/* Toggle pill — sits above the Calm music button */}
      <div
        className="fixed left-6 z-50 flex items-center gap-1 bg-white rounded-full shadow-md border border-brand-light p-1.5"
        style={{ bottom: "5.5rem" }}
        role="group"
        aria-label="Nature effect"
      >
        {([
          { value: "leaves" as Mode, emoji: "🍂", label: "Leaves" },
          { value: "petals" as Mode, emoji: "🌸", label: "Petals" },
          { value: "off"    as Mode, emoji: "✕",  label: "Turn off" },
        ]).map(({ value, emoji, label }) => (
          <button
            key={value}
            onClick={() => setMode(value)}
            title={label}
            aria-label={label}
            aria-pressed={mode === value}
            className={`w-8 h-8 rounded-full text-sm flex items-center justify-center transition-all duration-200 ${
              mode === value
                ? "bg-primary text-white shadow-sm scale-110"
                : "text-brand-dark/60 hover:bg-brand-light"
            }`}
          >
            {emoji}
          </button>
        ))}
      </div>
    </>
  );
}
