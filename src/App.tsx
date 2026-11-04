import { Outlet, useLocation } from "react-router";

import EasterEgg from "./components/EasterEgg";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NAV_LINKS } from "./data/nav";

export function App() {
  const { pathname } = useLocation();
  const ink = NAV_LINKS.find((link) => link.href === pathname)?.ink ?? "tangerine";

  console.log("%c🥔", "font-family: monospace; opacity: 0.6; font-size: 24px;");

  return (
    <div data-ink={ink} className="page flex min-h-screen flex-col">
      <Header />
      <Outlet />
      <Footer />
      <EasterEgg />
    </div>
  );
}
