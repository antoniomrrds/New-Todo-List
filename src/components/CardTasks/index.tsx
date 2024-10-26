import React from 'react';
import { Typography, Tooltip, Badge, Card } from 'antd';
import * as Styled from './Card.styles';
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

const avatar = 'https://api.dicebear.com/7.x/miniavs/svg?seed=${id}';

const CardTasks: React.FC<{ data: Task[] }> = ({ data }) => {
  data = [...exampleTasks, ...value];

  return (
    <Styled.CardsContainer>
      {data.map((task) => (
        <Badge.Ribbon
          key={task.id}
          text={task.expired ? 'Expirado' : 'Ativo'}
          color={task.expired ? 'red' : 'green'}
        >
          <Styled.PaperCard 
            cover={
              <Styled.DateContainer>
                <Styled.DayOverlay>{new Date(task.createdAt).getDate()}</Styled.DayOverlay>
                <Styled.CreationDate>{new Date(task.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' })}</Styled.CreationDate>
              </Styled.DateContainer>
            }
          >

            <Card.Meta
         
         title={
           
      
           <Text strong>{task.title}</Text>
   
        }
         />
            <Styled.CreatorName>
              <img src={task.avatar || avatar} alt="Criador" />
              <Tooltip title={task.creator}>
                <Text  className="creator-name">{task.creator}</Text>
              </Tooltip>
            </Styled.CreatorName>
          </Styled.PaperCard>
        </Badge.Ribbon>
      ))}
    </Styled.CardsContainer>
  );
};

export default CardTasks;
