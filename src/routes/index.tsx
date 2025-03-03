import { createBrowserRouter, Outlet } from 'react-router-dom';
import { HomePage } from '@/pages/Home';
import { NotFoundPage } from '@/pages/NotFound';
import { TodoHomePage } from '@/pages/Todo';
import { SignInPage } from '@/pages/Auth/SignIn';
import { SignUpPage } from '@/pages/Auth/SignUp';
import PrivateRoute from '@/routes/Private';
import { ProfilePage } from '@/pages/Profile';
import { Account } from '@/components/Profile/Account';
import { ProfileSettings } from '@/components/Profile/Picture';
import { ProfileChangePassword } from '@/components/Profile/ChangePassword';
import { Roles } from '@/api/service/auth';
import { TagPage } from '@/pages/Tag';
import { CategoryPage } from '@/pages/Category';

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
    ],
  },
  {
    path: '/tag',
    element: (
      <PrivateRoute allowedRoles={[Roles.Admin]}>
        <TagPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/category',
    element: (
      <PrivateRoute allowedRoles={[Roles.Admin]}>
        <CategoryPage />
      </PrivateRoute>
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
    element: (
      <PrivateRoute>
        <ProfilePage /> {/* 🔹 Agora o ProfilePage é o elemento principal */}
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Account /> }, // ✅ Define ProfileDetails como a página padrão
      { path: 'photos', element: <ProfileSettings /> },
      { path: 'change-password', element: <ProfileChangePassword /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
