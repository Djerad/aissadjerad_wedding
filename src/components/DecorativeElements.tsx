import { useMemo } from "react";
import "./DecorativeElements.css";

type CornerPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";

/** Hand-drawn botanical sprig used to decorate card corners. */
export function BotanicalCorner({
  position,
  className = "",
}: {
  position: CornerPosition;
  className?: string;
}) {
  return (
    <svg
      className={`botanical-corner botanical-corner--${position} ${className}`}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeLinecap="round">
        <path
          d="M8 8 C 30 20, 40 40, 34 66 C 30 84, 46 96, 66 100"
          stroke="var(--sage)"
          strokeWidth="1.4"
        />
        <path d="M18 20 C 26 24, 30 32, 26 40" stroke="var(--sage)" strokeWidth="1.1" />
        <path d="M30 44 C 40 44, 46 52, 44 60" stroke="var(--sage)" strokeWidth="1.1" />
        <path d="M34 66 C 44 68, 50 76, 48 84" stroke="var(--sage)" strokeWidth="1.1" />
        <circle cx="16" cy="14" r="3.2" fill="var(--gold)" stroke="none" />
        <circle cx="46" cy="90" r="2.4" fill="var(--gold)" stroke="none" />
        <circle cx="24" cy="42" r="1.8" fill="var(--gold)" stroke="none" />
      </g>
    </svg>
  );
}

/** Slow drifting petals — purely decorative, disabled under reduced motion. */
export function FloatingPetals({ count = 10 }: { count?: number }) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const petals = useMemo(
    () =>
      Array.from({ length: prefersReduced ? 0 : count }).map((_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        delay: Math.round(Math.random() * 12),
        duration: 16 + Math.round(Math.random() * 12),
        size: 10 + Math.round(Math.random() * 10),
        drift: Math.round(Math.random() * 60 - 30),
      })),
    [count, prefersReduced]
  );

  if (!petals.length) return null;

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={
            {
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/** Tiny gold sparkle particles for a soft luxury shimmer. */
export function GoldParticles({ count = 14 }: { count?: number }) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const dots = useMemo(
    () =>
      Array.from({ length: prefersReduced ? 0 : count }).map((_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        top: Math.round(Math.random() * 100),
        delay: Math.round(Math.random() * 8),
        duration: 5 + Math.round(Math.random() * 5),
      })),
    [count, prefersReduced]
  );

  if (!dots.length) return null;

  return (
    <div className="gold-particle-field" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className="gold-particle"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
