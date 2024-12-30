import { Card, Layout } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
    font-weight: bold;
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-style: italic;
    color: ${({ theme }) => theme.colors.success.successGreen600};
    background: ${({ theme }) => theme.colors.neutral.neutral800};
    border-bottom: solid 5px  ${({ theme }) => theme.colors.success.successGreen600};
  }
`;

export const StyledLayout = styled(Layout)`
  min-height: 100dvh;
`;

export const StyledContainer = styled.main`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0px auto;
  min-width: ${({ theme }) => theme.container.minWidth};
  padding: ${({ theme }) => theme.spacing.small};
`;
