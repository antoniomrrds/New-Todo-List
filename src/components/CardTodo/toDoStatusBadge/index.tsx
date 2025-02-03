import { FC } from 'react';
import { Badge } from 'antd';
import { FaInfinity } from 'react-icons/fa6';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CheckOutlined,
} from '@ant-design/icons'; // Ícones de status
import { ToDo } from '@/api/service/toDo/types';

// Enum para os status da tarefa
export enum TodoStatus {
  Ativo = 'Ativo',
  Expirado = 'Expirado',
  SemValidade = 'Sem Val.',
  Concluido = 'Concluído',
  Inativo = 'Inativo',
}

type ToDoStatusBadgeProps = {
  task: ToDo;
  children: React.ReactNode;
};

// Função para mapear o status
const getTaskStatus = (task: ToDo) => {
  if (task.isCompleted) {
    return {
      text: TodoStatus.Concluido,
      color: 'blue',
      icon: <CheckOutlined style={{ marginRight: 8 }} />,
    };
  }

  if (task.isExpirationDateValid) {
    return {
      text: TodoStatus.Expirado,
      color: 'red',
      icon: <CloseCircleOutlined style={{ marginRight: 8 }} />,
    };
  }

  if (!task.expirationDate) {
    return {
      text: TodoStatus.SemValidade,
      color: 'purple',
      icon: <FaInfinity style={{ marginRight: 8 }} />,
    };
  }

  return {
    text: TodoStatus.Ativo,
    color: 'green',
    icon: <CheckCircleOutlined style={{ marginRight: 8 }} />,
  };
};

export const ToDoStatusBadge: FC<ToDoStatusBadgeProps> = ({
  task,
  children,
}) => {
  const { text, color, icon } = getTaskStatus(task); // Desestruturando os valores retornados

  return (
    <Badge.Ribbon
      key={task.id}
      text={
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {icon}
          {text}
        </span>
      }
      color={color}
    >
      {children}
    </Badge.Ribbon>
  );
};
