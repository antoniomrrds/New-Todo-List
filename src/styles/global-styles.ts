import { Card, Layout } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';
import { Content } from 'antd/es/layout/layout';
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: auto;

      }


    .ant-notification-notice-error {
    background-color: ${theme.colors.error.errorRed100};
    border-radius: 8px;

  }
  .ant-notification-notice-description{
    width:  100% !important;
    margin: 0 !important;
  }
  .ant-notification-notice-success  {
    background-color: ${theme.colors.success.successGreen50} !important;
    border-radius: 8px;
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
  margin: 0px auto;
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  min-width: ${({ theme }) => theme.container.minWidth};

`;

export const StyledContainer = styled.main`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0px auto;
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  min-width: ${({ theme }) => theme.container.minWidth};
  padding: ${({ theme }) => theme.spacing.small}!important;
`;
