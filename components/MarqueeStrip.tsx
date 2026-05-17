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
      className="relative overflow-hidden bg-[#1C0300] py-5 select-none"
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker 36s linear infinite" }}
      >
        <span className="text-[#F56A00] font-heading font-black text-2xl md:text-3xl tracking-wider shrink-0">
          {segment}
        </span>
        <span className="text-[#F56A00] font-heading font-black text-2xl md:text-3xl tracking-wider shrink-0">
          {segment}
        </span>
      </div>
    </div>
  );
}
