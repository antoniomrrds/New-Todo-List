import { boxShadow } from '@/styles/Theme';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  errorRed500: css`${({ theme }) => theme.colors.error.errorRed500}`,
};
export const TextCustom = styled.span<{
  $color?: string;
  $isActivated?: boolean;
  $isDeactivated?: boolean;
}>`
  font-size: ${({ theme }) => theme.typography.fontSizeSmall} !important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins} !important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault} !important;
  font-weight: normal !important;
  display: inline-block;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  padding: ${({ theme }) => theme.spacingFn(7)} !important;
  background-color: ${colorStyles.neutral200} !important;
  max-width: ${({ theme }) => theme.container.fullWidthPercentage};
  color: ${({ $color }) => $color || colorStyles.neutral800} !important;
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  border: ${({ theme }) => theme.borders.small} solid ${colorStyles.neutral800};
  border-radius: ${({ theme }) => theme.borders.large} !important;

  ${({ $isActivated }) =>
    $isActivated &&
    css`
      color: ${colorStyles.neutral200} !important;
      background-color: ${colorStyles.successGreen600} !important;
      text-align: center;
      ${boxShadow}
    `}

  ${({ $isDeactivated }) =>
    $isDeactivated &&
    css`
      color: ${colorStyles.neutral200} !important;
      background-color: ${colorStyles.errorRed500} !important;
      text-align: center;
      ${boxShadow}
    `}
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
  background: ${colorStyles.neutral800}!important;
  border: ${({ theme }) => theme.borders.small} solid ${({ theme }) => theme.colors.success.successGreen600};
  position: relative;
  padding: ${({ theme }) => theme.spacing.small}!important;
  ${boxShadow}
  border-radius: ${({ theme }) => theme.borders.large}!important;
`;
