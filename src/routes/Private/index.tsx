import { useAuth } from '@/context/auth';
import { FC, ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

// Definindo o tipo das propriedades da PrivateRoute
type PrivateRouteProps = {
  element: ReactNode;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated, getUserFromCookie, setUser } = useAuth();
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    // Função para verificar se o usuário foi carregado do cookie
    const checkUserCookie = () => {
      const fetchedUser = getUserFromCookie();
      if (fetchedUser) {
        setUser(fetchedUser);
        setLoading(false); // Define como false quando o usuário for carregado
        clearInterval(intervalId); // Limpa o intervalo após o cookie ser encontrado
      }
    };

    // Verificando o cookie a cada 1 segundo
    const intervalId = setInterval(checkUserCookie, 1000);

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [getUserFromCookie, setUser]);

  // useEffect(() => {
  //   // Quando o estado de autenticação mudar, se já estiver autenticado, paramos o carregamento
  //   if (isAuthenticated) {
  //     setLoading(false);
  //   }
  // }, [isAuthenticated]);

  // Durante o carregamento, podemos retornar null ou um componente de loading
  if (loading) {
    return null; // Ou <div>Loading...</div> se preferir mostrar algo durante o carregamento
  }

  // Se não estiver autenticado, redireciona para a página de login
  return isAuthenticated ? <>{element}</> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
