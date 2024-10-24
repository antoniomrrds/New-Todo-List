
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import './App.css'

import { Content } from 'antd/es/layout/layout';
import AppHeader from './components/Header';
import TodoForm from './components/Todos';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppFooter from './components/Footer';


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <AppHeader />
          <Layout>
            {/* <Sidebar /> */}
            <Content style={{ padding: '20px' }}>
              <Routes>
                <Route path="/todo" element={<TodoForm />} />
              </Routes>
            </Content>
          </Layout>
          < AppFooter/>
        </Layout>
      </Router>
    </QueryClientProvider >
  )
}

export default App
