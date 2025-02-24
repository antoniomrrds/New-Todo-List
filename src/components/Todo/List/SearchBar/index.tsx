import { ToDoFilter } from '@/api/service/toDo/types';
import { Col, Input, Row, Select } from 'antd';
import { FC, useState } from 'react';
import { CreateButton, FilterButton } from '@/components/Todo/List/Buttons';
import { DEFAULT_FILTERS } from '@/pages/Todo';
import {
  ActivationState,
  getActivationStateText,
  getTodoStatusText,
  TodoStatus,
} from '@/api/service/toDo/enum';
import { generateOptions } from '@/utils';

type ToDoSearchBarProps = {
  filters: ToDoFilter;
  onApplyFilters: (updatedFilters: Partial<ToDoFilter>) => void;
  handleNavigateAdd: () => void;
  shouldShowDropdown: boolean;
};

const activationOptions = generateOptions(
  ActivationState,
  getActivationStateText,
);
const todoOptions = generateOptions(TodoStatus, getTodoStatusText);
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
        <Col xs={24} md={24}>
          <Input
            placeholder="Buscar tarefas por título"
            allowClear
            value={localFilters.name}
            onChange={(e) => updateLocalFilters('name', e.target.value.trim())}
          />
        </Col>
        <Col xs={24} md={8}>
          <Select
            style={{ width: '100%' }}
            placeholder="Filtrar por status"
            value={localFilters.Status}
            onChange={(value) =>
              updateLocalFilters('Status', value as TodoStatus)
            }
            options={[...todoOptions]}
          />
        </Col>
        <Col xs={24} md={8}>
          <Select
            style={{ width: '100%' }}
            placeholder="Filtrar por Ativação"
            value={localFilters.Active}
            defaultValue={ActivationState.Unfiltered}
            onChange={(value) =>
              updateLocalFilters('Active', value as ActivationState)
            }
            options={[...activationOptions]}
          />
        </Col>

        <Col xs={24} md={8}>
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
