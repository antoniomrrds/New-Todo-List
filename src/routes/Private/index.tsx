import { Roles } from '@/api/service/auth';
import { useAuth } from '@/context/auth';
import { FC, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouteProps = {
  children?: ReactNode; // Tornar children opcional
  allowedRoles?: Roles[];
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />; // Se não estiver autenticado, redireciona
  }

  console.log('user', user);
  if (
    allowedRoles &&
    (!user || !user.Roles.some((role) => allowedRoles.includes(role)))
  ) {
    return <Navigate to="/" />; // Se não tiver permissão, redireciona
  }

  return (
    <>
      {children || <Outlet />}{' '}
      {/* Se houver filhos, renderiza, senão renderiza o Outlet */}
    </>
  );
};

export default PrivateRoute;
