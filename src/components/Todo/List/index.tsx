import { Empty } from 'antd';
import { AxiosError } from 'axios';
import React from 'react';
import { ToDo } from '@/api/service/toDo/types';
import * as S from '@/components/Todo/List/todo-list-container.styles';
import ErrorCard from '@/components/Error/ErrorCard';
import CardTasks from '@/components/Todo/List/CardTodo';
import { StyledContainer } from '@/styles/global-styles';
import { SpinCustom } from '@/components/shared/Spin';

type ToDoList = {
  toDos: ToDo[];
  isLoading: boolean;
  error: AxiosError;
};

const LoadingComponent = () => (
  <S.StyledCenteredContainer>
    <SpinCustom
      text="Carregando tarefas..."
      loading={true}
      hasAbsolutePosition={false}
    />
  </S.StyledCenteredContainer>
);

const ErrorComponent = ({ message }: { message: string }) => (
  <S.StyledCenteredContainer>
    <ErrorCard message={message} />
  </S.StyledCenteredContainer>
);

const TodoListContainer: React.FC<ToDoList> = ({ toDos, isLoading, error }) => {
  const noFilteredTasksMessage =
    'Nenhuma tarefa encontrada com os critérios de busca.';

  const getContent = () => {
    if (isLoading) return <LoadingComponent />;
    if (error) return <ErrorComponent message={error.message} />;
    if (toDos.length > 0) return <CardTasks data={toDos} />;
    return (
      <S.StyledCenteredContainer>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={noFilteredTasksMessage}
        />
      </S.StyledCenteredContainer>
    );
  };

  return <StyledContainer>{getContent()}</StyledContainer>;
};

export default TodoListContainer;
