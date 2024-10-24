import { Card, CardProps } from 'antd';
import styled from 'styled-components';

interface PaperCardProps extends CardProps {
  expired?: boolean;
}

export const PaperCard = styled(Card)<PaperCardProps>`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 10px;
  border-radius: 12px 12px 0 0;
  text-align: center;
`;

export const CreationDate = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const DayOverlay = styled.span`
  font-size: 32px;
  font-weight: bold;
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

export const StatusIndicator = styled.div<{ expired?: boolean }>`
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


export const CardsContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 20px;
justify-content: flex-start;
margin: 0 auto;
padding: 16px;
`;