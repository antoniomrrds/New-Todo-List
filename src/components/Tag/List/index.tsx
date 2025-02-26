import { Empty } from 'antd';
import { AxiosError } from 'axios';
import React from 'react';
import * as S from '@/components/Todo/List/todo-list-container.styles';
import ErrorCard from '@/components/Error/ErrorCard';
import { SpinCustom } from '@/components/shared/Spin';
import { Tag } from '@/api/service/tag/types';
import { Items } from '@/components/Tag/List/Items';

type TagList = {
  tags: Tag[];
  isLoading: boolean;
  error: AxiosError;
};

const LoadingComponent = () => (
  <S.GridCenteredContainer>
    <SpinCustom
      text="Carregando tarefas..."
      loading={true}
      hasAbsolutePosition={false}
    />
  </S.GridCenteredContainer>
);

const ErrorComponent = ({ message }: { message: string }) => (
  <S.GridCenteredContainer>
    <ErrorCard message={message} />
  </S.GridCenteredContainer>
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
      <S.GridCenteredContainer>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={noFilteredTasksMessage}
        />
      </S.GridCenteredContainer>
    );
  };

  return <S.GridCenteredContainer>{getContent()}</S.GridCenteredContainer>;
};
