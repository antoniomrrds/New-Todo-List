import { FC } from 'react';
import * as S from '@/components/Profile/profile-styles';
import Dev from '@/assets/images/login/dev-product.png';
import { Grid, Row, Col, Image } from 'antd';
import { useWindowWidth } from '@/utils/window-with';
import { size } from '@/styles/breakpoints';
import { DividerCustom } from '@/components/shared/Divider';
import { Outlet } from 'react-router-dom';
import { useNavigateFunction } from '@/helpers';
const { useBreakpoint } = Grid;
export const Profile: FC = () => {
  const screens = useBreakpoint();
  const sizeValue = useWindowWidth();
  const isTabletXS = sizeValue <= parseInt(size.tabletXS.replace('px', ''));
  const navigate = useNavigateFunction();
  return (
    <Row gutter={[10, 10]}>
      <Col flex={isTabletXS ? '' : '0 1 300px'} xs={24} sm={24} md={24}>
        {isTabletXS == false && (
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            fallback={Dev}
          />
        )}
        <S.CardMain>
          <S.HeaderMain $isCentered $fontSize={17} $screens={screens}>
            Antonio Marcos
          </S.HeaderMain>
          <DividerCustom margin={10} />
          <Row gutter={[10, 10]}>
            <Col span={24}>
              {/* Botões de navegação */}
              <S.ButtonStyled
                type="link"
                onClick={() => navigate('/profile')}
                block
              >
                Meus Dados
              </S.ButtonStyled>
            </Col>
            <Col span={24}>
              <S.ButtonStyled
                type="link"
                onClick={() => navigate('/profile/change-password')}
                block
              >
                Alterar Senha
              </S.ButtonStyled>
            </Col>
            <Col span={24}>
              <S.ButtonStyled
                type="link"
                onClick={() => navigate('/profile/settings')}
                block
              >
                Configurações
              </S.ButtonStyled>
            </Col>
          </Row>
        </S.CardMain>
      </Col>
      <Col
        flex={isTabletXS ? '' : '1 1 300px'}
        xs={24}
        sm={24}
        md={24}
        style={{ display: 'flex', width: '100%' }}
      >
        <S.CardMain>
          <Outlet /> {/* Renderiza a página correspondente */}
        </S.CardMain>
      </Col>
    </Row>
  );
};
