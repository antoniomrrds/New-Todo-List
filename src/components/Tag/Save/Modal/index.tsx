import { FC } from 'react';
import * as S from '@/components/Tag/Save/Modal/save-modal-styles';
import { SpinCustom } from '@/components/shared/Spin';
import { useQueryTagDetails } from '@/api/service/tag/actions';

import { App } from 'antd';
import { TagFormCard } from '@/components/Tag/Save/Modal/TagSaveCard';
type SaveModalTagDialogProps = {
  open: boolean;
  onCancel: () => void;
  id: number;
};

export const SaveModalTagDialog: FC<SaveModalTagDialogProps> = ({
  onCancel,
  open,
  id,
}) => {
  const { notification } = App.useApp();
  const { tagItem, isLoadingTags, refetch } = useQueryTagDetails(
    id,
    notification,
  );

  return (
    <S.ModalStyled
      centered
      open={open}
      title={`${tagItem?.id ? 'Editar' : 'Adicionar'} Tarefa`}
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
      <SpinCustom loading={isLoadingTags} text="Carregando dados...">
        <TagFormCard
          tagItem={tagItem}
          notification={notification}
          loading={isLoadingTags}
          onCancel={onCancel}
          refetch={refetch}
        />
      </SpinCustom>
    </S.ModalStyled>
  );
};
