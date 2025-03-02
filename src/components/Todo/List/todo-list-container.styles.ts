import { StyledContainer } from '@/styles/global-styles';
import { Alert, Empty } from 'antd';
import styled, { css } from 'styled-components';

const colorStyle = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
};
export const GridCenteredLoading = styled(StyledContainer)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridCenteredContainer = styled(StyledContainer)`
  display:grid;
  flex-grow: 1;
  margin: 0 auto;

`;

export const GridCenteredError = styled(StyledContainer)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyStyled = styled(Empty)`
  .ant-empty-description {
     color: ${colorStyle.successGreen600};
     font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
     font-size: ${({ theme }) => theme.typography.fontWeight[700]};
}`;

export const AlertStyled = styled(Alert)`
height: max-content;
width: fit-content;
`;
