import { FC } from 'react';
import { SpinCustom } from '@/components/shared/Spin';
import * as S from './save-modal-styles';
import { App } from 'antd';
import { useQueryTodoDetails } from '@/api/service/toDo/actions';
import { ToDoSaveForm } from '@/components/Todo/Save/ToDoSaveForm';
type SaveModalToDoDialogProps = {
  open: boolean;
  onCancel: () => void;
  categoryId: number;
};

export const SaveModalToDoDialog: FC<SaveModalToDoDialogProps> = ({
  onCancel,
  open,
  categoryId: id,
}) => {
  const { notification } = App.useApp();
  const isEditing = !!id; // Se tem ID válido, é edição

  const { isLoadingToDos, toDoItem, refetch } = isEditing
    ? useQueryTodoDetails(id, notification)
    : { toDoItem: null, isLoadingToDos: false, refetch: () => {} };

  return (
    <S.ModalStyled
      centered
      open={open}
      title={`${toDoItem?.id ? 'Editar' : 'Adicionar'} tarefa`}
      onCancel={onCancel}
      loading={isLoadingToDos}
      closeIcon={<S.CloseCircleFilledStyled />}
      styles={{
        mask: {
          backdropFilter: 'blur(10px)',
        },
      }}
      footer={null}
      wrapClassName="custom-modal-wrap"
      maskClosable={false} // 🔹 Impede fechar ao clicar fora
      keyboard={false} // 🔹 Impede fechar ao pressionar "Esc"
    >
      <SpinCustom loading={isLoadingToDos} text="Carregando dados...">
        <ToDoSaveForm
          toDoItem={toDoItem}
          notification={notification}
          onCancel={onCancel}
          refetch={refetch}
        />
      </SpinCustom>
    </S.ModalStyled>
  );
};
