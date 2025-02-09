import { WarningFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

export const ModalStyled = styled(Modal)`
   font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
   .ant-modal-header {

     background-color: ${({ theme }) => theme.colors.success.successGreen600} !important;

    }
    .ant-modal-title {
      font-weight: ${({ theme }) => theme.typography.fontWeight[700]}  !important;
      font-style: ${({ theme }) => theme.typography.fontStyle.italic}!important;
      color: ${({ theme }) => theme.colors.neutral.neutral800};
    }
    .ant-modal-body{
      background-color: ${({ theme }) => theme.colors.neutral.neutral800} !important;
    }
  .ant-modal-content {
    background-color: ${({ theme }) => theme.colors.success.successGreen600} !important;
    color: ${({ theme }) => theme.colors.error.errorRed500};
  }
`;
export const WarningFilledStyled = styled(WarningFilled)`
  color:${({ theme }) => theme.colors.error.errorRed700};
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;

`;

export const ContentStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xsmall}!important;
    font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
    color: ${({ theme }) => theme.colors.error.errorRed500};
    font-weight: ${({ theme }) => theme.typography.fontWeight[500]}!important;
    font-style: ${({ theme }) => theme.typography.fontStyle.italic}!important;
    ;
  }
`;

type ConfirmToDoDeleteDialogProps = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};
export const ConfirmToDoDeleteDialog: FC<ConfirmToDoDeleteDialogProps> = ({
  onCancel,
  onConfirm,
  open,
}) => {
  return (
    <ModalStyled
      centered
      title={'Você tem certeza que deseja cancelar esta tarefa?'}
      open={open}
      onOk={onConfirm}
      onCancel={onCancel}
      closeIcon={null}
      okButtonProps={{
        danger: true,
      }}
      wrapClassName="custom-modal-wrap"
      maskClosable={false} // 🔹 Impede fechar ao clicar fora
      keyboard={false} // 🔹 Impede fechar ao pressionar "Esc"
    >
      <ContentStyled>
        <p>
          <WarningFilledStyled />
          Esta ação não pode ser desfeita.
        </p>
      </ContentStyled>
    </ModalStyled>
  );
};
