import styled from 'styled-components';

export const Span = styled.span`
   font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
   font-weight : normal !important;
`;

export const Container = styled.div`
  padding: 7px 10px;
  right: 0;
  top: 0;
  position: absolute;
`;
