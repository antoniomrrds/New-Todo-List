import { ConfigProvider, Divider } from 'antd';
import { DividerProps } from 'antd/lib';
type DividerPropsCustom = DividerProps & {
  margin?: number;
};

export const DividerCustom = ({
  margin = 10,
  ...props
}: DividerPropsCustom) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Divider: {
            margin,
          },
        },
      }}
    >
      <Divider {...props} />
    </ConfigProvider>
  );
};
