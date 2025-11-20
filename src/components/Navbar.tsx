import { useWindowSize } from "@/customHooks/useWindowSize";
import { Button } from "@/ui/Button";
import { NAV_LINKS } from "@/ui/Sheet";
import { Github, Linkedin } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    icon: <Linkedin strokeWidth={1} />,
    href: "https://fr.linkedin.com/in/no%C3%ABllie-chatain-six",
    label: "LinkedIn",
    ariaLabel: "Vers mon profil LinkedIn",
  },
  {
    icon: <Github strokeWidth={1} />,
    href: "https://github.com/NollieChtn6",
    label: "GitHub",
    ariaLabel: "Vers mon profil GitHub",
  },
];

export default function NavBar() {
  const { width, height } = useWindowSize();
  const isMobile = width < 768 || height < 600;
  return (
    <nav className="navbar-container flex flex-col w-20 py-4 h-full justify-between items-center">
      <div className="nav-container">
        {NAV_LINKS.map((navLink) => (
          <Button
            key={navLink.label}
            type="button"
            variant="ghost"
            href={navLink.href}
            className="nav-btn"
            size={isMobile ? "sm" : "md"}
            ariaLabel={`Aller à la page ${navLink.label}`}
          >
            {navLink.label}
          </Button>
        )).reverse()}
      </div>
      <div className="social-links-container">
        {SOCIAL_LINKS.map((socialNetwork) => (
          <Button
            type="button"
            variant="icon"
            size="sm"
            key={socialNetwork.label}
            href={socialNetwork.href}
            icon={socialNetwork.icon}
            className="social-icon"
            ariaLabel={socialNetwork.ariaLabel}
            target="_blank"
          />
        ))}
      </div>
    </nav>
  );
}
