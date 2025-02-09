import { PlusOutlined } from '@ant-design/icons';
import * as S from '@/styles/config/antd';
import { DefaultButton } from '@/components/Todo/List/Buttons';

type CreateButtonProps = {
  text: string;
  onClick: () => void;
};

export const CreateButton = ({ text, onClick }: CreateButtonProps) => (
  <DefaultButton
    text={text}
    onClick={onClick}
    icon={<PlusOutlined />}
    theme={S.themeAntdConfigButtonSuccess}
  />
);
