
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import './App.css'
import TodoForm from './Todos/TodoForm';
import AppHeader from './Header/AppHeader';
import Sidebar from './Sidebar/Sidebar';
import { Content } from 'antd/es/layout/layout';

function App() {

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />
        <Layout>
          <Sidebar />
          <Content style={{ padding: '20px' }}>
            <Routes>
              <Route path="/todo" element={<TodoForm />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
