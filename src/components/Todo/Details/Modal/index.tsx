import { FC } from 'react';
import * as S from '@/components/Todo/Details/Modal/details-modal-styles';
import { SpinCustom } from '@/components/shared/Spin';
import { App, Button, Flex } from 'antd';
import { useQueryTodoDetails } from '@/api/service/toDo/actions';
import { ToDoDetailsCard } from '@/components/Todo/Details/Modal/ToDoDetailsCard';
import * as I from '@/components/shared/Icons';
import { gold } from '@ant-design/colors';
import { SaveModalToDoDialog } from '@/components/Todo/Save/Modal';
import { DefaultValues } from '@/api/core/types';
import { useModal } from '@/helpers';

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

  const { isModalOpen, showModal, closeModal } = useModal<number>();

  return (
    <S.ModalStyled
      centered
      open={open}
      title="Detalhes da Tarefa"
      onCancel={onCancel} // Fecha o modal principal
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
        <ToDoDetailsCard toDoItem={toDoItem} />
        <Flex justify="end" style={{ marginTop: '20px' }}>
          <Button onClick={() => showModal(toDoItem?.id)}>
            <I.EditOutlinedStyled
              $color={gold.primary}
              key="edit"
              onClick={() => showModal(toDoItem?.id)} // Abre o modal secundário
            />
          </Button>
        </Flex>
        {isModalOpen && (
          <SaveModalToDoDialog
            open={isModalOpen}
            onCancel={closeModal} // Fecha o modal secundário
            categoryId={toDoItem?.id ?? DefaultValues.IdNullValue}
          />
        )}
      </SpinCustom>
    </S.ModalStyled>
  );
};
