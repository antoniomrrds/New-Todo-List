import { Col, Input, Row, Select } from 'antd';
import { FC, useState } from 'react';

import { generateOptions } from '@/utils';
import { AddTagButton, FilterTagButton } from '@/components/Tag/List/Buttons';
import { TagFilter } from '@/api/service/tag/types';
import { DEFAULT_FILTERS_TAG } from '@/pages/Tag';
import { ActivationState, getActivationStateText } from '@/api/core/types';

type TagSearchBarProps = {
  filters: TagFilter;
  onApplyFilters: (updatedFilters: Partial<TagFilter>) => void;
  handleNavigateAdd: () => void;
  shouldShowDropdown: boolean;
};

const activationOptions = generateOptions(
  ActivationState,
  getActivationStateText,
);
export const TagSearchBar: FC<TagSearchBarProps> = ({
  filters,
  onApplyFilters,
  handleNavigateAdd,
  shouldShowDropdown,
}) => {
  const [localFilters, setLocalFilters] = useState<TagFilter>(filters);

  // Atualiza os filtros locais com tipos corretos
  const updateLocalFilters = <K extends keyof TagFilter>(
    key: K,
    value: TagFilter[K],
  ) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    const clearedFilters = DEFAULT_FILTERS_TAG;
    setLocalFilters(clearedFilters);
    onApplyFilters(clearedFilters);
  };

  const handleSearch = () => {
    onApplyFilters(localFilters);
  };

  return (
    <>
      <Row gutter={[8, 8]} align="middle">
        <Col xs={24} md={12}>
          <Input
            placeholder="Buscar tags por título"
            allowClear
            value={localFilters.name}
            onChange={(e) => updateLocalFilters('name', e.target.value.trim())}
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

        <Col xs={24} md={4}>
          <FilterTagButton
            onClearFilters={handleClearFilters}
            text="Filtrar"
            onFilter={handleSearch}
            shouldShowDropdown={shouldShowDropdown}
          />
        </Col>
      </Row>
      <Row gutter={[8, 8]} style={{ marginTop: 8 }} justify={'end'}>
        <Col xs={24}>
          <AddTagButton text="Criar nova tag" onClick={handleNavigateAdd} />
        </Col>
      </Row>
    </>
  );
};
