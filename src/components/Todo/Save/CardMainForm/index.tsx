import { DividerCustom } from '@/components/shared/Divider';
import { FC } from 'react';
import * as S from '@/components/Todo/Save/CardMainForm/card-main-form-styles';
import { Breakpoint } from 'antd/lib';
import { ToDoDetails } from '@/api/service/toDo/types';
import { ToDoSaveForm } from '@/components/Todo/Save/ToDoSaveForm';
import { Tag } from '@/api/service/tag/types';
import { Category } from '@/api/service/category/types';
import { Skeleton } from 'antd';

type CardMainFormProps = {
  isEditing: boolean;
  screens: Partial<Record<Breakpoint, boolean>>;
  toDoItem: ToDoDetails | null;
  tags: Tag[];
  categories: Category[];
  isLoadingCategoriesAndTags: boolean;
};

export const CardMainForm: FC<CardMainFormProps> = ({
  isEditing,
  screens,
  toDoItem,
  categories,
  tags,
  isLoadingCategoriesAndTags,
}) => {
  const cardMainFormProps = {
    toDoItem,
    categories,
    tags,
  };

  return (
    <S.CardMain>
      <S.HeaderMain $screens={screens}>
        {isEditing ? 'Editar' : 'Adicionar'} Tarefa
      </S.HeaderMain>
      <DividerCustom margin={5} />
      <Skeleton active loading={isLoadingCategoriesAndTags}>
        <ToDoSaveForm {...cardMainFormProps} />
      </Skeleton>
    </S.CardMain>
  );
};
