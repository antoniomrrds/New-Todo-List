// Ant Design Components
import { Form, Row, Col, Skeleton, App as AppAntd, Switch, Spin } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

// Validators
import {
  CreateToDoYup,
  todoValidationSchema,
} from "@/components/Todo/Add/validators";
import { yupResolver } from "@hookform/resolvers/yup";

// React Hook Form
import { useForm } from "react-hook-form";

// React Router
import { useNavigate } from "react-router-dom";

// Custom Components
import { ButtonGroup } from "@/components/Todo/Add/ButtonGroup";
import { BreadCrumb, BreadcrumbItems } from "@/components/shared/BreadCrumb";
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
import {
  ErrorNotification,
  SuccessNotification,
} from "@/components/shared/Notifications";

// API Services
import { useCreateToDoMutation } from "@/api/service/toDo/actions";
import { CreateToDo } from "@/api/service/toDo/types";
import { useQueryCategories } from "@/api/service/category/actions";
import { useQueryTags } from "@/api/service/tag/actions/useQueryTag";

// Enums and Constants
import { CompletionStatus, TodoStatus } from "./enum";
import { ErrorCodes } from "@/api/error/error-codes";

// React and Hooks
import { useCallback, useEffect } from "react";

// Styles
import * as G from "@/styles/global-styles";
import * as S from "@/components/shared/Form/form-styles";

const items: BreadcrumbItems = [
  { title: "Todo", href: "/todo" },
  { title: "Adicionar Tarefa" },
];

export const AddTodo: React.FC = () => {
  const { categories, errorCategories, isLoadingCategories } =
    useQueryCategories();
  const { errorTags, tags, isLoadingTags } = useQueryTags();

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
          errorMessage
        );
      }
    });

    if (errorCategories || errorTags) goToTodoPage();
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
        SuccessNotification(
          notification,
          "Tarefa criada",
          "Tarefa criada com sucesso"
        );
        console.log("response:", response);
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
                    help={
                      errors["isActive"] ? (
                        <FieldError name={"isActive"} errors={errors} />
                      ) : null
                    }
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
                    help={
                      errors["isCompleted"] ? (
                        <FieldError name={"isCompleted"} errors={errors} />
                      ) : null
                    }
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
