import { App, Row } from 'antd';
import { FC } from 'react';
import { useModal, useNavigateToPath } from '@/helpers';
import { gold, greyDark } from '@ant-design/colors';
import { useDeleteTodo } from '@/api/service/toDo/actions';
import { ConfirmToDoDeleteDialog } from '@/components/Todo/Details/Modal';
import * as I from '@/components/shared/Icons';
import { Tag } from '@/api/service/tag/types';
import * as S from './items-styles';

// Tipagem das props
type Props = {
  data: Tag[];
};

export const Items: FC<Props> = ({ data }) => {
  const navigateTo = useNavigateToPath();
  const navigateToEdit = (id: number) => navigateTo(`${id}/edit`);
  const navigateToDetails = (id: number) => navigateTo(`${id}`);
  const { notification } = App.useApp();
  const { deleteToDo, deleteToDoIsLoading } = useDeleteTodo({ notification });

  const {
    isModalOpen,
    selectedItem: tagToDelete,
    showModal,
    closeModal,
  } = useModal<number>();

  const confirmAndCloseModal = () => {
    if (tagToDelete !== null) {
      deleteToDo(tagToDelete, {
        onSuccess: closeModal,
      });
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'active',
      key: 'active',
      render: (active: number) => (active ? 'Ativo' : 'Inativo'),
    },
    {
      title: 'Criado em',
      dataIndex: 'createdAtFormatted',
      key: 'createdAtFormatted',
    },
    {
      title: 'Atualizado em',
      dataIndex: 'updatedAtFormatted',
      key: 'updatedAtFormatted',
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (_: unknown, record: Tag) => (
        <Row justify={'center'} align={'middle'}>
          <S.ActionsItemContatiner
            span={8}
            onClick={() => navigateToEdit(record.id)}
          >
            <S.ActionsItem>
              <I.EditOutlinedStyled $color={gold.primary} key="edit" />
            </S.ActionsItem>
          </S.ActionsItemContatiner>
          <S.ActionsItemContatiner
            span={8}
            onClick={() => showModal(record.id)}
          >
            <S.ActionsItem>
              <I.FaTrashAltStyled key="delete" />
            </S.ActionsItem>
          </S.ActionsItemContatiner>
          <S.ActionsItemContatiner
            span={8}
            onClick={() => navigateToDetails(record.id)}
          >
            <S.ActionsItem>
              <I.InfoCircleOutlinedStyled
                $color={greyDark.primary}
                key="info"
              />
            </S.ActionsItem>
          </S.ActionsItemContatiner>
        </Row>
      ),
    },
  ];

  return (
    <>
      <S.TableStyled
        bordered={false}
        columns={columns}
        rowKey="id"
        scroll={{ x: 'max-content' }} // Garante que o scroll aparece se necessário
        pagination={false}
        dataSource={data?.length < 0 ? [] : data}
        expandable={{
          expandedRowRender: (record: Tag) => (
            <S.Paragraph>{record.description}</S.Paragraph>
          ),
        }}
      />

      <ConfirmToDoDeleteDialog
        open={isModalOpen}
        onConfirm={confirmAndCloseModal}
        onCancel={closeModal}
        loading={deleteToDoIsLoading}
      />
    </>
  );
};
