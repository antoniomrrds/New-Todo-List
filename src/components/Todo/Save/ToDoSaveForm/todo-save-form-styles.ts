import { boxShadow, generateSpacingCss } from '@/styles/Theme';
import { Form } from 'antd';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  errorRed500: css`${({ theme }) => theme.colors.error.errorRed500}`,
  white: css`${({ theme }) => theme.shades.light}`,
};


export const FormItem = styled(Form.Item)`
  margin-bottom: ${generateSpacingCss(1)} !important;
`;

export const CardMain = styled.article`
  width: 100%;
  min-width: 100%;
  background: ${colorStyles.neutral100}!important;
  background: ${colorStyles.white} !important;
  position: relative;

  padding: ${({ theme }) => theme.spacing.small}!important;
  ${boxShadow}
  border-radius: ${({ theme }) => theme.borders.large}!important;
`;
