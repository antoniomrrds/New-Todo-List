import { Avatar, Card, Skeleton, Typography } from 'antd';

import { FC } from 'react';
import * as S from './Card.styles';
import { ToDo } from '@/api/service/toDo/types';
import { ToDoStatusBadge } from '@/components/CardTodo/toDoStatusBadge';
import { UserOutlined } from '@ant-design/icons';
import { theme } from '@/styles/Theme';
import { useNavigateToPath } from '@/helpers';

const { Text } = Typography;

type Props = {
  data: ToDo[];
};

const CardTasks: FC<Props> = ({ data }) => {
  const navigateTo = useNavigateToPath();
  const navigateToDetails = (id: number) => navigateTo(`${id}`);
  return (
    <S.CardsContainer>
      <Skeleton loading={false} active>
        {data.map((todoItem) => (
          <ToDoStatusBadge task={todoItem} key={todoItem.id}>
            <S.PaperCard
              onClick={() => navigateToDetails(todoItem.id)}
              cover={
                <S.DateContainer>
                  <S.DayOverlay>
                    {new Date(todoItem.createdAt).getDate()}
                  </S.DayOverlay>
                  <S.CreationDate>
                    {new Date(todoItem.createdAt).toLocaleString('default', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </S.CreationDate>
                </S.DateContainer>
              }
            >
              <Card.Meta title={<Text strong>{todoItem.title}</Text>} />
              <S.CreatorName>
                <Avatar
                  style={{
                    backgroundColor: theme.colors.success.successGreen700,
                  }}
                  // src={task.avatar}
                  alt="Criador"
                  icon={<UserOutlined />}
                />

                {/* <img src={task.avatar || avatar} alt="Criador" /> */}
                {/* <Text className="creator-name">{task.creator}</Text> */}
              </S.CreatorName>
            </S.PaperCard>
          </ToDoStatusBadge>
        ))}
      </Skeleton>
    </S.CardsContainer>
  );
};

export default CardTasks;
