import { useQueryTodoDetails } from '@/api/service/toDo/actions';
import AppFooter from '@/components/Footer';
import { AppHeader } from '@/components/Header';
import { BreadCrumb, BreadcrumbItems } from '@/components/shared/BreadCrumb';
import { StyledContent, StyledLayout } from '@/styles/global-styles';
import { parseIdOrDefault } from '@/utils';
import { Col, Row, Grid, FloatButton } from 'antd';
import { useParams } from 'react-router-dom';
const { useBreakpoint } = Grid;

type toDoDetailsParams = {
  id: string;
};

import { ToDoActivityCard } from '@/components/Todo/Details/ToDoActivityCard';
import { ToDoMainCard } from '@/components/Todo/Details/ToDoMainCard';
import { useWindowWidth } from '@/utils/window-with';
import { size } from '@/styles/breakpoints';

export const TodoDetailsPage = () => {
  const { id } = useParams<toDoDetailsParams>();
  const todoId = parseIdOrDefault(id);
  const { toDoItem, errorToDos, isLoadingToDos } = useQueryTodoDetails(todoId);
  const screens = useBreakpoint();
  const sizeValue = useWindowWidth();
  const isTabletXS = sizeValue <= parseInt(size.tabletXS.replace('px', ''));

  if (isLoadingToDos) {
    return <h2>Carregando...</h2>;
  }

  if (!toDoItem) {
    return <h2>ToDo não encontrado</h2>;
  }

  if (errorToDos) {
    return <h2>Erro: {errorToDos.message}</h2>;
  }

  const breadcrumbItems: BreadcrumbItems = [
    { title: 'Todos (Tarefas)', href: '/todo' },
    { title: 'Detalhes da Tarefa' },
  ];

  return (
    <StyledLayout>
      <AppHeader />

      <StyledContent>
        <BreadCrumb items={breadcrumbItems} />
        <Row gutter={[10, 10]}>
          <Col flex={isTabletXS ? 'auto' : '0 1 300px'} xs={24} sm={24}>
            <ToDoActivityCard toDoItem={toDoItem} />
          </Col>
          <Col flex={isTabletXS ? 'auto' : '1 1 300px'} xs={24} sm={24}>
            <ToDoMainCard toDoItem={toDoItem} screens={screens} />
          </Col>
        </Row>
      </StyledContent>
      <FloatButton.BackTop type="primary" tooltip="↑ Voltar ao topo" />
      <AppFooter />
    </StyledLayout>
  );
};
