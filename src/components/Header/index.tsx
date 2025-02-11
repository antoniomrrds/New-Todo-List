import React, { useState } from 'react';
import {
  HomeOutlined,
  AppstoreAddOutlined,
  BookOutlined,
} from '@ant-design/icons';
import logo from '@/assets/images/logo/checklist.png';
import * as S from '@/components/Header/AppHeader.styles';
import { size } from '@/styles/breakpoints';
import { useWindowWidth } from '@/utils/window-with';
import { useNavigateFunction } from '@/helpers';

const items = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'home',
    link: '/',
  },
  {
    key: 'todo',
    icon: <AppstoreAddOutlined />,
    label: 'todo',
    link: '/todo',
  },
  {
    key: 'learn',
    icon: <BookOutlined />,
    label: 'Learn',
    link: '/learn',
  },
];

export const AppHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigateFunction();

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);
  const sizeValue = useWindowWidth();
  const isTabletXS = sizeValue >= parseInt(size.tabletXS.replace('px', ''));

  if (isTabletXS && visible) {
    onClose();
  }

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <S.Header>
      <S.Nav>
        <S.Logo src={logo} onClick={handleNavigateHome} alt="Logo" />
        <S.NavUl>
          {items.map((item) => (
            <li key={item.key}>
              <S.NavLinkStyled to={item.link}>
                {item.icon}
                {item.label}
              </S.NavLinkStyled>
            </li>
          ))}
        </S.NavUl>
        <S.MenuButton onClick={showDrawer}>
          <S.GiHamburgerMenuStyled />
        </S.MenuButton>
      </S.Nav>
      <S.Drawer
        placement="left"
        onClose={onClose}
        closable={false}
        open={visible}
        maskClosable={false}
        keyboard={false}
        styles={{
          mask: {
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <S.NavDrawer>
          <S.logoDrawer src={logo} onClick={handleNavigateHome} alt="Logo" />
          <S.CloseCircleFilledStyled onClick={onClose} />
        </S.NavDrawer>
        <S.NavUlDrawer>
          {items.map((item) => (
            <S.NavLiDrawer key={item.key}>
              <S.NavLinkDrawerStyled to={item.link}>
                {item.icon}
                {item.label}
              </S.NavLinkDrawerStyled>
            </S.NavLiDrawer>
          ))}
        </S.NavUlDrawer>
      </S.Drawer>
    </S.Header>
  );
};
