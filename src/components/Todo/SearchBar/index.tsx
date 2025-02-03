import { ToDoFilter } from '@/api/service/toDo/types';
import { Col, Input, Row, Select, Switch } from 'antd';
import { FC, useState } from 'react';
import {
  CreateButton,
  FilterButton,
} from '@/components/Todo/List/molecules/buttons';
import { DEFAULT_FILTERS } from '@/pages/Todo';
import { getTodoStatusText, TodoStatus } from '@/api/service/toDo/enum';

type ToDoSearchBarProps = {
  filters: ToDoFilter;
  onApplyFilters: (updatedFilters: Partial<ToDoFilter>) => void;
  handleNavigateAdd: () => void;
  shouldShowDropdown: boolean;
};

export const ToDoSearchBar: FC<ToDoSearchBarProps> = ({
  filters,
  onApplyFilters,
  handleNavigateAdd,
  shouldShowDropdown,
}) => {
  const [localFilters, setLocalFilters] = useState<ToDoFilter>(filters);

  // Atualiza os filtros locais com tipos corretos
  const updateLocalFilters = <K extends keyof ToDoFilter>(
    key: K,
    value: ToDoFilter[K],
  ) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    const clearedFilters = DEFAULT_FILTERS;
    setLocalFilters(clearedFilters);
    onApplyFilters(clearedFilters);
  };

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
          <Switch
            checkedChildren="Ativos"
            unCheckedChildren="Todos"
            checked={localFilters.Active}
            onChange={(checked) => updateLocalFilters('Active', checked)}
          />
        </Col>
        <Col xs={24} md={3}>
          <Select
            style={{ width: '100%' }}
            placeholder="Filtrar por status"
            value={localFilters.Status}
            onChange={(value) =>
              updateLocalFilters('Status', value as TodoStatus)
            }
            options={[
              {
                value: TodoStatus.Unfiltered,
                label: getTodoStatusText(TodoStatus.Unfiltered),
              },
              {
                value: TodoStatus.Active,
                label: getTodoStatusText(TodoStatus.Active),
              },
              {
                value: TodoStatus.Inactive,
                label: getTodoStatusText(TodoStatus.Inactive),
              },
              {
                value: TodoStatus.Completed,
                label: getTodoStatusText(TodoStatus.Completed),
              },
              {
                value: TodoStatus.Expired,
                label: getTodoStatusText(TodoStatus.Expired),
              },
              {
                value: TodoStatus.Undetermined,
                label: getTodoStatusText(TodoStatus.Undetermined),
              },
            ]}
          />
        </Col>
        <Col xs={24} md={3}>
          <FilterButton
            onClearFilters={handleClearFilters}
            text="Filtrar"
            onFilter={handleSearch}
            shouldShowDropdown={shouldShowDropdown}
          />
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
