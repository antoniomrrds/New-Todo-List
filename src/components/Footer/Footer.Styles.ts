import styled from 'styled-components';

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.success.successGreen600};
  border-top:  ${({ theme }) => theme.spacingFn(2)} solid ${({ theme }) => theme.colors.neutral.neutral200};
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
   rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
   rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  width: ${({ theme }) => theme.container.fullWidthPercentage};
  color: ${({ theme }) => theme.colors.neutral.neutral200};
  font-weight: bold;
  font-family: ${({ theme }) => theme.typography.fontFamily.inter};
  font-size: ${({ theme }) => theme.typography.fontSizeMedium};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral.neutral800};
      background-color: ${({ theme }) => theme.colors.neutral.neutral200};
      border-top: ${({ theme }) => theme.spacingFn(2)} solid ${({ theme }) => theme.colors.success.successGreen600};
    }
`;
