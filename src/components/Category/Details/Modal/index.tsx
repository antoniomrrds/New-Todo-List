import { FC } from 'react';
import { SpinCustom } from '@/components/shared/Spin';

import { App } from 'antd';
import { useQueryCategoryDetails } from '@/api/service/category/actions';
import { CategoryActivityCard } from '@/components/Category/Details/Modal/CategoryDetailsCard';
import * as S from './details-modal-styles';
type DetailsModalCategoryProps = {
  open: boolean;
  onCancel: () => void;
  loading?: boolean;
  id: number;
};

export const DetailsModalCategoryDialog: FC<DetailsModalCategoryProps> = ({
  onCancel,
  open,
  loading = false,
  id,
}) => {
  const { notification } = App.useApp();
  const { categoryItem, isLoadingCategories } = useQueryCategoryDetails(
    id,
    notification,
  );

  return (
    <S.ModalStyled
      centered
      open={open}
      title="Detalhes da Categoria"
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
      <SpinCustom loading={loading} text="Carregando dados...">
        <CategoryActivityCard categoryItem={categoryItem} />
      </SpinCustom>
    </S.ModalStyled>
  );
};
