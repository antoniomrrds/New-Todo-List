import { Pagination, PaginationProps } from 'antd';
import styled from 'styled-components';

export const PaginationStyled = styled(Pagination)<PaginationProps>`
    padding: ${({ theme }) => theme.spacing.medium};
  .ant-pagination-next,
  .ant-pagination-prev
  {
    background-color: ${({ theme }) => theme.colors.success.successGreen600}!important;
    color: ${({ theme }) => theme.colors.neutral.neutral800}!important;

  }
  .ant-pagination-item-active{
    background-color: ${({ theme }) => theme.colors.neutral.neutral800}!important;
    color: ${({ theme }) => theme.colors.success.successGreen600}!important;
  }
  .ant-pagination-disabled{
    display: none;
}
`;
