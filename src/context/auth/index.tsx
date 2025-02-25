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
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const [isCheckingCookies, setIsCheckingCookies] = useState<boolean>(false); // Estado para verificar se os cookies estão sendo checados

  // Função para carregar dados de autenticação dos cookies
  const loadData = () => {
    const savedUser = Cookies.get('sessionData');
    const savedToken = Cookies.get('token');

    if (savedToken && savedUser) {
      try {
        // Tente parsear o usuário e definir o estado
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
    setLoading(false); // Atualiza o estado de carregamento após verificar os cookies
  };

  // Função de logout
  const logout = () => {
    Cookies.remove('sessionData');
    Cookies.remove('token');
    dispatch({ type: 'LOGOUT' });
  };

  // Função para verificar os cookies a cada 3 segundos
  const checkCookiesPeriodically = () => {
    const interval = setInterval(() => {
      const savedUser = Cookies.get('sessionData');
      const savedToken = Cookies.get('token');

      if (savedToken && savedUser) {
        // Se os cookies existirem, parar a verificação
        if (!isCheckingCookies) {
          loadData();
          setIsCheckingCookies(true); // Interrompe a verificação contínua
        }
      } else {
        // Caso contrário, continue verificando
        setIsCheckingCookies(false); // Permite checar novamente após o logout
      }
    }, 3000); // Verifica a cada 3 segundos (ajuste conforme necessário)

    return interval;
  };

  // Verificação inicial de cookies no momento em que o componente é montado
  useEffect(() => {
    loadData(); // Verificação inicial de cookies ao carregar a página

    const interval = checkCookiesPeriodically();

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
    };
  }, []); // A dependência vazia garante que isso será executado apenas uma vez

  // Memoriza o valor do contexto para evitar re-renderizações desnecessárias
  const authContextValue = useMemo(
    () => ({
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      setUser: (user: AuthUser) => dispatch({ type: 'SET_USER', user }),
      logout,
      setIsAuthenticated: (isAuthenticated: boolean) =>
        dispatch({ type: 'SET_AUTHENTICATED', isAuthenticated }),
    }),
    [state.isAuthenticated, state.user],
  );

  if (loading) {
    // Exibe um loader ou nada enquanto verifica o estado de autenticação
    return null;
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
