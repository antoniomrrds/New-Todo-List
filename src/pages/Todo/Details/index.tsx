import { useQueryTodoDetails } from '@/api/service/toDo/actions';
import { obtainTodoStatusDetails } from '@/components/CardTodo/toDoStatusBadge';
import AppFooter from '@/components/Footer';
import { AppHeader } from '@/components/Header';
import { BreadCrumb, BreadcrumbItems } from '@/components/shared/BreadCrumb';
import { StyledContent, StyledLayout } from '@/styles/global-styles';
import { parseIdOrDefault } from '@/utils';
import {
  Card,
  Col,
  Flex,
  Row,
  Tag,
  Button,
  Grid,
  Typography,
  FloatButton,
  Popconfirm,
  PopconfirmProps,
} from 'antd';
import Meta from 'antd/es/card/Meta';
import ReactQuill from 'react-quill-new';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const { useBreakpoint } = Grid;

const { Text, Title } = Typography;
type toDoDetailsParams = {
  id: string;
};

import { FaRegCalendarAlt } from 'react-icons/fa';
// import { FaIdBadge } from 'react-icons/fa'; // para usar quando for atualizado por um usuário
import { FaAddressCard } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa';
import { FaCalendarDay } from 'react-icons/fa';
import { purple, cyan, gold } from '@ant-design/colors';
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Breakpoint } from 'antd/lib';
import { App as AppAntd } from 'antd';

export const CardMainItem = styled(Card)<{ $HasPadding?: boolean }>`
    border: 2px solid ${({ theme }) => theme.colors.success.successGreen600};
    overflow: hidden !important;
    .ant-card-body{
      padding: ${({ theme, $HasPadding }) =>
        $HasPadding
          ? `${theme.spacing.medium}  ${theme.spacing.medium}  ${theme.spacing.medium} `
          : '0'} !important;
      padding-top: 0px !important;
 }

`;

const MetaStyled = styled(Meta)`
color: ${({ theme }) => theme.colors.success.successGreen600}!important;
.ant-card-meta-title{
  color: ${({ theme }) => theme.colors.neutral.neutral800}!important;
  padding: ${({ theme }) => theme.spacing.small}!important;
  background: ${({ theme }) => theme.colors.neutral.neutral100}!important;

}

`;
const TitleCustom = styled(Title)<{
  $screens: Partial<Record<Breakpoint, boolean>>;
  $HasMarginTop?: boolean;
}>`
  font-size: ${({ $screens }) => ($screens.lg ? 21 : 17)}px !important;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.neutral.neutral800};
  margin: 0px !important;
  margin-top: ${({ theme, $HasMarginTop }) => ($HasMarginTop ? theme.spacing.medium : 0)}!important;

  padding: ${({ theme }) => theme.spacing.small}!important;
  padding-left: 0px !important;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.success.successGreen600}!important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  word-wrap: break-word; /* Permite quebra de linha */
  max-width: 100%; /* Garante que ocupe o máximo possível */
  overflow: hidden; /* Evita o transbordamento */
  white-space: normal; /* Garante que as palavras quebrem conforme necessário */
`;

const TagStyled = styled(Tag)`
  display: flex !important;
  align-items: center !important;
`;

const FlexMetaContent = styled(Flex)<{
  $screens: Partial<Record<Breakpoint, boolean>>;
}>`
   font-size: ${({ $screens }) => ($screens.lg ? 16 : 13)}px;
   font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
   font-weight : 400 !important;
`;

