import { useCallback, useEffect, useState } from 'react';
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
import { App, Dropdown, MenuProps } from 'antd';
import { useAuth } from '@/context/auth';
import { useSignOut } from '@/api/service/auth/actions';
import { FaHouseUser } from 'react-icons/fa';
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
];

export const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigateFunction();
  const navigateToSignIn = useCallback(() => navigate('/sign-in'), [navigate]);
  const sizeValue = useWindowWidth();
  const isTabletXS = sizeValue >= parseInt(size.tabletXS.replace('px', ''));

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  // Only trigger when screen size changes, not when visible changes

  const navigteToProfile = useCallback(() => navigate('/profile'), [navigate]);
  const handleNavigateHome = useCallback(() => navigate('/'), [navigate]);

  const { user, isAuthenticated } = useAuth();
  const { notification } = App.useApp();

  const { handleFormSubmit } = useSignOut({
    navigateToSignIn,
    notification,
  });

  useEffect(() => {
    if (isTabletXS && visible) {
      setVisible(false); // Only set to false if the drawer is visible and we are on tablet
    }
  }, [isTabletXS]);

  const itemsProfile: MenuProps['items'] = [
    {
      className: 'disabled',
      icon: <FaHouseUser />,
      key: '1',
      label: `${user?.Name} `,
    },
    {
      type: 'divider',
    },
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Meus dados',
      onClick: () => navigteToProfile(),
    },
    {
      key: 'sign-out',
      label: 'Sair',
      icon: <LogoutOutlined />,

      onClick: async () => {
        handleFormSubmit(); // Esperar o logout
      },
    },
  ];

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

        {isAuthenticated ? (
          <Dropdown
            key={'dropdown-avatar'}
            menu={{ items: itemsProfile }}
            trigger={['click']}
            placement="topRight"
            rootClassName="ant-dropdown-menu-custom"
          >
            <S.AvatarStyled
              key={'avatar'}
              src="https://yt3.ggpht.com/yti/ANjgQV_p8fC_-snKRNWvoBTngV4-3fHB6iWYisDUWEdrxCZ25II=s88-c-k-c0x00ffffff-no-rj"
              size={42.23}
              icon={<I.UserOutlinedStyled />}
            />
          </Dropdown>
        ) : (
          <S.ButtonSignInStyled
            type="primary"
            size="large"
            onClick={() => navigateToSignIn()}
          >
            Entrar
          </S.ButtonSignInStyled>
        )}
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
