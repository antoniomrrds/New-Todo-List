import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/Home';
import { AppHeader } from '@/components/Header';
import { NotFoundPage } from '@/pages/NotFound';
import TodoForm from '@/components/Todos';
import AppFooter from '@/components/Footer';


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
  },
  {
    path: "/tasks",
    element: (
      <>
        <AppHeader />
        <TodoForm />
        <AppFooter />
      </>
    ),
  },
  {
    path: "/learn",
    element: (
      <>
        <AppHeader />
        <div>Learn Page</div>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <NotFoundPage />
    ),
  }
]);