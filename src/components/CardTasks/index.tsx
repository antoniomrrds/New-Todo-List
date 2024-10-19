import React, { useState } from 'react';
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Row, Space, Modal, Button, Tooltip } from 'antd';
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
  Content,
  CreationDate,
  ExpirationDate,
} from './Card.styles';

type Tag = {
  name: string;
  color: string;
};

type Item = {
  title: string;
  avatar: string;
  description: string;
  content: string;
  image: string;
  expired: boolean;
  completed: boolean;
  expirationDate: string | null;
  creationDate: string;
  categories: string[];
  tags: Tag[];
  creator: string;
};

const IconText: React.FC<{ icon: React.ElementType; text: string }> = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const CardTasks: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  const showModal = (item: Item) => {
    setCurrentItem(item);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setCurrentItem(null);
  };

  const data: Item[] = Array.from({ length: 23 }).map((_, i) => ({
    title: `Ant Design Part ${i}`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description: 'Ant Design, a design language for background applications.',
    content: 'A series of design principles and practical patterns.',
    image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    expired: i % 5 === 0,
    completed: i % 4 === 0,
    expirationDate: i % 3 === 0 ? null : new Date(Date.now() + (i % 5 === 0 ? -1 : 1) * 24 * 60 * 60 * 1000).toLocaleDateString(),
    creationDate: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
    categories: [i % 2 === 0 ? 'Categoria A' : 'Categoria B', 'Categoria C', 'Categoria D', 'Categoria E', 'Categoria F'],
    tags: [
      { name: `Tag ${i}`, color: i % 2 === 0 ? '#ff4d4f' : '#52c41a' },
      { name: `Tag ${i + 1}`, color: '#ffa940' },
      { name: `Super Long Tag Name ${i + 2}`, color: '#1890ff' },
      { name: `Another Tag ${i + 3}`, color: '#8c7ae6' },
      { name: `Final Tag ${i + 4}`, color: '#44bd32' },
    ],
    creator: `Usuário ${i}`,
  }));

  return (
    <>
      <Row gutter={[16, 16]}>
        {data.map((item, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <PaperCard
              hoverable
              expired={item.expired}
              expirationDate={item.expirationDate}
              cover={
                <img
                  alt="example"
                  src={item.image}
                  style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
              }
              actions={[
                <IconText icon={StarOutlined} text="156" key="star" />,
                <IconText icon={LikeOutlined} text="156" key="like" />,
                <IconText icon={MessageOutlined} text="2" key="message" />,
                <IconText icon={InfoCircleOutlined} text="Info" key="info" />,
              ]}
              onClick={() => showModal(item)}
            >
              <Card.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={`https://ant.design`}>{item.title}</a>}
                description={item.description}
              />

              <CategoryLine>
                {item.categories.length > 0 ? (
                  item.categories.slice(0, 3).map((category, catIndex) => (
                    <Category key={catIndex}>{category}</Category>
                  ))
                ) : (
                  <NoTagsMessage>Sem Categorias</NoTagsMessage>
                )}
                {item.categories.length > 3 && (
                  <NoTagsMessage>+ {item.categories.length - 3} categorias escondidas</NoTagsMessage>
                )}
              </CategoryLine>

              <CreatorTag>
                <img src={item.avatar} alt="Creator" />
                Criado por: {item.creator}
              </CreatorTag>
              <Content>
                {item.content}
              </Content>
              <CreationDate>
                Criado em: {item.creationDate} | {item.expirationDate ? `Expira em: ${item.expirationDate}` : 'Sem Data'}
              </CreationDate>
              <StatusIndicator expired={item.expired}>
                {item.expired ? 'Expirado' : 'Ativo'}
              </StatusIndicator>
              <TagContainer>
                {item.tags.length > 0 ? (
                  item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Tooltip title={tag.name} key={tagIndex}>
                      <TagChip color={tag.color}>
                        {tag.name}
                      </TagChip>
                    </Tooltip>
                  ))
                ) : (
                  <NoTagsMessage>Sem Tags</NoTagsMessage>
                )}
                {item.tags.length > 3 && (
                  <Tooltip title={`+ ${item.tags.length - 3} tags escondidas`}>
                    <TagChip color="#ccc">+{item.tags.length - 3}</TagChip>
                  </Tooltip>
                )}
              </TagContainer>
            </PaperCard>
          </Col>
        ))}
      </Row>

      <Modal
        visible={visible}
        title="Detalhes do Item"
        onCancel={handleCancel}
        footer={<Button onClick={handleCancel} type="primary">Fechar</Button>}
      >
        {currentItem && (
          <ModalContent>
            <img
              alt="example"
              src={currentItem.image}
              style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }}
            />
            <Title>{currentItem.title}</Title>
            <Description>{currentItem.description}</Description>
            <Content>{currentItem.content}</Content>
            <CreationDate>Criado em: {currentItem.creationDate}</CreationDate>
            {currentItem.expirationDate ? (
              <ExpirationDate>Data de expiração: {currentItem.expirationDate}</ExpirationDate>
            ) : (
              <ExpirationDate error>Este item não possui data de expiração.</ExpirationDate>
            )}
            <CreatorTag>
              <img src={currentItem.avatar} alt="Creator" />
              Criado por: {currentItem.creator}
            </CreatorTag>

            <CategoryLine>
              {currentItem.categories.length > 0 ? (
                currentItem.categories.map((category, catIndex) => (
                  <Category key={catIndex}>{category}</Category>
                ))
              ) : (
                <NoTagsMessage>Sem Categorias</NoTagsMessage>
              )}
            </CategoryLine>
            <TagContainer>
              {currentItem.tags.length > 0 ? (
                currentItem.tags.map((tag, tagIndex) => (
                  <Tooltip title={tag.name} key={tagIndex}>
                    <TagChip color={tag.color}>
                      {tag.name}
                    </TagChip>
                  </Tooltip>
                ))
              ) : (
                <NoTagsMessage>Sem Tags</NoTagsMessage>
              )}
            </TagContainer>
          </ModalContent>
        )}
      </Modal>
    </>
  );
};

export default CardTasks;
