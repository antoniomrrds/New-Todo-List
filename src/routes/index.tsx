import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/Home';
import { AppHeader } from '@/components/Header';
import { NotFoundPage } from '@/pages/NotFound';
import { TodoHomePage } from '@/pages/Todo';
import { TodoDetailsPage } from '@/pages/Todo/Details';
import { ToDoSavePage } from '@/pages/Todo/Save';
import { AddTodoPage } from '@/pages/Todo/Add';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/todo',
    children: [
      {
        path: '',
        element: <TodoHomePage />,
      },
      {
        path: 'add',
        element: <AddTodoPage />,
      },
      {
        path: ':id',
        element: <TodoDetailsPage />,
      },
      {
        path: ':id/edit', // 🔹 Rota correta para edição
        element: <ToDoSavePage />,
      },
    ],
  },
  {
    path: '/learn',
    element: (
      <>
        <AppHeader />
        <div>Learn Page</div>
      </>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
