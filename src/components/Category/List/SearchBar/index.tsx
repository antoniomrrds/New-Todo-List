import { Col, Input, Row, Select } from 'antd';
import { FC, useState } from 'react';

import { generateOptions } from '@/utils';
import {
  ActivationState,
  DefaultValues,
  getActivationStateText,
} from '@/api/core/types';
import { useModal } from '@/helpers';
import { CategoryFilter } from '@/api/service/category/types';
import { DEFAULT_CATEGORY_FILTERS } from '@/pages/Category';
import {
  FilterCategoryButton,
  AddCategoryButton,
} from '@/components/Category/List/Buttons';
import { SaveModalCategoryDialog } from '@/components/Category/Save/Modal';

type CategoryFilterProps = {
  filters: CategoryFilter;
  onApplyFilters: (updatedFilters: Partial<CategoryFilter>) => void;
  shouldShowDropdown: boolean;
};

const activationOptions = generateOptions(
  ActivationState,
  getActivationStateText,
);
export const CategorySearchBar: FC<CategoryFilterProps> = ({
  filters,
  onApplyFilters,
  shouldShowDropdown,
}) => {
  const [localFilters, setLocalFilters] = useState<CategoryFilter>(filters);

  // Atualiza os filtros locais com tipos corretos
  const updateLocalFilters = <K extends keyof CategoryFilter>(
    key: K,
    value: CategoryFilter[K],
  ) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    const clearedFilters = DEFAULT_CATEGORY_FILTERS;
    setLocalFilters(clearedFilters);
    onApplyFilters(clearedFilters);
  };

  const handleSearch = () => {
    onApplyFilters(localFilters);
  };

  const {
    isModalOpen: isSaveModalOpen,
    selectedItem: categoryToSave,
    showModal: showSaveModal,
    closeModal: closeSaveModal,
  } = useModal<number>();

  return (
    <>
      <Row gutter={[8, 8]} align="middle">
        <Col xs={24} md={12}>
          <Input
            placeholder="Buscar categorias por título"
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
          <FilterCategoryButton
            onClearFilters={handleClearFilters}
            text="Filtrar"
            onFilter={handleSearch}
            shouldShowDropdown={shouldShowDropdown}
          />
        </Col>
      </Row>
      <Row gutter={[8, 8]} style={{ marginTop: 8 }} justify={'end'}>
        <Col xs={24}>
          <AddCategoryButton
            text="Criar nova categoria"
            onClick={() => showSaveModal()}
          />
        </Col>
      </Row>
      <SaveModalCategoryDialog
        open={isSaveModalOpen}
        onCancel={closeSaveModal}
        categoryId={categoryToSave ?? DefaultValues.IdNullValue}
      />
    </>
  );
};
