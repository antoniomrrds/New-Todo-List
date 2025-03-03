import { Avatar, Row, App } from 'antd';
import { FC } from 'react';
import * as S from './Card.styles';
import { ToDo } from '@/api/service/toDo/types';
import { obtainTodoStatusDetails } from '@/components/Todo/List/CardTodo/ToDoStatusBadge';
import { useModal } from '@/helpers';
import * as I from '@/components/shared/Icons';
import { gold, greyDark } from '@ant-design/colors';
import { BadgeStatus } from '@/components/Todo/List/CardTodo/BadgeStatus';
import { useDeleteTodo } from '@/api/service/toDo/actions';
import { ConfirmToDoDeleteDialog } from '@/components/Todo/Delete/Modal';
import { SaveModalToDoDialog } from '@/components/Todo/Save/Modal';
import { DefaultValues } from '@/api/core/types';
import { DetailsModalToDoDialog } from '@/components/Todo/Details/Modal';

type Props = {
  data: ToDo[];
};

const CardTasks: FC<Props> = ({ data }) => {
  const { notification } = App.useApp();
  const { deleteToDo, deleteToDoIsLoading } = useDeleteTodo({ notification });

  const {
    isModalOpen,
    selectedItem: todoToDelete,
    showModal: showModalDelete,
    closeModal,
  } = useModal<number>();

  const {
    isModalOpen: isSaveModalOpen,
    selectedItem: toDoToSave,
    showModal: showSaveModal,
    closeModal: closeSaveModal,
  } = useModal<number>();

  const {
    isModalOpen: toDoDetailsIsModalOpen,
    selectedItem: toDoToDetails,
    showModal: showToDoDetailsModal,
    closeModal: closeToDoDetailsModal,
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
                onClick={() => showSaveModal(todoItem?.id)}
              >
                <S.ActionsItem>
                  <I.EditOutlinedStyled $color={gold.primary} key="edit" />
                </S.ActionsItem>
              </S.ActionsItemContatiner>
              <S.ActionsItemContatiner
                span={8}
                onClick={() => showModalDelete(todoItem.id)}
              >
                <S.ActionsItem>
                  <I.FaTrashAltStyled key="delete" />
                </S.ActionsItem>
              </S.ActionsItemContatiner>
              <S.ActionsItemContatiner
                span={8}
                onClick={() => showToDoDetailsModal(todoItem.id)}
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
      {toDoToDetails !== null && (
        <DetailsModalToDoDialog
          open={toDoDetailsIsModalOpen}
          onCancel={closeToDoDetailsModal}
          id={toDoToDetails ?? DefaultValues.IdNullValue}
        />
      )}
      {toDoToSave !== null && (
        <SaveModalToDoDialog
          open={isSaveModalOpen}
          onCancel={closeSaveModal}
          categoryId={toDoToSave ?? DefaultValues.IdNullValue}
        />
      )}
    </S.CardsContainer>
  );
};

export default CardTasks;
