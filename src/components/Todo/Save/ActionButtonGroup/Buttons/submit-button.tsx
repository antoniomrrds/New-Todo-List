import { Button as ButtonAntd, ConfigProvider } from 'antd';
import * as S from '@/styles/config/antd';
import { PlusOutlined } from '@ant-design/icons';

type SubmitButtonProps = {
  block?: boolean;
  isLoading: boolean;
  idUser?: number;
};

export const SubmitButton = ({
  block = false,
  isLoading,
  idUser = 0,
}: SubmitButtonProps) => (
  <ConfigProvider theme={S.themeAntdConfigButtonSuccess}>
    <ButtonAntd
      color="primary"
      htmlType="submit"
      loading={isLoading}
      icon={<PlusOutlined />}
      block={block}
    >
      {idUser != 0 ? 'Editar' : 'Criar'}
    </ButtonAntd>
  </ConfigProvider>
);
