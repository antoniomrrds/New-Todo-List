import { FC } from 'react';
import * as S from './picture-styles';
import { ImageUpload } from '@/components/Profile/Picture/UploadImage';

export const ProfileSettings: FC = () => {
  return (
    <S.CardMain>
      <S.HeaderSubtitle>Adicione uma foto de perfil</S.HeaderSubtitle>
      <ImageUpload />
    </S.CardMain>
  );
};
