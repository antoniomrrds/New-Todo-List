import { MoreOutlined } from '@ant-design/icons';
import { App, Button, Dropdown, MenuProps } from 'antd';
import { gold } from '@ant-design/colors';
import * as S from '@/components/Todo/Details/Buttons/buttons-styles';
import { ConfirmToDoDeleteDialog } from '@/components/Todo/Details/Modal';
import { useModal, useNavigateFunction } from '@/helpers';
import * as I from '@/components/shared/Icons';
import { useDeleteTodo } from '@/api/service/toDo/actions';
import { FC, useCallback } from 'react';

type TodoDetailsDropdownProps = {
  todoId: number;
};

export const TodoDetailsDropdown: FC<TodoDetailsDropdownProps> = ({
  todoId,
}) => {
  const { notification } = App.useApp();
  const { deleteToDo, deleteToDoIsLoading } = useDeleteTodo({ notification });

  const {
    isModalOpen,
    selectedItem: todoToDelete,
    showModal,
    closeModal,
  } = useModal<number>();

  const navigate = useNavigateFunction();

  // Função chamada após a exclusão da tarefa
  const goToTodoPage = useCallback(() => {
    navigate('/todo');
  }, [navigate]);

  const confirmAndCloseModal = useCallback(() => {
    if (todoToDelete !== null) {
      deleteToDo(todoToDelete, {
        onSuccess: () => {
          closeModal();
          goToTodoPage(); // 🔹 Navegar após exclusão
        },
      });
    }
  }, [todoToDelete, deleteToDo, closeModal, goToTodoPage]);

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <S.Span>Ações</S.Span>,
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: 'edit',
      label: <S.Span>Editar</S.Span>,
      icon: <I.EditOutlinedStyled $color={gold.primary} />,
      onClick: () => navigate(`/todo/${todoId}/edit`),
    },
    {
      key: 'delete',
      label: <S.Span>Excluir</S.Span>,
      icon: <I.FaTrashAltStyled />,
      onClick: () => showModal(todoId),
    },
  ];

  return (
    <S.Container>
      <Dropdown menu={{ items }} trigger={['click']}>
        <Button
          color={'primary'}
          variant="solid"
          key={'more-button'}
          shape="circle"
          title="Mais"
          icon={<MoreOutlined />}
        />
      </Dropdown>
      <ConfirmToDoDeleteDialog
        open={isModalOpen}
        onConfirm={confirmAndCloseModal}
        onCancel={closeModal}
        loading={deleteToDoIsLoading}
      />
    </S.Container>
  );
};
