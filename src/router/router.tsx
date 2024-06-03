import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HomePage from '../components/homepage/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: '/about', element: <About /> },
    ],
  },
]);

export default router;
