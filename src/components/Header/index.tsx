import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Drawer, Button } from 'antd';
import { HomeOutlined, InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const items = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: 'about',
    icon: <InfoCircleOutlined />,
    label: 'Sobre',
  },
  {
    key: 'profile',
    icon: <UserOutlined />,
    label: 'Perfil',
  },
];

const StyledHeader = styled(Header)`
  background: #001529;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.h1` // Use h1 for main title emphasis
  color: #fff;
  font-size: 24px;
  flex: 1;
  margin: 0; // Remove default margin
`;

const MenuButton = styled(Button)`
  color: #fff;
  margin-left: 20px;
  display: none; /* Hide by default */

  @media (max-width: 768px) { // Use max-width for responsiveness
    display: block; /* Show on smaller screens */
  }
`;

const AppHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Use <= for inclusive check

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Use <= for inclusive check
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout>
      <StyledHeader>
        <Title>Meu Todo List</Title>
        {!isMobile && (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            items={items}
            style={{ flex: 1, justifyContent: 'flex-end' }}
          />
        )}
        <MenuButton type="text" icon={<HomeOutlined />} onClick={showDrawer} />
        <Drawer
          title="Menu"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <Menu theme="light" mode="vertical" items={items} />
        </Drawer>
      </StyledHeader>
    </Layout>
  );
};

export default AppHeader;