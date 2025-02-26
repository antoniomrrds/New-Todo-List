import { Empty } from 'antd';
import { AxiosError } from 'axios';
import React from 'react';
import * as S from '@/components/Todo/List/todo-list-container.styles';
import ErrorCard from '@/components/Error/ErrorCard';
import { StyledContainer } from '@/styles/global-styles';
import { SpinCustom } from '@/components/shared/Spin';
import { Tag } from '@/api/service/tag/types';

type TagList = {
  tags: Tag[];
  isLoading: boolean;
  error: AxiosError;
};

const LoadingComponent = () => (
  <S.StyledCenteredContainer>
    <SpinCustom
      text="Carregando tarefas..."
      loading={true}
      hasAbsolutePosition={false}
    />
  </S.StyledCenteredContainer>
);

const ErrorComponent = ({ message }: { message: string }) => (
  <S.StyledCenteredContainer>
    <ErrorCard message={message} />
  </S.StyledCenteredContainer>
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
    if (tags.length > 0) return;
    return (
      <S.StyledCenteredContainer>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={noFilteredTasksMessage}
        />
      </S.StyledCenteredContainer>
    );
  };

  return <StyledContainer>{getContent()}</StyledContainer>;
};
