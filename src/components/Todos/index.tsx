import React, { useState } from "react";
import { message, Space, Empty } from "antd";
import { SearchOutlined, PlusOutlined, FilterOutlined } from '@ant-design/icons';
import { StyledButton, StyledInput } from "./TodoForm.styles";
import AddTaskModal from "./AddTaskModal";
import FilterTasksModal from "./FilterTasksModal";
import { useQuery } from "react-query";
import { Task, taskservices } from "../../api/services/tasks";
import { AxiosError } from "axios";

const TodoForm: React.FC = () => {
    const { data: tasks = [], isLoading, error } = useQuery<Task[], AxiosError>("tasks", taskservices.getAllTasks);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [addTaskVisible, setAddTaskVisible] = useState<boolean>(false);
    const [filterVisible, setFilterVisible] = useState<boolean>(false);

    if (isLoading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error.message}</div>;

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

    return (
        <>
            <Space style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <Space.Compact style={{ width: '300px' }}>
                    <StyledInput
                        placeholder="Buscar Tarefas"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={(e) => e.key === "Enter" && message.info(`Buscando por: ${searchTerm}`)}
                    />
                    <StyledButton type="default" icon={<SearchOutlined />} onClick={() => message.info(`Buscando por: ${searchTerm}`)} />
                </Space.Compact>
                <StyledButton type="default" onClick={showFilterModal} icon={<FilterOutlined />}>
                    Filtrar
                </StyledButton>
                <StyledButton type="primary" onClick={showAddTaskModal} icon={<PlusOutlined />} style={{ marginLeft: '8px' }}>
                    Criar Nova Tarefa
                </StyledButton>
            </Space>

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

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column' }}>
                {filteredTasks.length === 0 ? (
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="Nenhuma tarefa encontrada"
                    >
                        <StyledButton type="primary" onClick={showAddTaskModal} icon={<PlusOutlined />}>
                            Criar Nova Tarefa
                        </StyledButton>
                    </Empty>
                ) : (
                    <ul>
                        {filteredTasks.map(task => (
                            <li key={task.id}>{task.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default TodoForm;
