import { AppHeader } from '@/components/Header';
import { Profile } from '@/components/Profile';
import { BreadCrumb, BreadcrumbItems } from '@/components/shared/BreadCrumb';
import * as S from '@/pages/Profile/profile-page-styles';
import { FC } from 'react';

const breadcrumbItems: BreadcrumbItems = [
  { title: 'Todos (Tarefas)', href: '/todo' },
  { title: 'Detalhes da Tarefa' },
];
export const ProfilePage: FC = () => {
  return (
    <S.LayoutStyled>
      <AppHeader />
      <S.MainContainer>
        <BreadCrumb items={breadcrumbItems} />
        <Profile />
      </S.MainContainer>
    </S.LayoutStyled>
  );
};
