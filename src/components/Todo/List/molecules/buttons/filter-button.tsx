import {
  DeleteOutlined,
  DownOutlined,
  FilterOutlined,
} from '@ant-design/icons';
import * as S from '@/styles/config/antd';
import { Button, ConfigProvider, Dropdown, MenuProps, Row, Col } from 'antd';
import { DefaultButton } from '@/components/Todo/List/molecules/buttons/default-button';

type FilterButtonProps = {
  text: string;
  onFilter: () => void;
  onClearFilters: () => void;
  shouldShowDropdown: boolean;
};

export const FilterButton = ({
  text,
  onFilter,
  onClearFilters,
  shouldShowDropdown,
}: FilterButtonProps) => {
  const items: MenuProps['items'] = [
    {
      key: 'clear',
      label: 'Limpar Filtros',
      onClick: onClearFilters,
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

  return (
    <ConfigProvider theme={S.themeAntdConfigButtonFilter}>
      <Row gutter={8} align="middle">
        {/* Botão principal */}
        <Col flex="auto">
          <DefaultButton
            onClick={onFilter}
            icon={<FilterOutlined />}
            text={text}
            key={'filterTodo'}
            theme={S.themeAntdConfigButtonFilter}
          />
        </Col>

        {shouldShowDropdown && (
          <Col>
            <Dropdown
              menu={{ items }}
              trigger={['click']}
              placement="bottomRight"
            >
              <Button icon={<DownOutlined />} />
            </Dropdown>
          </Col>
        )}
      </Row>
    </ConfigProvider>
  );
};
