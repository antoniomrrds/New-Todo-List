import { DividerCustom } from '@/components/shared/Divider';
import { FC } from 'react';
import * as S from '@/components/Todo/Save/CardMainForm/card-main-form-styles';
import { ToDoDetails } from '@/api/service/toDo/types';
import { ToDoSaveForm } from '@/components/Todo/Save/ToDoSaveForm';
import { Grid } from 'antd';
const { useBreakpoint } = Grid;

type CardMainFormProps = {
  toDoItem: ToDoDetails | null;
  goToTodoPage: () => void;
};

export const CardMainForm: FC<CardMainFormProps> = ({
  toDoItem,
  goToTodoPage,
}) => {
  const screens = useBreakpoint();

  const cardMainFormProps = {
    toDoItem,
    goToTodoPage,
  };

  return (
    <S.CardMain>
      <S.HeaderMain $screens={screens}>
        {toDoItem?.id ? 'Editar' : 'Adicionar'} Tarefa
      </S.HeaderMain>
      <DividerCustom margin={5} />
      <ToDoSaveForm {...cardMainFormProps} />
    </S.CardMain>
  );
};
