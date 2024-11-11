import { theme } from "@/styles/Theme";
import { Form, ThemeConfig } from "antd";
import styled from "styled-components";

export const FormItem = styled(Form.Item)`
     margin-bottom: 5px;
    .ant-form-item-label {
        padding: 0px !important;
    }
`;

export const themeAntdConfigButtonSuccess: ThemeConfig = {
    components: {
        Button: {
          defaultHoverBorderColor: theme.colors.neutral.neutral100,
          colorBorder: theme.colors.neutral.neutral100,
        borderColorDisabled:theme.colors.success.successGreen100,
        colorTextDisabled:  theme.shades.light,
        colorBgContainerDisabled: theme.colors.success.successGreen300,
        fontFamily: theme.typography.fontFamily.manrope,
        fontWeight: 500,
        colorBgBase: theme.colors.success.successGreen700, // Cor de fundo
        defaultColor: theme.shades.light,
        defaultHoverColor: theme.shades.light, // Cor do texto (ajustado aqui)
        defaultHoverBg: theme.colors.success.successGreen700,
        defaultActiveColor: theme.shades.light,// Cor de fundo no hover
        algorithm: true,  // Habilitar o algoritmo de tema
        },
      },
    };

export const themeAntdConfigButtonCancel: ThemeConfig = {
    components: {
      Button: {
        defaultHoverBorderColor: theme.colors.neutral.neutral100,
        colorBorder: theme.colors.neutral.neutral100,
      fontFamily: theme.typography.fontFamily.manrope,
      fontWeight: 600,
      colorBgBase: theme.colors.neutral.neutral100, // Cor de fundo
      defaultColor:theme.colors.neutral.neutral500,
      defaultHoverColor: theme.colors.neutral.neutral500, // Cor do texto (ajustado aqui)
      defaultHoverBg: theme.colors.neutral.neutral100,
      defaultActiveColor: theme.colors.neutral.neutral500,// Cor de fundo no hover
      algorithm: true,  // Habilitar o algoritmo de tema
      },
    },
  };