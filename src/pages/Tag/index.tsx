import { ActivationState } from '@/api/core/types';
import { useQueryFilteredTags } from '@/api/service/tag/actions';
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

export const DEFAULT_FILTERS_TAG: TagFilter = {
  name: '',
  PageSize: 20,
  Page: 1,
  Active: ActivationState.Active,
};

export const TagPage = () => {
  const navigateTo = useNavigateToPath();
  const [filters, setFilters] = useState<TagFilter>(() =>
    getObjectFromLocalStorage('tagFilters', DEFAULT_FILTERS_TAG),
  );

  const hasCustomFilters = !areObjectsEqual(filters, DEFAULT_FILTERS_TAG);

  const { dataTags, errorTags, isLoadingTags } = useQueryFilteredTags(filters);

  useEffect(() => {
    const savedFilters = getObjectFromLocalStorage(
      'tagFilters',
      DEFAULT_FILTERS_TAG,
    );
    if (!areObjectsEqual(filters, savedFilters)) {
      setFilters(savedFilters);
    }
  }, [filters]);

  const updateFilters = (updatedFilters: Partial<TagFilter>) => {
    const newFilters = { ...filters, ...updatedFilters };
    setFilters(newFilters);
    saveObjectToLocalStorage('tagFilters', newFilters);
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
        <PaginationCustom
          pageDefault={filters.Page}
          pageSize={dataTags?.pageSize}
          totalItems={dataTags?.totalItems}
          onChange={(page) => updateFilters({ Page: page })}
        />
      </S.ContentStyled>
      <AppFooter />
    </S.LayoutStyled>
  );
};
