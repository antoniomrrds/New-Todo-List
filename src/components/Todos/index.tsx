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

const StyledContainer = styled.main`
 display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
  max-width: 1537px; 
  margin: 0 auto;
 
`;

const Header = styled.header`
  padding: 16px;
  background-color: #ffffff; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2; 
  position: sticky;
  
`;



const Content = styled.div`
  margin-top: 100px; 
  width: 100%;

`;

const TaskContent = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
 height: 100%; 

`;

const SearchContainer = styled(Space)`
  display: flex;
  
  flex-wrap: wrap;
  justify-content: flex-end;
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
  transition: background-color 0.3s;

  &:hover {
    background-color: #1890ff; /* Cor de hover */
    color: #ffffff; /* Texto claro no hover */
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 8px;
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
            <Header>
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
            </Header>

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
