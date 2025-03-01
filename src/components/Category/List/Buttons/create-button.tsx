import { PlusOutlined } from '@ant-design/icons';
import * as S from '@/styles/config/antd';
import { DefaultButton } from '@/components/Category/List/Buttons/default-button';

type CreateButtonProps = {
  text: string;
  onClick: () => void;
};

export const AddCategoryButton = ({ text, onClick }: CreateButtonProps) => (
  <DefaultButton
    text={text}
    onClick={onClick}
    icon={<PlusOutlined />}
    theme={S.themeAntdConfigButtonSuccess}
  />
);
