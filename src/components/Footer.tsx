import { Github, Keyboard, Linkedin } from "lucide-react";

import { SOCIAL_LINKS } from "@/data/nav";

const ICONS = { LinkedIn: Linkedin, GitHub: Github };

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto flex w-full max-w-7xl flex-col gap-4 border-t-2 border-current px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10">
      <p className="caps">© NC•6 | Tous droits réservés</p>

      <p className="hidden items-center gap-2 text-sm italic opacity-75 md:flex">
        <Keyboard aria-hidden="true" size={16} />
        Certains mots sont plus puissants que d&rsquo;autres…
      </p>

      <ul className="flex gap-5">
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
                <Icon aria-hidden="true" size={18} />
                {social.label}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
