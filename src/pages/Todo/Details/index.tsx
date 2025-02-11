import { useQueryTodoDetails } from '@/api/service/toDo/actions';
import AppFooter from '@/components/Footer';
import { AppHeader } from '@/components/Header';
import { BreadCrumb, BreadcrumbItems } from '@/components/shared/BreadCrumb';
import { StyledContent, StyledLayout } from '@/styles/global-styles';
import { parseIdOrDefault } from '@/utils';
import { Col, Row, Grid, FloatButton } from 'antd';
import { useParams } from 'react-router-dom';
import { ToDoActivityCard } from '@/components/Todo/Details/ToDoActivityCard';
import { ToDoMainCard } from '@/components/Todo/Details/ToDoMainCard';
import { useWindowWidth } from '@/utils/window-with';
import { size } from '@/styles/breakpoints';
import { NotFoundPage } from '@/pages/NotFound';
const { useBreakpoint } = Grid;

type toDoDetailsParams = {
  id: string;
};

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
    return <NotFoundPage />;
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
          <Col flex={isTabletXS ? '' : '0 1 300px'} xs={24} sm={24} md={24}>
            <ToDoActivityCard toDoItem={toDoItem} />
          </Col>
          <Col flex={isTabletXS ? '' : '1 1 300px'} xs={24} sm={24} md={24}>
            <ToDoMainCard
              toDoItem={toDoItem}
              screens={screens}
              todoId={todoId}
            />
          </Col>
        </Row>
      </StyledContent>
      <FloatButton.BackTop type="primary" tooltip="↑ Voltar ao topo" />
      <AppFooter />
    </StyledLayout>
  );
};
