import styled, { css } from 'styled-components';
import { boxShadow, generateSpacingCss } from '@/styles/Theme';
const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
};

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${colorStyles.neutral800};
  border-top:  ${generateSpacingCss(2)} solid ${colorStyles.successGreen600};
  text-align: center;
  ${boxShadow}

  width: ${({ theme }) => theme.container.fullWidthPercentage};
  color: ${({ theme }) => theme.colors.neutral.neutral200};
  font-weight: bold;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
  font-size: ${({ theme }) => theme.typography.fontSizeMedium};
    &:hover {
      color: ${colorStyles.neutral800};
      background-color: ${({ theme }) => theme.colors.neutral.neutral200};
      border-top: ${({ theme }) => theme.spacingFn(2)} solid ${colorStyles.successGreen600};

    }
`;
