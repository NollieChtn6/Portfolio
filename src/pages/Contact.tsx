import { Github, Linkedin } from "lucide-react";

import { SOCIAL_LINKS } from "@/data/nav";
import ContactForm from "@/ui/ContactForm";

const ICONS = { LinkedIn: Linkedin, GitHub: Github };

export function Contact() {
  return (
    <main className="mx-auto grid w-full max-w-7xl flex-1 gap-12 px-5 pb-16 pt-6 lg:grid-cols-12 md:px-10">
      <section className="lg:col-span-5">
        <h1 className="display display-lg lg:!text-[clamp(2.5rem,5.2vw,4.25rem)]">Contact</h1>
        <p className="prose-body mt-8">
          Une question ? Écrivez-moi, je vous répondrai dès que possible.
        </p>
        <ul className="mt-8 flex flex-wrap gap-5">
          {SOCIAL_LINKS.map((social) => {
            const Icon = ICONS[social.label];
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-link inline-flex items-center gap-2"
                >
                  <Icon aria-hidden="true" size={20} />
                  {social.label}
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="lg:col-span-7">
        <ContactForm />
      </div>
    </main>
  );
}
