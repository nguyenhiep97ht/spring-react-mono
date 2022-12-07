import MainLayout from 'Frontend/views/MainLayout.js';
import TodoView from 'Frontend/views/todo/TodoView.js';
import { createBrowserRouter } from 'react-router-dom';
import LoginView from 'Frontend/views/login/LoginView';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <TodoView /> },
      { path: '/todo', element: <TodoView /> },
      {
        path: '/login',
        element: <LoginView />,
      },
    ],
  },
]);

export default router;
