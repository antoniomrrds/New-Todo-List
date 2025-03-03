import { ToDoDetails } from '@/api/service/toDo/types';
import { FC } from 'react';
import * as S from '@/components/Todo/Details/TagsAndCategories/tags-and-categories-card-styles';

import { Category } from '@/api/service/category/types';
import { Tag } from '@/api/service/tag/types';

type ToDoMainCardProps = {
  toDoItem?: ToDoDetails;
};

const Tags = ({ toDoItem }: { toDoItem?: ToDoDetails }) => {
  return (
    <S.CardsContainer>
      <S.HeaderSubtitle>Tags</S.HeaderSubtitle>
      {toDoItem?.tags && toDoItem?.tags.length > 0 ? (
        toDoItem.tags.map((tag: Tag) => (
          <S.TagStyled key={tag.id}>{tag.name}</S.TagStyled>
        ))
      ) : (
        <S.HeaderSubtitle>Não há tags</S.HeaderSubtitle>
      )}
    </S.CardsContainer>
  );
};

const Categories = ({ toDoItem }: { toDoItem?: ToDoDetails }) => {
  return (
    <S.CardsContainer>
      <S.HeaderSubtitle>Categorias</S.HeaderSubtitle>
      {toDoItem?.categories && toDoItem?.categories.length > 0 ? (
        toDoItem.categories.map((category: Category) => (
          <S.TagStyled key={category.id}>{category.name}</S.TagStyled>
        ))
      ) : (
        <S.HeaderSubtitle>Não há categorias</S.HeaderSubtitle>
      )}
    </S.CardsContainer>
  );
};

const getContent = (toDoItem?: ToDoDetails) => {
  return (
    <>
      {/* Exibe as tags se existirem */}
      {toDoItem?.tags && toDoItem?.tags.length > 0 && (
        <Tags toDoItem={toDoItem} />
      )}

      {/* Exibe as categorias se existirem */}
      {toDoItem?.categories && toDoItem?.categories.length > 0 && (
        <Categories toDoItem={toDoItem} />
      )}

      {/* Se não houver tags ou categorias */}
      {!toDoItem?.tags?.length && !toDoItem?.categories?.length && (
        <S.HeaderSubtitle>Não há tags ou categorias</S.HeaderSubtitle>
      )}
    </>
  );
};

export const TagsAndCategoriesCard: FC<ToDoMainCardProps> = ({ toDoItem }) => {
  return <S.CardMain>{getContent(toDoItem)}</S.CardMain>;
};
