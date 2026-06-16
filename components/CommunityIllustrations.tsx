// Flat-style SVG cartoon illustrations of Black community members.

export function WelcomingWoman({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 300" className={className} aria-hidden="true" fill="none">
      {/* Afro back */}
      <circle cx="110" cy="75" r="58" fill="#1A0800" />
      <circle cx="60" cy="88" r="35" fill="#1A0800" />
      <circle cx="160" cy="88" r="35" fill="#1A0800" />

      {/* Left arm reaching wide */}
      <path d="M85 168 Q52 156 20 144" stroke="#7B4A2D" strokeWidth="22" strokeLinecap="round" />
      <circle cx="13" cy="143" r="13" fill="#7B4A2D" />

      {/* Right arm reaching wide */}
      <path d="M135 168 Q168 156 200 144" stroke="#7B4A2D" strokeWidth="22" strokeLinecap="round" />
      <circle cx="207" cy="143" r="13" fill="#7B4A2D" />

      {/* Dress */}
      <path d="M74 158 Q52 238 58 300 L162 300 Q168 238 146 158 Q110 172 74 158Z" fill="#C4572A" />

      {/* Neck */}
      <rect x="98" y="130" width="24" height="32" rx="10" fill="#7B4A2D" />

      {/* Face */}
      <ellipse cx="110" cy="100" rx="38" ry="44" fill="#7B4A2D" />

      {/* Afro front */}
      <ellipse cx="110" cy="58" rx="50" ry="33" fill="#1A0800" />

      {/* Eyes */}
      <circle cx="96" cy="96" r="4.5" fill="#0D0500" />
      <circle cx="124" cy="96" r="4.5" fill="#0D0500" />
      <circle cx="97.5" cy="94.5" r="1.8" fill="white" />
      <circle cx="125.5" cy="94.5" r="1.8" fill="white" />

      {/* Eyebrows */}
      <path d="M89 88 Q96 84 103 88" stroke="#0D0500" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M117 88 Q124 84 131 88" stroke="#0D0500" strokeWidth="2.5" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="110" cy="108" rx="4.5" ry="3" fill="#5A3018" />

      {/* Big smile + teeth */}
      <path d="M92 119 Q110 135 128 119" stroke="#5A3018" strokeWidth="3" strokeLinecap="round" />
      <path d="M95 119 Q110 130 125 119Z" fill="white" fillOpacity="0.8" />

      {/* Earrings */}
      <circle cx="72" cy="106" r="7" fill="#D4A020" />
      <circle cx="148" cy="106" r="7" fill="#D4A020" />

      {/* Dress collar */}
      <path d="M88 158 L110 176 L132 158" fill="#A03820" fillOpacity="0.5" />

      {/* Dress dots */}
      <circle cx="100" cy="210" r="4" fill="#A03820" fillOpacity="0.45" />
      <circle cx="122" cy="232" r="4" fill="#A03820" fillOpacity="0.45" />
      <circle cx="96" cy="255" r="3" fill="#A03820" fillOpacity="0.45" />
      <circle cx="126" cy="272" r="3" fill="#A03820" fillOpacity="0.45" />
    </svg>
  );
}

