import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/Home';
import { AppHeader } from '@/components/Header';
import { NotFoundPage } from '@/pages/NotFound';
import { AddTodoPage } from '@/pages/Todo/Add';
import { TodoHomePage } from '@/pages/Todo';
import { TodoDetailsPage } from '@/pages/Todo/Details';

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
    ],
  },
  {
    path: '/todo/:id',
    element: <TodoDetailsPage />,
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
