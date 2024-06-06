import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HomePage from '../components/homepage/HomePage';
import About from '../components/about/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

export default router;
