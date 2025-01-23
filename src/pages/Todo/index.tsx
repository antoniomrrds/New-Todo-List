import AppFooter from '@/components/Footer';
import { AppHeader } from '@/components/Header';
import { StyledContainer, StyledLayout } from '@/styles/global-styles';
import { App as AppAntd } from 'antd';
import { Content } from 'antd/es/layout/layout';
import TodoManager from '@/components/Todo';
import { useState } from 'react';
import { useQueryFilteredTodos } from '@/api/service/toDo/actions';
import { ToDoFilter } from '@/api/service/toDo/types';
import { TodoStatus } from '@/components/Todo/Add/enum';
import { ModalCustom } from '@/components/Todo/List/modal';
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

  const [open, setOpen] = useState<boolean>(false);
  const { message } = AppAntd.useApp();

  const navigateToPath = useNavigateToPath();
  const handleNavigateAdd = () => navigateToPath('add');

  const showModal = () => setOpen(true);
  const onClose = () => setOpen(false);

  const { errorToDos, dataToDos, isLoadingToDos } =
    useQueryFilteredTodos(filters);
  const ToDos = dataToDos?.items || [];

  // Função para mudar a página no filtro
  const handlePaginationChange = (page: number) => {
    setFilters((prev) => ({ ...prev, Page: page }));
  };

  const onApplyFilters = (updatedFilters: ToDoFilter) => {
    setFilters((prev) => ({
      ...prev,
      ...updatedFilters,
    }));
    message.info('Filtros aplicados');
  };

  // Função para busca
  const onSearch = (value: string) => {
    const valueWithoutSpace = value.trim();
    if (value === '') {
      setFilters((prev) => ({ ...prev, Title: '', Page: 1 }));
      message.info('Buscando por todas as tarefas');
      return;
    }

    if (valueWithoutSpace) {
      setFilters((prev) => ({ ...prev, Title: valueWithoutSpace, Page: 1 }));
      message.info(`Buscando por: ${valueWithoutSpace}`);
    } else {
      message.warning('Por favor insira um valor para filtrar.');
    }
  };
  console.log('fs', filters);
  return (
    <StyledLayout>
      <AppHeader />
      <ModalCustom
        onClose={onClose}
        open={open}
        filters={filters}
        onApplyFilters={onApplyFilters}
      />
      <StyledContainer>
        <ToDoSearchBar
          toDos={ToDos}
          onSearch={onSearch}
          handleNavigateAdd={handleNavigateAdd}
          searchTerm={filters.Title}
          onShowModal={showModal}
        />
      </StyledContainer>
      <Content>
        <TodoManager
          error={errorToDos as AxiosError}
          toDos={ToDos}
          isLoading={isLoadingToDos}
          searchTerm={filters.Title}
          handleNavigateAdd={handleNavigateAdd}
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
