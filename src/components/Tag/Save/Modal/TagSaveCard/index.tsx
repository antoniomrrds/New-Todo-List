import { Col, Form, Input, Row, Skeleton, Switch } from 'antd';
import { FC } from 'react';
import { Tag } from '@/api/service/tag/types';
import * as S from './tag-save-card-styles';
import { SpinCustom } from '@/components/shared/Spin';
import {
  SaveTagValidationType,
  tagValidationSchema,
} from '@/components/Tag/Save/Modal/validators';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FieldError } from '@/components/shared/Form';
import { ActivationState } from '@/api/core/types';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { TagActionButtons } from '@/components/Tag/Save/Modal/ActionButtonGroup';

type ToDoActivityCardProps = {
  tagItem?: Tag;
};

export const TagFormCard: FC<ToDoActivityCardProps> = ({ tagItem }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<SaveTagValidationType>({
    resolver: yupResolver(tagValidationSchema),
    mode: 'onChange',
  });

  return (
    <SpinCustom loading={false} text="Salvando os dados...">
      <Skeleton active loading={false}>
        <S.CardMain>
          <Form layout="vertical">
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
                    <Input.TextArea
                      {...field}
                      id="description" // ID do Input corresponde ao LabelForm
                      placeholder="Digite a descrição da tarefa"
                      showCount
                      allowClear={true}
                      maxLength={500}
                      autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                  );
                }}
              />
            </S.FormItem>
            <Row gutter={[8, 8]}>
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

            <S.FormItem>
              <TagActionButtons
                onCancel={() => reset()}
                isLoading={false}
                idUser={tagItem?.id}
              />
            </S.FormItem>
          </Form>
        </S.CardMain>
      </Skeleton>
    </SpinCustom>
  );
};
