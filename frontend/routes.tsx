import MainLayout from 'Frontend/views/MainLayout.js';
import TodoView from 'Frontend/views/todo/TodoView.js';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <TodoView /> },
      { path: '/todo', element: <TodoView /> },
    ],
  },
]);

export default router;
