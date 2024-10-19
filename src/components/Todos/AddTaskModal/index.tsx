import React from "react";
import { Form, Space } from "antd";
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { StyledButton, StyledInput, StyledModal } from "../TodoForm.styles";

interface AddTaskModalProps {
    visible: boolean;
    onCancel: () => void;
    onFinish: (values: { task: string }) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ visible, onCancel, onFinish }) => {
    const [form] = Form.useForm();

    return (
        <StyledModal
            title={null}
            visible={visible}
            footer={null}
            onCancel={onCancel}
            closable={false}
            maskClosable={false}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Adicionar Nova Tarefa</h2>
                <StyledButton
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={onCancel}
                    style={{ color: 'red' }}
                />
            </div>
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                    name="task"
                    label="Nova Tarefa"
                    rules={[{ required: true, message: 'Por favor, insira uma tarefa!' }]}
                >
                    <StyledInput placeholder="Digite sua tarefa" />
                </Form.Item>
                <Form.Item>
                    <Space style={{ float: 'right' }}>
                        <StyledButton
                            type="default"
                            onClick={onCancel}
                            icon={<CloseOutlined />}
                            style={{ backgroundColor: '#ff4d4f', color: 'white' }}
                        >
                            Cancelar
                        </StyledButton>
                        <StyledButton type="primary" htmlType="submit" icon={<PlusOutlined />}>
                            Criar Tarefa
                        </StyledButton>
                    </Space>
                </Form.Item>
            </Form>
        </StyledModal>
    );
};

export default AddTaskModal;
