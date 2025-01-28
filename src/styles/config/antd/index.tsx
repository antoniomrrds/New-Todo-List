import { theme } from '@/styles/Theme';
import { ThemeConfig } from 'antd';
//buton success
export const themeAntdConfigButtonSuccess: ThemeConfig = {
  components: {
    Button: {
      colorBorder: theme.colors.success.successGreen700,
      borderColorDisabled: theme.colors.success.successGreen100,
      colorTextDisabled: theme.shades.light,
      colorBgContainerDisabled: theme.colors.success.successGreen500,
      fontFamily: theme.typography.fontFamily.manrope,
      fontWeight: 600,
      colorBgBase: theme.colors.success.successGreen700, // Cor de fundo
      defaultColor: theme.shades.light,
      defaultHoverColor: theme.shades.light, // Cor do texto (ajustado aqui)
      defaultHoverBg: theme.colors.success.successGreen800,
      defaultActiveColor: theme.shades.light, // Cor de fundo no hover
      algorithm: true, // Habilitar o algoritmo de tema
      defaultActiveBorderColor: theme.colors.success.successGreen700,
    },
  },
};

export const themeAntdConfigButtonFilter: ThemeConfig = {
  components: {
    Button: {
      defaultHoverBorderColor: theme.colors.neutral.neutral100,
      colorBorder: theme.colors.neutral.neutral300,
      fontFamily: theme.typography.fontFamily.manrope,
      fontWeight: 800,
      colorBgBase: theme.colors.neutral.neutral200, // Cor de fundo
      defaultColor: theme.colors.neutral.neutral500,
      defaultHoverColor: theme.colors.success.successGreen800, // Cor do texto (ajustado aqui)
      defaultHoverBg: theme.colors.neutral.neutral200,
      textHoverBg: theme.colors.neutral.neutral800,
      defaultActiveColor: theme.colors.neutral.neutral500, // Cor de fundo no hover
      algorithm: true, // Habilitar o algoritmo de tema
      defaultActiveBorderColor: theme.colors.success.successGreen800,
    },
  },
};

//buton cancel
export const themeAntdConfigButtonCancel: ThemeConfig = {
  components: {
    Button: {
      defaultHoverBorderColor: theme.colors.error.errorRed100,
      colorBorder: theme.colors.error.errorRed100,
      fontFamily: theme.typography.fontFamily.manrope,
      fontWeight: 600,
      colorBgBase: theme.colors.error.errorRed100, // Cor de fundo
      defaultColor: theme.colors.error.errorRed700,
      defaultHoverColor: theme.colors.error.errorRed700, // Cor do texto (ajustado aqui)
      defaultHoverBg: theme.colors.error.errorRed200,
      defaultActiveColor: theme.colors.error.errorRed700, // Cor de fundo no hover
      algorithm: true, // Habilitar o algoritmo de tema
      defaultActiveBorderColor: theme.colors.error.errorRed700,
    },
  },
};
