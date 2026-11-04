import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import cv from "@/assets/CHATAIN_SIX_CV_2025.pdf";
import { NAV_LINKS } from "@/data/nav";

const CV_FILENAME = "CHATAIN_SIX_Web_developer_CV_2025.pdf";

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: close the menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 md:px-10">
      <Link
        to="/"
        aria-label="Noëllie Chatain Six, accueil"
        className="display text-3xl leading-none no-underline"
      >
        NC6
      </Link>

      <nav aria-label="Navigation principale" className="hidden items-center gap-7 md:flex">
        {NAV_LINKS.filter((link) => link.href !== "/").map((link) => (
          <NavLink key={link.href} to={link.href} className="nav-link">
            {link.label}
          </NavLink>
        ))}
        <a
          href={cv}
          download={CV_FILENAME}
          className="btn !min-h-0 !px-4 !py-2 !text-sm"
          aria-label="Télécharger le CV au format PDF"
        >
          <Download aria-hidden="true" size={16} />
          CV
        </a>
      </nav>

      <button
        type="button"
        className="btn btn-ghost !min-h-0 !px-4 !py-2 md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        {open ? "Fermer" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navigation principale"
          className="page absolute left-0 right-0 top-full flex flex-col gap-1 border-y-2 border-current px-5 pb-6 pt-4 shadow-[0_24px_30px_-20px_rgb(16_19_59/0.55)] md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="display py-2 text-[clamp(1.75rem,8.4vw,2.5rem)] no-underline aria-[current=page]:underline"
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={cv}
            download={CV_FILENAME}
            className="btn mt-4 self-start"
            aria-label="Télécharger le CV au format PDF"
          >
            <Download aria-hidden="true" size={20} />
            Télécharger mon CV
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
