import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Menu, Linkedin, Github } from "lucide-react";

import { Button } from "../userinterface/button";
import Sheet from "../userinterface/sheet";
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
    <header className="header-container flex h-32 items-center justify-between p-3">
      <div>
        <Button
          type="button"
          onClick={() => setSheetIsOpen(true)}
          size="md"
          variant="ghost"
          icon={<Menu />}
          className="text-firefly-500"
        >
          Menu
        </Button>
      </div>
      <div className="title-container max-sm:2/4 p-">
        <NavLink to="/">
          <img src={logo} alt="Logo NC•6" className="" />
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
            className="text-firefly-500"
          />
        ))}
      </div>
      <Sheet isOpen={sheetIsOpen} onClose={() => setSheetIsOpen(false)} />
    </header>
  );
}

export default Header;
