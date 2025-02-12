import { theme } from '@/styles/Theme';
import { ConfigProvider, Divider } from 'antd';
import { DividerProps } from 'antd/lib';
type DividerPropsCustom = DividerProps & {
  margin?: number;
  background?: string;
};

export const DividerCustom = ({
  margin = 5,
  background,
  ...props
}: DividerPropsCustom) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Divider: {
            margin: 100,
            colorSplit: background || theme.colors.success.successGreen600,
          },
        },
      }}
    >
      <Divider {...props} style={{ margin: `${margin}px 0`, ...props.style }} />
    </ConfigProvider>
  );
};