export function MeditatingMan({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 268" className={className} aria-hidden="true" fill="none">
      {/* Cross-legged base */}
      <ellipse cx="120" cy="228" rx="74" ry="24" fill="#3D6B8C" />
      <path d="M58 222 Q48 242 46 258 Q83 265 120 258 Q157 265 194 258 Q192 242 182 222Z" fill="#3D6B8C" />

      {/* Feet */}
      <ellipse cx="78" cy="255" rx="24" ry="10" fill="#3A200C" />
      <ellipse cx="162" cy="255" rx="24" ry="10" fill="#3A200C" />

      {/* Hands on knees */}
      <circle cx="58" cy="222" r="13" fill="#3A200C" />
      <circle cx="182" cy="222" r="13" fill="#3A200C" />

      {/* Body */}
      <path d="M80 158 Q70 205 60 222 L180 222 Q170 205 160 158 Q120 170 80 158Z" fill="#3D6B8C" />

      {/* Neck */}
      <rect x="108" y="130" width="24" height="30" rx="10" fill="#3A200C" />

      {/* Locs */}
      {[88, 97, 106, 115, 124, 133, 142, 151].map((x, i) => (
        <rect key={i} x={x - 3} y={66} width={6} height={52 + (i % 3) * 9} rx={3} fill="#1A0A00" />
      ))}
      <ellipse cx="120" cy="62" rx="44" ry="30" fill="#1A0A00" />

      {/* Face */}
      <ellipse cx="120" cy="95" rx="36" ry="42" fill="#3A200C" />

      {/* Peaceful half-closed eyes */}
      <path d="M104 90 Q112 86 120 90" stroke="#0D0500" strokeWidth="3" strokeLinecap="round" />
      <path d="M120 90 Q128 86 136 90" stroke="#0D0500" strokeWidth="3" strokeLinecap="round" />

      {/* Eyebrows */}
      <path d="M100 83 Q112 79 120 83" stroke="#0D0500" strokeWidth="2" strokeLinecap="round" />
      <path d="M120 83 Q128 79 140 83" stroke="#0D0500" strokeWidth="2" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="120" cy="102" rx="4" ry="3" fill="#2A1008" />

      {/* Calm smile */}
      <path d="M106 112 Q120 124 134 112" stroke="#2A1008" strokeWidth="2.5" strokeLinecap="round" />

      {/* Gold necklace */}
      <path d="M100 150 Q120 162 140 150" stroke="#D4A020" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="120" cy="161" r="5" fill="#D4A020" />
    </svg>
  );
}

export function EmpoweredWoman({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 320" className={className} aria-hidden="true" fill="none">
      {/* Braids */}
      {[74, 84, 94, 104, 114, 124, 134, 144].map((x, i) => (
        <rect key={i} x={x - 4} y={82} width={7} height={92 + (i % 4) * 14} rx={3.5} fill="#1A0A00" />
      ))}
      <ellipse cx="110" cy="72" rx="44" ry="30" fill="#1A0A00" />

      {/* Left arm — down at side */}
      <path d="M80 168 Q68 210 65 245" stroke="#C07840" strokeWidth="22" strokeLinecap="round" />
      <circle cx="63" cy="252" r="14" fill="#C07840" />

      {/* Right arm — raised fist */}
      <path d="M140 168 Q158 130 164 90" stroke="#C07840" strokeWidth="22" strokeLinecap="round" />
      {/* Fist */}
      <rect x="154" y="64" width="28" height="30" rx="8" fill="#C07840" />
      <rect x="154" y="58" width="28" height="14" rx="5" fill="#C07840" />
      <line x1="162" y1="58" x2="162" y2="72" stroke="#9B5828" strokeWidth="1.5" />
      <line x1="169" y1="58" x2="169" y2="72" stroke="#9B5828" strokeWidth="1.5" />
      <line x1="176" y1="58" x2="176" y2="72" stroke="#9B5828" strokeWidth="1.5" />

      {/* Body */}
      <path d="M76 162 Q62 238 66 320 L154 320 Q158 238 144 162 Q110 175 76 162Z" fill="#7B4A8C" />

      {/* Neck */}
      <rect x="97" y="132" width="26" height="32" rx="10" fill="#C07840" />

      {/* Face */}
      <ellipse cx="110" cy="104" rx="38" ry="44" fill="#C07840" />

      {/* Eyes */}
      <circle cx="96" cy="100" r="4.5" fill="#0D0500" />
      <circle cx="124" cy="100" r="4.5" fill="#0D0500" />
      <circle cx="97.5" cy="98.5" r="1.8" fill="white" />
      <circle cx="125.5" cy="98.5" r="1.8" fill="white" />

      {/* Eyebrows */}
      <path d="M88 90 Q96 85 104 89" stroke="#0D0500" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M116 89 Q124 85 132 90" stroke="#0D0500" strokeWidth="2.5" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="110" cy="112" rx="4.5" ry="3" fill="#9B6030" />

      {/* Smile + teeth */}
      <path d="M95 123 Q110 137 125 123" stroke="#9B6030" strokeWidth="3" strokeLinecap="round" />
      <path d="M97 123 Q110 133 123 123Z" fill="white" fillOpacity="0.75" />

      {/* Braid beads */}
      <circle cx="86" cy="158" r="5" fill="#D4A020" />
      <circle cx="134" cy="170" r="5" fill="#F56A00" />
      <circle cx="110" cy="177" r="4" fill="#D4A020" />
    </svg>
  );
}

