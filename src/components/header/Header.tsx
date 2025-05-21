import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Github, Linkedin, Menu } from "lucide-react";

import { Button } from "@/ui/Button";
import Sheet from "@/ui/Sheet";
import logo from "../../assets/logo_nc6.svg";

export function Header() {
  const SOCIAL_LINKS = [
    {
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/noellie-chatain-six/",
      label: "LinkedIn",
    },
    {
      icon: <Github />,
      href: "https://github.com/NollieChtn6",
      label: "GitHub",
    },
  ];
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  return (
    <header className="header-container flex h-32 max-sm:h-16 items-center justify-between p-3">
      <div>
        <Button
          type="button"
          onClick={() => setSheetIsOpen(true)}
          size="md"
          variant="ghost"
          icon={<Menu />}
          className="text-firefly-400"
        >
          <span className="hidden sm:flex">Menu</span>
        </Button>
      </div>
      <div className="title-container max-sm:2/4 p-">
        <NavLink to="/">
          <img src={logo} alt="Logo NC•6" className="hidden sm:flex" />
        </NavLink>
      </div>
      <div className="social-links-container flex gap-2">
        {SOCIAL_LINKS.map((socialNetwork) => (
          <Button
            type="button"
            variant="icon"
            size="sm"
            key={socialNetwork.label}
            href={socialNetwork.href}
            icon={socialNetwork.icon}
            className="text-firefly-400"
          />
        ))}
      </div>
      <Sheet
        isOpen={sheetIsOpen}
        onLinkClick={() => setSheetIsOpen(false)}
        onClose={() => setSheetIsOpen(false)}
      />
    </header>
  );
}

export default Header;
