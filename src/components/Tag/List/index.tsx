import { Alert, Empty } from 'antd';
import { AxiosError } from 'axios';
import React from 'react';
import { SpinCustom } from '@/components/shared/Spin';
import { Tag } from '@/api/service/tag/types';
import { Items } from '@/components/Tag/List/Items';
import * as S from './tag-list-container-styles';

type TagList = {
  tags: Tag[];
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
  <S.GridCenteredError>
    <Alert
      message="Erro ao carregar as tags"
      description={message}
      type="error"
      showIcon
    />
  </S.GridCenteredError>
);

export const TagListContainer: React.FC<TagList> = ({
  tags,
  isLoading,
  error,
}) => {
  const noFilteredTasksMessage =
    'Nenhuma tag encontrada com os critérios de busca.';

  const getContent = () => {
    if (isLoading) return <LoadingComponent />;
    if (error) return <ErrorComponent message={error.message} />;
    if (tags.length > 0) return <Items data={tags} />;
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
