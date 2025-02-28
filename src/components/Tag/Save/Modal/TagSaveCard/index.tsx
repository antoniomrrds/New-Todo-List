import { Col, Form, Input, Row, Skeleton, Switch } from 'antd';
import { FC } from 'react';
import { Tag } from '@/api/service/tag/types';
import * as S from './tag-save-card-styles';
import { SpinCustom } from '@/components/shared/Spin';
import { Controller } from 'react-hook-form';
import { FieldError } from '@/components/shared/Form';
import { ActivationState } from '@/api/core/types';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { TagActionButtons } from '@/components/Tag/Save/Modal/ActionButtonGroup';
import { useTagForm } from '@/components/Tag/Save/Modal/hooks';
import { useSaveTag } from '@/api/service/tag/actions';
import { NotificationInstance } from 'antd/es/notification/interface';

type ToDoActivityCardProps = {
  tagItem?: Tag;
  notification: NotificationInstance;
  loading?: boolean;
  onCancel: () => void;
  refetch: () => void;
};

export const TagFormCard: FC<ToDoActivityCardProps> = ({
  tagItem,
  notification,
  loading = false,
  onCancel,
  refetch,
}) => {
  const { control, errors, handleSubmit } = useTagForm({
    tagItem,
  });

  const { handleFormSubmit, isSaving } = useSaveTag({
    notification,
    onClose: onCancel,
    refetch,
  });

  const handleCancel = () => onCancel();

  return (
    <SpinCustom loading={isSaving} text="Salvando os dados...">
      <Skeleton active loading={loading}>
        <S.CardMain>
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
                        placeholder="Digite o nome da tag"
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
                  tooltip="Selecione para ativar a tag"
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
                      placeholder="Digite a descrição da tag"
                      showCount
                      allowClear={true}
                      maxLength={500}
                      autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                  );
                }}
              />
            </S.FormItem>

            <S.FormItem>
              <TagActionButtons
                onCancel={handleCancel}
                isLoading={false}
                idTag={tagItem?.id}
              />
            </S.FormItem>
          </Form>
        </S.CardMain>
      </Skeleton>
    </SpinCustom>
  );
};
