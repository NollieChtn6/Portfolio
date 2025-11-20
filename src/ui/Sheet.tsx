import { X } from "lucide-react";
import { Button } from "./Button";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  onLinkClick: () => void;
}

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Parcours", href: "/timeline" },
  { label: "Projets", href: "/projects" },
  // { label: "Compétences", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Sheet({ isOpen, onClose, onLinkClick }: SheetProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black-950 bg-opacity-50 transition-opacity duration-300"
          onClick={onClose}
          onKeyUp={(e) => {
            if (e.key === "Escape") onClose();
          }}
          tabIndex={0}
          role="button"
          aria-label="Close"
        />
      )}

      <aside
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`z-50 fixed top-0 left-0 h-full w-screen sm:w-full bg-black-950 text-iron-50 shadow-lg p-4 transform transition-transform duration-300 space-y-12 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4"
          icon={<X size={24} />}
          variant="icon"
          ariaLabel="Fermer le menu"
        />
        <div className="mt-8">
          <nav className="space-y-6 flex flex-col items-center">
            {NAV_LINKS.map((navLink) => (
              <Button
                key={navLink.label}
                type="button"
                variant="ghost"
                href={navLink.href}
                className="nav-btn"
                size="md"
                ariaLabel={`Aller à la page ${navLink.label}`}
              >
                {navLink.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
