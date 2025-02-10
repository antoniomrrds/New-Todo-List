import styled from 'styled-components';
export const Span = styled.span`
   font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
   font-weight : normal !important;
`;
export const Container = styled.div`
  padding: ${({ theme }) => `${theme.spacingFn(7)} ${theme.spacingFn(10)}`} ;
  right: ${({ theme }) => theme.spacingFn(0)};
  top: ${({ theme }) => theme.spacingFn(0)};
  position: absolute;
`;
