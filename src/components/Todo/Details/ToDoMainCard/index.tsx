import { ToDoDetails } from '@/api/service/toDo/types';
import { FC, useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import * as S from '@/components/Todo/Details/ToDoMainCard/to-do-main-card-styles';
import { TodoDetailsDropdown } from '@/components/Todo/Details/Buttons';
import { DividerCustom } from '@/components/shared/Divider';
import { Breakpoint } from 'antd';
import { cyan, purple } from '@ant-design/colors';
type ToDoMainCardProps = {
  toDoItem: ToDoDetails;
  screens: Partial<Record<Breakpoint, boolean>>;
};

export const ToDoMainCard: FC<ToDoMainCardProps> = ({ toDoItem, screens }) => {
  const [isCategoriesEmpty, setCategoriesEmpty] = useState(false);
  useEffect(() => {
    const isCategoriesEmpty = toDoItem.categories.length === 0;
    if (isCategoriesEmpty) {
      setCategoriesEmpty(true);
    }
  }, [setCategoriesEmpty, toDoItem.categories]);
  const todoAndCategories = [
    ...toDoItem.categories.map((item) => ({ ...item, type: 'category' })),
    ...toDoItem.tags.map((item) => ({ ...item, type: 'tag' })),
  ];

  return (
    <S.CardMain>
      <S.HeaderMain $screens={screens}>
        {toDoItem.title}
        <TodoDetailsDropdown />
      </S.HeaderMain>
      <DividerCustom margin={5} />

      <S.CardsContainer>
        {/* Se não houver tags nem categorias, mostrar aviso */}
        {toDoItem.tags.length === 0 && toDoItem.categories.length === 0 && null}

        {/* Combina as categorias e tags em um único array */}
        {todoAndCategories.map((item, index) => {
          const uniqueId = `${item.type}-${item.id}-${item.createdAt}`; // Usando apenas item.type e item.id como chave única
          return (
            <S.TagStyled
              key={uniqueId} // Garante que cada chave seja única
              title={item.name}
              color={
                isCategoriesEmpty
                  ? purple.primary
                  : index % 2 === 0
                    ? cyan.primary
                    : purple.primary
              }
            >
              {item.name}
            </S.TagStyled>
          );
        })}
      </S.CardsContainer>
      <S.HeaderSubtitle>Descrição</S.HeaderSubtitle>
      <ReactQuill
        value={toDoItem.description}
        readOnly
        theme="bubble"
        modules={{ toolbar: false }}
      />
    </S.CardMain>
  );
};
