import React from 'react';
import AppFooter from '@/components/Footer';
import { AppHeader } from '@/components/Header';
import { Outlet } from 'react-router-dom';
import { LayoutStyled } from '@/styles/global-styles';
import { Content } from 'antd/es/layout/layout';

export const SharedLayout: React.FC = () => (
  <LayoutStyled>
    <AppHeader />
    <Content>
      <Outlet />
    </Content>
    <AppFooter />
  </LayoutStyled>
);
