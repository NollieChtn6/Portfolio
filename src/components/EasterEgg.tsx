import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSecretWords } from "@/customHooks/useSecretWords";
import patate from "../assets/surprise/surprise.png";

export default function EasterEgg() {
  const [visible, setVisible] = useState<boolean>(false);

  useSecretWords({
    patate: () => setVisible(true),
    badou: () => setVisible(true),
    chat: () => setVisible(true),
  });

  useEffect(() => {
    if (!visible) return;
    console.log("Bien joué ! Vous avez découvert mon chat Patate !");
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.img
          src={patate}
          alt="Mon chat"
          initial={{
            opacity: 0,
            scale: 0.2,
            y: 300,
            rotate: -360,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -90, 0, -40, 0],
            rotate: [0, 360, 300, 360],
          }}
          exit={{
            opacity: 0,
            scale: 0.2,
            y: 300,
            rotate: 180,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            filter: "saturate(1)",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5)",
          }}
          whileTap={{
            scale: 0.95,
            rotate: -5,
          }}
          className="
          fixed inset-0
          m-auto
          w-64 h-64
          rounded-full
          object-cover
          shadow-[0_20px_40px_rgba(0,0,0,0.4)]
          border-4 border-cornflower-blue-950
          desaturate
          z-[9999]
          saturate-0
          "
        />
      )}
    </AnimatePresence>
  );
}
