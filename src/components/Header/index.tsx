import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Drawer, Button } from 'antd';
import { HomeOutlined, AppstoreAddOutlined, BookOutlined } from '@ant-design/icons';
import logo from '@/assets/images/logo/checklist (1).png';

const { Header } = Layout;

const items = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: 'features',
    icon: <AppstoreAddOutlined />,
    label: 'Features',
  },
  {
    key: 'learn',
    icon: <BookOutlined />,
    label: 'Learn',
  },
];

const StyledHeader = styled(Header)`
  background: ${({ theme }) => theme.colors.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

const Logo = styled.img`
  margin-left: 20px;
  height: 40px;
`;

const MenuButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primaryColor};
 margin-right: 10px;
  color: white;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
    
    opacity: 0.8;
  }
   
  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    background: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .ant-drawer-body {
    background: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.primaryColor};
    padding: 0;
  }

  .ant-drawer-header {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
    background: ${({ theme }) => theme.colors.secondaryColor};
    color: #fff;

    .ant-drawer-close {
      color: ${({ theme }) => theme.colors.primaryColor};
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        color: ${({ theme }) => theme.colors.secondaryColor};
      }
    }
  }

  .ant-drawer-title {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const StyledMenuResponsive = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  flex-direction: column;

  .ant-menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primaryColor} !important;
  }
`;

const StyledMenu = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  
  .ant-menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primaryColor} !important;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondaryColor};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
`;

const AppHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState('home');

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const handleMenuClick = (key: string) => {
    setSelectedKey(key);
    onClose();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && visible) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [visible]);

  return (
    <Container>
      <StyledHeader>
        <Logo src={logo} alt="Logo" />
        <StyledMenu
          selectedKeys={[selectedKey]}
          items={items.map(item => ({
            ...item,
            onClick: () => handleMenuClick(item.key),
          }))}
        />
        <MenuButton type="text" icon={<HomeOutlined />} onClick={showDrawer} />
        <StyledDrawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={visible}
          styles={{
            mask: {

              backdropFilter: 'blur(10px)',
            }
          }}

        >
          <StyledMenuResponsive
            selectedKeys={[selectedKey]}
            items={items.map(item => ({
              ...item,
              onClick: () => handleMenuClick(item.key),
            }))}
          />
        </StyledDrawer>
      </StyledHeader>
    </Container>
  );
};

export default AppHeader;
