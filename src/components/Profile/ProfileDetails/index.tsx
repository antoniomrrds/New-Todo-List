import { FC, useEffect } from 'react';
import * as S from '@/components/Profile/ProfileDetails/profile-details-styles';
import { Col, Grid, Input, Row, Form, App } from 'antd';
import { DividerCustom } from '@/components/shared/Divider';
import { FieldError } from '@/components/shared/Form';
import { SpinCustom } from '@/components/shared/Spin';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  profileUserValidationSchema,
  ProfileUserValidationType,
} from '@/components/Profile/ProfileDetails/Validation';
import {
  useQueryUserWithoutPassword,
  userUpdateUser,
} from '@/api/service/user';
const { useBreakpoint } = Grid;

export const ProfileDetails: FC = () => {
  const { notification } = App.useApp();

  const { user, userDataError, isLoadingUser } = useQueryUserWithoutPassword();
  const { handleFormSubmit, isUpdating } = userUpdateUser({ notification });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileUserValidationType>({
    resolver: yupResolver(profileUserValidationSchema),
    mode: 'onChange',
    defaultValues: {
      id: user?.id || '',
      email: user?.email || '',
      name: user?.name || '',
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        id: user.id,
        email: user.email,
        name: user.name,
      });
    }
  }, [user, reset]);

  const screens = useBreakpoint();

  // Se houver erro ao carregar os dados do usuário, exibe uma mensagem de erro
  if (userDataError) {
    return (
      <div>Erro ao carregar dados do usuário. Tente novamente mais tarde.</div>
    );
  }

  // Se os dados ainda estiverem carregando ou se não houver usuário, exibe o carregamento
  if (isLoadingUser || !user) {
    return (
      <SpinCustom
        loading={isLoadingUser}
        text="Carregando dados..."
        hasAbsolutePosition
      />
    );
  }

  return (
    <>
      <S.HeaderMain $screens={screens}>Meus dados</S.HeaderMain>
      <S.HeaderSubtitle>
        Aqui você pode visualizar seus dados, alterar informações e ter mais
        dados sobre seu acesso!
      </S.HeaderSubtitle>
      <DividerCustom margin={20} />

      <SpinCustom
        loading={isLoadingUser}
        text="Mudando a senha..."
        hasAbsolutePosition
      >
        <Form
          style={{ width: '100%' }}
          layout="vertical"
          onFinish={handleSubmit(handleFormSubmit)}
        >
          <S.FormItem
            name="id"
            label="Id de usuário"
            validateStatus={errors.id ? 'error' : ''}
            required={errors.id ? true : false}
            help={errors.id ? <FieldError name={'id'} errors={errors} /> : null}
            hasFeedback
          >
            <Controller
              name="id"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="ID"
                  id="id"
                  disabled
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </S.FormItem>
          <S.FormItem
            name="email"
            label="E-mail"
            validateStatus={errors.email ? 'error' : ''}
            required={errors.email ? true : false}
            help={
              errors.email ? (
                <FieldError name={'email'} errors={errors} />
              ) : null
            }
            hasFeedback
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="E-mail"
                  id="email"
                  disabled
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </S.FormItem>
          <S.FormItem
            name="name"
            label="Nome"
            validateStatus={errors.name ? 'error' : ''}
            required={errors.name ? true : false}
            help={
              errors.name ? <FieldError name={'name'} errors={errors} /> : null
            }
            hasFeedback
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Nome"
                  max={255}
                  id="name"
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
                loading={isUpdating}
              >
                Salvar alterações
              </S.ButtonStyled>
            </Col>
          </Row>
        </Form>
      </SpinCustom>
    </>
  );
};
