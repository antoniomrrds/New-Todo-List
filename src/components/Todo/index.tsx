import React from "react";
import { Empty, Button, Skeleton, Layout } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import FilterTasksModal from "./FilterTasksModal";
import { ToDo } from "../../api/services/toDo";
import { AxiosError } from "axios";
import ErrorCard from "../Error/ErrorCard";
import CardTasks from "../CardTasks";
import { Content } from "antd/es/layout/layout";
import { StyledContainer } from "@/styles/global-styles";

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


}

const TodoManager: React.FC<ToDoList> = ({
    toDos,
    isLoading,
    error,
    searchTerm,
    handleFilterCancel,
    handleNavigateAdd,
    filterVisible,
    onFilterFinish
}) => {


    const filteredTasks = toDos.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const noTasksMessage = "Não há tarefas cadastradas. Clique no botão abaixo para adicionar sua primeira tarefa.";
    const noFilteredTasksMessage = "Nenhuma tarefa encontrada com os critérios de busca.";

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
                        <Skeleton
                            active
                            loading={isLoading}
                        />
                    </TaskContent>
                ) : error ? (
                    <TaskContent>
                        <ErrorCard message={error.message} />
                    </TaskContent>
                ) : filteredTasks.length === 0 ? (
                    <Layout>
                        <Content
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '80vh',
                            }}
                        >
                            <Empty

                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description={searchTerm ? noFilteredTasksMessage : noTasksMessage}
                            >
                                {!searchTerm && (
                                    <Button type="primary" onClick={handleNavigateAdd} icon={<PlusOutlined />}>
                                        Criar Nova Tarefa
                                    </Button>
                                )}
                            </Empty>
                        </Content>
                    </Layout>
                ) : (

                    <CardTasks data={filteredTasks} />
                )}
            </Content>
        </StyledContainer>
    );
};

export default TodoManager;
