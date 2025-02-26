import { boxShadow, generateSpacingCss } from '@/styles/Theme';
import { Button, Form } from 'antd';
import { Breakpoint } from 'antd/lib';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
};

export const CardMain = styled.section`
  background: ${({ theme }) => theme.colors.neutral.neutral100};
  border: ${({ theme }) => theme.borders.small} solid ${({ theme }) => theme.colors.success.successGreen600};
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  max-height: max-content;
  padding: ${({ theme }) => theme.spacing.small}!important;
`;

export const HeaderMain = styled.h1<{
  $screens: Partial<Record<Breakpoint, boolean>>;
  $isCentered?: boolean;
  $fontSize?: number;
}>`
  font-size: ${({ $screens }) => ($screens.lg ? 21 : 17)}px !important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[700]} !important;
  font-family: 'Poppins', sans-serif;
  text-align: ${({ $isCentered }) => ($isCentered ? 'center' : 'left')};
  color: ${({ theme }) => theme.colors.neutral.neutral800};
  margin: ${({ theme }) => theme.spacing.zero} !important;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.success.successGreen600}!important;
  font-size: ${({ $fontSize }) => $fontSize}px !important;
   word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const HeaderSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[500]} !important;
  margin-top: ${({ theme }) => theme.spacing.xsmall}!important;
`;
export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacingFn(10)};
  justify-content: start;
  margin: ${({ theme }) => theme.container.marginCenter} !important;
  width: ${({ theme }) => theme.container.fullWidthPercentage};
`;

export const FormStyled = styled(Form)`
width: ${({ theme }) => theme.container.fullWidthPercentage} !important;
color: ${colorStyles.successGreen600} !important;

`;

export const FormItem = styled(Form.Item)`
 margin-bottom: ${generateSpacingCss(7)} !important;
  width: 100% !important;
 .ant-form-item-label{
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[500]} !important;

   padding: 0px !important;
   color: ${({ theme }) => theme.colors.success.successGreen600} !important;
   > label {
    color: ${({ theme }) => theme.colors.success.successGreen600} !important;
    margin-bottom:  ${generateSpacingCss(7)} !important;
   }
  }
`;

export const ButtonStyled = styled(Button)<{
  $color?: string;
  $background?: string;
}>`
  font-family: 'Poppins', sans-serif;
  background: ${colorStyles.successGreen600};

  order: 3;
  border: ${({ theme }) => theme.borders.small} solid ${colorStyles.successGreen600};
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.neutral.neutral800)};
  background-color: ${({ theme, $background }) => ($background ? $background : theme.colors.success.successGreen600)};
  &:hover {
    ${boxShadow}
    background: ${colorStyles.neutral800} !important;
    color: ${colorStyles.successGreen600} !important;

  }
`;
