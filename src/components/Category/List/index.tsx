import { Alert, Empty } from 'antd';
import { AxiosError } from 'axios';
import React from 'react';
import { SpinCustom } from '@/components/shared/Spin';
import * as S from './category-list-container-styles';
import { Category } from '@/api/service/category/types';
import { ItemsCategory } from '@/components/Category/List/Items';

type CategoryListProps = {
  categories: Category[];
  isLoading: boolean;
  error: AxiosError;
};

const LoadingComponent = () => (
  <S.GridCenteredLoading>
    <SpinCustom
      text="Carregando tarefas..."
      loading={true}
      hasAbsolutePosition={false}
    />
  </S.GridCenteredLoading>
);

const ErrorComponent = ({ message }: { message: string }) => (
  <S.GridCenteredContainer>
    <Alert
      message="Erro ao carregar as tarefas"
      description={message}
      type="error"
      showIcon
    />
  </S.GridCenteredContainer>
);

export const CategoryListContainer: React.FC<CategoryListProps> = ({
  categories,
  isLoading,
  error,
}) => {
  const noFilteredTasksMessage =
    'Nenhuma categoria encontrada com os critérios de busca.';

  const getContent = () => {
    if (isLoading) return <LoadingComponent />;
    if (error) return <ErrorComponent message={error.message} />;
    if (categories.length > 0) return <ItemsCategory data={categories} />;
    return (
      <S.GridCenteredLoading>
        <S.EmptyStyled
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={noFilteredTasksMessage}
        />
      </S.GridCenteredLoading>
    );
  };

  return <S.GridCenteredContainer>{getContent()}</S.GridCenteredContainer>;
};
