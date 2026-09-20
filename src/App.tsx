import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import EnvelopeScene from "./components/EnvelopeScene";
import InvitationPage from "./components/InvitationPage";
import "./App.css";

type Stage = "splash" | "envelope" | "invitation";

export default function App() {
  const [stage, setStage] = useState<Stage>("splash");

  return (
    <div className="app-root">
      <AnimatePresence>
        {stage === "splash" && <SplashScreen key="splash" onDiscover={() => setStage("envelope")} />}

        {stage === "envelope" && (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          >
            <EnvelopeScene onOpened={() => setStage("invitation")} />
          </motion.div>
        )}
      </AnimatePresence>

      {stage === "invitation" && <InvitationPage />}
    </div>
  );
}
