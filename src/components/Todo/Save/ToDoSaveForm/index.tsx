import { ActivationState } from '@/api/service/toDo/enum';
import { ToDoDetails } from '@/api/service/toDo/types';

import {
  App,
  Col,
  DatePicker,
  Input,
  Row,
  Select,
  Switch,
  TimePicker,
  Form,
  Skeleton,
} from 'antd';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import * as S from '@/components/Todo/Save/ToDoSaveForm/todo-save-form-styles';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill-new';
import '@/styles/react-quill.css';
import dayjs from 'dayjs';
import { TodoActionButtons } from '@/components/Todo/Save/ActionButtonGroup';
import { SpinCustom } from '@/components/shared/Spin';
import {
  useCategoriesAndTags,
  useErrorHandling,
  useTodoForm,
} from '@/components/Todo/Save/ToDoSaveForm/hooks';
import { useSaveToDo } from '@/api/service/toDo/actions';
import { FieldError } from '@/components/shared/Form';
import { SelectProps } from 'antd/lib';

type ToDoSaveFormProps = {
  toDoItem: ToDoDetails | null;
  goToTodoPage: () => void;
};

export const ToDoSaveForm: FC<ToDoSaveFormProps> = ({
  toDoItem,
  goToTodoPage,
}) => {
  const { notification } = App.useApp();

  const { isSaving, handleFormSubmit } = useSaveToDo({
    notification,
    goToTodoPage,
  });

  const { control, handleSubmit, errors, isExpirationEnabled, reset } =
    useTodoForm({
      toDoItem,
      handleFormSubmit,
    });

  const sharedProps: SelectProps = {
    mode: 'multiple',
    style: { width: '100%' },
    maxTagCount: 'responsive',
    allowClear: true,
  };

  const {
    categories,
    tags,
    errorCategories,
    errorTags,
    isLoadingCategoriesAndTags,
  } = useCategoriesAndTags();

  useErrorHandling({
    errorCategories,
    errorTags,
    notification,
    goToTodoPage,
  });

  const handleCancel = () => {
    reset();
    goToTodoPage();
  };

  return (
    <SpinCustom loading={isSaving} text="Salvando os dados...">
      <Skeleton active loading={isLoadingCategoriesAndTags}>
        <Form layout="vertical" onFinish={handleSubmit(handleFormSubmit)}>
          <Row gutter={[8, 8]} align={'top'}>
            <Col xs={24} sm={20}>
              <S.FormItem
                validateStatus={errors.name ? 'error' : ''}
                label="Nome"
                tooltip="Campo obrigatório!"
                required={errors.name ? true : false}
                name="name"
                help={
                  errors.name ? (
                    <FieldError name={'name'} errors={errors} />
                  ) : null
                }
                hasFeedback
              >
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="name" // ID do Input corresponde ao LabelForm
                      placeholder="Digite o nome da tarefa"
                      showCount
                      allowClear={true}
                      maxLength={100}
                    />
                  )}
                />
              </S.FormItem>
            </Col>
            <Col xs={24} sm={4}>
              <S.FormItem
                validateStatus={errors.isActive ? 'error' : 'success'}
                label="Ativo"
                tooltip="Selecione para ativar a tarefa"
                hasFeedback
                name={'isActive'}
              >
                <Controller
                  name="isActive"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      ref={field.ref}
                      id="isActive" // ID do Switch corresponde ao LabelForm
                      defaultChecked={field.value === ActivationState.Active}
                      checked={field.value === ActivationState.Active}
                      checkedChildren={<CheckOutlined />}
                      unCheckedChildren={<CloseOutlined />}
                      onChange={(checked: boolean) =>
                        field.onChange(
                          checked
                            ? ActivationState.Active
                            : ActivationState.Inactive,
                        )
                      }
                    />
                  )}
                />
              </S.FormItem>
            </Col>
          </Row>

          <S.FormItem
            validateStatus={errors.description ? 'error' : ''}
            label="Descrição"
            tooltip="Campo obrigatório!"
            required={errors.description ? true : false}
            help={
              errors.description ? (
                <FieldError name={'description'} errors={errors} />
              ) : null
            }
          >
            <Controller
              name={'description'}
              control={control}
              render={({ field }) => {
                return (
                  <ReactQuill
                    {...field}
                    placeholder="Digite a descrição aqui"
                    style={{ width: '100%' }}
                  />
                );
              }}
            />
          </S.FormItem>
          <Row gutter={[8, 8]}>
            <Col xs={24} sm={12}>
              <S.FormItem
                id="showExpiration"
                label="Mostrar data de expiração"
                tooltip="Selecione para exibir campos de data e hora de expiração"
                name="showExpiration"
              >
                <Controller
                  name="showExpiration"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      title="Mostrar data de expiração"
                      id="showExpiration" // ID do Switch corresponde ao LabelForm
                      checkedChildren={<CheckOutlined />}
                      unCheckedChildren={<CloseOutlined />}
                      defaultChecked={field.value}
                      checked={field.value === true}
                      onChange={(checked: boolean) => {
                        field.onChange(checked);
                      }}
                    />
                  )}
                />
              </S.FormItem>
            </Col>
            <Col xs={24} sm={12}>
              <S.FormItem
                validateStatus={errors.isCompleted ? 'error' : 'success'}
                label="Esta concluído?"
                tooltip="Selecione para marcar a tarefa como concluída"
                hasFeedback
                name={'isCompleted'}
              >
                <Controller
                  name="isCompleted"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      ref={field.ref}
                      id="isCompleted" // ID do Switch corresponde ao LabelForm
                      defaultChecked={field.value === ActivationState.Active}
                      checked={field.value === ActivationState.Active}
                      checkedChildren={<CheckOutlined />}
                      unCheckedChildren={<CloseOutlined />}
                      onChange={(checked: boolean) =>
                        field.onChange(
                          checked
                            ? ActivationState.Active
                            : ActivationState.Inactive,
                        )
                      }
                    />
                  )}
                />
              </S.FormItem>
            </Col>
          </Row>
          {isExpirationEnabled && (
            <Row gutter={[8, 8]} align={'top'}>
              <Col xs={24} md={12}>
                <S.FormItem
                  validateStatus={errors.expirationDate ? 'error' : ''}
                  label="Data de Expiração"
                  name="expirationDate"
                  help={
                    errors.expirationDate ? (
                      <FieldError name={'expirationDate'} errors={errors} />
                    ) : null
                  }
                  hasFeedback
                >
                  <Controller
                    name={'expirationDate'}
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        id="expirationDate"
                        placeholder="Selecione a data de expiração"
                        style={{ width: '100%' }}
                        {...field}
                        format="DD/MM/YYYY"
                        value={field.value}
                        onChange={(date) => field.onChange(date)} // Apenas setar
                      />
                    )}
                  />
                </S.FormItem>
              </Col>
              <Col xs={24} md={12}>
                <S.FormItem
                  validateStatus={errors.expirationTime ? 'error' : ''}
                  label="Hora de Expiração"
                  name="expirationTime"
                  help={
                    errors.expirationTime ? (
                      <FieldError name={'expirationTime'} errors={errors} />
                    ) : null
                  }
                  hasFeedback
                >
                  <Controller
                    name={'expirationTime'}
                    control={control}
                    render={({ field }) => (
                      <TimePicker
                        {...field}
                        id="expirationTime"
                        format="HH:mm:ss"
                        placeholder="Selecione a hora de expiração"
                        style={{ width: '100%' }}
                        value={
                          field.value ? dayjs(field.value, 'HH:mm:ss') : null
                        }
                        onChange={(time) => field.onChange(time)} // Apenas setar
                      />
                    )}
                  />
                </S.FormItem>
              </Col>
            </Row>
          )}
          <Row gutter={[8, 8]} align={'top'}>
            <Col xs={24} md={12}>
              <S.FormItem
                validateStatus={errors.tags ? 'error' : ''}
                label="Tags"
                name="tags"
                help={
                  errors.tags ? (
                    <FieldError name={'tags'} errors={errors} />
                  ) : null
                }
                hasFeedback
              >
                <Controller
                  name={'tags'}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      id="tags"
                      placeholder="Selecione as tags"
                      allowClear={true}
                      {...sharedProps}
                    >
                      {tags.map((option) => (
                        <Select.Option key={option.id} value={option.id}>
                          {option.name}
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                />
              </S.FormItem>
            </Col>
            <Col xs={24} md={12}>
              <S.FormItem
                validateStatus={errors.categories ? 'error' : ''}
                label="Categorias"
                name="categories"
                help={
                  errors.categories ? (
                    <FieldError name={'categories'} errors={errors} />
                  ) : null
                }
                hasFeedback
              >
                <Controller
                  name={'categories'}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      {...sharedProps}
                      id="categories"
                      placeholder="Selecione as categorias"
                    >
                      {categories?.map((option) => (
                        <Select.Option key={option.id} value={option.id}>
                          {option.name}
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                />
              </S.FormItem>
            </Col>
          </Row>
          <S.FormItem>
            <TodoActionButtons
              onCancel={handleCancel}
              isLoading={false}
              idUser={toDoItem?.id}
            />
          </S.FormItem>
        </Form>
      </Skeleton>
    </SpinCustom>
  );
};
