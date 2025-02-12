import { Button as ButtonAntd, ConfigProvider } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { themeAntdConfigButtonCancel } from '@/styles/config/antd';

type CancelButtonProps = {
  onCancel: () => void;
  block?: boolean;
};

export const CancelButton = ({ onCancel, block }: CancelButtonProps) => (
  <ConfigProvider theme={themeAntdConfigButtonCancel}>
    <ButtonAntd
      type="default"
      color="primary"
      onClick={onCancel}
      icon={<CloseOutlined />}
      block={block}
    >
      Cancelar
    </ButtonAntd>
  </ConfigProvider>
);
