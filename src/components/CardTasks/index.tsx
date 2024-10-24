import React from 'react';

import { Card, Typography, Tooltip } from 'antd';
import * as Styled from './Card.styles';
import {
  CreatorName,
  DateContainer,
  CreationDate,
  DayOverlay,
  StatusIndicator,
} from './Card.styles';
import { exampleTasks, value } from '../mocks/tasks';

const { Text } = Typography;

type Task = {
  id: number;
  title: string;
  avatar?: string;
  description: string;
  expired: boolean;
  createdAt: string;
  creator: string;
};



const avatar ='https://api.dicebear.com/7.x/miniavs/svg?seed=$%7Bi%7D';
const CardTasks: React.FC<{ data: Task[] }> = ({ data }) => {
  data = [...exampleTasks, ...value];

  return (
    <Styled.CardsContainer>
      {data.map((task) => (
        <Styled.PaperCard key={task.id} hoverable expired={task.expired} style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <DateContainer>
            <DayOverlay>{new Date(task.createdAt).getDate()}</DayOverlay>
            <CreationDate>{new Date(task.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' })}</CreationDate>
          </DateContainer>
          <Card.Meta
            title={<Text strong>{task.title}</Text>}
          />
          <CreatorName>
            <img src={task.avatar ||avatar } alt="Criador" />
            <Tooltip title={task.creator}>
              <Text className="creator-name">{task.creator}</Text>
            </Tooltip>
          </CreatorName>
          <StatusIndicator expired={task.expired}>
            {task.expired ? 'Expirado' : 'Ativo'}
          </StatusIndicator>
        </Styled.PaperCard>
      ))}
    </Styled.CardsContainer>
  );
};

export default CardTasks;
