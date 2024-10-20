import React from "react";
import { Form, Space } from "antd";
import { CloseOutlined, FilterOutlined } from '@ant-design/icons';
import { StyledButton, StyledInput, StyledModal } from "../TodoForm.styles";

type FilterTasksModalProps = {
    open: boolean;
    onCancel: () => void;
    onFinish: (values: { filter: string }) => void;
}

const FilterTasksModal: React.FC<FilterTasksModalProps> = ({ open, onCancel, onFinish }) => {
    const [form] = Form.useForm();

    return (
        <StyledModal
            title={null}
            open={open}
            footer={null}
            onCancel={onCancel}
            closable={false}
            maskClosable={false}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Filtrar Tarefas</h2>
                <StyledButton
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={onCancel}
                    style={{ color: 'red' }}
                />
            </div>
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                    name="filter"
                    label="Filtro"
                    rules={[{ required: true, message: 'Por favor, insira um filtro!' }]}
                >
                    <StyledInput placeholder="Digite seu filtro" />
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
                        <StyledButton type="primary" htmlType="submit" icon={<FilterOutlined />}>
                            Filtrar
                        </StyledButton>
                    </Space>
                </Form.Item>
            </Form>
        </StyledModal>
    );
};

export default FilterTasksModal;
