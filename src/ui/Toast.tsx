import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

type ToastProps = {
  isVisible: boolean;
  type: "success" | "error";
  onClose: () => void;
  title: string;
  message: string;
};

export function Toast({ isVisible, onClose, title, message, type }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 50 }}
            transition={{ duration: 0.3 }}
            className="relative bg-iron-300 border border-hibiscus-700 rounded-lg shadow-lg p-4 w-[400px] h-[100px] justify-center max-w-full flex flex-col space-y-2 text-iron-900 overflow-hidden"
          >
            <div className="toast-header flex items-start justify-between">
              <div
                className={`toast-title font-semibold ${type === "success" ? "text-persian-green-700" : "text-hibiscus-700"}`}
              >
                {title} {type === "success" ? "✨" : "😢"}
              </div>
              <Button
                type="button"
                variant="icon"
                onClick={onClose}
                className="text-iron-900 hover:bg-iron-200 absolute top-2 right-2 rounded-full focus:outline-none focus:ring-2 focus:ring-hibiscus-500"
                aria-label="Fermer"
                icon={<X size={18} />}
              />
            </div>
            <p className="text-sm text-iron-900">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
