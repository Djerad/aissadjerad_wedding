import { motion } from "framer-motion";
import { weddingConfig } from "../config/weddingConfig";
import { BotanicalCorner, FloatingPetals, GoldParticles } from "./DecorativeElements";
import "./InvitationCard.css";

export default function InvitationCard() {
  return (
    <section className="invite-section invitation-block" aria-label="بطاقة الدعوة">
      <FloatingPetals count={6} />
      <GoldParticles count={10} />

      <motion.div
        className="invitation-card"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <BotanicalCorner position="top-right" />
        <BotanicalCorner position="top-left" />
        <BotanicalCorner position="bottom-right" />
        <BotanicalCorner position="bottom-left" />

        <p className="invitation-basmala">{weddingConfig.openingBlessing}</p>

        <div className="gold-divider" />

        <p className="invitation-message">{weddingConfig.invitationMessage}</p>

        <h1 className="invitation-name">{weddingConfig.groomName}</h1>

        <div className="gold-divider" />

        <div className="invitation-details-grid">
          <div className="invitation-details-card">
            <span className="invitation-details-label">التاريخ</span>
            <span className="invitation-details-value">{weddingConfig.weddingDateDisplay}</span>
          </div>
          <div className="invitation-details-card">
            <span className="invitation-details-label">الوقت</span>
            <span className="invitation-details-value">{weddingConfig.weddingTimeDisplay}</span>
          </div>
          <div className="invitation-details-card">
            <span className="invitation-details-label">المكان</span>
            <span className="invitation-details-value">{weddingConfig.venueName}</span>
          </div>
        </div>

        <span className="btn-float">
          <a
            className="luxury-btn invitation-map-btn"
            href={weddingConfig.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            اكتشف الموقع
          </a>
        </span>
      </motion.div>
    </section>
  );
}
