import { useAuth } from '@/context/auth';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

// Definindo o tipo das propriedades da PrivateRoute
type PrivateRouteProps = {
  element: ReactNode;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  // Se não estiver autenticado, redireciona para a página de login
  return isAuthenticated ? <>{element}</> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
