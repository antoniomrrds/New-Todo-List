import { css } from 'styled-components';

export const theme = {
  colors: {
    // coloca um tema de cor para otransparentergb(255, 255, 255);
    transparent: {
      darkWithTransparent: 'rgba(0, 0, 0, 0.7)',
    },
    success: {
      successGreen50: '#ecfdf5',
      successGreen100: '#d1fae5',
      successGreen200: '#a7f3d0',
      successGreen300: '#6ee7b7',
      successGreen400: '#34d399',
      successGreen500: '#10B981',
      successGreen600: '#059669',
      successGreen700: '#047857',
      successGreen800: '#065F46',
      successGreen900: '#064E3B',
    },
    error: {
      errorRed50: '#FEF2F2',
      errorRed100: '#FEE2E2',
      errorRed200: '#FECACA',
      errorRed300: '#FCA5A5',
      errorRed400: '#F87171',
      errorRed500: '#ef4444',
      errorRed600: '#DC2626',
      errorRed700: '#B91C1C',
      errorRed800: '#991B1B',
      errorRed900: '#7F1D1D',
    },
    neutral: {
      neutral100: '#e7eaee',
      neutral200: '#D0D5DD',
      neutral300: '#B8C0CC',
      neutral400: '#A0ABBB',
      neutral500: '#64748B',
      neutral600: '#4B5768',
      neutral700: '#323A46',
      neutral800: '#191D23',
      neutral900: '#0D0F11',
    },
  },
  shades: {
    dark: '#000000', // Preto
    light: '#FFFFFF', // Branco
  },
  container: {
    maxWidth: '1537px', // Largura máxima do contêiner
    minWidth: '400px', // Largura mínima do contêiner
    fullWidth: '100dvh', // Largura total em unidades de altura do viewport
    fullHeight: '100dvh', // Altura total em unidades de altura do viewport
    fullWidthPercentage: '100%', // Largura total em porcentagem
    fullHeightPercentage: '100%', // Altura total em porcentagem
    padding: '20px', // Espaçamento interno
    marginCenter: '0 auto', // Centraliza o contêiner
    borderRadius: '20%', // Bordas arredondadas
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra do contêiner
  },
  typography: {
    fontSizeXSmall: '0.8125rem', // 13px
    fontSizeSmall: '0.875rem', // 14px
    fontSizeMediumSmall: '0.9375rem', // 15px
    fontSizeMedium: '1rem', // 16px
    fontSizeLargeSmall: '1.0625rem', // 17px
    fontSizeLarge: '1.125rem', // 18px
    fontSizeXlargeSmall: '1.3125rem', // 21px
    fontSizeXlarge: '1.5rem', // 24px
    fontSizeXXlarge: '2rem', // 32px
    fontSizeXXXlarge: '3rem', // 48px
    fontSizeHuge: '6rem', // 96px
    fontFamily: {
      inter: '"Inter", sans-serif', // Fonte Inter
      arial: '"Arial", sans-serif', // Fonte Arial
      manrope: '"Manrope", sans-serif', // Fonte Manrope
      poppins: '"Poppins", sans-serif', // Fonte Poppins
    },
    lineHeight: '1.5', // Altura da linha
    lineHeightDefault: '1', // Altura da linha padrão
    fontWeight: {
      300: '300', // Peso da fonte leve
      400: '400', // Peso da fonte regular
      500: '500', // Peso da fonte médio
      600: '600', // Peso da fonte semi-negrito
      700: '700', // Peso da fonte negrito
    },
    fontStyle: {
      italic: 'italic', // Fonte itálica
      normal: 'normal', // Fonte normal
    },
  },
  borders: {
    default: '1px', // Borda padrão
    small: '2px', // Borda pequena
    medium: '4px', // Borda média
    large: '8px', // Borda grande
  },
  spacing: {
    xsmall: '5px', // Espaçamento extra pequeno
    small: '8px', // Espaçamento pequeno
    medium: '15px', // Espaçamento médio

    large: '24px', // Espaçamento grande
    zero: '0px', // Espaçamento zero
  },
  spacingFn: (size: number) => `${size}px`,
};

export const generateSpacingCss = ($value: number = 1) =>
  css`${({ theme }) => theme.spacingFn($value)}`;
export const boxShadow = css`
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
