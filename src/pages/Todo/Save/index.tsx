import { AppHeader } from '@/components/Header';
import * as G from '@/styles/global-styles';

import { useNavigateFunction } from '@/helpers';
import { parseIdOrDefault } from '@/utils';
import { useParams } from 'react-router-dom';
import { useQueryTodoDetails } from '@/api/service/toDo/actions';
import { NotFoundPage } from '@/pages/NotFound';
import { useCallback } from 'react';
import { BreadCrumb, BreadcrumbItems } from '@/components/shared/BreadCrumb';
import { CardMainForm } from '@/components/Todo/Save/CardMainForm';

type ToDoDetailsParams = {
  id?: string;
};

export const ToDoSavePage = () => {
  const { id } = useParams<ToDoDetailsParams>();
  const todoId = parseIdOrDefault(id); // Converte ID para número ou null

  const isEditing = !!todoId; // Se tem ID válido, é edição

  const navigate = useNavigateFunction();
  const goToTodoPage = useCallback(() => navigate('/todo'), [navigate]);

  // 🔥 Somente busca a tarefa se for edição
  const {
    toDoItem = null,
    errorToDos,
    isLoadingToDos,
  } = isEditing
    ? useQueryTodoDetails(todoId)
    : { toDoItem: null, errorToDos: null, isLoadingToDos: false };

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
    toDoItem,
    goToTodoPage,
  };

  return (
    <G.LayoutStyled>
      <AppHeader />
      <G.StyledContent>
        <BreadCrumb items={breadcrumbItems} />
        <CardMainForm {...cardMainFormProps} />
      </G.StyledContent>
    </G.LayoutStyled>
  );
};
