/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from 'styled-components';

interface Size {
  mobileS: string;  // 320px
  mobileM: string;  // 375px
  mobileL: string;  // 425px
  mobileXL: string; // 500px 
  tablet: string;    // 768px
  laptop: string;    // 1024px
  laptopL: string;   // 1440px
  desktop: string;   // 2560px
  desktopL: string;  // 1920px
  largeDesktop: string; // 2560px
}

const size: Size = {
  mobileS: '320px',     // Tela móvel pequena
  mobileM: '375px',     // Tela móvel média
  mobileL: '425px',     // Tela móvel grande
  mobileXL: '500px',    // Novo breakpoint
  tablet: '768px',       // Tela de tablet
  laptop: '1024px',      // Tela de laptop
  laptopL: '1440px',     // Tela de laptop grande
  desktop: '2560px',     // Tela de desktop
  desktopL: '1920px',    // Tela de desktop grande
  largeDesktop: '2560px', // Tela de desktop extra grande
};

// Dispositivo e feedback
const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileXL: `(max-width: ${size.mobileXL})`, // Novo breakpoint
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
  largeDesktop: `(max-width: ${size.largeDesktop})`,
};

export const media = {
    mobileS: (...args: [TemplateStringsArray, ...any[]]) => css`
      @media ${device.mobileS} {
        ${css(...args)};
      }
    `,
    mobileM: (...args: [TemplateStringsArray, ...any[]]) => css`
      @media ${device.mobileM} {
        ${css(...args)};
      }
    `,
    mobileL: (...args: [TemplateStringsArray, ...any[]]) => css`
      @media ${device.mobileL} {
        ${css(...args)};
      }
    `,
    mobileXL: (...args: [TemplateStringsArray, ...any[]]) => css`
      @media ${device.mobileXL} {
        ${css(...args)};
      }
    `, // Novo breakpoint
    tablet: (...args: [TemplateStringsArray, ...any[]]) => css`
      @media ${device.tablet} {
        ${css(...args)};
      }
    `,
    laptop: (...args: [TemplateStringsArray, ...any[]]) => css`
      @media ${device.laptop} {
        ${css(...args)};
      }
    `,
    laptopL: (...args: [TemplateStringsArray, ...any[]]) => css`
      @media ${device.laptopL} {
        ${css(...args)};
      }
    `,
    desktop: (...args: [TemplateStringsArray, ...any[]]) => css`
      @media ${device.desktop} {
        ${css(...args)};
      }
    `,
    desktopL: (...args: [TemplateStringsArray, ...any[]]) => css`
      @media ${device.desktopL} {
        ${css(...args)};
      }
    `,
    largeDesktop: (...args: [TemplateStringsArray, ...any[]]) => css`
      @media ${device.largeDesktop} {
        ${css(...args)};
      }
    `,
};
