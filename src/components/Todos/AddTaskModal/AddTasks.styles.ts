import { theme } from "@/styles/Theme";
import { Form, ThemeConfig , Modal as ModalAntd, ModalProps} from "antd";
import TitleAntd from "antd/es/typography/Title";
import styled from "styled-components";

export const Modal = styled(ModalAntd) <ModalProps>`

    .ant-modal-content {
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 0;
        color: ${({ theme }) => theme.colors.success.successGreen700}!important;
    }

    .ant-modal-header {
        padding: ${({ theme }) => theme.spacing.medium} ;
        border-radius: 10px 10px 0 0;
        border-bottom: 2px solid ${({ theme }) => theme.colors.neutral.neutral800};
        background-color: ${({ theme }) => theme.colors.success.successGreen600};
    }

    .ant-modal-body {
       

        padding: ${({ theme }) => theme.spacing.large};
        
    }

    .ant-modal-footer {
        padding: ${({ theme }) => theme.spacing.small};
        border-radius: 0 0 10px 10px;
        margin: 0px;
    }
`;


export const FormItem = styled(Form.Item)`
     margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.success.successGreen700}!important;
    .ant-form-item-label {
        padding: 0px !important;
    }

`;
export const Title = styled(TitleAntd)`
  margin: 0px !important;
  display: flex;
  align-items: center;

`;

export const themeAntdConfigButton: ThemeConfig = {
  components: {
    Button: {
      colorBgBase: theme.colors.neutral.neutral800, // Cor de fundo
      defaultColor:  theme.colors.success.successGreen700,
      defaultHoverColor: theme.shades.light, // Cor do texto (ajustado aqui)
      defaultActiveColor: theme.shades.light,// Cor de fundo no hover
      algorithm: true,  // Habilitar o algoritmo de tema

    }
  }
}

export const themeAntdConfigButtonSuccess: ThemeConfig = {
    components: {
        Button: {
          colorBorder: theme.colors.success.successGreen700,
        borderColorDisabled:theme.colors.success.successGreen100,
        colorTextDisabled:  theme.shades.light,
        colorBgContainerDisabled: theme.colors.success.successGreen500,
        fontFamily: theme.typography.fontFamily.manrope,
        fontWeight: 500,
        colorBgBase: theme.colors.success.successGreen700, // Cor de fundo
        defaultColor: theme.shades.light,
        defaultHoverColor: theme.shades.light, // Cor do texto (ajustado aqui)
        defaultHoverBg: theme.colors.success.successGreen800,
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
      defaultHoverBg: theme.colors.neutral.neutral200,
      defaultActiveColor: theme.colors.neutral.neutral500,// Cor de fundo no hover
      algorithm: true,  // Habilitar o algoritmo de tema
      },
    },
  };