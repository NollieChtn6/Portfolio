import { X } from "lucide-react";
import { Button } from "./button";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sheet({ isOpen, onClose }: SheetProps) {
  const NAV_LINKS = [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "À propos",
      href: "/about",
    },
    {
      label: "Parcours",
      href: "/timeline",
    },
    {
      label: "Projets",
      href: "/projects",
    },
    {
      label: "Compétences",
      href: "/skills",
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={onClose}
          onKeyUp={(e) => {
            if (e.key === "Escape") {
              onClose();
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Close"
        />
      )}

      <aside
        className={`z-50 fixed top-0 left-0 h-full w-[20%] bg-iron-950 text-iron-50 shadow-lg p-6 transform transition-transform duration-300 rounded-r-lg space-y-12 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4"
          icon={<X size={24} />}
          variant="icon"
        />
        <div className="mt-8">
          <nav className="space-y-4">
            {NAV_LINKS.map((navLink) => (
              <Button key={navLink.label} type="button" variant="secondary" href={navLink.href}>
                {navLink.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
