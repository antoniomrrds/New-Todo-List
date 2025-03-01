import { ClearOutlined, FilterOutlined } from '@ant-design/icons';
import * as S from '@/styles/config/antd';
import { ConfigProvider, Dropdown, MenuProps } from 'antd';
import { cloneElement, isValidElement, ReactElement } from 'react';
import { DefaultButton } from '@/components/Category/List/Buttons/default-button';

type FilterButtonProps = {
  text: string;
  onFilter: () => void;
  onClearFilters: () => void;
  shouldShowDropdown: boolean;
};

export const FilterCategoryButton = ({
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
      icon: <ClearOutlined />,
      danger: true,
    },
  ];

  return (
    <ConfigProvider theme={S.themeAntdConfigButtonFilter}>
      {shouldShowDropdown ? (
        <Dropdown.Button
          menu={{ items }}
          onClick={onFilter}
          buttonsRender={(buttons) => {
            const [leftButton, rightButton] = buttons;

            return [
              isValidElement(leftButton)
                ? cloneElement(leftButton as ReactElement, {
                    className: 'ant-btn-block',
                  })
                : leftButton,
              rightButton,
            ];
          }}
        >
          {text}
        </Dropdown.Button>
      ) : (
        <DefaultButton
          onClick={onFilter}
          icon={<FilterOutlined />}
          text={text}
          key={'filterCategoryButton'}
          theme={S.themeAntdConfigButtonFilter}
        />
      )}
    </ConfigProvider>
  );
};
