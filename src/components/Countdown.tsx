import { motion } from "framer-motion";
import { weddingConfig } from "../config/weddingConfig";
import { useCountdown } from "../hooks/useCountdown";
import { BotanicalCorner, GoldParticles } from "./DecorativeElements";
import "./Countdown.css";

const units: Array<{ key: "days" | "hours" | "minutes" | "seconds"; label: string }> = [
  { key: "days", label: "الأيام" },
  { key: "hours", label: "الساعات" },
  { key: "minutes", label: "الدقائق" },
  { key: "seconds", label: "الثواني" },
];

export default function Countdown() {
  const timeLeft = useCountdown(weddingConfig.weddingDateISO);

  return (
    <footer className="invite-section countdown-block" aria-label="العد التنازلي">
      <GoldParticles count={12} />

      <motion.div
        className="countdown-panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <BotanicalCorner position="top-right" />
        <BotanicalCorner position="top-left" />

        {timeLeft.done ? (
          <motion.p
            className="countdown-done"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            اليوم هو يومنا الكبير 🤍
          </motion.p>
        ) : (
          <>
            <h2 className="countdown-title">لم يبقَ على يومنا الكبير سوى</h2>
            <div className="gold-divider" />
            <div className="countdown-grid">
              {units.map((u) => (
                <div className="countdown-unit" key={u.key}>
                  <span className="countdown-value">{String(timeLeft[u.key]).padStart(2, "0")}</span>
                  <span className="countdown-label">{u.label}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </footer>
  );
}
