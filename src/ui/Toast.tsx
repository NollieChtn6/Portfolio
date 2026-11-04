import { AnimatePresence, motion } from "motion/react";
import { CircleAlert, CircleCheck, X } from "lucide-react";

type ToastProps = {
  isVisible: boolean;
  type: "success" | "error";
  onClose: () => void;
  title: string;
  message: string;
};

export function Toast({ isVisible, onClose, title, message, type }: ToastProps) {
  const Icon = type === "success" ? CircleCheck : CircleAlert;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-[calc(100vw-3rem)]" role="status" aria-live="polite">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="label-card relative w-[380px] max-w-full p-4 pr-12"
          >
            <p className="flex items-center gap-2 font-extrabold">
              <Icon aria-hidden="true" size={20} />
              {title}
            </p>
            <p className="mt-1 text-sm">{message}</p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-3 top-3 rounded-full p-1"
            >
              <X aria-hidden="true" size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
