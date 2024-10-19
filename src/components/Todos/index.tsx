import React, { useState } from "react";
import { message, Space, Empty } from "antd";
import {
    SearchOutlined, PlusOutlined, FilterOutlined
} from '@ant-design/icons';
import { StyledButton, StyledInput } from "./TodoForm.styles";
import AddTaskModal from "./AddTaskModal";
import FilterTasksModal from "./FilterTasksModal";
import CardTasks from "../CardTasks";

const TodoForm: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([]);
    const [addTaskVisible, setAddTaskVisible] = useState<boolean>(false);
    const [filterVisible, setFilterVisible] = useState<boolean>(false);

    const onAddTaskFinish = (values: { task: string }) => {
        setTasks([...tasks, values.task]);
        message.success(`Tarefa adicionada: ${values.task}`);
        setAddTaskVisible(false);
    };

    const onFilterFinish = (values: { filter: string }) => {
        message.info(`Filtrando por: ${values.filter}`);
        setFilterVisible(false);
    };

    const showAddTaskModal = () => setAddTaskVisible(true);
    const showFilterModal = () => setFilterVisible(true);
    const handleAddTaskCancel = () => setAddTaskVisible(false);
    const handleFilterCancel = () => setFilterVisible(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = () => {
        message.info(`Buscando por: ${searchTerm}`);
    };

    return (
        <>
            <Space style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <Space.Compact style={{ width: '300px' }}>
                    <StyledInput
                        placeholder="Buscar Tarefas"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                        onBlur={handleSearchSubmit}
                    />
                    <StyledButton type="default" icon={<SearchOutlined />} onClick={handleSearchSubmit} />
                </Space.Compact>
                <StyledButton type="default" onClick={showFilterModal} icon={<FilterOutlined />}>
                    Filtrar
                </StyledButton>
                <StyledButton type="primary" onClick={showAddTaskModal} icon={<PlusOutlined />} style={{ marginLeft: '8px' }}>
                    Criar Nova Tarefa
                </StyledButton>
            </Space>

            <AddTaskModal
                visible={addTaskVisible}
                onCancel={handleAddTaskCancel}
                onFinish={onAddTaskFinish}
            />

            <FilterTasksModal
                visible={filterVisible}
                onCancel={handleFilterCancel}
                onFinish={onFilterFinish}
            />

            <CardTasks />

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column' }}>
                {tasks.length === 0 ? (
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="Nenhuma tarefa encontrada"
                    >
                        <StyledButton type="primary" onClick={showAddTaskModal} icon={<PlusOutlined />}>
                            Criar Nova Tarefa
                        </StyledButton>
                    </Empty>
                ) : (
                    <div>
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default TodoForm;
