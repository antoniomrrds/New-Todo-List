import { FC } from 'react';
import * as S from '@/components/Tag/Save/Modal/save-modal-styles';
import { SpinCustom } from '@/components/shared/Spin';
import { useQueryTagDetails } from '@/api/service/tag/actions';

import { App } from 'antd';
import { TagFormCard } from '@/components/Tag/Save/Modal/TagSaveCard';
type SaveModalTagDialogProps = {
  open: boolean;
  onCancel: () => void;
  tagId: number;
};

export const SaveModalTagDialog: FC<SaveModalTagDialogProps> = ({
  onCancel,
  open,
  tagId: id,
}) => {
  const { notification } = App.useApp();
  const isEditing = !!id; // Se tem ID válido, é edição

  const { tagItem, isLoadingTags, refetch } = isEditing
    ? useQueryTagDetails(id, notification)
    : { tagItem: null, isLoadingTags: false, refetch: () => {} };

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
