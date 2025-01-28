import { useSearchParams } from 'react-router-dom';
import AppFooter from '@/components/Footer';
import { AppHeader } from '@/components/Header';
import { StyledContainer, StyledLayout } from '@/styles/global-styles';
import { Content } from 'antd/es/layout/layout';
import TodoManager from '@/components/Todo';
import { useEffect, useState } from 'react';
import { useQueryFilteredTodos } from '@/api/service/toDo/actions';
import { ToDoFilter } from '@/api/service/toDo/types';
import { TodoStatus } from '@/components/Todo/Add/enum';
import { ToDoSearchBar } from '@/components/Todo/SearchBar';
import { PaginationCustom } from '@/components/shared/Pagination';
import { useNavigateToPath } from '@/helpers';
import { AxiosError } from 'axios';
import { encodeObject, decodeObject, areObjectsEqual } from '@/utils';
export const defaultFilters: ToDoFilter = {
  Title: '',
  Active: TodoStatus.Active,
  PageSize: 20,
  Page: 1,
};

export const TodoHomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const decodedFilters = decodeObject(
    searchParams.get('filter'),
    defaultFilters,
  );

  useEffect(() => {
    if (areObjectsEqual(decodedFilters, defaultFilters)) {
      setSearchParams({});
    }
  }, [decodedFilters, setSearchParams]);

  const [filters, setFilters] = useState<ToDoFilter>(decodedFilters);

  const navigateToPath = useNavigateToPath();
  const handleNavigateAdd = () => navigateToPath('add');

  // Função para atualizar a URL com os filtros ou limpar o filtro
  const updateUrlWithFilters = (updatedFilters: Partial<ToDoFilter>) => {
    const newFilters = { ...filters, ...updatedFilters }; // Mescla os filtros
    if (areObjectsEqual(newFilters, defaultFilters)) {
      setSearchParams({}); // Se os filtros forem padrão, limpa a URL
    } else {
      const encodedFilter = encodeObject(newFilters); // Codifica em Base64
      setSearchParams({ filter: encodedFilter }); // Atualiza a URL
    }
    setFilters(newFilters);
  };
  const shouldShowDropdown = !areObjectsEqual(filters, defaultFilters);

  const { errorToDos, dataToDos, isLoadingToDos } =
    useQueryFilteredTodos(filters);
  const ToDos = dataToDos?.items || [];

  const handlePaginationChange = (page: number) => {
    updateUrlWithFilters({ Page: page });
  };

  const onApplyFilters = (updatedFilters: Partial<ToDoFilter>) => {
    updateUrlWithFilters({ ...updatedFilters, Page: 1 });
  };

  return (
    <StyledLayout>
      <AppHeader />
      <StyledContainer>
        <ToDoSearchBar
          handleNavigateAdd={handleNavigateAdd}
          filters={filters}
          onApplyFilters={onApplyFilters}
          shouldShowDropdown={shouldShowDropdown}
        />
      </StyledContainer>
      <Content>
        <TodoManager
          error={errorToDos as AxiosError}
          toDos={ToDos}
          isLoading={isLoadingToDos}
        />
      </Content>
      <PaginationCustom
        pageDefault={filters.Page}
        pageSize={dataToDos?.pageSize}
        totalItems={dataToDos?.totalItems}
        onChange={handlePaginationChange}
      />
      <AppFooter />
    </StyledLayout>
  );
};
