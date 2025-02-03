import { Card, Skeleton, Typography } from 'antd';

import { FC } from 'react';
import * as S from './Card.styles';
import { ToDo } from '@/api/service/toDo/types';
import { ToDoStatusBadge } from '@/components/CardTodo/toDoStatusBadge';

const { Text } = Typography;

type Props = {
  data: ToDo[];
};

const CardTasks: FC<Props> = ({ data }) => {
  return (
    <S.CardsContainer>
      <Skeleton loading={false} active>
        {data.map((task) => (
          <ToDoStatusBadge task={task} key={task.id}>
            <S.PaperCard
              cover={
                <S.DateContainer>
                  <S.DayOverlay>
                    {new Date(task.createdAt).getDate()}
                  </S.DayOverlay>
                  <S.CreationDate>
                    {new Date(task.createdAt).toLocaleString('default', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </S.CreationDate>
                </S.DateContainer>
              }
            >
              <Card.Meta title={<Text strong>{task.title}</Text>} />
              <S.CreatorName>
                {/* <img src={task.avatar || avatar} alt="Criador" /> */}
                {/* <Tooltip title={task.creator}>
                    <Text className="creator-name">{task.creator}</Text>
                    </Tooltip> */}
              </S.CreatorName>
            </S.PaperCard>
          </ToDoStatusBadge>
        ))}
      </Skeleton>
    </S.CardsContainer>
  );
};

export default CardTasks;
