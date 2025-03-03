import { Col, Flex, Row } from 'antd';
import { FC } from 'react';
import { FaCalendarDay, FaRegCalendarAlt } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';
import { FaIdBadge } from 'react-icons/fa'; // para usar quando for atualizado por um usuário
import * as S from './to-do-details-card-styles';
import { theme } from '@/styles/Theme';
import { TagsAndCategoriesCard } from '@/components/Todo/Details/TagsAndCategories';
import { ToDoDetails } from '@/api/service/toDo/types';
import { obtainTodoStatusDetails } from '@/components/Todo/List/CardTodo/ToDoStatusBadge';

type ToDoActivityCardProps = {
  toDoItem?: ToDoDetails;
};

export const ToDoDetailsCard: FC<ToDoActivityCardProps> = ({ toDoItem }) => {
  const { color, icon, text } = obtainTodoStatusDetails(toDoItem, 4);
  const isCategoriesEmpty =
    (toDoItem?.categories && toDoItem?.categories.length > 0) ||
    (toDoItem?.tags && toDoItem?.tags.length > 0);

  return (
    <S.CardMain>
      <Row>
        <Col xs={24} md={2}>
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
        <Col xs={24} md={6}>
          <S.HeaderSubtitle>Status</S.HeaderSubtitle>
          <S.TextCustomStatus $color={color}>
            {icon}
            {text}
          </S.TextCustomStatus>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <S.HeaderSubtitle>Descrição:</S.HeaderSubtitle>
          <S.TextCustom>{toDoItem?.description}</S.TextCustom>
        </Col>
      </Row>
      {isCategoriesEmpty && <TagsAndCategoriesCard toDoItem={toDoItem} />}

      <Row>
        <Col xs={24} md={8}>
          <Flex align="center" gap={2}>
            <FaRegCalendarAlt color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>Cadastrado:</S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{toDoItem?.createdAtFormatted}</S.TextCustom>
        </Col>
        <Col xs={24} md={8}>
          <Flex align="center" gap={2}>
            <FaCalendarCheck color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle>Atualizado</S.HeaderSubtitle>
          </Flex>
          <S.TextCustom>{toDoItem?.updatedAtFormatted}</S.TextCustom>
        </Col>
        <Col xs={24} md={8}>
          <Flex align="center" gap={2}>
            <FaCalendarDay color={theme.colors.neutral.neutral200} />
            <S.HeaderSubtitle> Expira Em:</S.HeaderSubtitle>
          </Flex>

          <S.TextCustom>
            {toDoItem?.expirationDateFormatted || 'sem data de expiração'}
          </S.TextCustom>
        </Col>
      </Row>
      {toDoItem?.userName && (
        <Row>
          <Col span={24}>
            <S.HeaderSubtitle>Responsável:</S.HeaderSubtitle>
            <S.TextCustom>{toDoItem?.userName}</S.TextCustom>
          </Col>
        </Row>
      )}
    </S.CardMain>
  );
};
