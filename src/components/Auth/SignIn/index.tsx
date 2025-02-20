import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import * as S from './sign-in-styles';
import { theme } from '@/styles/Theme';
import Dev from '@/assets/images/login/dev-product.png';
import { useNavigateFunction } from '@/helpers';

export const SignIn: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const navigation = useNavigateFunction();

  return (
    <S.LayoutStyled>
      <S.MainContainer>
        <Row>
          <Col xs={0} md={12}>
            <S.DevImage />
          </Col>
          <Col xs={24} md={12}>
            <S.Section>
              <S.Image src={Dev} alt="Login" />
              <S.HeaderMain>Iniciar sessão</S.HeaderMain>

              <S.FormStyled onFinish={onFinish} layout="vertical">
                <S.FormItem name="username" label="Usuário">
                  <Input suffix={<UserOutlined />} placeholder="Usuário" />
                </S.FormItem>
                <S.FormItem name="Password" label="Senha">
                  <Input
                    suffix={<LockOutlined />}
                    placeholder="Senha"
                    type="password"
                  />
                </S.FormItem>

                <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
                  <Col span={12}>
                    <S.ButtonLoginStyled type="primary" htmlType="submit" block>
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
                      onClick={() => navigation('/sign-up')}
                    >
                      Cadastrar
                    </S.ButtonLoginStyled>
                  </Col>
                </Row>
              </S.FormStyled>
            </S.Section>
          </Col>
        </Row>
      </S.MainContainer>
    </S.LayoutStyled>
  );
};
