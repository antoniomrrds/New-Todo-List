import { FilterOutlined } from '@ant-design/icons';
import { Button as ButtonAntd, ConfigProvider } from 'antd';
import * as S from '@/styles/config/antd';
type FilterButtonProps = {
  text: string;
  onClick: () => void;
};
export const FilterButton = ({ onClick, text }: FilterButtonProps) => (
  <ConfigProvider theme={S.themeAntdConfigButtonFilter}>
    <ButtonAntd
      color="primary"
      icon={<FilterOutlined />}
      onClick={onClick}
      style={{ width: '100%' }}
    >
      {text}
    </ButtonAntd>
  </ConfigProvider>
);
