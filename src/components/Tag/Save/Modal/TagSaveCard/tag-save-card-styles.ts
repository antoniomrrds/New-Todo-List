import { boxShadow, generateSpacingCss } from '@/styles/Theme';
import { Form } from 'antd';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  errorRed500: css`${({ theme }) => theme.colors.error.errorRed500}`,
  white: css`${({ theme }) => theme.shades.light}`,
};

export const TextCustom = styled.span<{
  $color?: string;
}>`
  font-size: ${({ theme }) => theme.typography.fontSizeSmall} !important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins} !important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault} !important;
  font-weight: normal !important;
  display: inline-block; /* Ou 'block' dependendo do seu layout */
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  padding: ${({ theme }) => theme.spacingFn(7)}!important;
  background-color: ${colorStyles.neutral200}!important;
  max-width: ${({ theme }) => theme.container.fullWidthPercentage}; /* Certifique-se de que o elemento tenha um limite de largura */
  color: ${({ $color }) => $color || colorStyles.neutral800}!important;
  width: 100%;
  border: ${({ theme }) => theme.borders.small} solid ${colorStyles.neutral800};
  border-radius: ${({ theme }) => theme.borders.large}!important;

`;

export const HeaderSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[500]} !important;
  margin-top: ${({ theme }) => theme.spacing.xsmall}!important;
  margin-bottom: ${({ theme }) => theme.spacing.xsmall}!important;
  color: ${colorStyles.successGreen600}!important;
`;
export const CardMain = styled.article`
  width: 100%;
  min-width: 100%;
  background: ${colorStyles.neutral100}!important;
  background: ${colorStyles.white} !important;
  position: relative;

  padding: ${({ theme }) => theme.spacing.small}!important;
  ${boxShadow}
  border-radius: ${({ theme }) => theme.borders.large}!important;
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: ${generateSpacingCss(1)} !important;
`;
