import { useForm, ValidationError } from "@formspree/react";
import { SendHorizontal } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Toast } from "./Toast";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkgrlgqr");
  const [toastProps, setToastProps] = useState<{
    isVisible: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    isVisible: false,
    type: "success",
    title: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      setToastProps({
        isVisible: true,
        type: "success",
        title: "Message envoyé !",
        message: "Merci pour votre message, je vous répondrai dès que possible.",
      });
      formRef.current?.reset();
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      setToastProps({
        isVisible: true,
        type: "error",
        title: "Une erreur est survenue...",
        message: "Veuillez réessayer plus tard.",
      });
    }
  }, [state.succeeded, state.errors]);

  useEffect(() => {
    if (toastProps.isVisible) {
      const timer = setTimeout(() => {
        setToastProps((prev) => ({ ...prev, isVisible: false }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastProps.isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <form
        ref={formRef}
        className="space-y-6 bg-navy-blue-950/10 p-6 rounded-lg max-w-[600px] shadow-[0_0_40px_rgba(63,66,255,0.5)] border border-cornflower-blue-400/40"
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_format" value="plain" />
        <input type="text" name="_gotcha" className="hidden" />

        <div className="form-input-group">
          <label htmlFor="firstName" className="label">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="Votre prénom"
            className="input"
          />
          <ValidationError prefix="Prénom" field="firstName" errors={state.errors} />
        </div>

        <div className="form-input-group">
          <label htmlFor="lastName" className="label">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Votre nom"
            className="input"
          />
          <ValidationError prefix="Nom" field="lastName" errors={state.errors} />
        </div>

        <div className="form-input-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Votre email"
            className="input"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-input-group">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Votre message..."
            className="textarea"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div className="btn-container flex place-content-end">
          <Button
            type="submit"
            variant="ghost"
            size="md"
            icon={<SendHorizontal size={20} />}
            ariaLabel="Envoyer le message"
            disabled={state.submitting}
          >
            {state.submitting ? "Envoi en cours..." : "Envoyer"}
          </Button>
        </div>
      </form>

      <Toast
        type={toastProps.type}
        isVisible={toastProps.isVisible}
        title={toastProps.title}
        message={toastProps.message}
        onClose={() => setToastProps((prev) => ({ ...prev, isVisible: false }))}
      />
    </motion.div>
  );
}
