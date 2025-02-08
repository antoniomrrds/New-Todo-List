import styled from 'styled-components';
import { Layout, Menu as MenuAntd, Drawer as DrawerAntd, Button } from 'antd';
import { device, size } from '@/styles/breakpoints';

export const Header = styled(Layout.Header)`
    background: ${({ theme }) => theme.colors.secondaryColor};
    display: flex;

    align-items: center;
    justify-content: space-between;
    padding: 0;
    max-width: ${({ theme }) => theme.container.maxWidth};
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index:2;
`;

export const Logo = styled.img`
    margin-left: 20px;
    height: 40px;
    cursor: pointer;
`;

export const MenuButton = styled(Button)`
    background: ${({ theme }) => theme.colors.primaryColor};
    margin-right: 10px;
    color: white;
    border: none;

    &:hover {
        background: ${({ theme }) => theme.colors.primaryColor};
        opacity: 0.8;
    }

    @media (min-width: ${size.tablet}) {
        display: none;
    }
`;

export const Drawer = styled(DrawerAntd)`
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

export const MenuResponsive = styled(MenuAntd)`
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

export const Menu = styled(MenuAntd)`
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

    @media ${device.tablet} {
        display: none;
    }
`;

export const Container = styled.div`
    width: ${({ theme }) => theme.container.fullWidthPercentage};
    z-index:2;
    background: ${({ theme }) => theme.colors.secondaryColor};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
`;
