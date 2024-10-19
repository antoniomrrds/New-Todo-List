import React, { useState } from 'react';
import { ContainerOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const items = [
  { key: '1', icon: <ContainerOutlined />, label: 'Todo Form', path: '/todo' },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} theme="dark">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 64 }}>
      </div>
      <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
