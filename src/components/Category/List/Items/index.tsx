import { App, Row, Typography } from 'antd';
import { FC } from 'react';
import { useModal } from '@/helpers';
import { gold, greyDark } from '@ant-design/colors';
import * as I from '@/components/shared/Icons';
import * as S from './items-styles';
import { size } from '@/styles/breakpoints';
import { useWindowWidth } from '@/utils';
import { DefaultValues } from '@/api/core/types';
import { Category } from '@/api/service/category/types';
import { useDeleteCategory } from '@/api/service/category/actions';
import { SaveModalCategoryDialog } from '@/components/Category/Save/Modal';
import { ConfirmCategoryDeleteDialog } from '@/components/Category/delete/Modal';
import { DetailsModalCategoryDialog } from '@/components/Category/Details/Modal';
const { Text } = Typography;

// Tipagem das props
type Props = {
  data: Category[];
};

export const ItemsCategory: FC<Props> = ({ data }) => {
  const sizeValue = useWindowWidth();
  const isTabletXS = sizeValue <= parseInt(size.tabletXS.replace('px', ''));

  const { notification } = App.useApp();
  const { deleteCategory, isDeletingCategory } = useDeleteCategory({
    notification,
  });

  const {
    isModalOpen,
    selectedItem: categoryToDelete,
    showModal,
    closeModal,
  } = useModal<number>();

  const confirmAndCloseModal = () => {
    if (categoryToDelete !== null) {
      deleteCategory(categoryToDelete, {
        onSuccess: closeModal,
      });
    }
  };

  const {
    isModalOpen: categoryDetailsIsModalOpen,
    selectedItem: categoryToDetails,
    showModal: showCategoryDetailsModal,
    closeModal: closeCategoryDetailsModal,
  } = useModal<number>();

  const {
    isModalOpen: isSaveModalOpen,
    selectedItem: categoryToSave,
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
      render: (name: string, record: Category) => (
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
      render: (_: unknown, record: Category) => (
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
            onClick={() => showCategoryDetailsModal(record.id)}
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
          {data.map((category) => (
            <S.PaperCard key={category.id}>
              <S.HeaderSubtitle>{category.name}</S.HeaderSubtitle>
              <Row justify={'center'} align={'middle'}>
                <S.ActionsItemContatiner
                  span={8}
                  onClick={() => showSaveModal(category.id)}
                >
                  <S.ActionsItem>
                    <I.EditOutlinedStyled $color={gold.primary} key="edit" />
                  </S.ActionsItem>
                </S.ActionsItemContatiner>
                <S.ActionsItemContatiner
                  span={8}
                  onClick={() => showModal(category.id)}
                >
                  <S.ActionsItem>
                    <I.FaTrashAltStyled key="delete" />
                  </S.ActionsItem>
                </S.ActionsItemContatiner>
                <S.ActionsItemContatiner
                  span={8}
                  onClick={() => showCategoryDetailsModal(category.id)}
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
            expandedRowRender: (record: Category) => (
              <S.Paragraph>{record.description}</S.Paragraph>
            ),
          }}
        />
      )}
      <ConfirmCategoryDeleteDialog
        open={isModalOpen}
        onConfirm={confirmAndCloseModal}
        onCancel={closeModal}
        loading={isDeletingCategory}
      />
      {categoryToDetails !== null && (
        <DetailsModalCategoryDialog
          open={categoryDetailsIsModalOpen}
          onCancel={closeCategoryDetailsModal}
          loading={false}
          id={categoryToDetails ?? DefaultValues.IdNullValue}
        />
      )}
      {categoryToSave !== null && (
        <SaveModalCategoryDialog
          open={isSaveModalOpen}
          onCancel={closeSaveModal}
          categoryId={categoryToSave ?? DefaultValues.IdNullValue}
        />
      )}
    </>
  );
};
