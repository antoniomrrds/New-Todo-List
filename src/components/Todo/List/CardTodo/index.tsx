import { Avatar, Row } from 'antd';
import { FC } from 'react';
import * as S from './Card.styles';
import { ToDo } from '@/api/service/toDo/types';
import { obtainTodoStatusDetails } from '@/components/Todo/List/CardTodo/ToDoStatusBadge';
import { CallbackFunction, useNavigateToPath } from '@/helpers';
import * as I from '@/components/shared/Icons';
import { gold } from '@ant-design/colors';
import { BadgeStatus } from '@/components/Todo/List/CardTodo/BadgeStatus';
type Props = {
  data: ToDo[];
  openModal: (
    onConfirm?: CallbackFunction,
    onCancel?: CallbackFunction,
  ) => void;
};

const deleteTodo = () => {
  console.log('Tarefa excluída!');
};

const cancelDelete = () => {
  console.log('Exclusão cancelada!');
};

const CardTasks: FC<Props> = ({ data, openModal }) => {
  const navigateTo = useNavigateToPath();
  const navigateToDetails = (id: number) => navigateTo(`${id}`);

  return (
    <S.CardsContainer>
      {data.map((todoItem) => {
        const { color } = obtainTodoStatusDetails(todoItem);
        return (
          <S.PaperCard $Color={color} key={todoItem.id} bordered={false}>
            <BadgeStatus task={todoItem} />
            <S.CardMeta title={todoItem.title} />
            <S.CreatorName>
              <Avatar
                style={{
                  backgroundColor: color,
                }}
                // src={task.avatar}
                alt="Criador"
                icon={<I.EditOutlinedStyled key={'user-card-item'} />}
              />

              {/* <img src={task.avatar || avatar} alt="Criador" /> */}
              {/* <Text className="creator-name">{task.creator}</Text> */}
            </S.CreatorName>
            <Row justify={'center'} align={'middle'}>
              <S.ActionsItemContatiner
                onClick={() => navigateToDetails(todoItem.id)}
                span={12}
              >
                <S.ActionsItem>
                  <I.EditOutlinedStyled $color={gold.primary} key="edit" />
                </S.ActionsItem>
              </S.ActionsItemContatiner>
              <S.ActionsItemContatiner
                span={12}
                onClick={() => openModal(deleteTodo, cancelDelete)}
              >
                <S.ActionsItem>
                  <I.FaTrashAltStyled
                    key="delete"
                    onClick={() => console.log('ops cliclou')}
                  />
                </S.ActionsItem>
              </S.ActionsItemContatiner>
            </Row>
          </S.PaperCard>
        );
      })}
    </S.CardsContainer>
  );
};

export default CardTasks;
