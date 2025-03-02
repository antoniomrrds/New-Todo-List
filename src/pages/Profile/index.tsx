import { AppHeader } from '@/components/Header';
import { Profile } from '@/components/Profile';
import * as S from '@/pages/Profile/profile-page-styles';
import { FC } from 'react';

export const ProfilePage: FC = () => {
  return (
    <S.LayoutStyled>
      <AppHeader />
      <S.MainContainer>
        <Profile />
      </S.MainContainer>
    </S.LayoutStyled>
  );
};
