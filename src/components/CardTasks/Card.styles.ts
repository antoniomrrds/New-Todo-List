import { Card, CardProps } from 'antd';
import styled, { css } from 'styled-components';

interface PaperCardProps extends CardProps {
  expired?: boolean;
  expirationDate?: string | null;
}

export const CategoryLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0;
`;

export const Category = styled.span`
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

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  max-height: 40px;
  overflow: hidden;
`;

export const TagChip = styled.div`
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

export const NoTagsMessage = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #999;
  text-align: center;
`;

export const CreatorTag = styled.div`
  display: flex;
  align-items: center;
  background: #fff0f6;
  color: #ff4d4f;
  padding: 8px 12px; // Aumentar o padding
  border-radius: 12px;
  font-size: 14px; // Aumentar o tamanho da fonte
  margin-top: 8px;
  font-family: 'Arial', sans-serif; // Fonte mais legível

  img {
    border-radius: 50%;
    margin-right: 8px;
    width: 24px; // Aumentar o tamanho do avatar
    height: 24px; // Aumentar o tamanho do avatar
  }
`;

export const CreatorName = styled.div`
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


  .creator-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40%;
  }
`;

export const CreatorText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 40%;
  padding-right: 5px;
  
`;
export const PaperCard = styled(Card)<PaperCardProps>`
  border-radius: 12px;  
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  max-width: 490px;
  display: flex;
  flex-direction: row;
  

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px) scale(1.02);
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

export const ModalContent = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  color: #333;
  margin: 0 0 8px;
`;


export const CreationDate = styled.p`
  color: #999;
  margin: 4px 0; // Espaçamento entre as datas
  font-size: 14px; // Aumentar o tamanho da fonte
`;

export const ExpirationDate = styled.p<{ error?: boolean }>`
  color: ${(props) => (props.error ? '#ff4d4f' : '#999')};
  margin: 4px 0; // Espaçamento entre as datas
  font-size: 14px; // Aumentar o tamanho da fonte
`;

export const Img = styled.img`
  max-width: 124px;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;

`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 100%;
  height: 100%;
  position: relative; /* Para posicionar o overlay */
`;
