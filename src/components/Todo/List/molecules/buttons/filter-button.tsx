import { FilterOutlined } from '@ant-design/icons';
import * as S from '@/styles/config/antd';
import { DefaultButton } from '@/components/Todo/List/molecules/buttons';

type FilterButtonProps = {
  text: string;
  onClick: () => void;
};

export const FilterButton = ({ text, onClick }: FilterButtonProps) => (
  <DefaultButton
    text={text}
    onClick={onClick}
    icon={<FilterOutlined />}
    theme={S.themeAntdConfigButtonFilter}
  />
);
