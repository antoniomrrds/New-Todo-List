import { App, Row, Typography } from 'antd';
import { FC } from 'react';
import { useModal } from '@/helpers';
import { gold, greyDark } from '@ant-design/colors';
import * as I from '@/components/shared/Icons';
import { Tag } from '@/api/service/tag/types';
import * as S from './items-styles';
import { ConfirmTagDeleteDialog } from '@/components/Tag/delete/Modal';
import { DetailsModalTagDialog } from '@/components/Tag/Details/Modal';
import { size } from '@/styles/breakpoints';
import { useWindowWidth } from '@/utils';
import { DefaultValues } from '@/api/core/types';
import { SaveModalTagDialog } from '@/components/Tag/Save/Modal';
import { useDeleteTag } from '@/api/service/tag/actions';
const { Text } = Typography;

// Tipagem das props
type Props = {
  data: Tag[];
};

export const ItemsCategory: FC<Props> = ({ data }) => {
  const sizeValue = useWindowWidth();
  const isTabletXS = sizeValue <= parseInt(size.tabletXS.replace('px', ''));

  const { notification } = App.useApp();
  const { deleteTag, deleteTagIsLoading } = useDeleteTag({ notification });

  const {
    isModalOpen,
    selectedItem: tagToDelete,
    showModal,
    closeModal,
  } = useModal<number>();

  const confirmAndCloseModal = () => {
    if (tagToDelete !== null) {
      deleteTag(tagToDelete, {
        onSuccess: closeModal,
      });
    }
  };

  const {
    isModalOpen: tagDetailsIsModalOpen,
    selectedItem: tagToDetails,
    showModal: showTagDetailsModal,
    closeModal: closeTagDetailsModal,
  } = useModal<number>();

  const {
    isModalOpen: isSaveModalOpen,
    selectedItem: tagToSave,
    showModal: showSaveModal,
    closeModal: closeSaveModal,
  } = useModal<number>();

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
      render: (name: string, record: Tag) => (
        <Text delete={!record.active}>{name}</Text>
      ),
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
            onClick={() => showSaveModal(record.id)}
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
            onClick={() => showTagDetailsModal(record.id)}
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
      {isTabletXS ? (
        <S.CardsContainer>
          {data.map((tag) => (
            <S.PaperCard key={tag.id}>
              <S.HeaderSubtitle>{tag.name}</S.HeaderSubtitle>
              <Row justify={'center'} align={'middle'}>
                <S.ActionsItemContatiner
                  span={8}
                  onClick={() => showSaveModal(tag.id)}
                >
                  <S.ActionsItem>
                    <I.EditOutlinedStyled $color={gold.primary} key="edit" />
                  </S.ActionsItem>
                </S.ActionsItemContatiner>
                <S.ActionsItemContatiner
                  span={8}
                  onClick={() => showModal(tag.id)}
                >
                  <S.ActionsItem>
                    <I.FaTrashAltStyled key="delete" />
                  </S.ActionsItem>
                </S.ActionsItemContatiner>
                <S.ActionsItemContatiner
                  span={8}
                  onClick={() => showTagDetailsModal(tag.id)}
                >
                  <S.ActionsItem>
                    <I.InfoCircleOutlinedStyled
                      $color={greyDark.primary}
                      key="info"
                    />
                  </S.ActionsItem>
                </S.ActionsItemContatiner>
              </Row>
            </S.PaperCard>
          ))}
        </S.CardsContainer>
      ) : (
        <S.TableStyled
          bordered={false}
          columns={columns}
          rowKey="id"
          scroll={{ x: 'max-content' }}
          pagination={false}
          dataSource={data}
          expandable={{
            expandedRowRender: (record: Tag) => (
              <S.Paragraph>{record.description}</S.Paragraph>
            ),
          }}
        />
      )}
      <ConfirmTagDeleteDialog
        open={isModalOpen}
        onConfirm={confirmAndCloseModal}
        onCancel={closeModal}
        loading={deleteTagIsLoading}
      />
      {tagToDetails !== null && (
        <DetailsModalTagDialog
          open={tagDetailsIsModalOpen}
          onConfirm={closeTagDetailsModal}
          onCancel={closeTagDetailsModal}
          loading={false}
          id={tagToDetails ?? DefaultValues.IdNullValue} // Usa 0 caso `tagToDetails` seja null
        />
      )}
      {tagToSave !== null && (
        <SaveModalTagDialog
          open={isSaveModalOpen}
          onCancel={closeSaveModal}
          tagId={tagToSave ?? DefaultValues.IdNullValue} // Usa 0 caso `tagToSave` seja null
        />
      )}
    </>
  );
};
