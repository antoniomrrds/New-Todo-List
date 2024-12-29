import { theme } from "@/styles/Theme";
import { ThemeConfig } from "antd";
//buton success
export const themeAntdConfigButtonSuccess: ThemeConfig = {
  components: {
    Button: {
      colorBorder: theme.colors.success.successGreen700,
      borderColorDisabled: theme.colors.success.successGreen100,
      colorTextDisabled: theme.shades.light,
      colorBgContainerDisabled: theme.colors.success.successGreen500,
      fontFamily: theme.typography.fontFamily.manrope,
      fontWeight: 500,
      colorBgBase: theme.colors.success.successGreen700, // Cor de fundo
      defaultColor: theme.shades.light,
      defaultHoverColor: theme.shades.light, // Cor do texto (ajustado aqui)
      defaultHoverBg: theme.colors.success.successGreen800,
      defaultActiveColor: theme.shades.light, // Cor de fundo no hover
      algorithm: true, // Habilitar o algoritmo de tema
    },
  },
};

//buton cancel
export const themeAntdConfigButtonCancel: ThemeConfig = {
  components: {
    Button: {
      defaultHoverBorderColor: theme.colors.neutral.neutral100,
      colorBorder: theme.colors.neutral.neutral100,
      fontFamily: theme.typography.fontFamily.manrope,
      fontWeight: 600,
      colorBgBase: theme.colors.neutral.neutral100, // Cor de fundo
      defaultColor: theme.colors.neutral.neutral500,
      defaultHoverColor: theme.colors.neutral.neutral500, // Cor do texto (ajustado aqui)
      defaultHoverBg: theme.colors.neutral.neutral200,
      defaultActiveColor: theme.colors.neutral.neutral500, // Cor de fundo no hover
      algorithm: true, // Habilitar o algoritmo de tema
    },
  },
};
