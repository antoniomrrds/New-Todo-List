import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '@/styles/Theme';
import ptBR from 'antd/es/locale/pt_BR';
import { ThemeProvider } from 'styled-components';
import { router } from '@/routes';
import { GlobalStyle } from './styles/global-styles';
import { App as AppAntd } from 'antd';
import { AuthProvider } from '@/context/auth';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ConfigProvider
            locale={ptBR}
            wave={{ disabled: true }}
            theme={{
              token: {
                colorPrimary: theme.colors.success.successGreen600,
                colorError: theme.colors.error.errorRed500,
              },
            }}
          >
            <AppAntd
              notification={{
                top: 80,
                stack: {
                  threshold: 1,
                },
                maxCount: 1,
              }}
              message={{
                maxCount: 1,
              }}
            >
              <GlobalStyle />
              {/* RouterProvider já se encarrega de fornecer o contexto de roteamento */}
              <RouterProvider router={router} />
            </AppAntd>
          </ConfigProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
};
