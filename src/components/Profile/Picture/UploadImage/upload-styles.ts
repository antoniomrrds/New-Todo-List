import { boxShadow, generateSpacingCss } from '@/styles/Theme';
import { Button } from 'antd';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  white: css`${({ theme }) => theme.shades.light}`,
};
export const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `;

export const ButtonUpload = styled(Button)`
  background-color: ${colorStyles.successGreen600};
  color: ${colorStyles.neutral800};
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
  border: ${({ theme }) => theme.borders.small} solid ${colorStyles.neutral800};
  border-radius: ${generateSpacingCss(24)} ${({ theme }) => theme.borders.large} !important;
  &:hover {
    background-color: ${colorStyles.neutral800} !important;
  }
`;
export const ImageWrapper = styled.div`
  width: ${generateSpacingCss(200)};
  height: ${generateSpacingCss(200)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${colorStyles.successGreen600}; /* Mostra fundo */
  border: ${({ theme }) => theme.borders.default} solid ${colorStyles.successGreen600}; /* Mostra borda */
  margin-bottom: ${generateSpacingCss(18)};
  margin-top: ${generateSpacingCss(18)};
  ${boxShadow}

`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;
