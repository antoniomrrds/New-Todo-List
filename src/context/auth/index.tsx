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
  token: string | null;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: User | null) => void;
  getUserData: () => User | null;
  getToken: () => string | null;
  checkIfLoggedIn: () => boolean;
  getUserFromCookie: () => User | null;
  logout: () => void;
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Função para verificar se o usuário está logado
  const checkIfLoggedIn = (): boolean => {
    const savedUser = Cookies.get('sessionData');
    const savedToken = Cookies.get('token');

    if (savedToken) {
      setToken(savedToken);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      return true; // Se o token estiver presente, considera-se logado
    }

    return false; // Se o token não existir, o usuário não está autenticado
  };

  // Função para pegar os dados do usuário
  const getUserData = (): User | null => {
    return user;
  };

  // Função para pegar o token
  const getToken = (): string | null => {
    return token;
  };

  const getUserFromCookie = (): User | null => {
    const savedUser = Cookies.get('sessionData');
    if (savedUser) {
      return JSON.parse(savedUser);
    }
    return null;
  };

  useEffect(() => {
    // Verifica se já está logado assim que o componente é montado
    const loggedIn = checkIfLoggedIn();
    setIsAuthenticated(loggedIn); // Atualiza o estado de autenticação
  }, []); // Executa apenas uma vez, após o componente ser montado

  const logout = () => {
    Cookies.remove('sessionData');
    Cookies.remove('token');
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        setIsAuthenticated,
        setUser,
        getUserData,
        getToken,
        checkIfLoggedIn,
        logout,
        getUserFromCookie,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
