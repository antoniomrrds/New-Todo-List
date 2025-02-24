import { boxShadow, generateSpacingCss } from '@/styles/Theme';
import { Button, Form } from 'antd';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
};

export const MainContainer = styled.main`
  margin: ${generateSpacingCss(70)};
  max-width: ${({ theme }) => theme.container.maxWidth};
  max-width: ${generateSpacingCss(1000)};
  width: ${({ theme }) => theme.container.fullWidthPercentage} !important;
  border-top: ${({ theme }) => theme.borders.small} solid ${colorStyles.successGreen600};
  background: ${colorStyles.neutral800} !important;
  position: relative;
  &:hover {
     ${boxShadow};
  }

`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:  ${generateSpacingCss(20)};
  background: ${colorStyles.neutral800};
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

export const ButtonLoginStyled = styled(Button)<{
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
    background: ${colorStyles.neutral800} !important;
    color: ${colorStyles.successGreen600} !important;
  }
`;

export const HeaderMain = styled.h1`
  font-size: ${generateSpacingCss(21)} !important;
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
