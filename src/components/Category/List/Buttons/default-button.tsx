import { Button as ButtonAntd, ConfigProvider, ThemeConfig } from 'antd';

type DefaultButtonProps = {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  theme?: ThemeConfig;
};
export const DefaultButton = ({
  text,
  onClick,
  icon,
  theme,
}: DefaultButtonProps) => (
  <ConfigProvider theme={theme}>
    <ButtonAntd color="primary" icon={icon} onClick={onClick} block>
      {text}
    </ButtonAntd>
  </ConfigProvider>
);
