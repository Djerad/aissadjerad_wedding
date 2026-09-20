import { motion } from "framer-motion";
import { weddingConfig } from "../config/weddingConfig";
import { FloatingPetals, GoldParticles } from "./DecorativeElements";
import "./SplashScreen.css";

export default function SplashScreen({ onDiscover }: { onDiscover: () => void }) {
  return (
    <motion.section
      className="screen splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      aria-label="شاشة الترحيب"
    >
      <FloatingPetals count={8} />
      <GoldParticles count={16} />

      <motion.div
        className="splash-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="splash-initials" aria-hidden="true">
          <span>{weddingConfig.groomInitial}</span>
        </div>

        <div className="gold-divider" />

        <p className="splash-tagline">بداية حكاية جديدة...</p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.9 }}
        >
          <span className="btn-float">
            <button type="button" className="luxury-btn splash-btn" onClick={onDiscover}>
              اكتشف الدعوة
            </button>
          </span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
