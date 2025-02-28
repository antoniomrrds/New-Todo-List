import { Button as ButtonAntd, ConfigProvider } from 'antd';
import * as S from '@/styles/config/antd';
import { PlusOutlined } from '@ant-design/icons';
import { DefaultValues } from '@/api/core/types';

type SubmitButtonProps = {
  block?: boolean;
  isLoading: boolean;
  idTag?: number;
};

export const SubmitButton = ({
  block = false,
  isLoading,
  idTag = DefaultValues.IdNullValue,
}: SubmitButtonProps) => (
  <ConfigProvider theme={S.themeAntdConfigButtonSuccess}>
    <ButtonAntd
      color="primary"
      htmlType="submit"
      loading={isLoading}
      icon={<PlusOutlined />}
      block={block}
    >
      {idTag != DefaultValues.IdNullValue ? 'Editar' : 'Criar'}
    </ButtonAntd>
  </ConfigProvider>
);
