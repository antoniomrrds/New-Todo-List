import { Tag } from '@/api/service/tag/types';
import { size } from '@/styles/breakpoints';
import { generateSpacingCss } from '@/styles/Theme';
import { Card, Col, Table } from 'antd';
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
   @media (max-width: ${size.tabletXS}) {
    :hover {
       background: ${colorStyles.neutral800};
    }
   }

   `;

export const TableStyled = styled(Table)<TableProps<Tag>>`
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  border-radius: ${({ theme }) => theme.borders.large};
  overflow-x: auto;
  max-height: max-content;
  border: 1px solid ${colorStyles.neutral200};
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

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${({ theme }) => theme.spacingFn(200)}, 1fr));
  grid-gap:  ${generateSpacingCss(10)};
  justify-content: flex-start;
  margin: ${({ theme }) => theme.container.marginCenter};
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  height: max-content;

`;
export const PaperCard = styled(Card)<{ $Color?: string }>`
display: flex;
font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
flex-direction: column;
width: ${({ theme }) => theme.container.fullWidthPercentage};
justify-content: space-between;
color:${({ theme }) => theme.colors.neutral.neutral800};
background: ${({ theme }) => theme.colors.neutral.neutral100};
.ant-card-body  {
  overflow: hidden !important;
  border-radius: ${({ theme }) => theme.spacing.small}!important;
  padding: ${({ theme }) => theme.spacing.zero};
  border: ${({ theme }) => `${theme.borders.default} solid ${theme.colors.neutral.neutral100}`};
  background: ${colorStyles.neutral100};
}
`;

export const HeaderSubtitle = styled.h2`
  padding: ${({ theme }) => theme.spacing.medium}!important;
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[500]} !important;
  margin-top: ${({ theme }) => theme.spacing.xsmall}!important;
`;
