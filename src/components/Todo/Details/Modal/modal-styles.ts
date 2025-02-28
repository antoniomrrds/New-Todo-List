import { Modal } from 'antd';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  errorRed500: css`${({ theme }) => theme.colors.error.errorRed500}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
};

export const ModalStyled = styled(Modal)`
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;

  .ant-modal-header {
    background-color: ${colorStyles.successGreen600} !important;
  }

  .ant-modal-title {
    font-weight: ${({ theme }) => theme.typography.fontWeight[700]} !important;
    font-style: ${({ theme }) => theme.typography.fontStyle.italic}!important;
    color: ${colorStyles.neutral800}!important;
  }

  .ant-modal-body {
    background-color: ${colorStyles.neutral800}!important;
  }

  .ant-modal-content {
    background-color: ${colorStyles.successGreen600} !important;
    color: ${colorStyles.errorRed500};
  }
`;

export const Paragraph = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xsmall}!important;
    font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
    color: ${colorStyles.errorRed500};
    font-weight: ${({ theme }) => theme.typography.fontWeight[500]}!important;
    font-style: ${({ theme }) => theme.typography.fontStyle.italic}!important;
   `;

export const TextCustom = styled.span<{
  $color?: string;
}>`
    font-size: ${({ theme }) => theme.typography.fontSizeMedium}!important;
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins} !important;
  color: ${({ $color }) => $color || colorStyles.neutral200}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[700]} !important;
  font-style: ${({ theme }) => theme.typography.fontStyle.italic}!important;
  margin-inline-end: ${({ theme }) => theme.spacing.xsmall}!important;
  margin-inline-start: ${({ theme }) => theme.spacing.xsmall}!important;

`;
