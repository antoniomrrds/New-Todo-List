import { Badge, Card, Skeleton, Typography } from 'antd'
import  { FC } from 'react'
import * as Styled from './Card.styles'
import { ToDo } from '@/api/service/toDo/types'

const { Text } = Typography

type Props = {
  data: ToDo[]
}

// const avatar = 'https://api.dicebear.com/7.x/miniavs/svg?seed=${id}'

const CardTasks: FC<Props> = ({ data }) => {
  return (
    <Styled.CardsContainer>
      <Skeleton loading={false} active>
        {data.map(task => (
          <Badge.Ribbon
            key={task.id}
            text={task.expirationDate ? 'Expirado' : 'Ativo'}
            color={task.expirationDate ? 'red' : 'green'}
          >
            <Styled.PaperCard
              cover={
                <Styled.DateContainer>
                  <Styled.DayOverlay>
                    {new Date(task.createdAt).getDate()}
                  </Styled.DayOverlay>
                  <Styled.CreationDate>
                    {new Date(task.createdAt).toLocaleString('default', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </Styled.CreationDate>
                </Styled.DateContainer>
              }
            >
              <Card.Meta title={<Text strong>{task.title}</Text>} />
              <Styled.CreatorName>
                {/* <img src={task.avatar || avatar} alt="Criador" /> */}
                {/* <Tooltip title={task.creator}>
                  <Text className="creator-name">{task.creator}</Text>
                </Tooltip> */}
              </Styled.CreatorName>
            </Styled.PaperCard>
          </Badge.Ribbon>
        ))}
      </Skeleton>
    </Styled.CardsContainer>
  )
}

export default CardTasks
