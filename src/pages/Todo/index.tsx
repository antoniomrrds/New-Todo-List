import AppFooter from '@/components/Footer';
import { AppHeader } from '@/components/Header';
import { StyledContainer, StyledLayout } from '@/styles/global-styles';
import { Content } from 'antd/es/layout/layout';
import TodoManager from '@/components/Todo';
import { useState } from 'react';
import { useQueryFilteredTodos } from '@/api/service/toDo/actions';
import { ToDoFilter } from '@/api/service/toDo/types';
import { TodoStatus } from '@/components/Todo/Add/enum';
import { ToDoSearchBar } from '@/components/Todo/SearchBar';
import { PaginationCustom } from '@/components/shared/Pagination';
import { useNavigateToPath } from '@/helpers';
import { AxiosError } from 'axios';

export const TodoHomePage = () => {
  const [filters, setFilters] = useState<ToDoFilter>({
    Title: '',
    Active: TodoStatus.Active,
    PageSize: 20,
    Page: 1,
  });

  const navigateToPath = useNavigateToPath();
  const handleNavigateAdd = () => navigateToPath('add');

  const { errorToDos, dataToDos, isLoadingToDos } =
    useQueryFilteredTodos(filters);
  const ToDos = dataToDos?.items || [];

  const handlePaginationChange = (page: number) => {
    setFilters((prev) => ({ ...prev, Page: page }));
  };

  const onApplyFilters = (updatedFilters: Partial<ToDoFilter>) => {
    setFilters((prev) => ({
      ...prev,
      ...updatedFilters,
    }));
  };

  return (
    <StyledLayout>
      <AppHeader />
      <StyledContainer>
        <ToDoSearchBar
          handleNavigateAdd={handleNavigateAdd}
          filters={filters}
          onApplyFilters={onApplyFilters}
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
