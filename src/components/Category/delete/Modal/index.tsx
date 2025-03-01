import { FC } from 'react';
import * as I from '@/components/shared/Icons';
import { SpinCustom } from '@/components/shared/Spin';
import * as S from './delete-styles';
type ConfirmCategoryDeleteDialogProps = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
};
export const ConfirmCategoryDeleteDialog: FC<
  ConfirmCategoryDeleteDialogProps
> = ({ onCancel, onConfirm, open, loading = false }) => {
  return (
    <S.ModalStyled
      centered
      title={
        <>
          Você tem certeza que <S.TextCustom>Deletar</S.TextCustom>
          esta categoria ?
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
        text="Excluindo a categoria, isso pode levar um minuto..."
      >
        <S.Paragraph>
          <I.WarningFilledStyled />
          Esta ação não pode ser desfeita.
        </S.Paragraph>
      </SpinCustom>
    </S.ModalStyled>
  );
};
