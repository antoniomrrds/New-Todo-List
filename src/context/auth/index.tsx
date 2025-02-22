// AuthContext.tsx
import { User } from '@/api/service/auth';
import Cookies from 'js-cookie';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

// Criando o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook customizado para usar o contexto de autenticação
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
  // Estado para armazenar a autenticação
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedAuth = Cookies.get('token');
    const savedUser = Cookies.get('user');
    if (savedAuth && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
