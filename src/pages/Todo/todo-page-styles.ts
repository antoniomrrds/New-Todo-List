import styled from 'styled-components';

export const LayoutStyled = styled.section`
  min-height: ${({ theme }) => theme.container.fullHeight};
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.neutral.neutral800};
  overflow: hidden;
  width: 100%;
  min-width: ${({ theme }) => theme.container.fullWidthPercentage};
`;
export const ContainerStyled = styled.main`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: ${({ theme }) => theme.container.marginCenter};
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  padding: ${({ theme }) => theme.spacing.small} !important;

`;

export const ContentStyled = styled.main`
  flex-grow: 1; /* Ocupa o restante do espaço */
  max-width: ${({ theme }) => theme.container.maxWidth} !important;
  margin: ${({ theme }) => theme.container.marginCenter} ;
  width: ${({ theme }) => theme.container.fullWidthPercentage} !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



  `;
