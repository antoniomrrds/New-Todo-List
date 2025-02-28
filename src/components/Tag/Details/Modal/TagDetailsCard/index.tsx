import { Col, Flex, Row } from 'antd';
import { FC } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';
import { FaIdBadge } from 'react-icons/fa'; // para usar quando for atualizado por um usuário
import { Tag } from '@/api/service/tag/types';
import * as S from './tag-details-card-styles';
import { theme } from '@/styles/Theme';
import { ActivationState, getActivationStateText } from '@/api/core/types';

type ToDoActivityCardProps = {
  tagItem?: Tag;
};

export const TagActivityCard: FC<ToDoActivityCardProps> = ({ tagItem }) => {
  return (
    <S.CardMain>
      <Row>
        <Col span={4}>
          <Flex align="center" gap={2}>
            <FaIdBadge color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>ID: </S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{tagItem?.id}</S.TextCustom>
        </Col>
        <Col span={16}>
          <S.HeaderSubtitle>Nome</S.HeaderSubtitle>
          <S.TextCustom>{tagItem?.name}</S.TextCustom>
        </Col>
        <Col span={4}>
          <S.HeaderSubtitle>Status</S.HeaderSubtitle>
          <S.TextCustom
            isActivated={tagItem?.active === ActivationState.Active}
            isDeactivated={tagItem?.active === ActivationState.Inactive}
          >
            {getActivationStateText(tagItem?.active)}
          </S.TextCustom>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <S.HeaderSubtitle>Descrição:</S.HeaderSubtitle>
          <S.TextCustom>{tagItem?.description}</S.TextCustom>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12}>
          <Flex align="center" gap={2}>
            <FaRegCalendarAlt color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>Cadastrado:</S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{tagItem?.createdAtFormatted}</S.TextCustom>
        </Col>
        <Col xs={24} md={12}>
          <Flex align="center" gap={2}>
            <FaCalendarCheck color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>Atualizado</S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{tagItem?.updatedAtFormatted}</S.TextCustom>
        </Col>
      </Row>
    </S.CardMain>
  );
};
