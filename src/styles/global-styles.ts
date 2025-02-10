import { Card, Layout } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';
import { Content } from 'antd/es/layout/layout';
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing : auto;

      }
    .ant-notification-notice-error {
    background-color: ${({ theme }) => theme.colors.error.errorRed100} !important;
    border-radius:  ${({ theme }) => theme.spacing.small};

  }
  .ant-notification-notice-description{
    width:  100% !important;
    margin: 0 !important;
  }
  .ant-notification-notice-success  {
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;

    .ant-notification-notice-message{
      font-weight: ${({ theme }) => theme.typography.fontWeight[700]} !important;
      font-style: ${({ theme }) => theme.typography.fontStyle.italic}!important;
      color: ${({ theme }) => theme.colors.neutral.neutral800};
      color: ${({ theme }) => theme.colors.success.successGreen600};
      color: ${({ theme }) => theme.colors.success.successGreen600} !important;
    }

    .ant-notification-notice-description{
      padding:  ${({ theme }) => `${theme.spacingFn(7)} ${theme.spacingFn(7)}`} !important;
      background-color: ${theme.colors.success.successGreen600} !important;
      font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
      color: ${({ theme }) => theme.colors.error.errorRed500};
      font-weight: ${({ theme }) => theme.typography.fontWeight[500]}!important;
      font-style: ${({ theme }) => theme.typography.fontStyle.italic}!important;
    }
     .ant-notification-notice-close{
      color: ${({ theme }) => theme.colors.neutral.neutral800}!important;
      background-color: ${({ theme }) => theme.colors.neutral.neutral800} !important;
      padding:  ${({ theme }) => `${theme.spacingFn(7)} ${theme.spacingFn(7)}`} !important;
      :hover{
        background-color: ${({ theme }) => theme.colors.success.successGreen600} !important;
        color: ${({ theme }) => theme.colors.neutral.neutral800}!important;
      }


    }
    background-color: ${({ theme }) => theme.colors.neutral.neutral800} !important;
    border-radius: ${({ theme }) => theme.spacing.small} !important;
  }
  .custom-modal-wrap {
    backdrop-filter: blur(10px) !important;
    box-shadow: inset 0 0 15px #fff,
  }
`;

export const CardMain = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.success.successGreen600};

  .ant-card-head {
    padding: ${({ theme }) => theme.spacing.small}!important;
    margin:0px !important;
    font-weight: 700;
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
    font-style: italic;
    color: ${({ theme }) => theme.colors.success.successGreen600};
    background: ${({ theme }) => theme.colors.neutral.neutral800};
    border-bottom: solid 5px  ${({ theme }) => theme.colors.success.successGreen600};
  }
`;

export const StyledLayout = styled(Layout)`
  min-height: 100dvh; /* Usa 100vh para ocupar toda a altura da janela */
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.neutral.neutral800};
  overflow: hidden;
`;

export const StyledContent = styled(Content)`
  flex-grow: 1; /* Ocupa o restante do espaço */
  padding: ${({ theme }) => theme.spacing.medium};
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: ${({ theme }) => theme.container.marginCenter};
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  min-width: ${({ theme }) => theme.container.minWidth};

`;

export const StyledContainer = styled.main`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin:${({ theme }) => theme.container.marginCenter};
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  min-width: ${({ theme }) => theme.container.minWidth};
  padding: ${({ theme }) => theme.spacing.small}!important;
`;
