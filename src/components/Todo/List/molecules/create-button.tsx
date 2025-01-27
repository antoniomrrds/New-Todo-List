import { PlusOutlined } from '@ant-design/icons';
import { Button as ButtonAntd, ConfigProvider } from 'antd';
import * as S from '@/styles/config/antd';

import { FC } from 'react';
type CreateButtonProps = {
  text: string;
  onClick: () => void;
};
export const CreateButton: FC<CreateButtonProps> = ({ onClick, text }) => (
  <ConfigProvider theme={S.themeAntdConfigButtonSuccess}>
    <ButtonAntd
      type="primary"
      onClick={onClick}
      style={{ width: '100%' }}
      icon={<PlusOutlined />}
    >
      {text}
    </ButtonAntd>
  </ConfigProvider>
);
