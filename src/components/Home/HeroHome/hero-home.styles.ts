import styled, { css } from 'styled-components';
import { Button as ButtonAntd } from 'antd';
import { boxShadow, generateSpacingCss } from '@/styles/Theme';
import { size } from '@/styles/breakpoints';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
};

export const Container = styled.section`
    max-width: ${({ theme }) => theme.container.maxWidth};
    width: ${({ theme }) => theme.container.fullWidthPercentage};
    height: max-content;
    padding: ${generateSpacingCss(20)};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: ${colorStyles.successGreen600} !important;
    overflow: hidden;
    margin: ${({ theme }) => theme.container.marginCenter} auto;
    gap:  ${generateSpacingCss(20)};
    transition: all 0.3s ease;
  `;

export const Title = styled.h1`
    color: ${colorStyles.neutral800} !important;
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
    font-size: clamp(20px, 8vw + 1rem, 80px);
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: -0.96px;
    text-shadow:
      -1px -1px 0  ${colorStyles.neutral200},
      1px -1px 0  ${colorStyles.neutral200},
      -1px 1px 0  ${colorStyles.neutral200},
      1px 1px 0  ${colorStyles.neutral200};
  `;
export const Description = styled.p`
    color: ${({ theme }) => theme.colors.neutral.neutral800} !important;
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
    font-weight: regular;
    font-size: ${({ theme }) => theme.typography.fontSizeLarge};
    @media(max-width: ${size.tablet}) {
      font-size: ${({ theme }) => theme.typography.fontSizeSmall};
    }
  `;

export const Button = styled(ButtonAntd)`
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
    font-size: ${({ theme }) => theme.typography.fontSizeXlarge};
    color: ${colorStyles.successGreen600} !important;
    background-color: ${colorStyles.neutral800} !important;
    padding: ${({ theme }) => theme.spacing.medium};
    border: none;
    padding: ${generateSpacingCss(20)};
    border-radius:  ${generateSpacingCss(8)};
    transition: all 0.3s ease;
    border: ${({ theme }) => theme.borders.default} solid ${colorStyles.successGreen600};
    ${boxShadow}
    &:hover {
      background-color:  ${colorStyles.successGreen600} !important;
      color: ${colorStyles.neutral800} !important;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 30px;
      border: ${({ theme }) => theme.borders.default} solid ${colorStyles.neutral800} !important; ;
    }

    @media(max-width: ${size.tablet}) {
      font-size: ${({ theme }) => theme.typography.fontSizeMedium};
    }
  `;
