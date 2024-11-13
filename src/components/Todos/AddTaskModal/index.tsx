import React from "react";
import { CheckOutlined, CloseOutlined, PlusOutlined, WarningOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Input, Form , Row, Col, Switch, DatePicker, Flex }from 'antd';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./AddTasks.styles";
import { taskSchema } from "./validators";



type FormData = {
    task: string;
    description: string;
    isActive: boolean;
    expirationDate: Date | null;
};

interface AddTaskModalProps {
    open: boolean;
    onCancel: () => void;
    onFinish: (values: FormData) => void;
}



const AddTaskModal: React.FC<AddTaskModalProps> = ({ open, onCancel, onFinish }) => {
    const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormData>({
        resolver: zodResolver(taskSchema),
        mode: "onChange",
    });

    const handleCancel = () => {
        reset();
        onCancel();
    };

    return (
            <S.Modal
                open={open}
                centered
            title={
                <Flex justify="space-between" align="middle" >
                <S.Title 
                 level={4}>Adicionar Nova Tarefa</S.Title>
                <ConfigProvider theme={S.themeAntdConfigButton}>
                <Button
                     
                    icon={<CloseOutlined />}
                    onClick={handleCancel}
                />
                </ConfigProvider>
        </Flex>
            }
               
                footer={
                    <Row justify="end" gutter={6}>
                        <Col>
                            <ConfigProvider theme={S.themeAntdConfigButtonCancel}>
                                <Button
                                    color="primary"
                                    onClick={handleCancel}
                                    icon={<CloseOutlined />}
                                >
                                    Cancelar
                                </Button>
                            </ConfigProvider>
                        </Col>
                        <Col>
                            <ConfigProvider theme={S.themeAntdConfigButtonSuccess}>
                                <Button
                                    color="primary"
                                    htmlType="submit"
                                    disabled={!isValid}
                                    icon={<PlusOutlined />}
                                >
                                    Criar Tarefa
                                </Button>
                            </ConfigProvider>
                        </Col>
                    </Row>
                }



                onCancel={handleCancel}
                closable={false}
                maskClosable={false}
                styles={{
                    mask: { backdropFilter: 'blur(10px)' },
                }}


            >

                <Form layout="vertical" onFinish={handleSubmit((data) => {
                    console.log('Data:', data);
                    onFinish(data);
                    reset();
                })}>

                   
                 

                    <Row gutter={16}>
                        <Col span={20}>
                            <S.FormItem
                                label="Título"
                                name="task"
                                required
                                validateStatus={errors.task ? "error" : undefined}
                                help={errors.task && (
                                    <span>
                                        <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
                                        {errors.task.message as string || ""}
                                    </span>
                                )}
                            >
                                <Controller
                                    name="task"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="task"
                                            placeholder="Digite o título da tarefa"
                                            showCount
                                            maxLength={20}
                                        />
                                    )}
                                />
                            </S.FormItem>
                        </Col>

                        {/* Campo Switch Ativo */}
                        <Col span={4}>
                            <S.FormItem
                                label="Ativo"
                                name="isActive"
                                valuePropName="checked"
                            >
                                <Controller
                                    name="isActive"
                                    control={control}
                                    render={({ field }) => (
                                        <Switch
                                            {...field}
                                            id="isActive"
                                            checked={field.value}
                                            defaultChecked
                                            checkedChildren={<CheckOutlined />}
                                            unCheckedChildren={<CloseOutlined />}
                                            onChange={(checked) => field.onChange(checked)}
                                        />
                                    )}
                                />
                            </S.FormItem>
                        </Col>
                    </Row>

                    {/* Descrição */}
                    <S.FormItem
                        label="Descrição"
                        name="description"
                        required
                        validateStatus={errors.description ? "error" : undefined}
                        help={errors.description && (
                            <span>
                                <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
                                {errors.description.message as string || ""}
                            </span>
                        )}
                    >
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="description"
                                    placeholder="Digite a descrição"
                                    showCount
                                />
                            )}
                        />
                    </S.FormItem>

                    {/* Data de Expiração */}
                    <S.FormItem
                        label="Data de Expiração"
                        name="expirationDate"
                        validateStatus={errors.expirationDate ? "error" : undefined}
                        help={errors.expirationDate && (
                            <span>
                                <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
                                {errors.expirationDate.message as string || ""}
                            </span>
                        )}
                    >
                        <Controller
                            name="expirationDate"
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    {...field}
                                    id="expirationDate"
                                    placeholder="Selecione a data de expiração"
                                    format="DD/MM/YYYY"
                                    style={{ width: '100%' }}
                                    allowClear
                                />
                            )}
                        />
                    </S.FormItem>
                </Form>
            </S.Modal>
    );
};

export default AddTaskModal;
