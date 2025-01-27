import { ToDoFilter } from '@/api/service/toDo/types';
import { TodoStatus } from '@/components/Todo/Add/enum';
import { CreateButton } from '@/components/Todo/List/molecules';
import { FilterOutlined } from '@ant-design/icons';
import { Col, Input, Row, Select, Button, ConfigProvider } from 'antd';
import { FC, useState } from 'react';
import * as S from '@/styles/config/antd';

type ToDoSearchBarProps = {
  filters: ToDoFilter;
  onApplyFilters: (updatedFilters: Partial<ToDoFilter>) => void;
  handleNavigateAdd: () => void;
};

export const ToDoSearchBar: FC<ToDoSearchBarProps> = ({
  filters,
  onApplyFilters,
  handleNavigateAdd,
}) => {
  const [localFilters, setLocalFilters] = useState<ToDoFilter>(filters);

  // Atualiza os filtros locais com tipos corretos
  const updateLocalFilters = <K extends keyof ToDoFilter>(
    key: K,
    value: ToDoFilter[K],
  ) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Aplica os filtros ao clicar no botão de busca
  const handleSearch = () => {
    onApplyFilters(localFilters);
  };

  return (
    <>
      <Row gutter={[8, 8]} align="middle">
        <Col xs={24} md={18}>
          <Input
            placeholder="Buscar tarefas por título"
            allowClear
            value={localFilters.Title}
            onChange={(e) => updateLocalFilters('Title', e.target.value.trim())}
          />
        </Col>
        <Col xs={24} md={2}>
          <Select
            style={{ width: '100%' }}
            placeholder="Filtrar por status"
            value={localFilters.Active}
            onChange={(value) =>
              updateLocalFilters('Active', value as TodoStatus)
            }
            options={[
              { value: TodoStatus.Unfiltered, label: 'Status' },
              { value: TodoStatus.Active, label: 'Ativo' },
              { value: TodoStatus.Inactive, label: 'Inativo' },
            ]}
          />
        </Col>
        <Col xs={24} md={4}>
          <ConfigProvider theme={S.themeAntdConfigButtonCancel}>
            <Button
              type="primary"
              icon={<FilterOutlined />}
              onClick={handleSearch}
              style={{ width: '100%' }}
            >
              Filtrar
            </Button>
          </ConfigProvider>
        </Col>
      </Row>
      <Row gutter={[8, 8]} style={{ marginTop: 8 }} justify={'end'}>
        <Col xs={24}>
          <CreateButton text="Criar Nova Tarefa" onClick={handleNavigateAdd} />
        </Col>
      </Row>
    </>
  );
};
