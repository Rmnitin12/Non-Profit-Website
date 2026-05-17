"use client";
import { useEffect, useRef } from "react";

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = ["#FF9E1B", "#FFB347", "#FF6B35", "#FFD700", "#FF8C00", "#F56A00"];
    const particles: {
      x: number; y: number; size: number;
      speedY: number; speedX: number;
      color: string; life: number; maxLife: number;
    }[] = [];
    let animId: number;

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let frame = 0;
    function tick() {
      animId = requestAnimationFrame(tick);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      frame++;

      if (frame % 2 === 0) {
        const maxLife = 110 + Math.random() * 130;
        particles.push({
          x: Math.random() * canvas!.width,
          y: canvas!.height + 5,
          size: 1 + Math.random() * 3.5,
          speedY: 0.5 + Math.random() * 1.6,
          speedX: (Math.random() - 0.5) * 0.7,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 0,
          maxLife,
        });
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.life * 0.045) * 0.55;

        if (p.life >= p.maxLife || p.y < -10) {
          particles.splice(i, 1);
          continue;
        }

        const progress = p.life / p.maxLife;
        let alpha = progress < 0.15 ? progress / 0.15 : progress > 0.65 ? (1 - progress) / 0.35 : 1;
        alpha *= 0.88;

        ctx!.save();
        ctx!.globalAlpha = alpha;
        ctx!.shadowBlur = p.size * 7;
        ctx!.shadowColor = p.color;
        ctx!.fillStyle = p.color;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
    }

    tick();
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
