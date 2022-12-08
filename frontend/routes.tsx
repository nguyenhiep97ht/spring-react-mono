import MainLayout from 'Frontend/views/MainLayout.js';
import GuidLineView from 'Frontend/views/todo/GuidLineView.js';
import { createBrowserRouter } from 'react-router-dom';
import LoginView from 'Frontend/views/login/LoginView';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <GuidLineView /> },
      { path: '/guideline', element: <GuidLineView /> },
      {
        path: '/login',
        element: <LoginView />,
      },
    ],
  },
]);

export default router;
