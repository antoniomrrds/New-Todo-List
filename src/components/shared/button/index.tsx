import { Button, ConfigProvider } from "antd";
import { ButtonColorType, ButtonHTMLType, ButtonVariantType } from "antd/es/button";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { ThemeConfig } from "antd/lib";

type ButtonDefaultProps =  {
    children: React.ReactNode;
    icon?: React.ReactNode;
    theme?: ThemeConfig;  // Tema opcional
    size?: SizeType;  // Tamanho opcional
    color?: ButtonColorType;
    variant?: ButtonVariantType;
    onClick?: () => void;
    htmlType?: ButtonHTMLType
  };
  

// Configuração do tema para o Ant Design
// const themeAntdConfig: ThemeConfig = {
//   components: {
//     Button: {
//       // Ajustando as cores padrão do botão
//       colorPrimary: '#00b96b', // Cor primária do botão
//       colorBgBase: '#00b96b',  // Cor de fundo padrão
//       // Desabilitar hover ou manter o mesmo estilo do estado normal
//       defaultHoverBg: '#00b96b', // Cor de fundo quando passar o mouse
//       defaultHoverColor: '#ffffff', // Cor do texto ao passar o mouse
//       defaultHoverBorderColor: '#00b96b', // Cor da borda ao passar o mouse
//       algorithm: true, // Habilitar o algoritmo de tema
//     },
//   },
// };

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({ children, icon, theme, size = 'middle', color ='primary', variant='solid', onClick, htmlType='button' }) => {
   
  console.log(theme);
  const buttonContent = (
      <Button
        icon={icon}
        size={size}  
        color={color}
        variant={variant}
        onClick={onClick}
        htmlType={htmlType}
         
        
      >
        {children}
      </Button>
    );
  
    if (theme) {
      return <ConfigProvider  theme={theme} wave={{ disabled: true }}>{buttonContent}</ConfigProvider>;
    }
  
    return buttonContent;
  };
