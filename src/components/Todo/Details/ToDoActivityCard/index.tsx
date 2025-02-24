import { ToDoDetails } from '@/api/service/toDo/types';
import { obtainTodoStatusDetails } from '@/components/Todo/List/CardTodo/ToDoStatusBadge';
import * as S from '@/components/Todo/Details/ToDoActivityCard/todo-activity-card-styles';
import { Flex, Tooltip } from 'antd';
import { FC } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import {
  FaAddressCard,
  FaCalendarCheck,
  FaCalendarDay,
  FaInfinity,
} from 'react-icons/fa6';
import { FaIdBadge } from 'react-icons/fa'; // para usar quando for atualizado por um usuário
import { purple } from '@ant-design/colors';

type ToDoActivityCardProps = {
  toDoItem: ToDoDetails;
};

export const ToDoActivityCard: FC<ToDoActivityCardProps> = ({ toDoItem }) => {
  const { color, icon, text } = obtainTodoStatusDetails(toDoItem, 4);
  return (
    <S.ActivityCard>
      <S.FlexContentItem align="center" justify="space-between">
        <Flex align="center" gap={2}>
          <FaRegCalendarAlt />
          <S.TextCustom>Cadastrado:</S.TextCustom>
        </Flex>
        <S.TextCustom>{toDoItem.createdAtFormatted}</S.TextCustom>
      </S.FlexContentItem>

      <S.FlexContentItem align="center" justify="space-between">
        <Flex align="center" gap={2}>
          <FaAddressCard />
          <S.TextCustom>Status:</S.TextCustom>
        </Flex>
        <S.TextCustom color={color} style={{ color: `${color}` }}>
          {icon}
          {text}
        </S.TextCustom>
      </S.FlexContentItem>
      <S.FlexContentItem align="center" justify="space-between">
        <Flex align="center" gap={2}>
          <FaCalendarCheck />
          <S.TextCustom>Atualizado Em:</S.TextCustom>
        </Flex>
        <S.TextCustom>{toDoItem.updatedAtFormatted}</S.TextCustom>
      </S.FlexContentItem>
      <S.FlexContentItem align="center" justify="space-between">
        <Flex align="center" gap={2}>
          <FaCalendarDay /> Expira Em:
        </Flex>
        <S.TextCustom $color={color}>
          {toDoItem.expirationDateFormatted || (
            <FaInfinity style={{ fontSize: '1em', color: purple.primary }} />
          )}
        </S.TextCustom>
      </S.FlexContentItem>
      <S.FlexContentItem align="center" justify="space-between">
        <Flex align="center" gap={2}>
          <FaIdBadge />
          <S.TextCustom>Cadastrado Por:</S.TextCustom>
        </Flex>
        <Tooltip title={toDoItem.name}>
          <S.TextCustom $marginRight>{toDoItem.name}</S.TextCustom>
        </Tooltip>
      </S.FlexContentItem>
    </S.ActivityCard>
  );
};
