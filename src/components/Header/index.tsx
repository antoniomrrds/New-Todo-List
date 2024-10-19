import React from 'react';
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    InfoCircleOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const AppHeader: React.FC = () => {
    return (
        <Header style={{ background: '#001529', padding: '0 20px' }}>
            <div style={{ color: '#fff', fontSize: '24px', float: 'left' }}>
                Meu Todo List
            </div>
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px', float: 'right' }}>
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                    Sobre
                </Menu.Item>
                <Menu.Item key="profile" icon={<UserOutlined />}>
                    Perfil
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default AppHeader;
