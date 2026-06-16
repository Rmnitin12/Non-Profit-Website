const words = [
  "WE STAND ON BUSINESS",
  "YOU FEEL ME",
  "UBUNTU",
  "TSCSNC",
  "EMBRACING BLACK MENTAL HEALTH",
  "EAST OAKLAND",
  "COMMUNITY & STRENGTH",
  "DERRICK & DARRELL",
];

const segment = words.join("  ·  ") + "  ·  ";

export default function MarqueeStrip() {
  return (
    <div
      className="relative overflow-hidden bg-brand-light py-4 select-none border-y border-brand-light/80"
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker 40s linear infinite" }}
      >
        <span className="text-primary/70 font-heading font-semibold text-base md:text-lg tracking-widest shrink-0">
          {segment}
        </span>
        <span className="text-primary/70 font-heading font-semibold text-base md:text-lg tracking-widest shrink-0">
          {segment}
        </span>
      </div>
    </div>
  );
}
