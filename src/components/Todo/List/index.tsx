import { Empty } from 'antd';
import { AxiosError } from 'axios';
import React from 'react';
import { ToDo } from '@/api/service/toDo/types';
import * as S from '@/components/Todo/List/todo-list-container.styles';
import CardTasks from '@/components/Todo/List/CardTodo';
import { SpinCustom } from '@/components/shared/Spin';

type ToDoList = {
  toDos: ToDo[];
  isLoading: boolean;
  error: AxiosError;
};

const LoadingComponent = () => (
  <S.GridCenteredLoading>
    <SpinCustom
      text="Carregando tarefas..."
      loading={true}
      hasAbsolutePosition={false}
    />
  </S.GridCenteredLoading>
);

const ErrorComponent = ({ message }: { message: string }) => (
  <S.GridCenteredError>
    <S.AlertStyled
      message="Erro ao carregar as tarefas"
      description={message}
      type="error"
      showIcon
    />
  </S.GridCenteredError>
);

const TodoListContainer: React.FC<ToDoList> = ({ toDos, isLoading, error }) => {
  const noFilteredTasksMessage =
    'Nenhuma tarefa encontrada com os critérios de busca.';

  const getContent = () => {
    if (isLoading) return <LoadingComponent />;
    if (error) return <ErrorComponent message={error.message} />;
    if (toDos.length > 0) return <CardTasks data={toDos} />;
    return (
      <S.GridCenteredContainer>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={noFilteredTasksMessage}
        />
      </S.GridCenteredContainer>
    );
  };

  return <S.GridCenteredContainer>{getContent()}</S.GridCenteredContainer>;
};

export default TodoListContainer;
