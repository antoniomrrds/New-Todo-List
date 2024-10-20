import React from "react";
import { Space } from "antd";
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { StyledButton, StyledInput, StyledModal } from "../TodoForm.styles";
import styled from 'styled-components';

// Validator
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as Styled from "./AddTasks.styles";

// Definindo o esquema de validação usando Zod
const taskSchema = z.object({
    task: z.string()
        .min(5, "A tarefa deve ter pelo menos 5 caracteres!")
        .nonempty("Por favor, insira uma tarefa!"),
});

interface AddTaskModalProps {
    open: boolean;
    onCancel: () => void;
    onFinish: (values: { task: string }) => void;
}

// Styled Components
const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormItem = styled.div`
    margin-bottom: 16px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
`;

const Required = styled.span`
    color: red;
`;

const ErrorMessage = styled.div`
    color: red;
    margin-top: 8px;
`;

const ButtonGroup = styled(Space)`
    display: flex;
    justify-content: flex-end; /* Alinha os botões à direita */
    margin-top: 16px; /* Espaço acima dos botões */
`;



type FormData = {
    task: string;
  };


const AddTaskModal: React.FC<AddTaskModalProps> = ({ open, onCancel, onFinish }) => {
    const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm({
        resolver: zodResolver(taskSchema),
        mode: "onChange",
    });

    const handleCancel = () => {
        reset();
        onCancel();
    };

    return (
        <StyledModal
            title={null}
            open={open}
            footer={null}
            onCancel={handleCancel}
            closable={false}
            maskClosable={false}
        >
            <ModalHeader>
                <h2>Adicionar Nova Tarefa</h2>
                <StyledButton
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={handleCancel}
                    style={{ color: 'red' }}
                />
            </ModalHeader>
            
            <Form onSubmit={handleSubmit((data) => {
                onFinish(data);
                reset();
            })}>
                <FormItem>
                    <Label>
                        Nova Tarefa  <Required>*</Required>
                    </Label>
                    <Controller
                        name="task"
                        control={control}
                        render={({ field }) => (
                            <StyledInput
                                {...field}
                                placeholder="Digite sua tarefa"
                                className={`ant-input ${errors.task ? 'error-input' : ''}`}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                    {errors.task && <ErrorMessage>{errors.task.message}</ErrorMessage>}
                </FormItem>
                <ButtonGroup>
                    <Styled.ButtonCancel
                        onClick={handleCancel}
                        icon={<CloseOutlined />}
                    >
                        Cancelar
                    </Styled.ButtonCancel>
                    <Styled.ButtonPrimary
                        type="primary"
                        htmlType="submit"
                        icon={<PlusOutlined />}
                        disabled={!isValid} // Desabilitar se não for válido
                        className={!isValid ? 'disabled' : ''} // Adicionando classe para o estilo desabilitado
                    >
                        Criar Tarefa
                    </Styled.ButtonPrimary>
                </ButtonGroup>
            </Form>
        </StyledModal>
    );
};

export default AddTaskModal;
