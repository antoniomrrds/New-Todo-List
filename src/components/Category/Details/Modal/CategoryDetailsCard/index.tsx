import { Col, Flex, Row } from 'antd';
import { FC } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';
import { FaIdBadge } from 'react-icons/fa'; // para usar quando for atualizado por um usuário
import * as S from './category-details-card-styles';
import { theme } from '@/styles/Theme';
import { ActivationState, getActivationStateText } from '@/api/core/types';
import { Category } from '@/api/service/category/types';

type CategoryActivityCardProps = {
  categoryItem?: Category;
};

export const CategoryActivityCard: FC<CategoryActivityCardProps> = ({
  categoryItem,
}) => {
  return (
    <S.CardMain>
      <Row>
        <Col span={4}>
          <Flex align="center" gap={2}>
            <FaIdBadge color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>ID: </S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{categoryItem?.id}</S.TextCustom>
        </Col>
        <Col span={16}>
          <S.HeaderSubtitle>Nome</S.HeaderSubtitle>
          <S.TextCustom>{categoryItem?.name}</S.TextCustom>
        </Col>
        <Col span={4}>
          <S.HeaderSubtitle>Status</S.HeaderSubtitle>
          <S.TextCustom
            isActivated={categoryItem?.active === ActivationState.Active}
            isDeactivated={categoryItem?.active === ActivationState.Inactive}
          >
            {getActivationStateText(categoryItem?.active)}
          </S.TextCustom>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <S.HeaderSubtitle>Descrição:</S.HeaderSubtitle>
          <S.TextCustom>{categoryItem?.description}</S.TextCustom>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12}>
          <Flex align="center" gap={2}>
            <FaRegCalendarAlt color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>Cadastrado:</S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{categoryItem?.createdAtFormatted}</S.TextCustom>
        </Col>
        <Col xs={24} md={12}>
          <Flex align="center" gap={2}>
            <FaCalendarCheck color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>Atualizado</S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{categoryItem?.updatedAtFormatted}</S.TextCustom>
        </Col>
      </Row>
    </S.CardMain>
  );
};
