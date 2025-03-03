import { Tag } from 'antd';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  errorRed500: css`${({ theme }) => theme.colors.error.errorRed500}`,
};

export const CardMain = styled.main`
  border-radius: ${({ theme }) => theme.borders.large}!important;
  padding: ${({ theme }) => theme.spacingFn(7)}!important;
   display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacingFn(10)};
`;

export const TagStyled = styled(Tag)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.typography.fontSizeXSmall};
  font-family: 'Poppins', sans-serif;
  padding: ${({ theme }) => `${theme.spacingFn(4)} ${theme.spacingFn(10)}`};
  text-align: center;
  max-width: 200px;
  border: ${({ theme }) => theme.borders.small} solid ${colorStyles.neutral200};
  background-color: ${colorStyles.successGreen600};
  `;

export const CardsContainer = styled.section`

  gap: ${({ theme }) => theme.spacingFn(10)};
  margin-inline-start: ${({ theme }) => theme.spacingFn(10)};
  margin-inline-end: ${({ theme }) => theme.spacingFn(10)};
  margin: ${({ theme }) => theme.container.marginCenter} !important;
  width: ${({ theme }) => theme.container.fullWidthPercentage};
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
