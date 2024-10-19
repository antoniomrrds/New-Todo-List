import { Card, CardProps } from 'antd';
import styled, { css } from 'styled-components';

interface PaperCardProps extends CardProps {
  expired?: boolean;
  expirationDate?: string | null;
}

// Category and tag styles
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
  max-height: 40px; // Limit height for overflow
  overflow: hidden; // Hide overflowing tags
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

// No Tags/Categories message
export const NoTagsMessage = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #999;
  text-align: center;
`;

// Creator tag styles
export const CreatorTag = styled.div`
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

// Card styles
export const PaperCard = styled(Card)<PaperCardProps>`
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

// Status indicators
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

export const Description = styled.p`
  color: #777;
  margin: 0 0 8px;
`;

export const Content = styled.p`
  color: #555;
  margin: 0 0 8px;
`;

export const CreationDate = styled.p`
  color: #999;
  margin: 0;
`;

export const ExpirationDate = styled.p<{ error?: boolean }>`
  color: ${(props) => (props.error ? '#ff4d4f' : '#999')};
  margin: 0;
`;