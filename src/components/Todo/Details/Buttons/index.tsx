import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  WarningFilled,
} from '@ant-design/icons';
import { Button, Dropdown, Flex, MenuProps } from 'antd';
import { gold, red } from '@ant-design/colors';
import styled from 'styled-components';
import { App as AppAntd } from 'antd';
import { theme } from '@/styles/Theme';

const Span = styled.span`
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
   font-weight : normal !important;
`;

export const GroupButtons = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Span>Ações</Span>,
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: 'edit',
      label: <Span>Editar</Span>,
      icon: <EditOutlined style={{ color: gold.primary }} />,
    },
    {
      key: 'delete',
      label: <Span>Excluir</Span>,
      icon: <DeleteOutlined />,
      onClick: () => showModal(),
      danger: true,
    },
  ];
  const { modal } = AppAntd.useApp();

  const showModal = () => {
    modal.confirm({
      title: (
        <span
          style={{
            color: theme.shades.light,
            fontFamily: theme.typography.fontFamily.poppins,
          }}
        >
          Você tem certeza que deseja excluir esta tarefa?
        </span>
      ),
      content: (
        <span
          style={{
            color: red.primary,
            fontFamily: theme.typography.fontFamily.poppins,
          }}
        >
          Esta ação não pode ser desfeita.
        </span>
      ),

      centered: true,

      onOk() {},
      icon: <WarningFilled style={{ color: red.primary }} />,
      onCancel() {
        console.log('Cancelando exclusão...');
      },
      okButtonProps: { danger: true },
      cancelButtonProps: { type: 'primary' },
      styles: {
        content: {
          color: 'white',
          backgroundColor: theme.colors.neutral.neutral800,
        },
      },
    });
  };
  return (
    <Flex
      gap="small"
      align="center"
      justify="end"
      style={{ padding: '7px 10px ', position: 'absolute', right: 0, top: 0 }}
    >
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
    </Flex>
  );
};
