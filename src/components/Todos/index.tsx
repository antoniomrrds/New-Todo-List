import React, { useState } from "react";
import { message, Empty, Spin, Button, Input } from "antd";
import { SearchOutlined, PlusOutlined, FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import AddTaskModal from "./AddTaskModal";
import FilterTasksModal from "./FilterTasksModal";
import { useQuery } from "react-query";
import { Task, taskservices } from "../../api/services/tasks";
import { AxiosError } from "axios";
import ErrorCard from "../Error/ErrorCard";
import CardTasks from "../CardTasks";
import { Content } from "antd/es/layout/layout";

const StyledContainer = styled.main`
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-width: 1537px; 
    min-height: 100dvh;
    margin: 25px auto;
    gap: 20px;
    min-width: 300px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const TaskContent = styled.div`
padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    
    height: ${({ theme }) => theme.container.fullHeight}; 
`;

const SearchContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: 10px;
    padding: 16px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
    }
`;

const StyledInput = styled(Input.Search)`
    border-radius: 20%;
    
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
`;

const StyledButton = styled(Button)`
    transition: background-color 0.3s;

    &:hover {
        background-color: #1890ff;
        color: #ffffff;
    }
`;

const TodoForm: React.FC = () => {
    const { data: tasks = [], isLoading, error } = useQuery<Task[], AxiosError>("tasks", taskservices.getAllTasks);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [addTaskVisible, setAddTaskVisible] = useState<boolean>(false);
    const [filterVisible, setFilterVisible] = useState<boolean>(false);

    const onAddTaskFinish = (task: Task) => {
        message.success(`Tarefa adicionada: ${task.title}`);
        setAddTaskVisible(false);
    };

    const onFilterFinish = (filter: any) => {
        message.info(`Filtrando por: ${filter}`);
        setFilterVisible(false);
    };

    const showAddTaskModal = () => setAddTaskVisible(true);
    const showFilterModal = () => setFilterVisible(true);
    const handleAddTaskCancel = () => setAddTaskVisible(false);
    const handleFilterCancel = () => setFilterVisible(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const noTasksMessage = "Não há tarefas cadastradas. Clique no botão abaixo para adicionar sua primeira tarefa.";
    const noFilteredTasksMessage = "Nenhuma tarefa encontrada com os critérios de busca.";

    return (
        <StyledContainer>
            <SearchContainer>
                <StyledInput
                    placeholder="Buscar Tarefas"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyDown={(e) => e.key === "Enter" && message.info(`Buscando por: ${searchTerm}`)}
                    enterButton={<SearchOutlined />}
                />
                <StyledButton type="default" onClick={showFilterModal} icon={<FilterOutlined />}>
                    Filtrar
                </StyledButton>
                {tasks.length > 0 && (
                    <StyledButton type="primary" onClick={showAddTaskModal} icon={<PlusOutlined />}>
                        Criar Nova Tarefa
                    </StyledButton>
                )}
            </SearchContainer>

            <Content>
                <AddTaskModal
                    open={addTaskVisible}
                    onCancel={handleAddTaskCancel}
                    onFinish={onAddTaskFinish}
                />
                <FilterTasksModal
                    open={filterVisible}
                    onCancel={handleFilterCancel}
                    onFinish={onFilterFinish}
                />

                {isLoading ? (
                    <TaskContent>
                        <Spin size="large" />
                    </TaskContent>
                ) : error ? (
                    <TaskContent>
                        <ErrorCard message={error.message} />
                    </TaskContent>
                ) : filteredTasks.length === 0 ? (
                    <TaskContent>
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={searchTerm ? noFilteredTasksMessage : noTasksMessage}
                        >
                            {!searchTerm && (
                                <StyledButton type="primary" onClick={showAddTaskModal} icon={<PlusOutlined />}>
                                    Criar Nova Tarefa
                                </StyledButton>
                            )}
                        </Empty>
                    </TaskContent>
                ) : (
                    <CardTasks data={filteredTasks} />
                )}
            </Content>
        </StyledContainer>
    );
};

export default TodoForm;
