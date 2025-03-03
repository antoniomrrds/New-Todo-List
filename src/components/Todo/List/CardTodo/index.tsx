import { App } from 'antd';
import { FC } from 'react';
import * as S from './Card.styles';
import { ToDo } from '@/api/service/toDo/types';
import { obtainTodoStatusDetails } from '@/components/Todo/List/CardTodo/ToDoStatusBadge';
import { useModal } from '@/helpers';
import { BadgeStatus } from '@/components/Todo/List/CardTodo/BadgeStatus';
import { useDeleteTodo } from '@/api/service/toDo/actions';
import { ConfirmToDoDeleteDialog } from '@/components/Todo/Delete/Modal';
import { DefaultValues } from '@/api/core/types';
import { DetailsModalToDoDialog } from '@/components/Todo/Details/Modal';
import Dev from '@/assets/images/login/dev-product.png';

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
          <S.CardTaskMain
            key={todoItem.id}
            onClick={() => showToDoDetailsModal(todoItem.id)}
          >
            <S.CardTaskFlex>
              <S.ImageWrapper>
                <S.ImageStyled src={todoItem?.urlImage || Dev} alt="Criador" />
              </S.ImageWrapper>
              <S.CreatorTaskFlex>{todoItem?.name}</S.CreatorTaskFlex>
              <S.CreatorTaskName $color={color}>
                {todoItem.userName}
              </S.CreatorTaskName>
              <S.ActionsContainer>
                <S.SpanStyled>
                  <S.FaTrashAltStyled
                    key="delete"
                    onClick={() => showModalDelete(todoItem.id)}
                  />
                </S.SpanStyled>
              </S.ActionsContainer>
            </S.CardTaskFlex>

            <BadgeStatus task={todoItem} />
          </S.CardTaskMain>
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
    </S.CardsContainer>
  );
};

export default CardTasks;
