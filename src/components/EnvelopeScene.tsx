import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { weddingConfig } from "../config/weddingConfig";
import { BotanicalCorner, FloatingPetals, GoldParticles } from "./DecorativeElements";
import "./EnvelopeScene.css";

type Phase = "closed" | "sealGlow" | "sealBroken" | "flapOpen" | "cardEmerge" | "cardForward";

const TIMING: Record<Phase, number> = {
  closed: 0,
  sealGlow: 350,
  sealBroken: 550,
  flapOpen: 950,
  cardEmerge: 750,
  cardForward: 750,
};

const ORDER: Phase[] = ["sealGlow", "sealBroken", "flapOpen", "cardEmerge", "cardForward"];

// After this stage machine reaches "cardForward" the whole scene is handed
// off to the parent, whose own exit animation fades the envelope away while
// the invitation page fades in underneath — so there is a single owner of
// the "envelope disappears" animation instead of two competing ones.
const HANDOFF_DELAY = 350;

export default function EnvelopeScene({ onOpened }: { onOpened: () => void }) {
  const [phase, setPhase] = useState<Phase>("closed");
  const [started, setStarted] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach((t) => clearTimeout(t)), []);

  const handleOpen = () => {
    if (started) return;
    setStarted(true);
    let elapsed = 0;
    ORDER.forEach((p) => {
      elapsed += TIMING[p];
      const id = window.setTimeout(() => setPhase(p), elapsed);
      timers.current.push(id);
    });
    const finalId = window.setTimeout(() => onOpened(), elapsed + HANDOFF_DELAY);
    timers.current.push(finalId);
  };

  const isPast = (p: Phase) => started && ORDER.indexOf(phase) >= ORDER.indexOf(p);
  const sealBroken = isPast("sealBroken");
  const flapOpen = isPast("flapOpen");
  const cardEmerging = isPast("cardEmerge");
  const cardForward = isPast("cardForward");

  return (
    <section className="screen envelope-screen" aria-label="ظرف الدعوة">
      <FloatingPetals count={6} />
      <GoldParticles count={10} />

      <motion.p
        className="eyebrow envelope-eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: started ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        دعوة زفاف
      </motion.p>

      <div className="envelope-stage">
        <div className="envelope">
          {/* Card rises up from behind the envelope's own paper — see the
              .envelope-card-slot comment in the CSS for how the "hidden
              inside, then emerges past the fold" illusion is built. */}
          <div className="envelope-card-slot">
            <div className="envelope-card-anchor">
              <motion.div
                className="envelope-card"
                initial={{ y: "80%", scale: 0.92 }}
                animate={
                  cardForward
                    ? { y: "-85%", scale: 1.4 }
                    : cardEmerging
                    ? { y: "-8%", scale: 0.96 }
                    : { y: "80%", scale: 0.92 }
                }
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="envelope-card-initials">{weddingConfig.groomInitial}</span>
                <span className="envelope-card-rule" />
              </motion.div>
            </div>
          </div>

          <div className="envelope-body">
            <span className="envelope-seam envelope-seam--left" />
            <span className="envelope-seam envelope-seam--right" />
            <span className="envelope-seam envelope-seam--bottom" />
          </div>

          <motion.div
            className="envelope-flap"
            style={{ transformOrigin: "top center" }}
            animate={{ rotateX: flapOpen ? -178 : 0 }}
            transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="envelope-flap-face envelope-flap-face--outer" />
            <div className="envelope-flap-face envelope-flap-face--inner" />
          </motion.div>

          {!flapOpen && (
            <div className="wax-seal-position">
              <motion.div
                className="wax-seal"
                animate={
                  sealBroken
                    ? { scale: 0, opacity: 0 }
                    : phase === "sealGlow"
                    ? { scale: 1.12, boxShadow: "0 0 26px 6px rgba(198,161,91,0.55)" }
                    : { scale: 1, boxShadow: "0 3px 10px rgba(63,81,69,0.35)" }
                }
                transition={{ duration: 0.4 }}
              >
                <span className="wax-seal-initials">{weddingConfig.groomInitial}</span>
              </motion.div>
            </div>
          )}
        </div>

        <BotanicalCorner position="top-left" className="envelope-decor envelope-decor--tl" />
        <BotanicalCorner position="bottom-right" className="envelope-decor envelope-decor--br" />
      </div>

      {/* Entrance/exit slide lives on this wrapper, not on the button itself:
          a motion element animating `y` owns its `transform` outright, which
          would silently swallow the button's own CSS hover/press transform
          (the same issue the wax seal and envelope card had). */}
      <AnimatePresence>
        {!started && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.35 } }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="btn-float">
              <button type="button" className="luxury-btn envelope-open-btn" onClick={handleOpen}>
                افتح الدعوة
              </button>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
