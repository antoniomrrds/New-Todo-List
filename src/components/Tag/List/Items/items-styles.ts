import { Tag } from '@/api/service/tag/types';
import { Col, Table } from 'antd';
import { TableProps } from 'antd/lib';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
};
export const ActionsItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacingFn(10)};
  cursor: pointer;
 `;

export const ActionsItemContatiner = styled(Col)`
    :hover {
       background: ${({ theme }) => theme.colors.neutral.neutral100};
    }
   `;

export const TableStyled = styled(Table)<TableProps<Tag>>`
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  border: 1px solid ${colorStyles.neutral200};
  border-radius: ${({ theme }) => theme.borders.large};

  /* Garante que a tabela pode expandir além do container */
  width: 100%;
  overflow-x: auto;

  .ant-table-wrapper {
    overflow-x: auto; /* Permite rolagem */
  }

  .ant-table-thead > tr > th {
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
    background: ${colorStyles.neutral800};
    color: ${colorStyles.successGreen600};
  }

  .ant-table-tbody > tr > td {
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
    color: ${({ theme }) => theme.colors.neutral.neutral800};
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]} !important;
`;
