import { FC, ReactNode } from 'react';
import * as S from '@/components/shared/Spin/spin-styles';

import { Spin as SpinAntd } from 'antd';
type SpinProps = {
  loading: boolean;
  children: ReactNode;
  text?: string;
};
export const SpinCustom: FC<SpinProps> = ({ loading, children, text }) => {
  return (
    <>
      {children}
      <S.ContentStyled>
        {loading && (
          <S.Overlay>
            <SpinAntd size="large" indicator={<S.LoadingOutlinedStyled />} />
            <S.LoadingText>{text}</S.LoadingText>
          </S.Overlay>
        )}
      </S.ContentStyled>
    </>
  );
};
