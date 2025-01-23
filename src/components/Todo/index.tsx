import { StyledContainer } from '@/styles/global-styles';
import { Empty, Skeleton } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { AxiosError } from 'axios';
import React from 'react';
import styled from 'styled-components';
import CardTasks from '../CardTasks';
import ErrorCard from '../Error/ErrorCard';

import { ToDo } from '@/api/service/toDo/types';
import { CreateButton } from '@/components/Todo/List/molecules';

const TaskContent = styled(Content)`
  display: flex;
`;

type ToDoList = {
  toDos: ToDo[];
  isLoading: boolean;
  error: AxiosError;
  searchTerm: string;
  handleNavigateAdd: () => void;
};

const TodoManager: React.FC<ToDoList> = ({
  toDos,
  isLoading,
  error,
  searchTerm,
  handleNavigateAdd,
}) => {
  const noTasksMessage =
    'Não há tarefas cadastradas. Clique no botão abaixo para adicionar sua primeira tarefa.';
  const noFilteredTasksMessage =
    'Nenhuma tarefa encontrada com os critérios de busca.';

  const isSearchTermEmpty = searchTerm == '';

  return (
    <StyledContainer>
      <Content>
        {isLoading ? (
          // <TaskContent>
          //     <Spin size="large" />
          // </TaskContent>
          <TaskContent>
            <Skeleton active loading={isLoading} round />
          </TaskContent>
        ) : error ? (
          <TaskContent>
            <ErrorCard message={error.message} />
          </TaskContent>
        ) : toDos.length > 0 ? (
          <CardTasks data={toDos} />
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              isSearchTermEmpty ? noTasksMessage : noFilteredTasksMessage
            }
          >
            {isSearchTermEmpty && (
              <CreateButton
                text="Criar Nova Tarefa"
                onClick={handleNavigateAdd}
              />
            )}
          </Empty>
        )}
      </Content>
    </StyledContainer>
  );
};

export default TodoManager;
