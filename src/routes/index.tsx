import { createBrowserRouter, Outlet } from 'react-router-dom';
import { HomePage } from '@/pages/Home';
import { AppHeader } from '@/components/Header';
import { NotFoundPage } from '@/pages/NotFound';
import { TodoHomePage } from '@/pages/Todo';
import { TodoDetailsPage } from '@/pages/Todo/Details';
import { ToDoSavePage } from '@/pages/Todo/Save';
import { SignInPage } from '@/pages/Auth/SignIn';
import { SignUpPage } from '@/pages/Auth/SignUp';
import PrivateRoute from '@/routes/Private';
import { ProfilePage } from '@/pages/Profile';
import { ProfileDetails } from '@/components/Profile/ProfileDetails';
import { ProfileSettings } from '@/components/Profile/ProfileSettings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/todo',
    element: (
      <PrivateRoute>
        <Outlet />
        {/* Agora, as sub-rotas de "/todo" serão renderizadas aqui */}
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <TodoHomePage />,
      },
      {
        path: 'add',
        element: <ToDoSavePage />,
      },
      {
        path: ':id',
        element: <TodoDetailsPage />,
      },
      {
        path: ':id/edit',
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
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />, // Profile será o layout principal
    children: [
      { path: 'details', element: <ProfileDetails /> },
      { path: 'settings', element: <ProfileSettings /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
