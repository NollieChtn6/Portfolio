import { SendHorizontal } from "lucide-react";
import { Button } from "./Button";
import { motion } from "motion/react";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <form
        className="space-y-6 bg-persian-green-500/30 p-6 rounded-lg shadow-md max-w-[600px] mx-auto"
        name="contact"
        method="POST"
      >
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
        </div>
        <div className="btn-container flex place-content-end">
          <Button
            type="submit"
            variant="primary"
            size="md"
            icon={<SendHorizontal size={20} />}
            ariaLabel="Envoyer le message"
          >
            Envoyer
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
