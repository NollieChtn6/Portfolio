import { useForm, ValidationError } from "@formspree/react";
import { SendHorizontal } from "lucide-react";
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
    <div className="stamp-in" style={{ "--r": "-0.8deg", "--r0": "-3deg", "--i": 1 } as React.CSSProperties}>
      <form
        ref={formRef}
        className="label-card space-y-5 p-6 md:p-8"
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_format" value="plain" />
        <input type="text" name="_gotcha" className="hidden" />

        <div>
          <label htmlFor="firstName" className="field-label">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="Votre prénom"
            className="field"
          />
          <ValidationError prefix="Prénom" field="firstName" errors={state.errors} className="field-error" />
        </div>

        <div>
          <label htmlFor="lastName" className="field-label">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Votre nom"
            className="field"
          />
          <ValidationError prefix="Nom" field="lastName" errors={state.errors} className="field-error" />
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Votre email"
            className="field"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="field-error" />
        </div>

        <div>
          <label htmlFor="message" className="field-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Votre message..."
            className="field"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="field-error" />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
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
    </div>
  );
}
