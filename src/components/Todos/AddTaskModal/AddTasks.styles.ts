import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonCancel = styled(Button)`
    && {
        border-radius: 4px;
        padding: 8px 16px;
        border: none; // Remover borda padrão
        background-color: #f44336; // Vermelho
        color: white;
        transition: background-color 0.3s, color 0.3s, transform 0.2s, box-shadow 0.3s;

        &:hover {
            background-color: #d32f2f !important; // Vermelho escuro no hover
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
            transform: scale(1.05) !important;
            color: white !important; // Garante que a cor do texto permaneça branca
        }

        &:active {
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2) !important;
            transform: scale(0.98) !important;
        }

        &.disabled {
            background-color: rgba(244, 67, 54, 0.5); // Cor semi-transparente
            color: rgba(255, 255, 255, 0.5);
            cursor: not-allowed;
            pointer-events: none;
            transition: none;

            &:hover {
                background-color: rgba(244, 67, 54, 0.5) !important;
                color: rgba(255, 255, 255, 0.5) !important;
                box-shadow: none !important;
                transform: none !important;
            }
        }
    }
`;



export const ButtonPrimary = styled(Button)`
&& {
        border-radius: 4px;
        padding: 8px 16px;
        transition: background-color 0.3s, color 0.3s, transform 0.2s, box-shadow 0.3s;
        border: none; // Remover a borda padrão
    }

    &.ant-btn-primary {
        background-color: #1976d2;
        color: white;
        transition: opacity 0.3s, background-color 0.3s; // Adicionando transição

        &:hover {
            background-color: #1565c0; // Efeito de hover quando habilitado
            color: white;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            transform: scale(1.05);
            font-weight: bold;
        }

        &:active {
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            transform: scale(0.98);
        }

        &.disabled {
            background-color: rgba(25, 118, 210, 0.5); // Cor semi-transparente
            color: rgba(255, 255, 255, 0.5); // Texto desbotado
            cursor: not-allowed; // Cursor de não permitido
            transition: none; // Remove transições para o estado desabilitado

            &:hover {
                background-color: rgba(25, 118, 210, 0.5); // Manter a cor semi-transparente
                color: rgba(255, 255, 255, 0.5); // Manter o texto desbotado
                box-shadow: none; // Remover sombra
                transform: none; // Remover transformação
            }
        }
    }

    `