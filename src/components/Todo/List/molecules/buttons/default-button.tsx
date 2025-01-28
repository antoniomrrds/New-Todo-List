import { Button as ButtonAntd, ConfigProvider, ThemeConfig } from 'antd';

type DefaultButtonProps = {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  theme?: ThemeConfig;
  style?: React.CSSProperties;
};

export const DefaultButton = ({
  text,
  onClick,
  icon,
  theme,
  style,
}: DefaultButtonProps) => (
  <ConfigProvider theme={theme}>
    <ButtonAntd
      color="primary"
      icon={icon}
      onClick={onClick}
      style={{ width: '100%', ...style }}
    >
      {text}
    </ButtonAntd>
  </ConfigProvider>
);
