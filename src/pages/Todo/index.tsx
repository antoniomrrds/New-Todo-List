import AppFooter from '@/components/Footer';
import { AppHeader } from '@/components/Header';
import { StyledContainer, StyledLayout } from '@/styles/global-styles';
import { Content } from 'antd/es/layout/layout';
import TodoListContainer from '@/components/Todo/List';
import { useEffect, useState } from 'react';
import { useQueryFilteredTodos } from '@/api/service/toDo/actions';
import { ToDoFilter } from '@/api/service/toDo/types';
import { ToDoSearchBar } from '@/components/Todo/List/SearchBar';
import { PaginationCustom } from '@/components/shared/Pagination';
import { useNavigateToPath } from '@/helpers';
import { AxiosError } from 'axios';
import {
  saveObjectToLocalStorage,
  getObjectFromLocalStorage,
  areObjectsEqual,
} from '@/utils';
import { ActivationState, TodoStatus } from '@/api/service/toDo/enum';
import { FloatButton } from 'antd';

export const DEFAULT_FILTERS: ToDoFilter = {
  name: '',
  Status: TodoStatus.Unfiltered,
  PageSize: 20,
  Page: 1,
  Active: ActivationState.Active,
};

export const TodoHomePage = () => {
  const navigateTo = useNavigateToPath();

  // 🔹 Sempre sincronizar filtros com o localStorage ao carregar
  const [filters, setFilters] = useState<ToDoFilter>(() =>
    getObjectFromLocalStorage('todoFilters', DEFAULT_FILTERS),
  );

  const hasCustomFilters = !areObjectsEqual(filters, DEFAULT_FILTERS);

  const { errorToDos, dataToDos, isLoadingToDos } =
    useQueryFilteredTodos(filters);

  // 🔹 Sincroniza os filtros sempre que o localStorage ou o estado de filtros muda
  useEffect(() => {
    const savedFilters = getObjectFromLocalStorage(
      'todoFilters',
      DEFAULT_FILTERS,
    );
    if (!areObjectsEqual(filters, savedFilters)) {
      setFilters(savedFilters);
    }
  }, [filters]);

  // 🔹 Atualiza os filtros e o localStorage ao mesmo tempo
  const updateFilters = (updatedFilters: Partial<ToDoFilter>) => {
    const newFilters = { ...filters, ...updatedFilters };
    setFilters(newFilters);
    saveObjectToLocalStorage('todoFilters', newFilters); // Armazena no localStorage
  };

  return (
    <StyledLayout>
      <AppHeader />
      <StyledContainer>
        <ToDoSearchBar
          handleNavigateAdd={() => navigateTo('add')}
          filters={filters}
          onApplyFilters={(updatedFilters) =>
            updateFilters({ ...updatedFilters, Page: 1 })
          }
          shouldShowDropdown={hasCustomFilters}
        />
      </StyledContainer>
      <Content>
        <TodoListContainer
          error={errorToDos as AxiosError}
          toDos={dataToDos?.items || []}
          isLoading={isLoadingToDos}
        />
      </Content>
      <FloatButton.BackTop type="primary" tooltip="↑ Voltar ao topo" />

      <PaginationCustom
        pageDefault={filters.Page}
        pageSize={dataToDos?.pageSize}
        totalItems={dataToDos?.totalItems}
        onChange={(page) => updateFilters({ Page: page })}
      />
      <AppFooter />
    </StyledLayout>
  );
};
