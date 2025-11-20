import { createBrowserRouter } from "react-router-dom";

import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Skills } from "@/pages/Skills";
import { Timeline } from "@/pages/Timeline";
import { App } from "../App";
import { HomePage } from "../pages/HomePage";
import { Projects } from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/timeline", element: <Timeline /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
