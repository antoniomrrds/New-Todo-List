import styled from 'styled-components';

export const LayoutStyled = styled.section`
  min-height: ${({ theme }) => theme.container.fullHeight};
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.neutral.neutral800};
  overflow: hidden;
`;
export const MainContainer = styled.main`
  flex-grow: 1; /* Ocupa o restante do espaço */
  padding: ${({ theme }) => theme.spacing.medium};
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: ${({ theme }) => theme.container.marginCenter};
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  min-width: ${({ theme }) => theme.container.minWidth};

`;
