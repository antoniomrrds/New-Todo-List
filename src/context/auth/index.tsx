import { AuthUser } from '@/api/service/auth';
import Cookies from 'js-cookie';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useReducer,
  useMemo,
} from 'react';

// Tipos de estado e ação para o reducer
type State = {
  isAuthenticated: boolean;
  user: AuthUser | null;
};

type Action =
  | { type: 'SET_USER'; user: AuthUser }
  | { type: 'LOGOUT' }
  | { type: 'SET_AUTHENTICATED'; isAuthenticated: boolean };

// Estado inicial
const initialState: State = {
  isAuthenticated: false,
  user: null,
};

// Função do reducer
const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    case 'SET_AUTHENTICATED':
      return { ...state, isAuthenticated: action.isAuthenticated };
    default:
      return state;
  }
};

// Contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Tipo do contexto
type AuthContextType = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  logout: () => void;
  setUser: (user: AuthUser) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

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
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [loading, setLoading] = useState<boolean>(true);

  // Atualiza os cookies sempre que o usuário for atualizado
  const setUser = (user: AuthUser) => {
    dispatch({ type: 'SET_USER', user });

    Cookies.set(
      'sessionData',
      JSON.stringify({
        Name: user.Name,
        Email: user.Email,
      }),
      { expires: 10 }, // Garante que o cookie persiste
    );

    // Forçar atualização do estado para refletir a mudança imediatamente
    loadData();
  };

  // Função para carregar dados de autenticação dos cookies
  const loadData = () => {
    const savedUser = Cookies.get('sessionData');
    const savedToken = Cookies.get('token');

    if (savedToken && savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        dispatch({ type: 'SET_USER', user: parsedUser });
        dispatch({ type: 'SET_AUTHENTICATED', isAuthenticated: true });
      } catch (error) {
        console.error('Erro ao parsear os dados do usuário do cookie:', error);
        logout();
      }
    } else {
      logout();
    }
    setLoading(false);
  };

  // Função de logout
  const logout = () => {
    Cookies.remove('sessionData');
    Cookies.remove('token');
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    loadData();
  }, []);

  // Memoriza o valor do contexto para evitar re-renderizações desnecessárias
  const authContextValue = useMemo(
    () => ({
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      setUser,
      logout,
      setIsAuthenticated: (isAuthenticated: boolean) =>
        dispatch({ type: 'SET_AUTHENTICATED', isAuthenticated }),
    }),
    [state.isAuthenticated, state.user],
  );

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
