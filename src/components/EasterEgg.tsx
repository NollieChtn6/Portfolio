import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { useSecretWords } from "@/customHooks/useSecretWords";
import patate from "../assets/surprise/surprise.png";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export default function EasterEgg() {
  const [visible, setVisible] = useState<boolean>(false);
  const reduceMotion = useReducedMotion();

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

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.output
          onClick={() => setVisible(false)}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -400, rotate: -12 }}
          animate={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: [-400, 0, -28, 0], rotate: [-12, 3, -2, -2] }
          }
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 360, rotate: 8 }}
          transition={{ duration: reduceMotion ? 0.2 : 1.1, ease: EASE_OUT_EXPO }}
          whileHover={reduceMotion ? undefined : { rotate: 1, scale: 1.03 }}
          className="fixed inset-0 z-[9999] m-auto h-[400px] w-[270px] cursor-pointer"
        >
          <div
            className="relative h-full w-full bg-ink text-chalk"
            style={{
              clipPath:
                "polygon(0 14px, 6% 0, 12% 14px, 18% 0, 24% 14px, 30% 0, 36% 14px, 42% 0, 48% 14px, 54% 0, 60% 14px, 66% 0, 72% 14px, 78% 0, 84% 14px, 90% 0, 96% 14px, 100% 6px, 100% 100%, 0 100%)",
              filter: "drop-shadow(0 24px 24px rgb(16 19 59 / 0.45))",
            }}
          >
            <div className="absolute inset-x-0 top-5 h-3 bg-lime" aria-hidden="true" />
            <div className="label-card absolute inset-x-5 bottom-6 top-12 flex flex-col items-center p-4">
              <p className="display text-2xl">NC6</p>
              <img
                src={patate}
                alt="Patate, le chat de Noëllie"
                className="mt-3 h-36 w-36 rounded-full border-2 border-ink object-cover"
              />
              <p className="display mt-4 text-3xl">Patate</p>
              <dl className="mt-3 w-full text-left text-sm">
                <div className="label-row !grid-cols-[4.5rem_1fr] !py-1.5">
                  <dt>Profil</dt>
                  <dd>Chat de bureau moelleux</dd>
                </div>
                <div className="label-row !grid-cols-[4.5rem_1fr] !py-1.5">
                  <dt>Notes</dt>
                  <dd>Doudou, câlins</dd>
                </div>
              </dl>
              <div className="barcode mt-auto w-full !h-6" aria-hidden="true" />
            </div>
          </div>
        </motion.output>
      )}
    </AnimatePresence>
  );
}
