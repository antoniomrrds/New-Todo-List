import React, { useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Space, Modal, Button, Tooltip } from 'antd';
import styled, { css } from 'styled-components';

// Card styles
const PaperCard = styled(Card)`
  border-radius: 12px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #ffffff;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    transform: translateY(-6px) scale(1.03);
    border: 2px solid #1890ff;
  }

  ${(props) =>
    props.expired &&
    css`
      background: #ffcccc;
      opacity: 0.7;
      pointer-events: none;
    `}

  ${(props) =>
    !props.expirationDate &&
    css`
      border: 2px solid #ffa940;
      box-shadow: 0 4px 20px rgba(255, 169, 64, 0.5);
    `}
`;

// Category and tag styles
const CategoryLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0;
`;

const Category = styled.span`
  background: #e6f7ff;
  color: #1890ff;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  margin: 4px 2px;
  border: 1px solid #1890ff;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: #1890ff;
    color: #fff;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  max-height: 40px; // Limit height for overflow
  overflow: hidden; // Hide overflowing tags
`;

const TagChip = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.color || '#ccc'};
  color: #fff;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// No Tags/Categories message
const NoTagsMessage = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #999;
  text-align: center;
`;

// Creator tag styles
const CreatorTag = styled.div`
  display: flex;
  align-items: center;
  background: #fff0f6;
  color: #ff4d4f;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  margin-top: 8px;

  img {
    border-radius: 50%;
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`;

// Status indicators
const StatusIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${(props) => (props.expired ? '#ff4d4f' : '#52c41a')};
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Main component
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const UserGrid = () => {
  const [visible, setVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const showModal = (item) => {
    setCurrentItem(item);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setCurrentItem(null);
  };

  const data = Array.from({ length: 23 }).map((_, i) => ({
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
      { name: `Final Tag ${i + 4}`, color: '#44bd32' }
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
              <div style={{ marginTop: 8, fontSize: '14px', color: '#666' }}>
                {item.content}
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>
                Criado em: {item.creationDate} | {item.expirationDate ? `Expira em: ${item.expirationDate}` : 'Sem Data'}
              </div>
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
          <>
            <img
              alt="example"
              src={currentItem.image}
              style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }}
            />
            <h3 style={{ color: '#333' }}>{currentItem.title}</h3>
            <p style={{ color: '#777' }}>{currentItem.description}</p>
            <p style={{ color: '#555' }}>{currentItem.content}</p>
            <p style={{ color: '#999' }}>Criado em: {currentItem.creationDate}</p>
            {currentItem.expirationDate ? (
              <p style={{ color: '#999' }}>Data de expiração: {currentItem.expirationDate}</p>
            ) : (
              <p style={{ color: '#ff4d4f' }}>Este item não possui data de expiração.</p>
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
          </>
        )}
      </Modal>
    </>
  );
};

export default UserGrid;
