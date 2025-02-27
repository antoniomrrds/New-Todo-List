import { Pagination, PaginationProps } from 'antd';
import styled, { css } from 'styled-components';

const colorsStyles = {
  successGreen800: css`${({ theme }) => theme.colors.success.successGreen800}`,
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
};
export const PaginationStyled = styled(Pagination)<PaginationProps>`
    padding: ${({ theme }) => theme.spacing.medium};
    width: ${({ theme }) => theme.container.fullWidthPercentage} !important;
    .ant-pagination-item  {
      overflow: hidden;
      border:${({ theme }) => theme.borders.small}  solid  ${colorsStyles.successGreen600}!important;

      a {
      background-color:  ${colorsStyles.neutral200}!important;
      color: ${colorsStyles.successGreen600}!important;
    }
    a:hover{
      color:  ${colorsStyles.neutral200}!important;
      background-color: ${colorsStyles.successGreen600}!important;
    }
    }

    .ant-pagination-item-ellipsis{
      color: ${colorsStyles.successGreen600}!important;
    }


  .ant-pagination-next,
  .ant-pagination-prev
  {
    background-color:  ${colorsStyles.successGreen600}!important;
    color: ${colorsStyles.neutral800}!important;

  }
  .ant-pagination-item-active{
    a {
      background-color:  ${colorsStyles.neutral800}!important;
      color: ${colorsStyles.successGreen600}!important;
    }
    a:hover{
      color:  ${colorsStyles.successGreen800}!important;
      background-color:  ${colorsStyles.successGreen600}!important;
    }

  }
  .ant-pagination-disabled{
    display: none;
}

`;
