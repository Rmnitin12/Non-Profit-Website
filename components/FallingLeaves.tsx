"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "#C4572A", // terracotta
  "#D4A020", // golden
  "#8B5430", // warm brown
  "#E8904A", // soft orange
  "#6B8C3A", // sage green
  "#A07828", // amber
  "#5A7A2A", // olive green
  "#D96030", // rust
];

type Leaf = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  rotSpeed: number;
  color: string;
  swaySpeed: number;
  swayOffset: number;
  opacity: number;
  frame: number;
};

function drawLeaf(ctx: CanvasRenderingContext2D, leaf: Leaf) {
  ctx.save();
  ctx.translate(leaf.x, leaf.y);
  ctx.rotate(leaf.angle);
  ctx.globalAlpha = leaf.opacity;

  const s = leaf.size;

  /* Leaf body */
  ctx.fillStyle = leaf.color;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo( s * 0.9, -s * 0.4,  s * 0.9,  s * 0.4, 0,  s);
  ctx.bezierCurveTo(-s * 0.9,  s * 0.4, -s * 0.9, -s * 0.4, 0, -s);
  ctx.fill();

  /* Centre vein */
  ctx.strokeStyle = "rgba(0,0,0,0.18)";
  ctx.lineWidth = s * 0.1;
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.85);
  ctx.lineTo(0,  s * 0.85);
  ctx.stroke();

  /* Side veins */
  ctx.lineWidth = s * 0.06;
  [[-0.5, -0.3], [-0.2, 0.1], [0.15, 0.45]].forEach(([ty, tx]) => {
    ctx.beginPath();
    ctx.moveTo(0, ty * s);
    ctx.lineTo( s * 0.55, (ty + tx * 0.4) * s);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, ty * s);
    ctx.lineTo(-s * 0.55, (ty + tx * 0.4) * s);
    ctx.stroke();
  });

  /* Short stem */
  ctx.lineWidth = s * 0.12;
  ctx.strokeStyle = "rgba(0,0,0,0.22)";
  ctx.beginPath();
  ctx.moveTo(0, s);
  ctx.lineTo(0, s * 1.35);
  ctx.stroke();

  ctx.restore();
}

export default function FallingLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const leaves: Leaf[] = [];
    let tick = 0;

    function resize() {
      canvas!.width  = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    function spawn() {
      leaves.push({
        x:          Math.random() * (canvas!.width + 100) - 50,
        y:          -20,
        size:       7 + Math.random() * 11,
        speedY:     0.35 + Math.random() * 0.55,
        speedX:     (Math.random() - 0.5) * 0.3,
        angle:      Math.random() * Math.PI * 2,
        rotSpeed:   (Math.random() - 0.5) * 0.018,
        color:      COLORS[Math.floor(Math.random() * COLORS.length)],
        swaySpeed:  0.008 + Math.random() * 0.014,
        swayOffset: Math.random() * Math.PI * 2,
        opacity:    0.38 + Math.random() * 0.38,
        frame:      0,
      });
    }

    /* Pre-seed a few leaves so the page doesn't start empty */
    for (let i = 0; i < 8; i++) {
      spawn();
      const l = leaves[leaves.length - 1];
      l.y = Math.random() * canvas.height;
    }

    function animate() {
      animId = requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      tick++;

      /* Spawn a new leaf every ~100 frames ≈ 1.6 s at 60 fps */
      if (tick % 100 === 0) spawn();

      for (let i = leaves.length - 1; i >= 0; i--) {
        const l = leaves[i];
        l.frame++;
        l.x    += Math.sin(l.frame * l.swaySpeed + l.swayOffset) * 0.7 + l.speedX;
        l.y    += l.speedY;
        l.angle += l.rotSpeed;

        if (l.y > canvas!.height + 30) {
          leaves.splice(i, 1);
          continue;
        }

        drawLeaf(ctx!, l);
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 3 }}
      aria-hidden="true"
    />
  );
}
