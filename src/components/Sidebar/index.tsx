import React, { useState } from 'react';
import { ContainerOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Sider } = Layout;

// Styled Components
const StyledSider = styled(Sider)`
  transition: all 0.3s ease;
  background: #001529;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
`;

const StyledMenu = styled(Menu)`
  .ant-menu-item {
    transition: background 0.3s ease;
  }

  .ant-menu-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .ant-menu-item-selected {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const items = [
  { key: '1', icon: <ContainerOutlined />, label: 'Todo Form', path: '/todo' },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = items.map(item => ({
    key: item.key,
    icon: item.icon,
    label: <Link to={item.path}>{item.label}</Link>,
  }));

  return (
    <StyledSider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} theme="dark">
      <Header>
        {collapsed ? "Menu" : "Meu Aplicativo"}
      </Header>
      <StyledMenu defaultSelectedKeys={['1']} mode="inline" theme="dark" items={menuItems} />
    </StyledSider>
  );
};

export default Sidebar;
