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
  background: ${colorStyles.neutral800};
  border-radius: ${({ theme }) => theme.borders.large}!important;
  position: relative;
  padding: ${({ theme }) => theme.spacingFn(7)}!important;
  background-color: ${colorStyles.neutral200}!important;
`;

export const TagStyled = styled(Tag)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;


  font-size: ${({ theme }) => theme.typography.fontSizeXSmall};
  font-family: 'Poppins', sans-serif;
  padding: ${({ theme }) => `${theme.spacingFn(4)} ${theme.spacingFn(10)}`};
  text-align: center;
  margin-inline-end: ${({ theme }) => theme.spacing.zero}!important;
 max-width: ${({ theme }) => theme.container.fullWidthPercentage};
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

  gap: ${({ theme }) => theme.spacingFn(10)};
  justify-content: start;
  margin: ${({ theme }) => theme.container.marginCenter} !important;
  width: ${({ theme }) => theme.container.fullWidthPercentage};
`;