export const TodoDetailsPage = () => {
  const { id } = useParams<toDoDetailsParams>();
  const todoId = parseIdOrDefault(id);

  const { toDoItem, errorToDos, isLoadingToDos } = useQueryTodoDetails(todoId);

  const screens = useBreakpoint();
  const { message } = AppAntd.useApp();
  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };

  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Click on No');
  };

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
  const { color, icon, text } = obtainTodoStatusDetails(toDoItem, 4);

  return (
    <StyledLayout>
      <AppHeader />
      <StyledContent style={{ minHeight: '100%' }}>
        <BreadCrumb items={breadcrumbItems} />

        <CardMainItem $HasPadding>
          <Flex align="center" justify="space-between">
            <Flex
              wrap="wrap"
              gap={10}
              style={{ flexWrap: 'wrap', width: '100%' }}
            >
              {' '}
              {/* Assegura que o conteúdo ocupe a largura disponível */}
              <TitleCustom $screens={screens}>{toDoItem.title}</TitleCustom>
            </Flex>
          </Flex>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <MetaStyled
                title={
                  <FlexMetaContent align="center" gap={4} $screens={screens}>
                    <FaRegCalendarAlt /> Cadastrado:{' '}
                    {toDoItem.createdAtFormatted}
                  </FlexMetaContent>
                }
              />
              <MetaStyled
                style={{ marginTop: 16 }}
                title={
                  <FlexMetaContent align="center" gap={4} $screens={screens}>
                    <FaAddressCard /> Status:
                    <TagStyled icon={icon} color={color}>
                      {text}
                    </TagStyled>
                  </FlexMetaContent>
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <MetaStyled
                title={
                  <FlexMetaContent align="center" gap={4} $screens={screens}>
                    <FaCalendarCheck /> Atualizado Em:{' '}
                    {toDoItem.updatedAtFormatted}
                  </FlexMetaContent>
                }
              />

              <MetaStyled
                style={{ marginTop: 16 }}
                title={
                  <FlexMetaContent align="center" gap={4} $screens={screens}>
                    <FaCalendarDay /> Expira Em:{' '}
                    {toDoItem.expirationDateFormatted}
                  </FlexMetaContent>
                }
              />
            </Col>
          </Row>
        </CardMainItem>
        <TitleCustom $screens={screens}>Descrição</TitleCustom>
        <CardMainItem bordered={false}>
          <MetaStyled
            title={
              <ReactQuill
                value={toDoItem.description}
                readOnly
                theme="bubble"
                modules={{ toolbar: false }}
              />
            }
          />
        </CardMainItem>
        <TitleCustom $screens={screens}>Tags</TitleCustom>
        <Flex align="center">
          <Flex wrap="wrap" gap={10}>
            {toDoItem.tags.length === 0 && (
              <Text type="warning">Nenhuma tag associada</Text>
            )}

            {toDoItem.tags.map((tag) => (
              <Button
                key={tag.id}
                color={'primary'}
                variant="solid"
                style={{
                  backgroundColor: cyan.primary,
                }}
              >
                {toDoItem.title}
              </Button>
            ))}
          </Flex>
        </Flex>
        <TitleCustom $screens={screens}>Categorias</TitleCustom>
        <Flex align="center">
          <Flex wrap="wrap" gap={10}>
            {toDoItem.categories.length === 0 && (
              <Text type="warning">Nenhuma categoria associada</Text>
            )}
            {toDoItem.categories.map((category) => (
              <>
                <Button
                  color={'primary'}
                  variant="solid"
                  onClick={() => console.log('Clicou na categoria')}
                  key={category.id}
                  style={{
                    backgroundColor: purple.primary,
                  }}
                >
                  {category.name}
                </Button>
              </>
            ))}
          </Flex>
        </Flex>
        <Flex
          gap="small"
          align="center"
          justify="end"
          style={{ marginTop: 16 }}
        >
          <Button
            color={'primary'}
            variant="solid"
            onClick={() => console.log('Clicou na categoria')}
            key={'edit'}
            block={screens.xs}
            title="Editar"
            icon={<EditOutlined />}
            style={{
              backgroundColor: gold.primary,
            }}
          >
            {' '}
            Editar
          </Button>
          <Popconfirm
            title="Deletar Tarefa"
            description="Tem certeza de que deseja excluir esta tarefa?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            cancelButtonProps={{ type: 'primary', danger: true }}
            onCancel={cancel}
            onConfirm={confirm}
          >
            <Button
              variant="solid"
              key={'edit'}
              type="primary"
              danger
              block={screens.xs}
              icon={<DeleteOutlined />}
            >
              Deletar{' '}
            </Button>
          </Popconfirm>
        </Flex>
      </StyledContent>
      <FloatButton.BackTop type="primary" tooltip="↑ Voltar ao topo" />
      <AppFooter />
    </StyledLayout>
  );
};
