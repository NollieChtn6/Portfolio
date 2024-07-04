import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HomePage from '../components/homepage/HomePage';
import About from '../components/about/About';
import Timeline from '../components/timeline/Timeline';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import ProjectDetails from '../components/projects/ProjectDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <About /> },
      { path: '/timeline', element: <Timeline /> },
      { path: '/skills', element: <Skills /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:slug', element: <ProjectDetails /> },
    ],
  },
]);

export default router;
