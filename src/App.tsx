import { RouterProvider } from 'react-router-dom'
import {  ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { theme } from '@/styles/Theme';
import ptBR from 'antd/es/locale/pt_BR'; 
import { ThemeProvider } from 'styled-components';
import { router } from '@/routes';

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>

        <ConfigProvider 
        locale={ptBR}
        wave={{ disabled: true }}
          theme={{
            token: { 
              colorPrimary: theme.colors.success.successGreen700,
              colorError: theme.colors.error.errorRed500, 
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
