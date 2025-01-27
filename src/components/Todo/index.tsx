import { StyledContainer } from '@/styles/global-styles';
import { Empty, Skeleton } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { AxiosError } from 'axios';
import React from 'react';
import styled from 'styled-components';
import CardTasks from '../CardTasks';
import ErrorCard from '../Error/ErrorCard';

import { ToDo } from '@/api/service/toDo/types';

const TaskContent = styled(Content)`
  display: flex;
`;

type ToDoList = {
  toDos: ToDo[];
  isLoading: boolean;
  error: AxiosError;
};

const TodoManager: React.FC<ToDoList> = ({ toDos, isLoading, error }) => {
  const noFilteredTasksMessage =
    'Nenhuma tarefa encontrada com os critérios de busca.';

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
            description={noFilteredTasksMessage}
          ></Empty>
        )}
      </Content>
    </StyledContainer>
  );
};

export default TodoManager;
