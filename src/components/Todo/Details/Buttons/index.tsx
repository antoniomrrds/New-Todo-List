import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import { gold } from '@ant-design/colors';
import * as S from '@/components/Todo/Details/Buttons/buttons-styles';
import { ConfirmToDoDeleteDialog } from '@/components/Todo/Details/Modal';
import { useModal } from '@/helpers';
import * as I from '@/components/shared/Icons';
export const TodoDetailsDropdown = () => {
  const { isOpen, openModal, confirmAndCloseModal, onModalCancel } = useModal();
  const deleteTodo = () => {
    console.log('ok');
  };

  const cancelDelete = () => {
    console.log('cancel');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <S.Span>Ações</S.Span>,
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: 'edit',
      label: <S.Span>Editar</S.Span>,
      icon: <I.EditOutlinedStyled $color={gold.primary} />,
    },
    {
      key: 'delete',
      label: <S.Span>Excluir</S.Span>,
      icon: <I.FaTrashAltStyled />,
      onClick: () => openModal(deleteTodo, cancelDelete), // Passando as funções personalizadas
    },
  ];

  return (
    <S.Container>
      <ConfirmToDoDeleteDialog
        open={isOpen}
        onConfirm={confirmAndCloseModal}
        onCancel={onModalCancel}
      />
      <Dropdown menu={{ items }} trigger={['click']}>
        <Button
          color={'primary'}
          variant="solid"
          key={'more-button'}
          shape="circle"
          title="Mais"
          icon={<MoreOutlined />}
        />
      </Dropdown>
    </S.Container>
  );
};
