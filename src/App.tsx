import { RouterProvider } from 'react-router-dom'
import {  ConfigProvider, theme as themeAntd } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { theme } from '@/styles/Theme';

import { ThemeProvider } from 'styled-components';
import { router } from '@/routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>

        <ConfigProvider
          theme={{
            ...themeAntd,
            token: {
              colorPrimary: theme.colors.primaryColor,
              // colorBgBase: theme.colors.secondaryColor,
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
