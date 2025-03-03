import { FC } from 'react';
import * as S from '@/components/Todo/Details/Modal/details-modal-styles';
import { SpinCustom } from '@/components/shared/Spin';
import { App } from 'antd';
import { useQueryTodoDetails } from '@/api/service/toDo/actions';
import { ToDoActivityCard } from '@/components/Todo/Details/Modal/ToDoDetailsCard';
type DetailsModalToDoDialogProps = {
  open: boolean;
  onCancel: () => void;
  id: number;
};

export const DetailsModalToDoDialog: FC<DetailsModalToDoDialogProps> = ({
  onCancel,
  open,
  id,
}) => {
  const { notification } = App.useApp();
  const { toDoItem, isLoadingToDos } = useQueryTodoDetails(id, notification);

  return (
    <S.ModalStyled
      centered
      open={open}
      title="Detalhes da Tarefa"
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
        <ToDoActivityCard toDoItem={toDoItem} />
      </SpinCustom>
    </S.ModalStyled>
  );
};
