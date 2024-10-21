import React, { useState } from 'react';
import styled from 'styled-components';
import {
  StarOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Avatar, Modal, Button, Space, Tooltip, Card, Typography } from 'antd';
import {
  Category,
  CategoryLine,
  CreatorTag,
  NoTagsMessage,
  PaperCard,
  StatusIndicator,
  TagChip,
  TagContainer,
  ModalContent,
  Title,
  Description,
  CreationDate,
  ExpirationDate,
  CreatorName,
  CreatorText,
} from './Card.styles';

const { Text } = Typography;

type Tag = {
  name: string;
  color: string;
};

type Task = {
  id: number;
  title: string;
  avatar?: string; // Tornou opcional
  description: string;
  image?: string; // Tornou opcional
  expired: boolean;
  isCompleted: boolean;
  expirationDate: string | null;
  idTag: number | null;
  idCategory: number | null;
  status: number;
  createdAt: string;
  updatedAt: string;
  createdAtFormatted: string;
  updatedAtFormatted: string;
  categories?: string[];
  tags: Tag[];
  creator: string;
};




const CardContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; // Ou space-around
  align-items: stretch; // Faz com que todos os cartões tenham a mesma altura
  margin: 8px;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 16px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

const IconText: React.FC<{ icon: React.ElementType; text: string }> = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


