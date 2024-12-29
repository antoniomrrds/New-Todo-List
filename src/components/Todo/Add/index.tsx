import { Form, Row, Col, Skeleton, App as AppAntd, Switch, Spin } from 'antd';
import { CreateToDoYup, todoValidationSchema } from "@/components/Todo/Add/validators";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { ButtonGroup } from "@/components/Todo/Add/ButtonGroup";
import * as G from "@/styles/global-styles";
import { BreadCrumb, BreadcrumbItems } from "@/components/shared/BreadCrumb";
import * as S from '@/components/shared/Form/form-styles';
import {
  FormInputCustom,
  SwitchFieldCustom,
  DatePickerCustom,
  TextEditorCustom,
  SelectFieldCustom,
  TimePickerCustom,
  FieldError,
  getValidateStatus,
} from '@/components/shared/Form';
import { Category, categoryservices, Tag, tagservices } from '@/api/service';
import { ErrorNotification } from '@/components/shared/Notifications';
import { useCreateToDoMutation } from '@/api/toDo/actions';
import { CreateToDo } from '@/api/toDo/types';
import { ApiErrorResponse } from '@/api/error/types';
import { useEffect } from 'react';
import { CompletionStatus, TodoStatus } from './enum';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const items: BreadcrumbItems = [
  { title: 'Todo', href: '/todo' },
  { title: 'Adicionar Tarefa' },
];




export const AddTodo: React.FC = () => {
  const { data: categories = [], isLoading: isLoadingCategories, error: errorCategories } = useQuery<Category[], AxiosError<ApiErrorResponse>>('categories', categoryservices.getAllCategories, {
    retry: false
  });
  const { data: tags = [], isLoading: isLoadingTags, error: errorTags } = useQuery<Tag[], AxiosError<ApiErrorResponse>>('tags', tagservices.getAllTags, {
    retry: false
  });

  const { notification } = AppAntd.useApp();
  const navigate = useNavigate();

  const { control, register, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm<CreateToDoYup>({
    resolver: yupResolver(todoValidationSchema),
    mode: "onChange",
    defaultValues: {
      isActive: TodoStatus.Active,
      isCompleted: CompletionStatus.Incomplete,
      showExpiration: false,      
    }
  });

  const showExpiration = watch("showExpiration");

  useEffect(() => {
    if (errorCategories) {
      ErrorNotification(notification, 'Erro ao Carregar Categorias', errorCategories.message);
    }

    if (errorTags) {
      ErrorNotification(notification, 'Erro ao Carregar Tags', errorTags.message);
    }

    if (errorCategories || errorTags) navigate('/todo');
  }, [errorCategories, errorTags, navigate, notification]);

  const handleCancel = () => {
    reset();
    navigate('/todo');
  };

  const mapToDoFormToCreateToDo = (data: CreateToDoYup): CreateToDo => {
    return {
      Active: data.isActive,
      idTags: data.tags,
      idCategories: data.categories,
      title: data.title,
      description: data.description,
      isCompleted: data.isCompleted,
      expirationDate: data.expirationDateTime || null,
    };  
  };

  const { mutate: createToDo , isLoading: createToDoIsLoading } = useCreateToDoMutation({
    onSuccess: (response) => {
      const location = response.headers.location;
      // ErrorNotification(notification, 'tarefa criada', 'Tarefa criada com sucesso');
      console.log('Location:', location);
      // navigate('/todo');
    },
    onError: ({
      errors,
      message,
    }) => ErrorNotification(notification, 'Erro ao Criar Tarefa', message, errors)
  });

  const onFinishHandler = (data: CreateToDoYup) => {
    const dataToSend = mapToDoFormToCreateToDo(data);
    createToDo(dataToSend);
  };

  return (
    <G.StyledContainer>
      <BreadCrumb items={items} />
      <G.CardMain title="Adicionar Tarefa" hoverable>
        <Skeleton active loading={isLoadingCategories && isLoadingTags}>
        <Spin
         spinning={createToDoIsLoading} 
         tip="Salvando os dados..."
         size='large'
         delay={500}>
          <Form layout="vertical" onFinish={handleSubmit(onFinishHandler)}>
            <Row gutter={16}>
              <Col xs={24} sm={20}>
                <FormInputCustom
                  name="title"
                  control={control}
                  label="Título"
                  maxLength={100}
                  placeholder="Digite o título da tarefa"
                  required
                  errors={errors}
                />
              </Col>
              <Col xs={24} sm={4}>
                <S.FormItem
                  label="Ativo"
                  name="isActive"
                  valuePropName="checked"
                  validateStatus={getValidateStatus("isActive", errors)}
                  help={<FieldError name={'isActive'} errors={errors} />}
                  tooltip='Marque como Ativo para poder mostrar na busca default.'>
                  <Switch
                    {...register("isActive")}
                    defaultChecked={watch("isActive") === TodoStatus.Active}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    onChange={(checked) => setValue("isActive", checked ? TodoStatus.Active : TodoStatus.Inactive)}
                  />
                </S.FormItem>
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
              <S.FormItem
                  label="Esta concluído?"
                  name="isCompleted"
                  valuePropName="checked"
                  validateStatus={getValidateStatus("isCompleted", errors)}
                  help={<FieldError name={'isCompleted'} errors={errors} />}
                  tooltip="Selecione para marcar a tarefa como concluída">
                  <Switch
                    {...register("isCompleted")}
                    defaultChecked={watch("isCompleted") === CompletionStatus.Completed}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    onChange={(checked) => setValue("isCompleted", checked ? CompletionStatus.Completed : CompletionStatus.Incomplete)}
                  />
                </S.FormItem>
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
            <ButtonGroup handleCancel={handleCancel} isLoading={createToDoIsLoading} />
          </Form>
          </Spin>
        </Skeleton>
      </G.CardMain>
    </G.StyledContainer>
  );
};
