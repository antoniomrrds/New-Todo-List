import { FC } from 'react';
import * as S from '@/components/Tag/Details/Modal/details-modal-styles';
import { SpinCustom } from '@/components/shared/Spin';
import { useQueryTagDetails } from '@/api/service/tag/actions';

import { TagActivityCard } from '@/components/Tag/Details/TagDetailsCard';
import { App } from 'antd';
type DetailsModalTagDialogProps = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
  id: number;
};

export const DetailsModalTagDialog: FC<DetailsModalTagDialogProps> = ({
  onCancel,
  open,
  loading = false,
  id,
}) => {
  const { notification } = App.useApp();
  const { tagItem, isLoadingTags } = useQueryTagDetails(id, notification);

  return (
    <S.ModalStyled
      centered
      open={open}
      title="Detalhes da Tag"
      onCancel={onCancel}
      loading={isLoadingTags}
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
      <SpinCustom loading={loading} text="Carregando dados...">
        <TagActivityCard tagItem={tagItem} />
      </SpinCustom>
    </S.ModalStyled>
  );
};
