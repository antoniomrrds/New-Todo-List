import { ActivationState } from '@/api/core/types';
import { AppHeader } from '@/components/Header';
import {
  areObjectsEqual,
  getObjectFromLocalStorage,
  saveObjectToLocalStorage,
} from '@/utils';
import { useEffect, useState } from 'react';
import * as S from '@/pages/Tag/tag-page-styles';
import { AxiosError } from 'axios';
import { PaginationCustom } from '@/components/shared/Pagination';
import { FloatButton } from 'antd';
import AppFooter from '@/components/Footer';
import { CategoryFilter } from '@/api/service/category/types';
import { useQueryFilteredCategories } from '@/api/service/category/actions';
import { CategorySearchBar } from '@/components/Category/List/SearchBar';
import { CategoryListContainer } from '@/components/Category/List';

export const DEFAULT_CATEGORY_FILTERS: CategoryFilter = {
  name: '',
  PageSize: 20,
  Page: 1,
  Active: ActivationState.Active,
};

export const CategoryPage = () => {
  const [filters, setFilters] = useState<CategoryFilter>(() =>
    getObjectFromLocalStorage('categoryFilters', DEFAULT_CATEGORY_FILTERS),
  );

  const hasCustomFilters = !areObjectsEqual(filters, DEFAULT_CATEGORY_FILTERS);

  const { categoryError, isLoadingCategory, dataCategory, refetch } =
    useQueryFilteredCategories(filters);

  // Garantir que a busca inicial aconteça sempre
  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    saveObjectToLocalStorage('categoryFilters', filters);
    refetch(); // Refaz a busca sempre que os filtros mudarem
  }, [filters]);

  const updateFilters = (updatedFilters: Partial<CategoryFilter>) => {
    const newFilters = { ...filters, ...updatedFilters };
    setFilters(newFilters);
  };
  console.log('dataCategory', dataCategory);

  return (
    <S.LayoutStyled>
      <AppHeader />
      <S.ContainerStyled>
        <CategorySearchBar
          filters={filters}
          onApplyFilters={(updatedFilters) =>
            updateFilters({ ...updatedFilters, Page: 1 })
          }
          shouldShowDropdown={hasCustomFilters}
        />
      </S.ContainerStyled>
      <S.ContentStyled>
        <CategoryListContainer
          error={categoryError as AxiosError}
          isLoading={isLoadingCategory}
          categories={dataCategory?.items || []}
        />

        <FloatButton.BackTop type="primary" tooltip="↑ Voltar ao topo" />

        {dataCategory && (
          <PaginationCustom
            pageDefault={filters.Page}
            pageSize={dataCategory?.pageSize}
            totalItems={dataCategory?.totalItems}
            onChange={(page) => updateFilters({ Page: page })}
          />
        )}
      </S.ContentStyled>
      <AppFooter />
    </S.LayoutStyled>
  );
};
