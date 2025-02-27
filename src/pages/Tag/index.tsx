import { ActivationState } from '@/api/core/types';
import { TagFilter } from '@/api/service/tag/types';
import { AppHeader } from '@/components/Header';
import { TagSearchBar } from '@/components/Tag/List/SearchBar';
import { useNavigateToPath } from '@/helpers';
import {
  areObjectsEqual,
  getObjectFromLocalStorage,
  saveObjectToLocalStorage,
} from '@/utils';
import { useEffect, useState } from 'react';
import * as S from '@/pages/Tag/tag-page-styles';
import { TagListContainer } from '@/components/Tag/List';
import { AxiosError } from 'axios';
import { PaginationCustom } from '@/components/shared/Pagination';
import { FloatButton } from 'antd';
import AppFooter from '@/components/Footer';
import { useQueryFilteredTags } from '@/api/service/tag/actions';

export const DEFAULT_FILTERS_TAG: TagFilter = {
  name: '',
  PageSize: 20,
  Page: 1,
  Active: ActivationState.Active,
};

export const TagPage = () => {
  const navigateTo = useNavigateToPath();

  // Inicializa os filtros com os valores do localStorage
  const [filters, setFilters] = useState<TagFilter>(() =>
    getObjectFromLocalStorage('tagFilters', DEFAULT_FILTERS_TAG),
  );

  const hasCustomFilters = !areObjectsEqual(filters, DEFAULT_FILTERS_TAG);

  // Faz a busca inicial na montagem da página
  const { dataTags, errorTags, isLoadingTags, refetch } =
    useQueryFilteredTags(filters);

  // Garantir que a busca inicial aconteça sempre
  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    saveObjectToLocalStorage('tagFilters', filters);
    refetch(); // Refaz a busca sempre que os filtros mudarem
  }, [filters]);

  const updateFilters = (updatedFilters: Partial<TagFilter>) => {
    const newFilters = { ...filters, ...updatedFilters };
    setFilters(newFilters);
  };

  return (
    <S.LayoutStyled>
      <AppHeader />
      <S.ContainerStyled>
        <TagSearchBar
          filters={filters}
          onApplyFilters={(updatedFilters) =>
            updateFilters({ ...updatedFilters, Page: 1 })
          }
          handleNavigateAdd={() => navigateTo('add')}
          shouldShowDropdown={hasCustomFilters}
        />
      </S.ContainerStyled>
      <S.ContentStyled>
        <TagListContainer
          error={errorTags as AxiosError}
          isLoading={isLoadingTags}
          tags={dataTags?.items || []}
        />

        <FloatButton.BackTop type="primary" tooltip="↑ Voltar ao topo" />

        {dataTags && (
          <PaginationCustom
            pageDefault={filters.Page}
            pageSize={dataTags?.pageSize}
            totalItems={dataTags?.totalItems}
            onChange={(page) => updateFilters({ Page: page })}
          />
        )}
      </S.ContentStyled>
      <AppFooter />
    </S.LayoutStyled>
  );
};
