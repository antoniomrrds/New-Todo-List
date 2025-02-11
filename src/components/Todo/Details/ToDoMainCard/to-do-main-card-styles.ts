import { Breakpoint, Tag } from 'antd';
import styled from 'styled-components';

export const CardMain = styled.article`
  background: ${({ theme }) => theme.colors.neutral.neutral100};
  border: ${({ theme }) => theme.borders.small} solid ${({ theme }) => theme.colors.success.successGreen600};
  position: relative;
  padding: ${({ theme }) => theme.spacing.small}!important;
`;

export const HeaderMain = styled.h1<{
  $screens: Partial<Record<Breakpoint, boolean>>;
}>`
  font-size: ${({ $screens }) => ($screens.lg ? 21 : 17)}px !important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[700]} !important;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.neutral.neutral800};
  margin: ${({ theme }) => theme.spacing.zero} !important;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.success.successGreen600}!important;
  word-wrap: break-word;
  overflow: visible;
  word-break: break-word;
  white-space: normal;
`;

export const TagStyled = styled(Tag)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${({ theme }) => theme.container.fullWidthPercentage};
  font-size: ${({ theme }) => theme.typography.fontSizeXSmall};
  font-family: 'Poppins', sans-serif;
  padding: ${({ theme }) => `${theme.spacingFn(4)} ${theme.spacingFn(10)}`};
  width: ${({ theme }) => theme.container.fullWidthPercentage} !important;
  text-align: center;
  margin-inline-end: ${({ theme }) => theme.spacing.zero}!important;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacingFn(10)};
  justify-content: start;
  margin: ${({ theme }) => theme.container.marginCenter} !important;
  width: ${({ theme }) => theme.container.fullWidthPercentage};
`;

export const HeaderSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizeMediumSmall}!important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[500]} !important;
  margin-top: ${({ theme }) => theme.spacing.medium}!important;
`;
