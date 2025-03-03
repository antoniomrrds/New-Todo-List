import { generateSpacingCss } from '@/styles/Theme';
import { CloseOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { Breakpoint } from 'antd/lib';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  errorRed500: css`${({ theme }) => theme.colors.error.errorRed500}`,
};

export const ModalStyled = styled(Modal)`
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;

  .ant-modal-title {
    font-size:17px !important;
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
  }
  .ant-modal-header {
    background-color: ${colorStyles.neutral800}!important;
    font-weight: ${({ theme }) => theme.typography.fontWeight[700]} !important;

  }

  .ant-modal-content {
    border: ${({ theme }) => theme.borders.small} solid ${({ theme }) => theme.colors.success.successGreen600};
    background-color: ${colorStyles.neutral800}!important;
    color: ${colorStyles.errorRed500};
  }
`;

export const HeaderMain = styled.h1<{
  $screens: Partial<Record<Breakpoint, boolean>>;
}>`
  font-size: ${({ $screens }) => ($screens.lg ? 21 : 17)}px !important;
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

export const CloseCircleFilledStyled = styled(CloseOutlined)`
      background-color: ${colorStyles.successGreen600} !important;
      border: 1px solid ${colorStyles.successGreen600} !important;
      font-size: ${generateSpacingCss(24)}!important;
      border-radius: ${generateSpacingCss(5)} !important;
      padding: ${generateSpacingCss(5)} !important;
      display: block;
      color: ${colorStyles.neutral800}!important;
      &:hover {
        background: ${colorStyles.neutral800} !important;
        color: ${colorStyles.successGreen600} !important;
      }
`;
