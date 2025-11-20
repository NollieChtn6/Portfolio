import logo from "@/assets/logo.svg";
import { useWindowSize } from "@/customHooks/useWindowSize";
import { Button } from "@/ui/Button";
import Sheet from "@/ui/Sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  return (
    <header className="header-container flex h-20 items-center justify-between px-4">
      {isMobile ? (
        <>
          <Button
            type="button"
            onClick={() => setSheetIsOpen(true)}
            size="md"
            variant="ghost"
            icon={<Menu />}
            className="text-iron-50"
            ariaLabel="Ouvrir le menu"
          />
          <Sheet
            isOpen={sheetIsOpen}
            onLinkClick={() => setSheetIsOpen(false)}
            onClose={() => setSheetIsOpen(false)}
          />
          <div className="title-container">
            <NavLink to="/">
              <img src={logo} alt="Logo de Noëllie Chatain Six" width={50} />
            </NavLink>
          </div>
        </>
      ) : (
        <div className="title-container">
          <NavLink to="/">
            <img src={logo} alt="Logo de Noëllie Chatain Six" width={100} />
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
