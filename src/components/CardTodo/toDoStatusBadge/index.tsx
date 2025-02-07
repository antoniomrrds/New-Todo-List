import { FC } from 'react';
import { Badge } from 'antd';
import { FaInfinity } from 'react-icons/fa6';
import {
  CloseCircleOutlined,
  CheckOutlined,
  SyncOutlined,
} from '@ant-design/icons'; // Ícones de status
import { ToDo } from '@/api/service/toDo/types';
import { TodoStatus, TodoStatusText } from '@/api/service/toDo/enum';
import { blue, gray, green, purple, red } from '@ant-design/colors';

// Enum para os status da tarefa

type ToDoStatusBadgeProps = {
  task: ToDo;
  children: React.ReactNode;
};

export const obtainTodoStatusDetails = (
  todoItem: ToDo,
  iconMargin: number = 8,
) => {
  switch (todoItem.status) {
    case TodoStatus.Completed:
      return {
        text: TodoStatusText[TodoStatus.Completed],
        color: blue.primary,
        icon: <CheckOutlined style={{ marginRight: iconMargin }} />,
      };

    case TodoStatus.Expired:
      return {
        text: TodoStatusText[TodoStatus.Expired],
        color: red.primary,
        icon: <CloseCircleOutlined style={{ marginRight: iconMargin }} />,
      };

    case TodoStatus.Undetermined:
      return {
        text: TodoStatusText[TodoStatus.Undetermined],
        color: purple.primary,
        icon: <FaInfinity style={{ marginRight: iconMargin }} />,
      };

    case TodoStatus.Suspended:
      return {
        text: TodoStatusText[TodoStatus.Suspended],
        color: gray.primary,
        icon: <CloseCircleOutlined style={{ marginRight: iconMargin }} />,
      };

    case TodoStatus.InProgress:
      return {
        text: TodoStatusText[TodoStatus.InProgress],
        color: green.primary,
        icon: <SyncOutlined spin style={{ marginRight: iconMargin }} />,
      };

    default:
      return {
        text: TodoStatusText[TodoStatus.Unfiltered],
        color: 'black',
        icon: null,
      };
  }
};

export const ToDoStatusBadge: FC<ToDoStatusBadgeProps> = ({
  task,
  children,
}) => {
  const { text, color, icon } = obtainTodoStatusDetails(task); // Desestruturando os valores retornados

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