interface CardTasksProps {
  data: Task[];
}const CardTasks: React.FC<CardTasksProps> = ({ data }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<Task | null>(null);

  const showModal = (item: Task) => {
    setCurrentItem(item);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setCurrentItem(null);
  };
const value: Task[] = Array.from({ length: 23 }).map((_, i) => ({
  id: i,
  title: `Ant Design Part asda sdasd ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: 'Ant Designasdas dasdasdasdasd, a design language for background applications.',
  image: '',
  expired: i % 5 === 0,
  isCompleted: i % 4 === 0,
  expirationDate: i % 3 === 0 ? null : new Date(Date.now() + (i % 5 === 0 ? -1 : 1) * 24 * 60 * 60 * 1000).toLocaleDateString(),
  idTag: null,
  idCategory: null,
  status: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  createdAtFormatted: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
  updatedAtFormatted: new Date().toLocaleDateString(),
  categories: [i % 2 === 0 ? 'Categoria A' : 'Categoria B', 'Categoria C', 'Categoria D', 'Categoria E', 'Categoria F'],
  tags: [
    { name: `Tag ${i}`, color: i % 2 === 0 ? '#ff4d4f' : '#52c41a' },
    { name: `Tag ${i + 1}`, color: '#ffa940' },
    { name: `Super Long Tag Name ${i + 2}`, color: '#1890ff' },
    { name: `Another Tag ${i + 3}`, color: '#8c7ae6' },
    { name: `Final Tag ${i + 4}`, color: '#44bd32' },
  ],
  creator: `Usuário asadasasdasdasdasdas ${i}`,
}));
const exampleTasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description for Task 1',
    expired: false,
    isCompleted: false,
    expirationDate: '2023-12-31',
    idTag: 1,
    idCategory: 1,
    status: 1,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
    createdAtFormatted: '01/01/2023',
    updatedAtFormatted: '01/01/2023',
    categories: [],
    tags: [],
    creator: 'Creator 1',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description for Task 2',
    expired: true,
    isCompleted: true,
    expirationDate: null,
    idTag: 2,
    idCategory: 2,
    status: 2,
    createdAt: '2023-02-01T00:00:00Z',
    updatedAt: '2023-02-01T00:00:00Z',
    createdAtFormatted: '01/02/2023',
    updatedAtFormatted: '01/02/2023',
    categories: ['Category 2'],
    tags: [{ name: 'Tag 2', color: '#52c41a' }],
    creator: 'Creator 2',
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description for Task 3',
    expired: false,
    isCompleted: false,
    expirationDate: '2023-11-30',
    idTag: 3,
    idCategory: 3,
    status: 3,
    createdAt: '2023-03-01T00:00:00Z',
    updatedAt: '2023-03-01T00:00:00Z',
    createdAtFormatted: '01/03/2023',
    updatedAtFormatted: '01/03/2023',
    categories: ['Category 3'],
    tags: [{ name: 'Tag 3', color: '#1890ff' }],
    creator: 'Creator 3',
  },
];

data = [...value, ...exampleTasks, ...data];


  const defaultImage = 'https://img.freepik.com/fotos-gratis/besta-de-dragao-mitico-no-estilo-anime_23-2151112840.jpg?t=st=1729467762~exp=1729471362~hmac=7f42d7066de77f5cc4f6a12c92429d011a1bf887061ffce2efa974e930f489b7&w=1380';
  const defaultAvatar = 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png';

  return (
    <>
      {data.map((task: Task, index: number) => (
        <CardContainer key={index}>
          <PaperCard
            hoverable
            expired={task.expired}
            expirationDate={task.expirationDate}
            cover={
              <img
                alt="exemplo"
                src={task.image || defaultImage}
                style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
            }
            actions={[
              <IconText icon={StarOutlined} text="156" key="star" />,

              <IconText icon={InfoCircleOutlined} text="Info" key="info" />,
            ]}
            onClick={() => showModal(task)}
          >
            <Card.Meta
              // avatar={<Avatar src={task.avatar} />}
              title={
                <Tooltip title={task.title}>
                  {task.title}
                </Tooltip>
              }

              description={
                <Tooltip title={task.description}>
                  <Description>{task.description}</Description>
                </Tooltip>
              }
            />

            <CategoryLine>
              {task.categories && task.categories.length > 0 ? (
                task.categories.slice(0, 1).map((category, catIndex) => (
                  <Category key={catIndex}>{category}</Category>
                ))
              ) : (
                <NoTagsMessage>Sem Categorias</NoTagsMessage>
              )}
              {task.categories && task.categories.length > 1 && (
                <>
                  <Tooltip title={`+ ${task.tags.length - 1} categorias escondidas`}>
                    <TagChip color="#ccc">+{task.tags.length - 1}</TagChip>
                  </Tooltip>
                </>
              )}
            </CategoryLine>
            <CreatorName>
              <img src={task.avatar || defaultAvatar} alt="Criador" />
              <CreatorText>Criado por:</CreatorText>
              <Tooltip title={task.creator}>
                <Text className="creator-name">{task.creator}</Text>
              </Tooltip>
            </CreatorName>
            <CreationDate>
              Criado em: {task.createdAtFormatted}
            </CreationDate>
            <ExpirationDate error={!task.expirationDate}>
              {task.expirationDate ? `Expira em: ${task.expirationDate}` : 'Sem Data de Expiração'}
            </ExpirationDate>
            <StatusIndicator expired={task.expired}>
              {task.expired ? 'Expirado' : 'Ativo'}
            </StatusIndicator>
            <TagContainer>
              {Array.isArray(task.tags) && task.tags.length > 0 ? (
                task.tags.slice(0, 2).map((tag, tagIndex) => (
                  <Tooltip title={tag.name} key={tagIndex}>
                    <TagChip color={tag.color}>{tag.name}</TagChip>
                  </Tooltip>
                ))
              ) : (
                <NoTagsMessage>Sem Tags</NoTagsMessage>
              )}
              {Array.isArray(task.tags) && task.tags.length > 2 && (
                <Tooltip title={`+ ${task.tags.length - 2} tags escondidas`}>
                  <TagChip color="#ccc">+{task.tags.length - 2}</TagChip>
                </Tooltip>
              )}
            </TagContainer>
          </PaperCard>

          <Modal
            open={visible}
            title="Detalhes do Item"
            onCancel={handleCancel}
            footer={<Button onClick={handleCancel} type="primary">Fechar</Button>}
          >
            {currentItem && (
              <ModalContent>
                <img
                  alt={currentItem.title}
                  src={currentItem.image || defaultImage}
                  style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }}
                />
                <Title>{currentItem.title}</Title>
                <Description>{currentItem.description}</Description>
                <CreationDate>Criado em: {currentItem.createdAtFormatted}</CreationDate>
                {currentItem.expirationDate ? (
                  <ExpirationDate>Data de expiração: {currentItem.expirationDate}</ExpirationDate>
                ) : (
                  <ExpirationDate error>Este item não possui data de expiração.</ExpirationDate>
                )}
                <CreatorTag>
                  <img src={currentItem.avatar || defaultAvatar} alt="Criador" />
                  Criado por: {currentItem.creator}
                </CreatorTag>

                <CategoryLine>
                  {currentItem.categories && currentItem.categories.length > 0 ? (
                    currentItem.categories.map((category, catIndex) => (
                      <Category key={catIndex}>{category}</Category>
                    ))
                  ) : (
                    <NoTagsMessage>Sem Categorias</NoTagsMessage>
                  )}
                </CategoryLine>
                <TagContainer>
                  {Array.isArray(currentItem.tags) && currentItem.tags.length > 0 ? (
                    currentItem.tags.map((tag, tagIndex) => (
                      <Tooltip title={tag.name} key={tagIndex}>
                        <TagChip color={tag.color}>{tag.name}</TagChip>
                      </Tooltip>
                    ))
                  ) : (
                    <NoTagsMessage>Sem Tags</NoTagsMessage>
                  )}
                </TagContainer>
              </ModalContent>
            )}
          </Modal>
        </CardContainer>
      ))}
    </>
  );
};

export default CardTasks;
