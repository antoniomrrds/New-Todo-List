import { generateSpacingCss } from '@/styles/Theme';
import { Card, Col } from 'antd';
import styled from 'styled-components';

export const ActionsItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacingFn(10)};
  cursor: pointer;
  border-top:  ${({ theme }) => `${theme.borders.small} solid ${theme.colors.success.successGreen500}`};
 `;

export const ActionsItemContatiner = styled(Col)`
    :hover {
       background: ${({ theme }) => theme.colors.neutral.neutral100};
    }
   `;
export const CardMeta = styled(Card.Meta)`
.ant-card-meta-title{
  font-size: ${({ theme }) => theme.typography.fontSizeSmall};
  padding: ${({ theme }) => `${theme.spacingFn(7)} ${theme.spacingFn(10)}`} ;
  color:${({ theme }) => theme.colors.success.successGreen500};
}
`;

export const PaperCard = styled(Card)<{ $Color?: string }>`
display: flex;
flex-direction: column;
justify-content: space-between;
color:${({ theme }) => theme.colors.neutral.neutral100};
background: ${({ theme }) => theme.colors.neutral.neutral100};
height: max-content;
.ant-card-body  {
  overflow: hidden !important;
  border-radius: ${({ theme }) => theme.spacing.small}!important;
  padding: ${({ theme }) => theme.spacing.zero};
  border: ${({ theme }) => `${theme.borders.default} solid ${theme.colors.neutral.neutral100}`};
  background: ${({ theme }) => theme.colors.neutral.neutral800};
}
`;

export const CreatorName = styled.div`
 font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
  display: flex;
  align-items: center;
  padding:  ${({ theme }) => `${theme.spacingFn(7)} ${theme.spacingFn(7)}`};
  background: ${({ theme }) => theme.colors.neutral.neutral200};
  margin-top:  ${({ theme }) => theme.spacing.small};

  img {
    border-radius: 50%;
    width: ${({ theme }) => theme.spacingFn(24)};
    height: ${({ theme }) => theme.spacingFn(24)};
    margin-right:  ${({ theme }) => theme.spacing.small};
  }

  .creator-name {
    color: ${({ theme }) => theme.colors.neutral.neutral800};
    white-space: nowrap;
    font-weight: ${({ theme }) => theme.typography.fontWeight[600]};
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60%;
    margin-left:  ${({ theme }) => theme.spacing.small};
  }
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${generateSpacingCss(250)}, 1fr));
  grid-gap:  ${generateSpacingCss(10)};
  justify-content: flex-start;
  margin: ${({ theme }) => theme.container.marginCenter};
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  height: max-content;
`;
