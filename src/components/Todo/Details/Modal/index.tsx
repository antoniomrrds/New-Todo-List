import { FC } from 'react';
import * as I from '@/components/shared/Icons';
import * as S from '@/components/Todo/Details/Modal/modal-styles';
import { Spin } from 'antd';
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
      title={'Você tem certeza que deseja cancelar esta tarefa?'}
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
      {loading && (
        <S.Overlay>
          <Spin size="large" indicator={<S.LoadingOutlinedStyled />} />
          <S.LoadingText>
            Excluindo a tarefa, isso pode levar um minuto...
          </S.LoadingText>
        </S.Overlay>
      )}
      <S.ContentStyled>
        <p>
          <I.WarningFilledStyled />
          Esta ação não pode ser desfeita.
        </p>
      </S.ContentStyled>
    </S.ModalStyled>
  );
};
