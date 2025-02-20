import React, { useState } from 'react';
import {
  HomeOutlined,
  AppstoreAddOutlined,
  BookOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import logo from '@/assets/images/logo/checklist.png';
import * as S from '@/components/Header/AppHeader.styles';
import { size } from '@/styles/breakpoints';
import { useWindowWidth } from '@/utils/window-with';
import { useNavigateFunction } from '@/helpers';
import * as I from '@/components/shared/Icons';
import { Dropdown, MenuProps } from 'antd';

type MenuItem = {
  key: string;
  icon: JSX.Element;
  label: string;
  link: string;
};

const items: MenuItem[] = [
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
    key: 'about',
    icon: <BookOutlined />,
    label: 'about',
    link: '/about',
  },
  // {
  //   key: 'profile',
  //   icon: <UserOutlined />,
  //   label: 'profile',
  //   link: '/profile',
  // },
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

  const itemsProfile: MenuProps['items'] = [
    {
      className: 'disabled',
      key: '1',
      label: 'Scorpion',
      icon: <UserOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: 'edit',
      label: <span>Editar</span>,
      //  onClick: () => navigate(`/todo/${todoId}/edit`),
    },
    {
      key: 'delete',
      label: 'Sair',
      icon: <LogoutOutlined />,
      //  onClick: () => showModal(todoId),
    },
  ];

  const navigation = useNavigateFunction();

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
        <Dropdown
          key={'dropdown-avatar'}
          menu={{ items: itemsProfile }}
          trigger={['click']}
          rootClassName="ant-dropdown-menu-custom"
        >
          <S.AvatarStyled
            key={'avatar'}
            src="https://yt3.ggpht.com/yti/ANjgQV_p8fC_-snKRNWvoBTngV4-3fHB6iWYisDUWEdrxCZ25II=s88-c-k-c0x00ffffff-no-rj"
            size={42.23}
            icon={<I.UserOutlinedStyled />}
          />
        </Dropdown>
        <S.ButtonSignInStyled
          type="primary"
          size="large"
          onClick={() => navigation('/sign-in')}
        >
          Entrar
        </S.ButtonSignInStyled>
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
        <S.NavUlDrawer key={'drawer-menu'}>
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
