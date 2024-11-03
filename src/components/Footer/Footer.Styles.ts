import styled from "styled-components";

export const Footer = styled.footer`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondaryColor}; 
  border-top: 2px solid ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
   rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  width: 100%;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: bold;
  font-family: ${({ theme }) => theme.typography.fontFamily.inter};
  font-size: ${({ theme }) => theme.typography.fontSizeLarge};
    &:hover {
      color: ${({ theme }) => theme.colors.quaternaryColor};
    }
`;