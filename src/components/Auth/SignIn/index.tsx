import { App, Col, Form, Input, Row } from 'antd';
import * as S from './sign-in-styles';
import { theme } from '@/styles/Theme';
import Dev from '@/assets/images/login/dev-product.png';
import { useNavigateFunction } from '@/helpers';
import { useCallback } from 'react';
import { useSignIn } from '@/api/service/auth';
import { FieldError } from '@/components/shared/Form';
import {
  signInValidationSchema,
  SignInValidationType,
} from '@/components/Auth/SignIn/Validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { SpinCustom } from '@/components/shared/Spin';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/auth'; // Importando o useAuth

export const SignIn: React.FC = () => {
  const navigate = useNavigateFunction();
  const { isAuthenticated } = useAuth();
  const { notification } = App.useApp();
  const goToTodoPage = useCallback(() => navigate('/todo'), [navigate]);
  const navigateToSignUp = useCallback(() => navigate('/sign-up'), [navigate]);

  if (isAuthenticated) {
    return <Navigate to="/todo" />;
  }

  const { handleFormSubmit, isSaving } = useSignIn({
    notification,
    goToTodoPage,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValidationType>({
    resolver: yupResolver(signInValidationSchema),
    mode: 'onChange',
    defaultValues: {
      email: 'antoniomarcos.amrrds@gmail.com',
      password: 'reis2310',
    },
  });

  return (
    <S.LayoutStyled>
      <S.MainContainer>
        <SpinCustom
          loading={isSaving}
          text="Entrando no sistema..."
          hasAbsolutePosition
        >
          <Row>
            <Col xs={0} md={12}>
              <S.DevImage />
            </Col>
            <Col xs={24} md={12}>
              <S.Section>
                <S.Image src={Dev} alt="Login" />
                <S.HeaderMain>Iniciar sessão</S.HeaderMain>

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

                  <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
                    <Col span={12}>
                      <S.ButtonLoginStyled
                        type="primary"
                        htmlType="submit"
                        block
                      >
                        Entrar
                      </S.ButtonLoginStyled>
                    </Col>
                    <Col span={12}>
                      <S.ButtonLoginStyled
                        type="primary"
                        htmlType="submit"
                        block
                        $background={theme.colors.neutral.neutral200}
                        $color={theme.colors.success.successGreen600}
                        onClick={() => navigateToSignUp()}
                      >
                        Cadastrar
                      </S.ButtonLoginStyled>
                    </Col>
                  </Row>
                </Form>
              </S.Section>
            </Col>
          </Row>
        </SpinCustom>
      </S.MainContainer>
    </S.LayoutStyled>
  );
};
