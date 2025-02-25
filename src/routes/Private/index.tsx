import { useAuth } from '@/context/auth';
import { FC, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouteProps = {
  children?: ReactNode; // Tornar children opcional
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />; // Se não estiver autenticado, redireciona
  }

  return (
    <>
      {children || <Outlet />}{' '}
      {/* Se houver filhos, renderiza, senão renderiza o Outlet */}
    </>
  );
};

export default PrivateRoute;
