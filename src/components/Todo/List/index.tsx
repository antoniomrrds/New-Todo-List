import { Empty, Spin } from 'antd';
import { AxiosError } from 'axios';
import React from 'react';
import { ToDo } from '@/api/service/toDo/types';
import { StyledCenteredContainer } from '@/components/Todo/List/todo-list-container.styles';
import ErrorCard from '@/components/Error/ErrorCard';
import CardTasks from '@/components/CardTasks';
import { StyledContainer } from '@/styles/global-styles';

type ToDoList = {
  toDos: ToDo[];
  isLoading: boolean;
  error: AxiosError;
};

const LoadingComponent = () => (
  <StyledCenteredContainer>
    <Spin size="large" />
  </StyledCenteredContainer>
);

const ErrorComponent = ({ message }: { message: string }) => (
  <StyledCenteredContainer>
    <ErrorCard message={message} />
  </StyledCenteredContainer>
);

const TodoListContainer: React.FC<ToDoList> = ({ toDos, isLoading, error }) => {
  const noFilteredTasksMessage =
    'Nenhuma tarefa encontrada com os critérios de busca.';

  const getContent = () => {
    if (isLoading) return <LoadingComponent />;
    if (error) return <ErrorComponent message={error.message} />;
    if (toDos.length > 0) return <CardTasks data={toDos} />;
    return (
      <StyledCenteredContainer>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={noFilteredTasksMessage}
        />
      </StyledCenteredContainer>
    );
  };

  return <StyledContainer>{getContent()}</StyledContainer>;
};

export default TodoListContainer;
