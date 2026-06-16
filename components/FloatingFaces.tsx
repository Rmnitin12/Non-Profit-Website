"use client";

/* Six illustrated faces with warm brown skin tones, each with a unique style. */

function FaceAfro() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="w-full h-full">
      {/* Afro */}
      <circle cx="32" cy="22" r="19" fill="#1A0800" />
      <circle cx="15" cy="30" r="10" fill="#1A0800" />
      <circle cx="49" cy="30" r="10" fill="#1A0800" />
      {/* Face */}
      <ellipse cx="32" cy="38" rx="14" ry="17" fill="#7B4A2D" />
      {/* Eyes */}
      <circle cx="26" cy="35" r="2.5" fill="#0D0500" />
      <circle cx="38" cy="35" r="2.5" fill="#0D0500" />
      <circle cx="27" cy="34" r="0.9" fill="white" />
      <circle cx="39" cy="34" r="0.9" fill="white" />
      {/* Nose */}
      <ellipse cx="32" cy="41" rx="2.2" ry="1.4" fill="#5A3018" />
      {/* Smile */}
      <path d="M26 46 Q32 52 38 46" stroke="#5A3018" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* Earrings */}
      <circle cx="18" cy="43" r="2" fill="#F56A00" />
      <circle cx="46" cy="43" r="2" fill="#F56A00" />
    </svg>
  );
}

function FaceFade() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="w-full h-full">
      {/* Hair - short fade */}
      <ellipse cx="32" cy="22" rx="15" ry="13" fill="#2C1A0E" />
      {/* Face */}
      <ellipse cx="32" cy="37" rx="15" ry="18" fill="#A0522D" />
      {/* Hair top */}
      <ellipse cx="32" cy="20" rx="14" ry="10" fill="#2C1A0E" />
      {/* Ears */}
      <ellipse cx="17" cy="37" rx="4" ry="5" fill="#8B4513" />
      <ellipse cx="47" cy="37" rx="4" ry="5" fill="#8B4513" />
      {/* Eyes */}
      <circle cx="26" cy="34" r="2.5" fill="#0D0500" />
      <circle cx="38" cy="34" r="2.5" fill="#0D0500" />
      <circle cx="27" cy="33" r="0.9" fill="white" />
      <circle cx="39" cy="33" r="0.9" fill="white" />
      {/* Nose */}
      <ellipse cx="32" cy="40" rx="2.5" ry="1.5" fill="#6B3010" />
      {/* Smile */}
      <path d="M26 46 Q32 51 38 46" stroke="#6B3010" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function FaceBraids() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="w-full h-full">
      {/* Braids hanging */}
      <rect x="12" y="28" width="5" height="28" rx="2.5" fill="#1A0A04" />
      <rect x="20" y="26" width="5" height="32" rx="2.5" fill="#1A0A04" />
      <rect x="39" y="26" width="5" height="32" rx="2.5" fill="#1A0A04" />
      <rect x="47" y="28" width="5" height="28" rx="2.5" fill="#1A0A04" />
      {/* Hair top */}
      <ellipse cx="32" cy="20" rx="16" ry="13" fill="#1A0A04" />
      {/* Face */}
      <ellipse cx="32" cy="37" rx="14" ry="18" fill="#C68642" />
      {/* Eyes */}
      <circle cx="26" cy="33" r="2.5" fill="#0D0500" />
      <circle cx="38" cy="33" r="2.5" fill="#0D0500" />
      <circle cx="27" cy="32" r="0.9" fill="white" />
      <circle cx="39" cy="32" r="0.9" fill="white" />
      {/* Nose */}
      <ellipse cx="32" cy="39" rx="2" ry="1.3" fill="#9B6432" />
      {/* Smile */}
      <path d="M26 45 Q32 50 38 45" stroke="#9B6432" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* Bead accents */}
      <circle cx="14" cy="50" r="3" fill="#F56A00" />
      <circle cx="49" cy="50" r="3" fill="#FF9E1B" />
    </svg>
  );
}

function FaceHeadWrap() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="w-full h-full">
      {/* Head wrap back */}
      <ellipse cx="32" cy="22" rx="18" ry="17" fill="#E84500" />
      {/* Face */}
      <ellipse cx="32" cy="38" rx="14" ry="17" fill="#D2691E" />
      {/* Head wrap front */}
      <ellipse cx="32" cy="18" rx="17" ry="12" fill="#F56A00" />
      {/* Head wrap knot */}
      <ellipse cx="32" cy="10" rx="7" ry="5" fill="#FF9E1B" />
      <circle cx="28" cy="9" r="3.5" fill="#FF9E1B" />
      <circle cx="36" cy="9" r="3.5" fill="#FF9E1B" />
      {/* Eyes */}
      <circle cx="26" cy="35" r="2.5" fill="#0D0500" />
      <circle cx="38" cy="35" r="2.5" fill="#0D0500" />
      <circle cx="27" cy="34" r="0.9" fill="white" />
      <circle cx="39" cy="34" r="0.9" fill="white" />
      {/* Nose */}
      <ellipse cx="32" cy="41" rx="2.2" ry="1.4" fill="#9B5510" />
      {/* Smile */}
      <path d="M26 47 Q32 53 38 47" stroke="#9B5510" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function FaceLocs() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="w-full h-full">
      {/* Locs */}
      {[10, 16, 22, 28, 34, 40, 46].map((x) => (
        <rect key={x} x={x} y="20" width="4" height={22 + (x % 10)} rx="2" fill="#2C1A0E" />
      ))}
      {/* Hair top */}
      <ellipse cx="32" cy="19" rx="17" ry="12" fill="#2C1A0E" />
      {/* Face */}
      <ellipse cx="32" cy="37" rx="14" ry="17" fill="#4A2810" />
      {/* Eyes */}
      <circle cx="26" cy="33" r="2.5" fill="#0D0500" />
      <circle cx="38" cy="33" r="2.5" fill="#0D0500" />
      <circle cx="27" cy="32" r="0.9" fill="white" />
      <circle cx="39" cy="32" r="0.9" fill="white" />
      {/* Nose */}
      <ellipse cx="32" cy="39" rx="2.2" ry="1.4" fill="#2A1008" />
      {/* Smile */}
      <path d="M26 45 Q32 51 38 45" stroke="#2A1008" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* Gold earring */}
      <circle cx="18" cy="42" r="2.5" fill="#FF9E1B" />
    </svg>
  );
}

