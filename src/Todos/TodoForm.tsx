import React, { useState } from "react";
import { Button, Form, Input, message, Space, Modal, Empty } from "antd";
import { CloseOutlined, SearchOutlined, PlusOutlined, FilterOutlined } from '@ant-design/icons';
import './TodoForm.css'; // Importe o CSS para estilos
import UserGrid from "../components/Card/UserGrid";


const TodoForm = () => {
    const [form] = Form.useForm();
    const [searchForm] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [tasks, setTasks] = useState<string[]>([]); // Array para armazenar tarefas

    const onFinish = (values: any) => {
        setTasks([...tasks, values.task]); // Adiciona a nova tarefa ao array
        message.success(`Tarefa adicionada: ${values.task}`);
        form.resetFields();
        setVisible(false);
    };

    const onSearchFinish = (values: any) => {
        message.info(`Filtrando por: ${values.filter}`);
        searchForm.resetFields();
        setFilterVisible(false);
    };

    const showModal = () => {
        setVisible(true);
    };

    const showFilterModal = () => {
        setFilterVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleFilterCancel = () => {
        setFilterVisible(false);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearchSubmit();
        }
    };

    const handleSearchSubmit = () => {
        message.info(`Buscando por: ${searchTerm}`);
    };

    return (
        <>
            <Space style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <Space.Compact style={{ width: '300px' }}>
                    <Input
                        placeholder="Buscar Tarefas"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={handleSearchKeyDown}
                        onBlur={handleSearchSubmit}
                    />
                    <Button
                        type="default"
                        icon={<SearchOutlined />}
                        onClick={handleSearchSubmit}
                    />
                </Space.Compact>
                <Button type="default" onClick={showFilterModal} icon={<FilterOutlined />}>
                    Filtrar
                </Button>
                <Button type="primary" onClick={showModal} icon={<PlusOutlined />} style={{ marginLeft: '8px' }}>
                    Criar Nova Tarefa
                </Button>
            </Space>

            <Modal
                title={null} // Remover o título padrão
                visible={visible}
                footer={null}
                onCancel={handleCancel}
                closable={false} // Não permite fechar pelo botão de fechar
                maskClosable={false} // Impede fechar ao clicar fora
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Adicionar Nova Tarefa</h2>
                    <Button
                        type="text"
                        icon={<CloseOutlined />}
                        onClick={handleCancel}
                        style={{ color: 'red' }} // Cor do ícone de fechar
                    />
                </div>
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item
                        name="task"
                        label="Nova Tarefa"
                        rules={[{ required: true, message: 'Por favor, insira uma tarefa!' }]}
                    >
                        <Input placeholder="Digite sua tarefa" />
                    </Form.Item>
                    <Form.Item>
                        <Space style={{ float: 'right' }}>
                            <Button
                                type="default"
                                onClick={handleCancel}
                                icon={<CloseOutlined />}
                                style={{ backgroundColor: '#ff4d4f', color: 'white' }} // Vermelho
                            >
                                Cancelar
                            </Button>
                            <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                                Criar Tarefa
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>


            <Modal
                title={null}
                visible={filterVisible}
                footer={null}
                onCancel={handleFilterCancel}
                closable={false}
                maskClosable={false}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Filtrar Tarefas</h2>
                    <Button
                        type="text"
                        icon={<CloseOutlined />}
                        onClick={handleFilterCancel}
                        style={{ color: 'red' }} // Cor do ícone de fechar
                    />
                </div>
                <Form form={searchForm} onFinish={onSearchFinish} layout="vertical">
                    <Form.Item
                        name="filter"
                        label="Filtro"
                        rules={[{ required: true, message: 'Por favor, insira um filtro!' }]}
                    >
                        <Input placeholder="Digite seu filtro" />
                    </Form.Item>
                    <Form.Item>
                        <Space style={{ float: 'right' }}>
                            <Button
                                type="default"
                                onClick={handleFilterCancel}
                                icon={<CloseOutlined />}
                                style={{ backgroundColor: '#ff4d4f', color: 'white' }} // Vermelho
                            >
                                Cancelar
                            </Button>
                            <Button type="primary" htmlType="submit" icon={<FilterOutlined />}>
                                Filtrar
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>

            <UserGrid  />



            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column' }}>
                {tasks.length === 0 ? (
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="Nenhuma tarefa encontrada"
                    >
                        <Button type="primary" onClick={showModal} icon={<PlusOutlined />}>
                            Criar Nova Tarefa
                        </Button>
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
