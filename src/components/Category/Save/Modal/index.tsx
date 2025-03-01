import { FC } from 'react';
import { SpinCustom } from '@/components/shared/Spin';
import * as S from './save-modal-styles';
import { App } from 'antd';
import { CategoryFormCard } from '@/components/Category/Save/Modal/CategorySaveCard';
import { useQueryCategoryDetails } from '@/api/service/category/actions';
type SaveModalCategoryDialogProps = {
  open: boolean;
  onCancel: () => void;
  categoryId: number;
};

export const SaveModalCategoryDialog: FC<SaveModalCategoryDialogProps> = ({
  onCancel,
  open,
  categoryId: id,
}) => {
  const { notification } = App.useApp();
  const isEditing = !!id; // Se tem ID válido, é edição

  const { isLoadingCategories, categoryItem, refetch } = isEditing
    ? useQueryCategoryDetails(id, notification)
    : { categoryItem: null, isLoadingCategories: false, refetch: () => {} };

  return (
    <S.ModalStyled
      centered
      open={open}
      title={`${categoryItem?.id ? 'Editar' : 'Adicionar'} categoria`}
      onCancel={onCancel}
      loading={isLoadingCategories}
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
      <SpinCustom loading={isLoadingCategories} text="Carregando dados...">
        <CategoryFormCard
          categoryItem={categoryItem}
          notification={notification}
          loading={isLoadingCategories}
          onCancel={onCancel}
          refetch={refetch}
        />
      </SpinCustom>
    </S.ModalStyled>
  );
};
