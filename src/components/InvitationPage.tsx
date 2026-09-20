import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import FinalMessage from "./FinalMessage";
import Countdown from "./Countdown";

// The full invitation lives on a single, normally-scrolling page — no
// page-turn navigation, dots, or next/previous controls. Sections just
// stack vertically in document flow, with the live countdown as the
// page's footer, after the final message.
export default function InvitationPage() {
  return (
    <motion.main
      className="invitation-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <InvitationCard />
      <FinalMessage />
      <Countdown />
    </motion.main>
  );
}