function FaceElder() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="w-full h-full">
      {/* Hair - silver/white short */}
      <ellipse cx="32" cy="21" rx="16" ry="12" fill="#9E9E9E" />
      {/* Face */}
      <ellipse cx="32" cy="37" rx="15" ry="18" fill="#8B5E3C" />
      {/* Ears */}
      <ellipse cx="17" cy="37" rx="4" ry="5" fill="#7A5030" />
      <ellipse cx="47" cy="37" rx="4" ry="5" fill="#7A5030" />
      {/* Eyes with gentle wrinkle lines */}
      <circle cx="26" cy="34" r="2.5" fill="#0D0500" />
      <circle cx="38" cy="34" r="2.5" fill="#0D0500" />
      <circle cx="27" cy="33" r="0.9" fill="white" />
      <circle cx="39" cy="33" r="0.9" fill="white" />
      {/* Laugh lines */}
      <path d="M20 38 Q22 42 20 46" stroke="#6B4226" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M44 38 Q42 42 44 46" stroke="#6B4226" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <ellipse cx="32" cy="40" rx="2.5" ry="1.5" fill="#5A3A18" />
      {/* Warm smile */}
      <path d="M24 47 Q32 55 40 47" stroke="#5A3A18" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const FACE_COMPONENTS = [FaceAfro, FaceFade, FaceBraids, FaceHeadWrap, FaceLocs, FaceElder];

type FloatConfig = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  duration: string;
  delay: string;
  opacity: number;
  faceIndex: number;
};

const HERO_CONFIGS: FloatConfig[] = [
  { top: "6%",    left:  "2%",  size: 68, duration: "6s",   delay: "0s",    opacity: 0.55, faceIndex: 0 },
  { top: "10%",   right: "3%",  size: 60, duration: "8s",   delay: "1.5s",  opacity: 0.50, faceIndex: 1 },
  { bottom: "18%",left:  "4%",  size: 56, duration: "7s",   delay: "0.8s",  opacity: 0.50, faceIndex: 2 },
  { bottom: "12%",right: "4%",  size: 64, duration: "9s",   delay: "2.2s",  opacity: 0.45, faceIndex: 3 },
  { top: "42%",   left:  "1%",  size: 44, duration: "7.5s", delay: "3s",    opacity: 0.40, faceIndex: 4 },
  { top: "48%",   right: "1%",  size: 48, duration: "6.5s", delay: "1.2s",  opacity: 0.40, faceIndex: 5 },
];

const PAGE_HERO_CONFIGS: FloatConfig[] = [
  { top: "10%",   left:  "2%",  size: 52, duration: "7s",   delay: "0s",    opacity: 0.45, faceIndex: 2 },
  { top: "15%",   right: "3%",  size: 48, duration: "8.5s", delay: "1s",    opacity: 0.40, faceIndex: 4 },
  { bottom: "10%",left:  "5%",  size: 44, duration: "6s",   delay: "2s",    opacity: 0.38, faceIndex: 0 },
  { bottom: "8%", right: "4%",  size: 50, duration: "9s",   delay: "0.5s",  opacity: 0.38, faceIndex: 3 },
];

interface FloatingFacesProps {
  variant?: "hero" | "page-hero";
}

export default function FloatingFaces({ variant = "hero" }: FloatingFacesProps) {
  const configs = variant === "hero" ? HERO_CONFIGS : PAGE_HERO_CONFIGS;

  return (
    <>
      {configs.map((cfg, i) => {
        const Face = FACE_COMPONENTS[cfg.faceIndex];
        const posStyle: React.CSSProperties = {
          position: "absolute",
          width: cfg.size,
          height: cfg.size,
          opacity: cfg.opacity,
          animation: `float-face ${cfg.duration} ease-in-out infinite`,
          animationDelay: cfg.delay,
          pointerEvents: "none",
          zIndex: 1,
          ...(cfg.top    && { top:    cfg.top }),
          ...(cfg.bottom && { bottom: cfg.bottom }),
          ...(cfg.left   && { left:   cfg.left }),
          ...(cfg.right  && { right:  cfg.right }),
        };
        return (
          <div key={i} style={posStyle} aria-hidden="true">
            <Face />
          </div>
        );
      })}
    </>
  );
}
