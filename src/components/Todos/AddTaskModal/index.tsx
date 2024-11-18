import React from "react";
import { CheckOutlined, CloseOutlined, WarningOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Input, Form, Row, Col, Switch, DatePicker, TimePicker, DatePickerProps, TimePickerProps } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Flex } from "antd";
import * as S from "./AddTasks.styles"; // Ajuste conforme sua estrutura de styles
import dayjs from 'dayjs'; // Importando dayjs para manipular as datas

import ReactQuill from "react-quill-new"; // Importando a versão do ReactQuill que você está usando

import 'react-quill-new/dist/quill.snow.css';
import { ButtonModal } from "@/components/Todos/AddTaskModal/ButtonModal";
import { CreateTask, taskSchema } from "./validators";

interface AddTaskModalProps {
  open: boolean;
  onCancel: () => void;
  onFinish: (values: CreateTask) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ open, onCancel, onFinish }) => {
  const { control, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm<CreateTask>({
    resolver: yupResolver(taskSchema),
    mode: "onChange",
  });
  console.log('errors', errors);
  const handleCancel = () => {
    reset();
    onCancel();
  };

  const showExpiration = watch("showExpiration", false);

  const onChangeDatePicker: DatePickerProps['onChange'] = (date) => {
    if (date) {
      setValue('expirationDate', date);
    }
  };

  const onChangeTimePicker: TimePickerProps['onChange'] = (_, timeString) => {
    console.log("🚀 ~ timeString:", timeString)
    
    if (typeof timeString === "string") {
      setValue('expirationTime', timeString);
    } 
  };

  const onFinishHandler = (data: CreateTask) => {
    console.log('Dados enviados:', data);

    
    onFinish(data);  // Passando os dados DD/MM/YYYYpara o handler externo
    reset();  // Resetando os campos após o envio
  };

  return (
    <S.Modal
      open={open}
      centered
      title={
        <Flex justify="space-between" align="middle">
          <S.Title level={4}>Adicionar Nova Tarefa</S.Title>
          <ConfigProvider theme={S.themeAntdConfigButton}>
            <Button icon={<CloseOutlined />} onClick={handleCancel} />
          </ConfigProvider>
        </Flex>
      }
      onCancel={handleCancel}
      closable={false}
      maskClosable={false}
      styles={{
        mask: { backdropFilter: 'blur(10px)' },
      }}
      footer={null}
    >
      <Form layout="vertical" onFinish={handleSubmit(onFinishHandler)}>
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
                  {errors.task?.message || ""}
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
        <S.FormItem
          label="Descrição"
          name="description"
          required
          validateStatus={errors.description ? "error" : undefined}
          help={errors.description && (
            <span>
              <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
              {errors.description?.message || ""}
            </span>
          )}
        >
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <ReactQuill
                {...field}
                id="description"
                onChange={(value) => {
                  setValue('description', value);
                }}
                placeholder="Digite a descrição aqui"
                value={field.value || ''}  // Garantir que o valor é passado corretamente
              />
            )}
          />
        </S.FormItem>

        <S.FormItem
          label="Mostrar Data de Expiração"
          name="showExpiration"
          valuePropName="checked"
          tooltip="Selecione para exibir campos de data e hora de expiração"
          validateStatus={errors.showExpiration ? "error" : undefined}
          help={errors.showExpiration && (
            <span>
              <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
              {errors.showExpiration?.message || ""}
            </span>
          )}
        >
          <Controller
            name="showExpiration"
            control={control}
            render={({ field }) => (
              <Switch
                {...field}
                id="showExpiration"
                checked={field.value}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                onChange={(checked) => field.onChange(checked)}
              />
            )}
          />
        </S.FormItem>

        {showExpiration && (
          <Row gutter={16}>
            <Col span={15}>
              <S.FormItem
                label="Data de Expiração"
                name="expirationDate"
                validateStatus={errors.expirationDate ? "error" : undefined}
                help={errors.expirationDate && (
                  <span>
                    <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
                    {errors.expirationDate?.message || ""}
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
                      value={field.value ? dayjs(field.value) : null}
                      onChange={onChangeDatePicker}
                      style={{ width: '100%' }}
                      allowClear
                    />
                  )}
                />
              </S.FormItem>
            </Col>

            <Col span={9}>
              <S.FormItem
                label="Hora de Expiração"
                name="expirationTime"
                validateStatus={errors.expirationTime ? "error" : undefined}
                help={errors.expirationTime && (
                  <span>
                    <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
                    {errors.expirationTime?.message || ""}
                  </span>
                )}
              >
                <Controller
                  name="expirationTime"
                  control={control}
                  render={({ field }) => (
                    <TimePicker
                      {...field}
                      id="expirationTime"
                      placeholder="Selecione a hora"
                      format="HH:mm:ss"
                      value={field.value ? dayjs(field.value, "HH:mm:ss") : null}
                      onChange={onChangeTimePicker}
                      defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                      style={{ width: '100%' }}
                      allowClear
                    />
                  )}
                />
              </S.FormItem>
            </Col>
          </Row>
        )}
        <ButtonModal handleCancel={handleCancel} />
      </Form>
    </S.Modal>

  );
};

export default AddTaskModal;
