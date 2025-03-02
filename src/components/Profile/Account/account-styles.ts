import { boxShadow, generateSpacingCss } from '@/styles/Theme';
import { Button, Form } from 'antd';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  white: css`${({ theme }) => theme.shades.light}`,
};

export const CardMain = styled.section`
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  max-height: max-content;
  position: relative;
  `;

export const HeaderSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[500]} !important;
  margin-top: ${({ theme }) => theme.spacing.xsmall}!important;
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
