import { FC } from 'react';
import * as S from '@/components/Profile/ProfileDetails/profile-details-styles';
import Dev from '@/assets/images/login/dev-product.png';
import { Grid } from 'antd';
import { DividerCustom } from '@/components/shared/Divider';
const { useBreakpoint } = Grid;

export const ProfileDetails: FC = () => {
  const screens = useBreakpoint();
  return (
    <>
      <S.HeaderMain $screens={screens}>Meus dados</S.HeaderMain>
      <S.HeaderSubtitle>
        Aqui você pode visualizar seus dados, alterar informações e ter mais
        dados sobre seu acesso!
      </S.HeaderSubtitle>
      <DividerCustom margin={10} />
    </>
  );
};
