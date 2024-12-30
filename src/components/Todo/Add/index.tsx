import { Form, Row, Col, Skeleton, App as AppAntd, Switch, Spin } from "antd";
import {
  CreateToDoYup,
  todoValidationSchema,
} from "@/components/Todo/Add/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { ButtonGroup } from "@/components/Todo/Add/ButtonGroup";
import * as G from "@/styles/global-styles";
import { BreadCrumb, BreadcrumbItems } from "@/components/shared/BreadCrumb";
import * as S from "@/components/shared/Form/form-styles";
import {
  FormInputCustom,
  SwitchFieldCustom,
  DatePickerCustom,
  TextEditorCustom,
  SelectFieldCustom,
  TimePickerCustom,
  FieldError,
  getValidateStatus,
} from "@/components/shared/Form";
import { Tag, tagservices } from "@/api/service";
import { ErrorNotification, SuccessNotification } from "@/components/shared/Notifications";
import { useCreateToDoMutation } from "@/api/toDo/actions";
import { CreateToDo } from "@/api/toDo/types";
import { ApiErrorResponse } from "@/api/error/types";
import { useCallback, useEffect } from "react";
import { CompletionStatus, TodoStatus } from "./enum";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { ErrorCodes } from "@/api/error/error-codes";
import { Category } from "@/api/categories/types";
import { categoryApi } from "@/api/categories";

const items: BreadcrumbItems = [
  { title: "Todo", href: "/todo" },
  { title: "Adicionar Tarefa" },
];

export const AddTodo: React.FC = () => {
  const {
    data: categories = [],
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useQuery<Category[], AxiosError<ApiErrorResponse>>(
    "categories",
    categoryApi.getAllCategories,
    {
      retry: false,
    }
  );

  const {
    data: tags = [],
    isLoading: isLoadingTags,
    error: errorTags,
  } = useQuery<Tag[], AxiosError<ApiErrorResponse>>(
    "tags",
    tagservices.getAllTags,
    {
      retry: false,
    }
  );

  const { notification } = AppAntd.useApp();
  const navigate = useNavigate();

  const goToTodoPage = useCallback(() => navigate("/todo"), [navigate]);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CreateToDoYup>({
    resolver: yupResolver(todoValidationSchema),
    mode: "onChange",
    defaultValues: {
      isActive: TodoStatus.Active,
      isCompleted: CompletionStatus.Incomplete,
      showExpiration: false,
    },
  });

  const showExpiration = watch("showExpiration");
  useEffect(() => {
    const errorMap = {
      categorias: errorCategories ? `${errorCategories.message}` : "",
      tags: errorTags ? `${errorTags.message}` : "",
    };

    Object.entries(errorMap).forEach(([entity, errorMessage]) => {
      if (errorMessage) {
        const entityName = entity.charAt(0).toUpperCase() + entity.slice(1);
  
        ErrorNotification(
          notification,
          `Erro ao carregar ${entityName}`,
          errorMessage, 
        );
      
      }
    });

    if(errorCategories || errorTags) goToTodoPage();
    // const firstError = Object.entries(errorMap).find(([, value]) => value);

    // if (firstError) {
    //   const [entity, errorMessage] = firstError;
    //   const entityName = entity.charAt(0).toUpperCase() + entity.slice(1);

    //   ErrorNotification(
    //     notification,
    //     `Erro ao carregar ${entityName}`,
    //     errorMessage, 
    //     [],
    //     true,
    //     0
    //   );
    //   SuccessNotification(notification, "Tarefa criada", "Tarefa criada com sucesso" ,true, 0);
        
    // }
  }, [errorCategories, errorTags, notification, goToTodoPage]);

  const handleCancel = () => {
    reset();
    goToTodoPage();
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

  const { mutate: createToDo, isLoading: createToDoIsLoading } =
    useCreateToDoMutation({
      onSuccess: (response) => {
        const location = response.headers.location;
        SuccessNotification(notification, "Tarefa criada", "Tarefa criada com sucesso");
        console.log("Location:", location);
         goToTodoPage();
      },
      onError: ({ errors, status, message }) => {
        if (status === ErrorCodes.BAD_REQUEST) {
          ErrorNotification(
            notification,
            "Erro ao criar tarefa",
            message,
            errors
          );
        } else {
          ErrorNotification(notification, "Erro ao criar tarefa", message);
          goToTodoPage();
        }
      },
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
            size="large"
            delay={500}
          >
            <Form layout="vertical" onFinish={handleSubmit(onFinishHandler)}>
              <Row gutter={[8, 8]}>
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
                    help={<FieldError name={"isActive"} errors={errors} />}
                    tooltip="Marque como Ativo para poder mostrar na busca default."
                  >
                    <Switch
                      {...register("isActive")}
                      defaultChecked={watch("isActive") === TodoStatus.Active}
                      checkedChildren={<CheckOutlined />}
                      unCheckedChildren={<CloseOutlined />}
                      onChange={(checked) =>
                        setValue(
                          "isActive",
                          checked ? TodoStatus.Active : TodoStatus.Inactive
                        )
                      }
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
              <Row gutter={[8, 8]}>
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
                    help={<FieldError name={"isCompleted"} errors={errors} />}
                    tooltip="Selecione para marcar a tarefa como concluída"
                  >
                    <Switch
                      {...register("isCompleted")}
                      defaultChecked={
                        watch("isCompleted") === CompletionStatus.Completed
                      }
                      checkedChildren={<CheckOutlined />}
                      unCheckedChildren={<CloseOutlined />}
                      onChange={(checked) =>
                        setValue(
                          "isCompleted",
                          checked
                            ? CompletionStatus.Completed
                            : CompletionStatus.Incomplete
                        )
                      }
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
              <Row gutter={[8, 8]}>
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
              <ButtonGroup
                handleCancel={handleCancel}
                isLoading={createToDoIsLoading}
              />
            </Form>
          </Spin>
        </Skeleton>
      </G.CardMain>
    </G.StyledContainer>
  );
};
