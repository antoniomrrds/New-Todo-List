import { Flex } from 'antd';
import styled from 'styled-components';

export const ActivityCard = styled.aside`
max-width: 300px;
    padding:  ${({ theme }) => theme.spacing.zero} !important;
    background: ${({ theme }) => theme.colors.neutral.neutral100}!important;
    border: ${({ theme }) => theme.borders.small} solid ${({ theme }) => theme.colors.success.successGreen600};
    @media (max-width: 800px ) {
        max-width: 100%;
    }
`;

export const FlexContentItem = styled(Flex)`
  line-height: ${({ theme }) => theme.typography.lineHeightDefault} !important; /* Garante que o texto não fique maior que o necessário */
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  font-weight : normal !important;
  font-size: ${({ theme }) => theme.typography.fontSizeXSmall} !important;
  padding:  ${({ theme }) => `${theme.spacingFn(7)} ${theme.spacingFn(7)}`} !important;
`;
export const TextCustom = styled.span<{
  $color?: string;
  $marginRight?: boolean;
}>`
  font-size: ${({ theme }) => theme.typography.fontSizeXSmall} !important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins} !important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault} !important;
  font-weight: normal !important;
  display: inline-block; /* Ou 'block' dependendo do seu layout */
  color: ${({ $color }) => $color} !important;
  margin-inline-end: ${({ theme }) => theme.spacing.zero} !important;
  overflow: hidden !important;
  margin-inline-start: ${({ $marginRight, theme }) => ($marginRight ? theme.spacing.medium : '0px')}  !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important; /* Impede a quebra de linha */
  max-width: 100%; /* Certifique-se de que o elemento tenha um limite de largura */
`;
