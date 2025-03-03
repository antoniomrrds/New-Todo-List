import { Col, Flex, Row } from 'antd';
import { FC } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';
import { FaIdBadge } from 'react-icons/fa'; // para usar quando for atualizado por um usuário
import * as S from './to-do-details-card-styles';
import { theme } from '@/styles/Theme';
import { ActivationState, getActivationStateText } from '@/api/core/types';
import { ToDo } from '@/api/service/toDo/types';

type ToDoActivityCardProps = {
  toDoItem?: ToDo;
};

export const ToDoActivityCard: FC<ToDoActivityCardProps> = ({ toDoItem }) => {
  return (
    <S.CardMain>
      <Row>
        <Col xs={24} md={4}>
          <Flex align="center" gap={2}>
            <FaIdBadge color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>ID: </S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{toDoItem?.id}</S.TextCustom>
        </Col>
        <Col xs={24} md={16}>
          <S.HeaderSubtitle>Nome</S.HeaderSubtitle>
          <S.TextCustom>{toDoItem?.name}</S.TextCustom>
        </Col>
        <Col xs={24} md={4}>
          <S.HeaderSubtitle>Status</S.HeaderSubtitle>
          <S.TextCustom
            isActivated={toDoItem?.active === ActivationState.Active}
            isDeactivated={toDoItem?.active === ActivationState.Inactive}
          >
            {getActivationStateText(toDoItem?.active)}
          </S.TextCustom>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <S.HeaderSubtitle>Descrição:</S.HeaderSubtitle>
          <S.TextCustom>{toDoItem?.description}</S.TextCustom>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12}>
          <Flex align="center" gap={2}>
            <FaRegCalendarAlt color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>Cadastrado:</S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{toDoItem?.createdAtFormatted}</S.TextCustom>
        </Col>
        <Col xs={24} md={12}>
          <Flex align="center" gap={2}>
            <FaCalendarCheck color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>Atualizado</S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{toDoItem?.updatedAtFormatted}</S.TextCustom>
        </Col>
      </Row>
    </S.CardMain>
  );
};
