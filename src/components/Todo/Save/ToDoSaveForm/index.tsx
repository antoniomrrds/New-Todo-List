import { ActivationState } from '@/api/service/toDo/enum';
import { ToDoDetails } from '@/api/service/toDo/types';
import {
  CreateTodoValidationType,
  todoValidationSchema,
} from '@/components/Todo/Add/validators';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Switch,
  TimePicker,
} from 'antd';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import * as S from '@/components/Todo/Save/ToDoSaveForm/todo-save-form-styles';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { LabelForm } from '@/components/Todo/Save/ToDoSaveForm/Label';
import ReactQuill from 'react-quill-new';
import '@/styles/react-quill.css';
import dayjs from 'dayjs';
import { Category } from '@/api/service/category/types';
import { Tag } from '@/api/service/tag/types';
import { TodoActionButtons } from '@/components/Todo/Save/ActionButtonGroup';

type ToDoSaveFormProps = {
  toDoItem: ToDoDetails | null;
  categories: Category[];
  tags: Tag[];
};
export const ToDoSaveForm: FC<ToDoSaveFormProps> = ({
  toDoItem,
  tags,
  categories,
}) => {
  // console.log('dateFormated', dateFormated);
  // console.log('timeFormated', timeFormated);
  // console.log('expirationDate', toDoItem?.expirationDate);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CreateTodoValidationType>({
    resolver: yupResolver(todoValidationSchema),
    mode: 'onChange',
    defaultValues: {
      isActive: toDoItem?.active,
      isCompleted: toDoItem?.completionStatus,
      title: toDoItem?.title || '',
      description: toDoItem?.description || '',
      expirationDate: toDoItem?.expirationDate
        ? dayjs(toDoItem.expirationDate) // Mantém como dayjs
        : null,
      expirationTime: toDoItem?.expirationDate
        ? dayjs(toDoItem.expirationDate).format('HH:mm:ss')
        : null,
      showExpiration: toDoItem?.expirationDate ? true : false,
    },
  });

  const isExpirationEnabled = watch('showExpiration');
  return (
    <Form>
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={20} lg={22}>
          <S.FormItem>
            <LabelForm
              id="title" // ID do LabelForm
              title="Título"
              required
              tooltipTitle="Campo obrigatório!"
            />
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="title" // ID do Input corresponde ao LabelForm
                  placeholder="Digite o nome da tarefa"
                  showCount
                  allowClear={true}
                  maxLength={100}
                />
              )}
            />
          </S.FormItem>
        </Col>
        <Col xs={24} sm={4} lg={2}>
          <S.FormItem>
            <LabelForm
              id="isActive" // ID do LabelForm
              title="Ativo"
              tooltipTitle="Selecione para ativar a tarefa"
              tooltipActive={true}
            />

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
                  style={{ flex: 'none' }}
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

      <S.FormItem>
        <LabelForm
          title="Descrição"
          required
          tooltipTitle="Campo obrigatório!"
        />
        <Controller
          name={'description'}
          control={control}
          render={({ field }) => {
            return (
              <ReactQuill
                {...field}
                id="description"
                placeholder="Digite a descrição aqui"
                style={{ width: '100%' }}
              />
            );
          }}
        />
      </S.FormItem>
      <Row gutter={[8, 8]} align={'top'}>
        <Col xs={24} sm={12}>
          <S.FormItem>
            <LabelForm
              id="showExpiration" // ID do LabelForm
              title="Mostrar data de expiração"
              tooltipTitle="Selecione para exibir campos de data e hora de expiração"
              tooltipActive={true}
            />

            <Controller
              name="showExpiration"
              control={control}
              render={({ field }) => (
                <Switch
                  title="Mostrar data de expiração"
                  ref={field.ref}
                  id="showExpiration" // ID do Switch corresponde ao LabelForm
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked={field.value}
                  checked={field.value}
                  onChange={(checked: boolean) => {
                    field.onChange(checked);
                  }}
                />
              )}
            />
          </S.FormItem>
        </Col>
        <Col xs={24} sm={12}>
          <S.FormItem>
            <LabelForm
              id="isCompleted" // ID do LabelForm
              title="Esta concluído?"
              tooltipTitle="Selecione para marcar a tarefa como concluída"
            />
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
            <S.FormItem>
              <LabelForm title="Data de Expiração" id="expirationDate" />
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
            <S.FormItem>
              <LabelForm title="Hora de Expiração" id="expirationTime" />
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
                    value={field.value ? dayjs(field.value, 'HH:mm:ss') : null} // Convert string to dayjs
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
          <S.FormItem>
            <LabelForm title="Tags" id="tags" />
            <Controller
              name={'tags'}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  id="tags"
                  placeholder="Selecione as tags"
                  allowClear={true}
                  style={{ width: '100%' }}
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
          <S.FormItem>
            <LabelForm title="Categorias" id="categories" />
            <Controller
              name={'categories'}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  id="categories"
                  placeholder="Selecione as categorias"
                  allowClear={true}
                  style={{ width: '100%' }}
                >
                  {categories.map((option) => (
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
        <TodoActionButtons onCancel={() => reset()} isLoading={false} />
      </S.FormItem>
    </Form>
  );
};
