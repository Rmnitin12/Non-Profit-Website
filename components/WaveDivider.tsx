interface WaveDividerProps {
  fillColor?: string;
  className?: string;
  flip?: boolean;
}

export default function WaveDivider({
  fillColor = "#FFF5EC",
  className = "",
  flip = false,
}: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="w-full h-10 md:h-14"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" />
      </svg>
    </div>
  );
}
