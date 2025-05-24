import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { HomePage } from "../pages/HomePage";
import { About } from "@/pages/About";
import { Timeline } from "@/components/timeline/Timeline";
import { Skills } from "@/pages/Skills";
import { Projects } from "../pages/Projects";
import { ProjectDetails } from "@/pages/ProjectDetails";
import { Contact } from "@/pages/Contact";

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
      { path: "/projects/:slug", element: <ProjectDetails /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
