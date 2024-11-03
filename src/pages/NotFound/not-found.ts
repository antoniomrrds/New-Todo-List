import { media } from "@/styles/breakpoints";
import { Button as ButtonAntd } from "antd";
import styled from "styled-components";

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: clamp(20px, 8vw + 1rem, 68px);
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryColor};
    line-height: 1.2;
    letter-spacing: -0.96px;
    text-shadow: 
        -1px -1px 0 ${({ theme }) => theme.colors.quaternaryColor},  
        1px -1px 0 ${({ theme }) => theme.colors.quaternaryColor},
        -1px 1px 0 ${({ theme }) => theme.colors.quaternaryColor},
        1px 1px 0 ${({ theme }) => theme.colors.quaternaryColor};

    ${media.laptop`
        font-size: clamp(18px, 6vw + 1rem, 65px);
    `}

    ${media.tablet`
        font-size: clamp(16px, 5vw + 1rem, 38px);
    `}

    ${media.mobileXL`
        font-size: clamp(14px, 4vw + 1rem, 28px);
    `}

    ${media.mobileL`
        font-size: clamp(12px, 4vw + 1rem, 22px);
    `}

    ${media.mobileM`
        font-size: clamp(12px, 3vw + 1rem, 20px);
    `}

    ${media.mobileS`
        font-size: clamp(10px, 2vw + 1rem, 20px);
    `}
`;

export const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    align-items: center;
    justify-content: center;
    height: ${({ theme }) => theme.container.fullHeight};
    padding: 20px;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: center;
    grid-row: 1 / 2;
`;

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: ${({ theme }) => theme.container.fullWidthPercentage};
    max-width: ${({ theme }) => theme.container.maxWidth};

    ${media.laptop`
        grid-template-columns: 1fr;
        font-size: clamp(18px, 6vw + 1rem, 50px);
    `}
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 10px;
`;

export const Button = styled(ButtonAntd)`
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: ${({ theme }) => theme.typography.fontSizeMedium};
    color: ${({ theme }) => theme.colors.tertiaryColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: ${({ theme }) => theme.spacing.medium};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px;
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    margin-top: 20px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryColor};
        color: ${({ theme }) => theme.colors.primaryColor};
        box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 30px;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
    }
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
