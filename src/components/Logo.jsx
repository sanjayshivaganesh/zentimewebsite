import { Link } from "react-router-dom";

export default function Logo({ className = "", showWord = true, testId = "logo" }) {
  return (
    <Link
      to="/"
      data-testid={testId}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="ZenTime home"
    >
      <img
        src="/zentime-logo.png"
        alt="ZenTime"
        width={32}
        height={32}
        className="h-8 w-8 rounded-[9px] shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      {showWord && (
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          Zen<span className="text-muted-foreground">Time</span>
        </span>
      )}
    </Link>
  );
}
