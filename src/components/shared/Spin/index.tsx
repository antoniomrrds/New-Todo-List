import { FC, ReactNode } from 'react';
import * as S from '@/components/shared/Spin/spin-styles';

import { Spin as SpinAntd } from 'antd';
type SpinProps = {
  loading: boolean;
  children?: ReactNode;
  text?: string;
  colorText?: string;
  hasAbsolutePosition?: boolean;
};
export const SpinCustom: FC<SpinProps> = ({
  loading,
  children,
  text,
  colorText,
  hasAbsolutePosition = true,
}) => {
  return (
    <>
      {loading ? (
        <S.ContentStyled>
          <S.Overlay $hasAbsolutePosition={hasAbsolutePosition}>
            <SpinAntd size="large" indicator={<S.LoadingOutlinedStyled />} />
            <S.LoadingText $colorText={colorText}>{text}</S.LoadingText>
          </S.Overlay>
        </S.ContentStyled>
      ) : null}
      {children}
    </>
  );
};
