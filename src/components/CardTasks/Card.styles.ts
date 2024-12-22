import { Card } from 'antd';
import styled from 'styled-components';

export const PaperCard = styled(Card)`

  border-radius: 12px;
  border: 1px solid ${({theme}) => theme.colors.success.successGreen600};
  overflow: hidden;
  &:hover {
    transition: transform 0.2s;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  }
`;

export const DateContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  color: whitesmoke;
  padding: 25px 0 25px 0;
  background: ${({theme}) => theme.colors.secondaryColor};
  color: ${({theme}) => theme.colors.primaryColor};
  border-bottom: solid 5px  ${({theme}) => theme.colors.primaryColor};
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
    color: ${({theme}) => theme.colors.primaryColor};
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
  padding: 20px;
  justify-content: flex-start;
  margin: 0 auto;
`;
