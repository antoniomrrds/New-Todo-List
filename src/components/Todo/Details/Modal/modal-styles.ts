import { LoadingOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import styled from 'styled-components';

export const ModalStyled = styled(Modal)`
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;

  .ant-modal-header {
    background-color: ${({ theme }) => theme.colors.success.successGreen600} !important;
  }

  .ant-modal-title {
    font-weight: ${({ theme }) => theme.typography.fontWeight[700]} !important;
    font-style: ${({ theme }) => theme.typography.fontStyle.italic}!important;
    color: ${({ theme }) => theme.colors.neutral.neutral800};
  }

  .ant-modal-body {
    background-color: ${({ theme }) => theme.colors.neutral.neutral800} !important;
  }

  .ant-modal-content {
    background-color: ${({ theme }) => theme.colors.success.successGreen600} !important;
    color: ${({ theme }) => theme.colors.error.errorRed500};
  }
`;

export const ContentStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xsmall}!important;
    font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
    color: ${({ theme }) => theme.colors.error.errorRed500};
    font-weight: ${({ theme }) => theme.typography.fontWeight[500]}!important;
    font-style: ${({ theme }) => theme.typography.fontStyle.italic}!important;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.container.fullHeightPercentage};
  height:${({ theme }) => theme.container.fullHeightPercentage};
  background: ${({ theme }) => theme.colors.transparent.darkWithTransparent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  backdrop-filter: blur(${({ theme }) => theme.spacingFn(15)}); /* Efeito de desfoque */
`;

export const LoadingText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[700]};
   margin-top: ${({ theme }) => theme.spacingFn(15)};

`;
export const LoadingOutlinedStyled = styled(LoadingOutlined)`
    color: ${({ theme }) => theme.colors.error.errorRed500};
    font-size: ${({ theme }) => theme.typography.fontSizeXXXlarge}!important;
`;
