import { theme } from '@/styles/Theme';
import { ThemeConfig } from 'antd';
//buton success
export const themeAntdConfigButtonSuccess: ThemeConfig = {
  components: {
    Button: {
      colorBorder: theme.colors.success.successGreen600,
      borderColorDisabled: theme.colors.success.successGreen100,
      colorTextDisabled: theme.shades.light,
      colorBgContainerDisabled: theme.colors.success.successGreen500,
      fontFamily: theme.typography.fontFamily.manrope,
      fontWeight: 600,
      colorBgBase: theme.colors.success.successGreen600, // Cor de fundo
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
      defaultHoverBorderColor: theme.colors.neutral.neutral800,
      colorBorder: theme.colors.error.errorRed600,
      fontFamily: theme.typography.fontFamily.poppins,
      fontWeight: `${theme.typography.fontWeight[600]}`,
      colorBgBase: theme.colors.neutral.neutral800, // Cor de fundo
      defaultColor: theme.colors.error.errorRed600,
      defaultHoverColor: theme.colors.neutral.neutral800, // Cor do texto (ajustado aqui)
      defaultHoverBg: theme.colors.error.errorRed600,
      defaultActiveColor: theme.colors.neutral.neutral800, // Cor de fundo no hover
      defaultActiveBg: theme.colors.error.errorRed700,
      algorithm: true, // Habilitar o algoritmo de tema
      defaultActiveBorderColor: theme.colors.neutral.neutral800,
    },
  },
};
