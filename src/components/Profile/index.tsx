import { FC } from 'react';
import * as S from '@/components/Profile/profile-styles';
import { Grid } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { useNavigateFunction } from '@/helpers';
import { TabsProps } from 'antd/lib';
const { useBreakpoint } = Grid;
export const Profile: FC = () => {
  const screens = useBreakpoint();
  const navigate = useNavigateFunction();
  const location = useLocation(); // Obtém a rota atual
  type TabRoute = {
    [key: string]: string;
  };
  // Mapeando as rotas com as abas
  const tabRoutes: TabRoute = {
    1: '/profile',
    2: '/profile/change-password',
    3: '/profile/photos',
  };

  // Inverso para definir a Tab ativa com base na URL atual
  const activeTab =
    Object.keys(tabRoutes).find(
      (key) => tabRoutes[key] === location.pathname,
    ) || '1';

  const onChange = (key: string) => {
    navigate(tabRoutes[key]); // Navega para a rota correspondente
  };

  const items: TabsProps['items'] = [
    { key: '1', label: 'Conta' },
    { key: '2', label: 'Alterar Senha' },
    { key: '3', label: 'Foto' },
  ];

  return (
    <S.CardMain>
      <S.HeaderMain $screens={screens}>Configurações</S.HeaderMain>
      <S.TabStyled
        activeKey={activeTab}
        onChange={onChange}
        items={items}
        type="card"
      />
      <Outlet />
    </S.CardMain>
  );
};
