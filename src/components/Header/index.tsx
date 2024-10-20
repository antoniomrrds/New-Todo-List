import React from 'react';
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    InfoCircleOutlined,
    UserOutlined,
} from '@ant-design/icons';

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

const AppHeader: React.FC = () => {
    return (
        <Header style={{ background: '#001529', padding: '0 20px' }}>
            <div style={{ color: '#fff', fontSize: '24px', float: 'left' }}>
                Meu Todo List
            </div>
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px', float: 'right' }} items={items} />
        </Header>
    );
};

export default AppHeader;