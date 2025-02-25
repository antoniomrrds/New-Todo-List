import * as S from '@/components/Auth/SignUp/sign-up-styles';
import { App, Col, Form, Input, Row } from 'antd';
import { useNavigateFunction } from '@/helpers';
import { theme } from '@/styles/Theme';
import { FieldError } from '@/components/shared/Form';
import { Controller, useForm } from 'react-hook-form';
import {
  signUpValidationSchema,
  SignUpValidationType,
} from '@/components/Auth/SignUp/Validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignUp } from '@/api/service/auth';
import { useCallback } from 'react';
import { SpinCustom } from '@/components/shared/Spin';
import { useAuth } from '@/context/auth';
import { Navigate } from 'react-router-dom';

export const SignUp: React.FC = () => {
  const navigate = useNavigateFunction();
  const { isAuthenticated } = useAuth();
  const { notification } = App.useApp();
  const navigateToSignIn = useCallback(() => navigate('/sign-in'), [navigate]);

  const { handleFormSubmit, isSaving } = useSignUp({
    notification,
    navigateToSignIn,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValidationType>({
    resolver: yupResolver(signUpValidationSchema),
    mode: 'onChange',
  });

  if (isAuthenticated) {
    return <Navigate to="/todo" />;
  }

  return (
    <S.LayoutStyled>
      <S.MainContainer>
        <SpinCustom loading={isSaving} text="Salvando os dados...">
          <S.Section>
            <S.HeaderMain>Cadastrar</S.HeaderMain>
            <Form
              style={{ width: '100%' }}
              layout="vertical"
              onFinish={handleSubmit(handleFormSubmit)}
            >
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
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
              </S.FormItem>
              <S.FormItem
                name="name"
                label="Nickname"
                validateStatus={errors.name ? 'error' : ''}
                required={errors.name ? true : false}
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
                      placeholder="Nickname"
                      count={{
                        show: true,
                        max: 50,
                      }}
                      id="name"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
              </S.FormItem>
              <S.FormItem
                name="password"
                label="Senha"
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
                      placeholder="Senha"
                      max={30}
                      id="password"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
              </S.FormItem>
              <S.FormItem
                name="confirmPassword"
                label="Confirmar senha"
                validateStatus={errors.confirmPassword ? 'error' : ''}
                required={errors.confirmPassword ? true : false}
                help={
                  errors.confirmPassword ? (
                    <FieldError name={'confirmPassword'} errors={errors} />
                  ) : null
                }
                hasFeedback
              >
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      placeholder="Repita sua senha"
                      type="password"
                      id="confirmPassword"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
              </S.FormItem>

              <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
                <Col span={12}>
                  <S.ButtonLoginStyled
                    type="primary"
                    htmlType="submit"
                    block
                    onClick={() => navigateToSignIn()}
                    $background={theme.colors.neutral.neutral200}
                    $color={theme.colors.success.successGreen600}
                  >
                    Voltar
                  </S.ButtonLoginStyled>
                </Col>
                <Col span={12}>
                  <S.ButtonLoginStyled type="primary" htmlType="submit" block>
                    Cadastrar
                  </S.ButtonLoginStyled>
                </Col>
              </Row>
            </Form>
          </S.Section>
        </SpinCustom>
      </S.MainContainer>
    </S.LayoutStyled>
  );
};
