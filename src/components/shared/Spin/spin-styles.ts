import { generateSpacingCss } from '@/styles/Theme';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { css } from 'styled-components';

const positonAbsolute = css`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.transparent.darkWithTransparent};
  z-index: 10;
`;

export const Overlay = styled.div<{ $hasAbsolutePosition?: boolean }>`

  ${(props) => (props.$hasAbsolutePosition ? positonAbsolute : null)}
  width: ${({ theme }) => theme.container.fullHeightPercentage};
  height:${({ theme }) => theme.container.fullHeightPercentage};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(${generateSpacingCss(15)}); /* Efeito de desfoque */
`;

export const LoadingText = styled.h2<{ $colorText?: string }>`
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[700]} !important;
  color: ${({ theme, $colorText }) => ($colorText ? $colorText : theme.colors.error.errorRed500)};
  margin-top: ${generateSpacingCss(10)};
`;
export const LoadingOutlinedStyled = styled(LoadingOutlined)`
    color: ${({ theme }) => theme.colors.error.errorRed500};
    font-size: ${({ theme }) => theme.typography.fontSizeXXXlarge}!important;
`;

export const ContentStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;


`;
