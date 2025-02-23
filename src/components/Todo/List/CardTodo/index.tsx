import { Avatar, Row, App } from 'antd';
import { FC } from 'react';
import * as S from './Card.styles';
import { ToDo } from '@/api/service/toDo/types';
import { obtainTodoStatusDetails } from '@/components/Todo/List/CardTodo/ToDoStatusBadge';
import { useModal, useNavigateToPath } from '@/helpers';
import * as I from '@/components/shared/Icons';
import { gold, greyDark } from '@ant-design/colors';
import { BadgeStatus } from '@/components/Todo/List/CardTodo/BadgeStatus';
import { useDeleteTodo } from '@/api/service/toDo/actions';
import { ConfirmToDoDeleteDialog } from '@/components/Todo/Details/Modal';

type Props = {
  data: ToDo[];
};

const CardTasks: FC<Props> = ({ data }) => {
  const navigateTo = useNavigateToPath();
  const navigateToEdit = (id: number) => navigateTo(`${id}/edit`);
  const navigateToDetails = (id: number) => navigateTo(`${id}`);
  const { notification } = App.useApp();
  const { deleteToDo, deleteToDoIsLoading } = useDeleteTodo({ notification });

  const {
    isModalOpen,
    selectedItem: todoToDelete,
    showModal,
    closeModal,
  } = useModal<number>();

  const confirmAndCloseModal = () => {
    if (todoToDelete !== null) {
      deleteToDo(todoToDelete, {
        onSuccess: closeModal,
      });
    }
  };
  return (
    <S.CardsContainer>
      {data.map((todoItem) => {
        const { color } = obtainTodoStatusDetails(todoItem);
        return (
          <S.PaperCard $Color={color} key={todoItem.id} bordered={false}>
            <BadgeStatus task={todoItem} />
            <S.CardMeta title={todoItem.name} />
            <S.CreatorName>
              <Avatar
                style={{ backgroundColor: color }}
                alt="Criador"
                icon={<I.UserOutlinedStyled key={'user-card-item'} />}
              />

              <span className="creator-name">{todoItem?.userName} </span>
            </S.CreatorName>
            <Row justify={'center'} align={'middle'}>
              <S.ActionsItemContatiner
                span={8}
                onClick={() => navigateToEdit(todoItem.id)}
              >
                <S.ActionsItem>
                  <I.EditOutlinedStyled $color={gold.primary} key="edit" />
                </S.ActionsItem>
              </S.ActionsItemContatiner>
              <S.ActionsItemContatiner
                span={8}
                onClick={() => showModal(todoItem.id)}
              >
                <S.ActionsItem>
                  <I.FaTrashAltStyled key="delete" />
                </S.ActionsItem>
              </S.ActionsItemContatiner>
              <S.ActionsItemContatiner
                span={8}
                onClick={() => navigateToDetails(todoItem.id)}
              >
                <S.ActionsItem>
                  <I.InfoCircleOutlinedStyled
                    $color={greyDark.primary}
                    key="info"
                  />
                </S.ActionsItem>
              </S.ActionsItemContatiner>
            </Row>
          </S.PaperCard>
        );
      })}
      <ConfirmToDoDeleteDialog
        open={isModalOpen}
        onConfirm={confirmAndCloseModal}
        onCancel={closeModal}
        loading={deleteToDoIsLoading}
      />
    </S.CardsContainer>
  );
};

export default CardTasks;
