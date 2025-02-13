import { generateSpacingCss } from '@/styles/Theme';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.container.fullHeightPercentage};
  height:${({ theme }) => theme.container.fullHeightPercentage};
  background: ${({ theme }) => theme.colors.transparent.darkWithTransparent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  backdrop-filter: blur(${generateSpacingCss(15)}); /* Efeito de desfoque */
`;

export const LoadingText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[700]};
  margin-top: ${generateSpacingCss(15)};

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