export function ElderWisdom({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 300" className={className} aria-hidden="true" fill="none">
      {/* Head wrap */}
      <ellipse cx="110" cy="72" rx="52" ry="48" fill="#E84500" />
      <ellipse cx="110" cy="32" rx="28" ry="20" fill="#FF9E1B" />
      <circle cx="96" cy="28" r="14" fill="#FF9E1B" />
      <circle cx="124" cy="28" r="14" fill="#FF9E1B" />
      <path d="M62 78 Q110 90 158 78" stroke="#FF9E1B" strokeWidth="8" strokeLinecap="round" fill="none" />

      {/* Left arm — hand on heart */}
      <path d="M82 165 Q72 188 78 208" stroke="#5A3018" strokeWidth="20" strokeLinecap="round" />
      <circle cx="78" cy="215" r="13" fill="#5A3018" />

      {/* Right arm — hand on heart */}
      <path d="M138 165 Q148 188 142 208" stroke="#5A3018" strokeWidth="20" strokeLinecap="round" />
      <circle cx="142" cy="215" r="13" fill="#5A3018" />

      {/* Body */}
      <path d="M70 162 Q58 240 62 300 L158 300 Q162 240 150 162 Q110 175 70 162Z" fill="#4A7A5A" />

      {/* Neck */}
      <rect x="97" y="130" width="26" height="34" rx="10" fill="#5A3018" />

      {/* Face */}
      <ellipse cx="110" cy="102" rx="38" ry="44" fill="#5A3018" />

      {/* Laugh lines */}
      <path d="M72 110 Q68 118 72 128" stroke="#3A180A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M148 110 Q152 118 148 128" stroke="#3A180A" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Eyes */}
      <circle cx="96" cy="98" r="4.5" fill="#0D0500" />
      <circle cx="124" cy="98" r="4.5" fill="#0D0500" />
      <circle cx="97.5" cy="96.5" r="1.8" fill="white" />
      <circle cx="125.5" cy="96.5" r="1.8" fill="white" />

      {/* Eyebrows */}
      <path d="M88 89 Q96 85 104 89" stroke="#2A1008" strokeWidth="2" strokeLinecap="round" />
      <path d="M116 89 Q124 85 132 89" stroke="#2A1008" strokeWidth="2" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="110" cy="110" rx="4.5" ry="3" fill="#3A180A" />

      {/* Big warm smile + teeth */}
      <path d="M90 122 Q110 140 130 122" stroke="#3A180A" strokeWidth="3" strokeLinecap="round" />
      <path d="M92 122 Q110 137 128 122Z" fill="white" fillOpacity="0.8" />

      {/* Earrings */}
      <circle cx="72" cy="108" r="7" fill="#D4A020" />
      <circle cx="148" cy="108" r="7" fill="#D4A020" />
      <rect x="70" y="115" width="4" height="10" rx="2" fill="#D4A020" />
      <rect x="146" y="115" width="4" height="10" rx="2" fill="#D4A020" />
    </svg>
  );
}

