import { StyledContainer } from '@/styles/global-styles';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Empty, Layout, Skeleton } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { AxiosError } from 'axios';
import React from 'react';
import styled from 'styled-components';
import CardTasks from '../CardTasks';
import ErrorCard from '../Error/ErrorCard';
import FilterTasksModal from './FilterTasksModal';

import { ToDo } from '@/api/service/toDo/types';
import { CreateButton } from '@/components/Todo/List/molecules';

const TaskContent = styled(Content)`
  display: flex;
`;

type ToDoList = {
  toDos: ToDo[];
  isLoading: boolean;
  filterVisible: boolean;
  onFilterFinish: (filter: any) => void;
  error: AxiosError;
  searchTerm: string;
  handleNavigateAdd: () => void;
  handleFilterCancel: () => void;
};

const TodoManager: React.FC<ToDoList> = ({
  toDos,
  isLoading,
  error,
  searchTerm,
  handleFilterCancel,
  handleNavigateAdd,
  filterVisible,
  onFilterFinish,
}) => {
  const filteredTasks = toDos.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const noTasksMessage =
    'Não há tarefas cadastradas. Clique no botão abaixo para adicionar sua primeira tarefa.';
  const noFilteredTasksMessage =
    'Nenhuma tarefa encontrada com os critérios de busca.';

  return (
    <StyledContainer>
      <Content>
        <FilterTasksModal
          open={filterVisible}
          onCancel={handleFilterCancel}
          onFinish={onFilterFinish}
        />
        {isLoading ? (
          // <TaskContent>
          //     <Spin size="large" />
          // </TaskContent>
          <TaskContent>
            <Skeleton active loading={isLoading} />
          </TaskContent>
        ) : error ? (
          <TaskContent>
            <ErrorCard message={error.message} />
          </TaskContent>
        ) : filteredTasks.length === 0 ? (

              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  searchTerm ? noFilteredTasksMessage : noTasksMessage
                }
              >
                {!searchTerm && (
                  <CreateButton
                    text="Criar Nova Tarefa"
                    onClick={handleNavigateAdd}
                  />
                )}
              </Empty>

        ) : (
          <CardTasks data={filteredTasks} />
        )}
      </Content>
    </StyledContainer>
  );
};

export default TodoManager;
