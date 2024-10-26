import { Card } from 'antd';
import styled from 'styled-components';




export const PaperCard = styled(Card)`

  border-radius: 12px;
 
  overflow: hidden;
`;

export const DateContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  color: whitesmoke;
  padding: 25px 0 25px 0;
  text-align: center;
  &:hover {
    pointer-events: painted;
  }
`;

export const CreationDate = styled.p`
  margin: 0;
  font-size: 12px;

`;

export const DayOverlay = styled.span`
  font-size: 32px;
  font-weight: bold;
  &:hover {
    pointer-events: painted;
    color: yellow;
 
  }
`;

export const CreatorName = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 8px;

  img {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  .creator-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60%;
  }
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
 
  justify-content: flex-start;
  margin: 0 auto;


`;
