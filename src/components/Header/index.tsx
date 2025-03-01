import { useCallback, useEffect, useState } from 'react';
import { HomeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
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
import { Roles } from '@/api/service/auth';

type MenuItem = {
  key: string;
  icon?: JSX.Element;
  label: string;
  link: string;
  allowedRoles?: Roles[];
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
    label: 'todo',
    link: '/todo',
  },
  {
    key: 'tag',
    label: 'Tag',
    link: '/tag',
    allowedRoles: [Roles.Admin],
  },
  {
    key: 'category',
    label: 'Category',
    link: '/category',
    allowedRoles: [Roles.Admin],
  },
];

export const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const navigate = useNavigateFunction();
  const navigateToSignIn = useCallback(() => navigate('/sign-in'), [navigate]);
  const sizeValue = useWindowWidth();
  const isTabletXS = sizeValue >= parseInt(size.tabletXS.replace('px', ''));

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

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
      setVisible(false);
    }
  }, [isTabletXS]);

  useEffect(() => {
    const filtered = items.filter((item) => {
      if (!item.allowedRoles) return true;
      return user?.Roles?.some((role) => item.allowedRoles!.includes(role));
    });

    setFilteredItems(filtered);
  }, [user]);

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
        handleFormSubmit();
      },
    },
  ];

  return (
    <S.Header>
      <S.Nav>
        <S.Logo src={logo} onClick={handleNavigateHome} alt="Logo" />

        <S.NavUl>
          {filteredItems.map((item) => (
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
            Login
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
          {filteredItems.map((item) => (
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
