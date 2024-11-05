import { media } from "@/styles/breakpoints";
import styled from "styled-components";
import { Button as ButtonAntd, theme } from "antd";
import { CheckCircleFilled } from '@ant-design/icons';
import { ThemeStyled } from "@/styles/styled-components";

export const Container = styled.section`
  position: relative;
  max-width: ${({ theme }) => theme.container.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px ;
  background-color: ${({ theme }) => theme.colors.secondaryColor} !important;
  overflow: hidden; 
  margin: 0 auto;
  border-radius: 10px; 
  transition: all 0.3s ease; 
  border: 1px solid ${({ theme }) => theme.colors.quaternaryColor};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.quaternaryColor};
  }
 
`;

export const Title = styled.h1`
font-family: ${({ theme }) => theme.typography.fontFamily.inter};
font-size: clamp(20px, 8vw + 1rem, ${({ theme }) => theme.typography.fontSizeXXlarge}); 
font-weight: bold;
color: ${({ theme }) => theme.colors.primaryColor};
line-height: ${({ theme }) => theme.typography.lineHeight}; 
letter-spacing: -0.96px;
margin-bottom: 44px;
&:hover {
  color: ${({ theme }) => theme.colors.quaternaryColor};
}

${media.laptopL`
  font-size: clamp(16px, 5vw + 1rem, 25px);
`}
${media.laptop`
  font-size: clamp(16px, 5vw + 1rem, 20px);
`}
   ${media.mobileXL`
        font-size: clamp(8px, 2vw + 1rem, 16px);
    `}
`;

  export const Image = styled.img`
      width: 100%;
      height: 100%;
      max-height: 652px;  
      object-fit: contain;
      object-position: center;
      grid-row: 1 /2 ;
      grid-column: 2;
      ${media.laptop`
           grid-row: 1 / 2;
          grid-column: 1;
      `}
  `;

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: ${({ theme }) => theme.container.fullWidthPercentage};
    ${media.laptop`
        grid-template-columns: 1fr ;
    `}
`;
export const ListContainer = styled.ul`
    gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
`;



export const CheckCircleIcon = styled(CheckCircleFilled)`
    padding-right: 10px;
    
    font-size:${({theme} ) => theme.typography.fontSizeXlarge};
    &:hover {
      color: ${({ theme }) => theme.colors.quaternaryColor}; 
      background-color: ${({ theme }) => theme.colors.primaryColor}; 
    }
      ${media.tablet`
        font-size: ${({theme}:ThemeStyled) => theme.typography.fontSizeSmall};
              
   `}
   ${media.mobileXL`
    font-size:clamp(8px, 2vw + 1rem, 14px);

    `}
`;

export const List = styled.li`
    display: flex;
    width: 100%;

    border: 1px solid ${({ theme }) => theme.colors.primaryColor};  
    border-radius: 5px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.quaternaryColor};
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: ${({ theme }) => theme.typography.fontSizeLarge};
    font-weight: regular;
    &:hover {
     color: ${({ theme }) => theme.colors.quaternaryColor}; 
     background-color: ${({ theme }) => theme.colors.primaryColor}; 
    }
    ${media.tablet`
      font-size: clamp(8px, 2vw + 1rem, 14px);
    `}
    ${media.mobileXL`
        font-size: clamp(8px, 2vw + 1rem, 14px);
    `}
    
`;