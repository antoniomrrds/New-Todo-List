  import { device, media } from "@/styles/breakpoints";
  import styled from "styled-components";
  import { Button as ButtonAntd } from 'antd';

  export const Container = styled.section`
    max-width: ${({ theme }) => theme.container.maxWidth};
    width: ${({ theme }) => theme.container.fullWidthPercentage};
    height: 526px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primaryColor} !important;
    overflow: hidden;
    margin: 0 auto;
    gap: 20px;
    border-radius: 10px;
    transition: all 0.3s ease;

    ${media.tablet`
      height: 378px;
    `}
  `;

  export const Overlay = styled.div`
    text-align: center;
    max-width: ${({ theme }) => theme.container.maxWidth};
    width: ${({ theme }) => theme.container.fullWidthPercentage};
    padding: 0 20px;
    margin: 0 auto;
  `;

  export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.secondaryColor} !important;
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: clamp(20px, 8vw + 1rem, 80px);
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: -0.96px;
    text-shadow: 
      -1px -1px 0 ${({ theme }) => theme.colors.quinaryColor},  
      1px -1px 0 ${({ theme }) => theme.colors.quinaryColor},
      -1px 1px 0 ${({ theme }) => theme.colors.quinaryColor},
      1px 1px 0 ${({ theme }) => theme.colors.quinaryColor};

    ${media.laptopL`
      font-size: clamp(16px, 5vw + 1rem, 72px);
    `}
    ${media.laptop`
      font-size: clamp(16px, 5vw + 1rem, 60px);
    `}
    ${media.tablet`
      font-size: clamp(16px, 5vw + 1rem, 38px);
    `}
    ${media.mobileXL`
      font-size: clamp(14px, 4vw + 1rem, 30px);
    `}
  `;

  export const Description = styled.p`
    color: ${({ theme }) => theme.colors.quaternaryColor};
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: clamp(12px, 4vw + 1rem, 20px);
    font-weight: regular;

    @media ${device.tablet} {
      font-size: clamp(10px, 3vw + 1rem, 16px);
    }

    @media ${device.mobileXL} {
      font-size: clamp(8px, 2vw + 1rem, 14px);
    }
  `;

  export const Button = styled(ButtonAntd)`
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: ${({ theme }) => theme.typography.fontSizeXlarge};
    color: ${({ theme }) => theme.colors.primaryColor} !important;
    background-color: ${({ theme }) => theme.colors.quinaryColor} !important;
    padding: ${({ theme }) => theme.spacing.medium};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px;
    border: none;
    padding: 20px;
    border-radius: 8px;
    transition: all 0.3s ease;

    @media ${device.tablet} {
      font-size: clamp(10px, 3vw + 1rem, 16px);
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryColor} !important;
      color: ${({ theme }) => theme.colors.primaryColor} !important;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 30px;
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
      transform: translateY(0);
      background-color: ${({ theme }) => theme.colors.tertiaryColor} !important;
      color: ${({ theme }) => theme.colors.primaryColor} !important;
    }
  `;
