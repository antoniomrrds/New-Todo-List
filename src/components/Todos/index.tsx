import React, { useState } from "react";
import { message, Space, Empty, Spin, Button, Input } from "antd";
import { SearchOutlined, PlusOutlined, FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import AddTaskModal from "./AddTaskModal";
import FilterTasksModal from "./FilterTasksModal";
import { useQuery } from "react-query";
import { Task, taskservices } from "../../api/services/tasks";
import { AxiosError } from "axios";
import ErrorCard from "../Error/ErrorCard";
import CardTasks from "../CardTasks";

const StyledContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: #F0F2F5;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const SearchContainer = styled(Space)`
  margin-bottom: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const StyledInput = styled(Input.Search)`
  flex-grow: 1;
  margin-right: 8px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 8px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 8px;
  }
`;


const ContainerSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    min-height: 100vh;
    /* background-color: aquamarine; */
`;

const TasksContainer = styled.div`
  display: flex;
  gap: 16px;
  /* background-color: yellow  ; */
  flex-wrap: wrap; /* Allow wrapping of cards */
  justify-content: center; /* Center align cards */
  max-width: 1537px; /* Allow full width */
  padding: 0 8px; /* Padding for aesthetics */
  
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


            <ContainerSection>
                <TasksContainer>
                    {isLoading ? (
                        <Spin size="large" />
                    ) : error ? (
                        <ErrorCard message={error.message} />
                    ) : filteredTasks.length === 0 ? (
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
                    ) : (

                        <CardTasks data={filteredTasks} />

                    )
                    }
                </TasksContainer>

            </ContainerSection>

        </StyledContainer>
    );
};

export default TodoForm;