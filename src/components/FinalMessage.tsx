import { motion } from "framer-motion";
import { weddingConfig } from "../config/weddingConfig";
import { BotanicalCorner, FloatingPetals } from "./DecorativeElements";
import "./FinalMessage.css";

export default function FinalMessage() {
  return (
    <section className="invite-section final-block" aria-label="رسالة ختامية">
      <FloatingPetals count={8} />

      <motion.div
        className="final-panel"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <BotanicalCorner position="top-right" />
        <BotanicalCorner position="bottom-left" />

        <p className="final-title">
          {weddingConfig.finalMessageTitle.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className="gold-divider" />
        <p className="final-subtitle">{weddingConfig.finalMessageSubtitle}</p>

        <div className="final-initials">{weddingConfig.groomInitial}</div>
      </motion.div>

      {/* This section reads like a closing statement, so without a nudge
          visitors tend to stop scrolling here and never notice the live
          countdown just below it. */}
      <span className="scroll-hint" aria-hidden="true">
        ˅
      </span>
    </section>
  );
}
