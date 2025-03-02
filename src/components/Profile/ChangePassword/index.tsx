import { FC } from 'react';
import * as S from '@/components/Profile/ChangePassword/change-password-styles';
import { Col, Form, Input, Row, App } from 'antd';
import { DividerCustom } from '@/components/shared/Divider';
import { FieldError } from '@/components/shared/Form';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  changePasswordValidationSchema,
  ChangePasswordValidationType,
} from '@/components/Profile/ChangePassword/Validation';
import { useChangePassword } from '@/api/service/user';
import { SpinCustom } from '@/components/shared/Spin';

export const ProfileChangePassword: FC = () => {
  const { notification } = App.useApp();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordValidationType>({
    resolver: yupResolver(changePasswordValidationSchema),
    mode: 'onChange',
  });

  const { handleFormSubmit, isSaving } = useChangePassword({
    notification,
    reset,
  });

  return (
    <S.CardMain>
      <S.HeaderSubtitle>
        Aqui você pode mudar a sua senha de acesso ao sistema.
      </S.HeaderSubtitle>
      <DividerCustom margin={20} />
      <SpinCustom
        loading={isSaving}
        text="Mudando a senha..."
        hasAbsolutePosition
      >
        <Form
          style={{ width: '100%' }}
          layout="vertical"
          onFinish={handleSubmit(handleFormSubmit)}
        >
          <S.FormItem
            name="password"
            label="Nova senha"
            validateStatus={errors.password ? 'error' : ''}
            required={errors.password ? true : false}
            help={
              errors.password ? (
                <FieldError name={'password'} errors={errors} />
              ) : null
            }
            hasFeedback
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="********"
                  max={30}
                  id="password"
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </S.FormItem>

          <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
            <Col span={24}>
              <S.ButtonStyled
                type="primary"
                htmlType="submit"
                block
                loading={isSaving}
              >
                Mudar Senha
              </S.ButtonStyled>
            </Col>
          </Row>
        </Form>
      </SpinCustom>
    </S.CardMain>
  );
};
