import { ConfigProvider, Divider } from 'antd';
import { DividerProps } from 'antd/lib';
type DividerPropsCustom = DividerProps & {
  margin?: number;
};

export const DividerCustom = ({ margin = 5, ...props }: DividerPropsCustom) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Divider: {
            margin: 100,
          },
        },
      }}
    >
      <Divider {...props} style={{ margin: `${margin}px 0`, ...props.style }} />
    </ConfigProvider>
  );
};