export function CommunityGroup({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 380 300" className={className} aria-hidden="true" fill="none">

      {/* ── LEFT: Tall man with fade ── */}
      <path d="M32 158 Q22 238 26 300 L96 300 Q100 238 90 158 Q62 170 32 158Z" fill="#2C5F7A" />
      <rect x="55" y="126" width="22" height="34" rx="9" fill="#3A200C" />
      <ellipse cx="66" cy="96" rx="32" ry="26" fill="#1A0A00" />
      <ellipse cx="66" cy="102" rx="30" ry="37" fill="#3A200C" />
      <ellipse cx="66" cy="80" rx="28" ry="18" fill="#1A0A00" />
      <circle cx="55" cy="98" r="3.5" fill="#0D0500" />
      <circle cx="77" cy="98" r="3.5" fill="#0D0500" />
      <circle cx="56.4" cy="96.6" r="1.4" fill="white" />
      <circle cx="78.4" cy="96.6" r="1.4" fill="white" />
      <ellipse cx="66" cy="108" rx="3.5" ry="2.2" fill="#2A1008" />
      <path d="M56 117 Q66 128 76 117" stroke="#2A1008" strokeWidth="2.2" strokeLinecap="round" />
      {/* Left arm down */}
      <path d="M36 162 Q26 202 28 238" stroke="#3A200C" strokeWidth="18" strokeLinecap="round" />
      {/* Right arm around center */}
      <path d="M88 162 Q108 174 122 176" stroke="#3A200C" strokeWidth="18" strokeLinecap="round" />

      {/* ── CENTER: Woman with afro ── */}
      <circle cx="190" cy="78" r="52" fill="#1A0800" />
      <circle cx="146" cy="90" r="30" fill="#1A0800" />
      <circle cx="234" cy="90" r="30" fill="#1A0800" />
      <path d="M150 162 Q138 240 142 300 L238 300 Q242 240 230 162 Q190 175 150 162Z" fill="#C4572A" />
      <rect x="179" y="128" width="22" height="36" rx="9" fill="#8B5430" />
      <ellipse cx="190" cy="104" rx="36" ry="42" fill="#8B5430" />
      <ellipse cx="190" cy="62" rx="46" ry="30" fill="#1A0800" />
      <circle cx="177" cy="100" r="4" fill="#0D0500" />
      <circle cx="203" cy="100" r="4" fill="#0D0500" />
      <circle cx="178.6" cy="98.4" r="1.6" fill="white" />
      <circle cx="204.6" cy="98.4" r="1.6" fill="white" />
      <ellipse cx="190" cy="112" rx="4" ry="2.8" fill="#5A3018" />
      <path d="M174 122 Q190 137 206 122" stroke="#5A3018" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M177 122 Q190 133 203 122Z" fill="white" fillOpacity="0.8" />
      <circle cx="153" cy="112" r="6" fill="#D4A020" />
      <circle cx="227" cy="112" r="6" fill="#D4A020" />
      {/* Arms around both sides */}
      <path d="M154 165 Q130 178 122 178" stroke="#8B5430" strokeWidth="18" strokeLinecap="round" />
      <path d="M226 165 Q252 178 258 178" stroke="#8B5430" strokeWidth="18" strokeLinecap="round" />

      {/* ── RIGHT: Shorter person with locs ── */}
      {[284, 293, 302, 311, 320, 329].map((x, i) => (
        <rect key={i} x={x - 3} y={84} width={5.5} height={46 + (i % 3) * 10} rx={2.5} fill="#1A0A00" />
      ))}
      <ellipse cx="307" cy="80" rx="36" ry="26" fill="#1A0A00" />
      <path d="M278 168 Q268 238 271 300 L343 300 Q346 238 336 168 Q307 180 278 168Z" fill="#7B4A8C" />
      <rect x="296" y="136" width="22" height="34" rx="9" fill="#C07840" />
      <ellipse cx="307" cy="110" rx="30" ry="37" fill="#C07840" />
      <circle cx="296" cy="106" r="3.5" fill="#0D0500" />
      <circle cx="318" cy="106" r="3.5" fill="#0D0500" />
      <circle cx="297.4" cy="104.6" r="1.4" fill="white" />
      <circle cx="319.4" cy="104.6" r="1.4" fill="white" />
      <ellipse cx="307" cy="116" rx="3.5" ry="2.2" fill="#9B6030" />
      <path d="M296 126 Q307 138 318 126" stroke="#9B6030" strokeWidth="2.2" strokeLinecap="round" />
      {/* Left arm around center */}
      <path d="M282 172 Q266 180 258 180" stroke="#C07840" strokeWidth="18" strokeLinecap="round" />
      {/* Right arm down */}
      <path d="M332 172 Q344 208 346 240" stroke="#C07840" strokeWidth="18" strokeLinecap="round" />
    </svg>
  );
}
