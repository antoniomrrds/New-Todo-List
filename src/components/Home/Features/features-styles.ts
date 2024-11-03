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
margin: 0 auto;
font-family: ${({ theme }) => theme.typography.fontFamily.inter};
font-size: clamp(20px, 8vw + 1rem, ${({ theme }) => theme.typography.fontSizeXXlarge}); 
font-weight: bold;
color: ${({ theme }) => theme.colors.primaryColor};
line-height: ${({ theme }) => theme.typography.lineHeight}; 
text-align: center;
letter-spacing: -0.96px;
&:hover {
  color: ${({ theme }) => theme.colors.quaternaryColor};
}

${media.laptop`
  font-size: clamp(16px, 5vw + 1rem, 25px);
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

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: center;
    overflow: hidden;
`;

export const Description = styled.p`
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.quaternaryColor};
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: clamp(12px, 4vw + 1rem, 20px);
    width: 100%;
    font-weight: regular;
    ${media.tablet`
        font-size: clamp(10px, 3vw + 1rem, 16px);
    `}
    ${media.mobileXL`
        font-size: clamp(8px, 2vw + 1rem, 14px);
    `}
`;

export const CheckCircleIcon = styled(CheckCircleFilled)`
    font-size:${({theme} ) => theme.typography.fontSizeXlarge};
    margin: 10px;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
      ${media.tablet`
        font-size: ${({theme}:ThemeStyled) => theme.typography.fontSizeSmall};
              
          `}
  
`;

export const List = styled.li`
display: flex;
align-items: center;
justify-content: flex-start;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: ${({ theme }) => theme.typography.fontSizeLarge};
    font-weight: regular;
    &:hover {
     color: ${({ theme }) => theme.colors.quaternaryColor};  
    }
    
`;