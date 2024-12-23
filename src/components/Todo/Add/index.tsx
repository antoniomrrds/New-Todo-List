import { WarningOutlined } from '@ant-design/icons';
import { Form, Row, Col, TimePicker, TimePickerProps, Select, SelectProps, Skeleton } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from "@/components/Todo/Add/AddTasks.styles"; // Ajuste conforme sua estrutura de styles
import dayjs from 'dayjs'; // Importando dayjs para manipular as datas

import { CreateToDo, taskSchema } from "./validators";
import { useQuery } from "react-query";
import { Category, categoryservices } from "@/api/services/category";
import { AxiosError } from "axios";
import { ButtonModal } from "./ButtonModal";
import * as G from "@/styles/global-styles";
import { BreadCrumb, BreadcrumbItems } from "@/components/shared/BreadCrumb";
import SwitchFieldCustom from '@/components/shared/Form/Switch';
import { useNavigate } from 'react-router-dom';
import { FormInputCustom } from '@/components/shared/Form/Input';
import { DatePickerField } from './DatePickerField';
import { TextEditor } from '@/components/shared/Form/TextEditor';

const items: BreadcrumbItems = [
  { title: 'Todo', href: '/todo' },
  { title: 'Adicionar Tarefa' },
]

const tagsMock = [
  { id: 1, name: 'Urgente' },
  { id: 2, name: 'Importante' },
  { id: 3, name: 'Pendência' },
  { id: 4, name: 'Fácil' },
  { id: 5, name: 'Longo Prazo' }
];

const sharedProps: SelectProps = {
  mode: 'multiple',
  style: { width: '100%' },
  placeholder: 'Select Item...',
  maxTagCount: 'responsive',
  allowClear: true,
};



const AddTodo: React.FC = () => {

  const { data: categories = [], isLoading, error } = useQuery<Category[], AxiosError>('categories', categoryservices.getAllCategories);
  const navigate = useNavigate();

  const { control, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm<CreateToDo>({
    resolver: yupResolver(taskSchema),
    mode: "onChange",
  });

  const handleCancel = () => {
    reset();
    navigate('/todo');
  };

  const showExpiration = watch("showExpiration", false);


  const onChangeTimePicker: TimePickerProps['onChange'] = (_, timeString) => {
    if (typeof timeString === "string") {
      setValue('expirationTime', timeString);
    }
  };


  const onFinishHandler = (data: CreateToDo) => {
    console.log('Dados enviados:', data);
    reset();
  };


  return (

    <G.StyledContainer>
      <BreadCrumb items={items} />
      <G.CardMain title="Adicionar Tarefa"
        hoverable>
        <Skeleton
          active
          loading={isLoading}
        >
          <Form layout="vertical" onFinish={handleSubmit(onFinishHandler)}>
            <Row gutter={16}>
              <Col xs={24} sm={20}>
                <FormInputCustom
                  name="task"
                  control={control}
                  label="Título"
                  maxLength={100}
                  placeholder="Digite o título da tarefa"
                  required
                  errors={errors}
                />
              </Col>

              <Col xs={24} sm={4}>
                <SwitchFieldCustom
                  label="Ativo"
                  defaultChecked={true}
                  name="isActive"
                  control={control} errors={errors}
                  tooltip='Marque como Ativo para poder mostrar na busca default.' />
              </Col>
            </Row>

            <TextEditor
              name="description"
              control={control}
              label="Descrição"
              placeholder="Digite a descrição aqui"
              required
              errors={errors}
              setValue={setValue}
            />
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <SwitchFieldCustom
                  label="Mostrar Data de Expiração"
                  name="showExpiration"
                  control={control}
                  errors={errors}
                  tooltip="Selecione para exibir campos de data e hora de expiração"
                />

              </Col>
              <Col xs={24} sm={12}>
                <SwitchFieldCustom
                  label="Esta concluído?"
                  name="isCompleted"
                  control={control}
                  errors={errors}
                  tooltip="Selecione para marcar a tarefa como concluída"
                />

              </Col>
            </Row>
            {showExpiration && (
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <DatePickerField
                    name="expirationDate"
                    label="Data de Expiração"
                    control={control}
                    errors={errors}
                  />
                </Col>

                <Col xs={24} md={12}>
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
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <S.FormItem
                  label="Categorias"
                  name="categories"
                  required
                  validateStatus={errors.categories ? "error" : undefined}
                  help={errors.categories && (
                    <span>
                      <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
                      {errors.categories?.message || ""}
                    </span>
                  )}
                >
                  <Controller
                    name="categories"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        {...sharedProps}
                        placeholder="Selecione as categorias"
                      >
                        {categories.map((category) => (
                          <Select.Option key={category.id} value={category.id} label={category.name}>
                            {category.name}
                          </Select.Option>
                        ))}
                      </Select>
                    )}
                  />
                </S.FormItem>
              </Col>

              <Col xs={24} md={12}>
                <S.FormItem
                  label="Tags"
                  name="tags"
                  required
                  validateStatus={errors.tags ? "error" : undefined}
                  help={errors.tags && (
                    <span>
                      <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
                      {errors.tags?.message || ""}
                    </span>
                  )}
                >
                  <Controller
                    name="tags"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        mode="multiple"
                        allowClear
                        placeholder="Selecione as tags"
                        optionLabelProp="label"
                        style={{ width: '100%' }}
                      >
                        {tagsMock.map((tag) => (
                          <Select.Option key={tag.id} value={tag.id} label={tag.name}>
                            {tag.name}
                          </Select.Option>
                        ))}
                      </Select>
                    )}
                  />
                </S.FormItem>
              </Col>
            </Row>
            <ButtonModal handleCancel={handleCancel} />
          </Form>
        </Skeleton>
      </G.CardMain>
    </G.StyledContainer>

  );
};

export default AddTodo;
