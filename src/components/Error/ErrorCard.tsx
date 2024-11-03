import React from 'react';
import styled from 'styled-components';
import { Alert } from 'antd';

const StyledAlert = styled(Alert)`
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    font-size: 18px;

    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

    .ant-alert-message {
        font-weight: bold;
        font-size: 22px;
        color: #d9534f;
    }

    .ant-alert-description {
        font-size: 16px;
        margin-top: 10px;
    }
`;

interface ErrorCardProps {
    message: string;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ message }) => {
    return (
        <StyledAlert
            message="Oops! Algo deu errado"
            description={message}
            type="error"
            showIcon
            closable
        />
    );
};

export default ErrorCard;