// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, ConfigProvider, theme as themeAntd } from 'antd';
import { Content } from 'antd/es/layout/layout';
import AppHeader from './components/Header';
import TodoForm from './components/Todos';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppFooter from './components/Footer';
import './App.css';
import { theme } from './styles/Theme';

import { ThemeProvider } from 'styled-components';

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
        <Router>
            <AppHeader />
          <Layout style={{ minHeight: '100vh' }}>
            <Layout>
              <Content style={{ padding: theme.container.padding }}>
                <Routes>
                  <Route path="/todo" element={<TodoForm />} />
                </Routes>
              </Content>
            </Layout>
            <AppFooter />
          </Layout>
        </Router>
      </ConfigProvider>
        </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
