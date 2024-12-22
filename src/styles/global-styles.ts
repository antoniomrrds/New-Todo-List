import { Card, Layout } from "antd";
import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
