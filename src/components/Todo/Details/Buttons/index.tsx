import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import { gold } from '@ant-design/colors';
import * as S from '@/components/Todo/Details/Buttons/buttons-styles';
import { useState } from 'react';
import { ConfirmToDoDeleteDialog } from '@/components/Todo/Details/Modal';

export const TodoDetailsDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log('ok');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log('cancel');
    setIsModalOpen(false);
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
      icon: <EditOutlined style={{ color: gold.primary }} />,
    },
    {
      key: 'delete',
      label: <S.Span>Excluir</S.Span>,
      icon: <DeleteOutlined />,
      onClick: () => showModal(),
      danger: true,
    },
  ];

  return (
    <S.Container>
      <ConfirmToDoDeleteDialog
        open={isModalOpen}
        onConfirm={handleOk}
        onCancel={handleCancel}
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
