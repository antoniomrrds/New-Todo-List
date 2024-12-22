import React from "react";
import AppFooter from "@/components/Footer";
import { AppHeader } from "@/components/Header";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "@/styles/global-styles";
import { Content } from "antd/es/layout/layout";

export const SharedLayout: React.FC = () => (
  <StyledLayout>
    <AppHeader />
    <Content>
      <Outlet />
    </Content>
    <AppFooter />
  </StyledLayout>
);
