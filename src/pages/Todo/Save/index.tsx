import { AppHeader } from '@/components/Header';
import * as G from '@/styles/global-styles';
import { App as AppAntd, Grid } from 'antd';

import { useNavigateFunction } from '@/helpers';
import { parseIdOrDefault } from '@/utils';
import { useParams } from 'react-router-dom';
import { useQueryTodoDetails } from '@/api/service/toDo/actions';
import { NotFoundPage } from '@/pages/NotFound';
import { useCallback } from 'react';
import { BreadCrumb, BreadcrumbItems } from '@/components/shared/BreadCrumb';
import { CardMainForm } from '@/components/Todo/Save/CardMainForm';
import {
  useCategoriesAndTags,
  useErrorHandling,
} from '@/components/Todo/Add/hooks';
const { useBreakpoint } = Grid;

type ToDoDetailsParams = {
  id?: string;
};

export const ToDoSavePage = () => {
  const { notification } = AppAntd.useApp();
  const { id } = useParams<ToDoDetailsParams>();
  const todoId = parseIdOrDefault(id); // Converte ID para número ou null

  const isEditing = !!todoId; // Se tem ID válido, é edição

  const navigate = useNavigateFunction();
  const goToTodoPage = useCallback(() => navigate('/todo'), [navigate]);
  const screens = useBreakpoint();

  // 🔥 Somente busca a tarefa se for edição
  const {
    toDoItem = null,
    errorToDos,
    isLoadingToDos,
  } = isEditing
    ? useQueryTodoDetails(todoId)
    : { toDoItem: null, errorToDos: null, isLoadingToDos: false };

  const {
    categories,
    tags,
    errorCategories,
    errorTags,
    isLoadingCategoriesAndTags,
  } = useCategoriesAndTags();

  useErrorHandling({
    errorCategories,
    errorTags,
    notification,
    goToTodoPage,
  });

  if (isEditing && isLoadingToDos) {
    return <h2>Carregando...</h2>;
  }

  if (isEditing && !toDoItem) {
    return <NotFoundPage />;
  }

  if (errorToDos) {
    return <h2>Erro: {errorToDos.message}</h2>;
  }

  const breadcrumbItems: BreadcrumbItems = [
    { title: 'Todos (Tarefas)', href: '/todo' },
    { title: 'Detalhes da Tarefa' },
  ];

  const cardMainFormProps = {
    isEditing,
    screens,
    toDoItem,
    categories,
    tags,
    isLoadingCategoriesAndTags,
  };

  return (
    <G.StyledLayout>
      <AppHeader />
      <G.StyledContent>
        <BreadCrumb items={breadcrumbItems} />
        <CardMainForm {...cardMainFormProps} />
      </G.StyledContent>
    </G.StyledLayout>
  );
};
