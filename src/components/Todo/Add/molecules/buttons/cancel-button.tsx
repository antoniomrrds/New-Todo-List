import { Button as ButtonAntd, ConfigProvider } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

type CancelButtonProps = {
  onCancel: () => void;
  block?: boolean;
};

export const CancelButton = ({ onCancel, block }: CancelButtonProps) => (
  <ConfigProvider>
    <ButtonAntd
      danger
      type="primary"
      color="primary"
      onClick={onCancel}
      icon={<CloseOutlined />}
      block={block}
    >
      Cancelar
    </ButtonAntd>
  </ConfigProvider>
);
