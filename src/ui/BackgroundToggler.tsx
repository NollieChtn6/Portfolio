import { useUserSettingsStore } from "@/store/userSettings";
import { Button } from "./Button";
import { Wallpaper, Ban } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useWindowSize } from "@/customHooks/useWindowSize";

export default function BackgroundToggler() {
  const { backgroundEnabled, toggleBackground } = useUserSettingsStore();
  const { width } = useWindowSize();

  const isMobile = width < 768;

  if (isMobile) {
    return null;
  }
  return (
    <Button
      type="button"
      onClick={toggleBackground}
      size="md"
      variant="ghost"
      className="icon flex text-iron-50 fixed z-50 top-4 right-4"
      ariaLabel={`${backgroundEnabled ? "Désactiver" : "Activer"} l'arrière-plan`}
      title={`${backgroundEnabled ? "Désactiver" : "Activer"} l'arrière-plan`}
      icon={
        <div className="relative w-6 h-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={backgroundEnabled ? "on-icon" : "off-icon"}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {backgroundEnabled ? (
                <Wallpaper aria-hidden="true" strokeWidth={1} />
              ) : (
                <Ban aria-hidden="true" strokeWidth={1} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      }
    />
  );
}
