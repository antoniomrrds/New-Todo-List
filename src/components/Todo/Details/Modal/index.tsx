import { FC } from 'react';
import * as I from '@/components/shared/Icons';
import * as S from '@/components/Todo/Details/Modal/modal-styles';
import { SpinCustom } from '@/components/shared/Spin';
type ConfirmToDoDeleteDialogProps = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
};
export const ConfirmToDoDeleteDialog: FC<ConfirmToDoDeleteDialogProps> = ({
  onCancel,
  onConfirm,
  open,
  loading = false,
}) => {
  return (
    <S.ModalStyled
      centered
      title={
        <>
          Você tem certeza que <S.TextCustom>Deletar</S.TextCustom>
          esta Tarefa ?
        </>
      }
      open={open}
      onOk={onConfirm}
      onCancel={onCancel}
      closeIcon={null}
      okButtonProps={{
        danger: true,
        loading,
      }}
      wrapClassName="custom-modal-wrap"
      maskClosable={false} // 🔹 Impede fechar ao clicar fora
      keyboard={false} // 🔹 Impede fechar ao pressionar "Esc"
    >
      <SpinCustom
        loading={loading}
        text="Excluindo a tarefa, isso pode levar um minuto..."
      >
        <S.Paragraph>
          <I.WarningFilledStyled />
          Esta ação não pode ser desfeita.
        </S.Paragraph>
      </SpinCustom>
    </S.ModalStyled>
  );
};
