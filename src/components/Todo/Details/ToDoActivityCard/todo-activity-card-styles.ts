import { Flex } from 'antd';
import styled from 'styled-components';

export const ActivityCard = styled.aside`
    padding:  ${({ theme }) => theme.spacing.zero} !important;
    background: ${({ theme }) => theme.colors.neutral.neutral100}!important;
    border: ${({ theme }) => theme.borders.small} solid ${({ theme }) => theme.colors.success.successGreen600};
`;

export const FlexContentItem = styled(Flex)`
  line-height: ${({ theme }) => theme.typography.lineHeightDefault} !important; /* Garante que o texto não fique maior que o necessário */
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  font-weight : normal !important;
  font-size: ${({ theme }) => theme.typography.fontSizeXSmall} !important;
  padding: 7px 10px !important;
`;

export const TextCustom = styled.span<{ $color?: string }>`
  font-size: ${({ theme }) => theme.typography.fontSizeXSmall} !important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault} !important; /* Garante que o texto não fique maior que o necessário */
  font-weight : normal !important;
  display: flex !important;
  color: ${({ $color }) => $color} !important;
  margin-inline-end: ${({ theme }) => theme.spacing.zero} !important;
  `;
