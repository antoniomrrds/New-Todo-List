import { Form, Row, Col, Skeleton } from 'antd';

import { CreateToDo, taskSchema } from "@/components/Todo/Add/validators";
import { yupResolver } from '@hookform/resolvers/yup';


import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import { useQuery } from "react-query";
import { AxiosError } from "axios";

import { ButtonModal } from "./ButtonModal";
import * as G from "@/styles/global-styles";
import { BreadCrumb, BreadcrumbItems } from "@/components/shared/BreadCrumb";
import {
  FormInputCustom,
  SwitchFieldCustom,
  DatePickerCustom,
  TextEditorCustom,
  SelectFieldCustom,
  TimePickerCustom
} from '@/components/shared/Form';
import { Category, categoryservices, Tag, tagservices } from '@/api/services';

const items: BreadcrumbItems = [
  { title: 'Todo', href: '/todo' },
  { title: 'Adicionar Tarefa' },
]

export const AddTodo: React.FC = () => {

  const { data: categories = [],  isLoading:isLoadingCategories   , error:errorCategories } = useQuery<Category[], AxiosError>('categories', categoryservices.getAllCategories);
  const { data: tags = [] , isLoading: isLoadingTags , error: errorTags} = useQuery<Tag[], AxiosError>('tags', tagservices.getAllTags);
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


  const onFinishHandler = (data: CreateToDo) => {
    console.log('Dados enviados:', data);
    reset();
  };


  return (
    <G.StyledContainer>
      <BreadCrumb items={items} />
      <G.CardMain title="Adicionar Tarefa" hoverable>
        <Skeleton
          active
          loading={isLoadingCategories && isLoadingTags}
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
            <TextEditorCustom
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
                  <DatePickerCustom
                    name="expirationDate"
                    label="Data de Expiração"
                    control={control}
                    errors={errors}

                  />
                </Col>
                <Col xs={24} md={12}>
                  <TimePickerCustom
                    name="expirationTime"
                    label="Hora de Expiração"
                    control={control}
                    errors={errors}
                  />
                </Col>
              </Row>
            )}
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <SelectFieldCustom
                  name="categories"
                  control={control}
                  errors={errors}
                  label="Categorias"
                  options={categories}
                  placeholder="Selecione as categorias"
                />
              </Col>
              <Col xs={24} md={12}>
                <SelectFieldCustom
                  name="tags"
                  control={control}
                  errors={errors}
                  label="Tags"
                  options={tags}
                  placeholder="Selecione as tags"
                />
              </Col>
            </Row>
            <ButtonModal handleCancel={handleCancel} />
          </Form>
        </Skeleton>
      </G.CardMain>
    </G.StyledContainer>
  );
};

