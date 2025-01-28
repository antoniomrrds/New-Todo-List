import { Button, Input, Modal } from 'antd';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
    transition: all 0.3s ease-in-out;
`;

export const StyledInput = styled(Input)`
    transition: all 0.3s ease-in-out;
`;

export const StyledButton = styled(Button)`
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #e6f7ff;
    }
`;
