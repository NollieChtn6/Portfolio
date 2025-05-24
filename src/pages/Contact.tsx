import { PageTitle } from "@/ui/PageTitle";
import picture from "../assets/profile_picture_colors.png";

import ContactForm from "@/ui/ContactForm";
import { motion } from "motion/react";

export function Contact() {
  return (
    <main className="contact-container flex flex-col md:flex-row h-full overflow-hidden">
      <PageTitle title="Contact" />
      <section
        aria-labelledby="contact-heading"
        className="about-content flex flex-col md:flex-row w-full h-[90%] md:h-full"
      >
        <div className="flex flex-col grow p-6 w-full md:w-2/5 max-w-4xl mx-auto space-y-6 justify-center">
          <ContactForm />
        </div>
        <div className="hidden md:flex h-2/4 md:h-full p-9 md:w-2/4 place-content-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={picture}
              alt="Une petite fille avec une corne de licorne, une tresse et des lunettes"
              className="rounded-tl-[35%] rounded-br-[35%] border-4 border-iron-500 brightness-80 md:max-w-[400px] max-md:h-[300px]"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
