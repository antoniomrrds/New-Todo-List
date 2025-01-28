import { PlusOutlined } from '@ant-design/icons';
import { Button as ButtonAntd, ConfigProvider } from 'antd';
import * as S from '@/styles/config/antd';
type CreateButtonProps = {
  text: string;
  onClick: () => void;
};
export const CreateButton = ({ onClick, text }: CreateButtonProps) => (
  <ConfigProvider theme={S.themeAntdConfigButtonSuccess}>
    <ButtonAntd
      color="primary"
      onClick={onClick}
      style={{ width: '100%' }}
      icon={<PlusOutlined />}
    >
      {text}
    </ButtonAntd>
  </ConfigProvider>
);
