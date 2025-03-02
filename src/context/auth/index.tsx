import { AuthUser } from '@/api/service/auth';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import {
  setCookie,
  getCookie,
  removeCookie,
  clearAllFromLocalStorage,
} from '@/utils';

// Tipos de estado para o contexto
type AuthContextType = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  logout: () => void;
  setUser: (user: AuthUser) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  loadData: () => void;
};

// Contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook customizado para usar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

// Provedor de autenticação
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Atualiza os cookies sempre que o usuário for atualizado
  const updateUser = (user: AuthUser) => {
    setUser(user);

    setCookie(
      'sessionData',
      JSON.stringify({
        Name: user.Name,
        Email: user.Email,
        Roles: user.Roles,
        UrlImage: user.UrlImage,
      }),
      10, // Garante que o cookie persista por 10 dias
    );

    loadData();
  };

  // Função para carregar dados de autenticação dos cookies
  const loadData = () => {
    const savedUser = getCookie('sessionData');
    const savedToken = getCookie('token');

    if (savedToken && savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch {
        logout();
      }
    } else {
      logout();
    }
    setLoading(false);
  };

  // Função de logout
  const logout = () => {
    removeCookie('sessionData');
    removeCookie('token');
    setUser(null);
    setIsAuthenticated(false);
    clearAllFromLocalStorage();
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser: updateUser,
        logout,
        setIsAuthenticated,
        loadData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
