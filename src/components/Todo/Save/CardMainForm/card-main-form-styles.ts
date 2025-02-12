import { boxShadow, generateSpacingCss } from '@/styles/Theme';
import { Breakpoint } from 'antd';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
};

export const CardMain = styled.article`
  ${boxShadow}
  background: ${colorStyles.neutral100};
  border: ${generateSpacingCss(2)} solid ${colorStyles.successGreen600};
  position: relative;
  padding: ${generateSpacingCss(7)} ${generateSpacingCss(10)};
`;
export const HeaderMain = styled.h1<{
  $screens: Partial<Record<Breakpoint, boolean>>;
}>`
  font-size: ${({ $screens }) => ($screens.lg ? generateSpacingCss(21) : generateSpacingCss(17))} !important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[700]} !important;
  font-family: 'Poppins', sans-serif;
  color: ${colorStyles.neutral800};
  margin: ${({ theme }) => theme.spacing.zero} !important;
  text-transform: capitalize;
  color: ${colorStyles.successGreen600}!important;
  word-wrap: break-word;
  overflow: visible;
  word-break: break-word;
  white-space: normal;
`;
