import { ToDo } from '@/api/service/toDo/types';
import { CreateButton } from '@/components/Todo/List/molecules';
import {
  FilterOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Input, InputProps, message } from 'antd';
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: 10px;
    padding: 16px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
    }
`;

const StyledInput = styled(Input.Search)<InputProps>`
    border-radius: 20%;

    /* &:hover {
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    } */
`;

type ToDoSearchBarProps = {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showFilterModal: () => void;
  toDos: ToDo[];
  handleNavigateAdd: () => void;
};

export const ToDoSearchBar: React.FC<ToDoSearchBarProps> = ({
  toDos,
  searchTerm,
  handleSearchChange,
  showFilterModal,
  handleNavigateAdd,
}) => {
  return (
    <SearchContainer>
      <StyledInput
        placeholder="Buscar Tarefas"
        value={searchTerm}
        allowClear
        onChange={handleSearchChange}
        onKeyDown={e =>
          e.key === 'Enter' && message.info(`Buscando por: ${searchTerm}`)
        }
        enterButton={<SearchOutlined />}
      />
      <Button
        type="default"
        onClick={showFilterModal}
        icon={<FilterOutlined />}
      >
        Filtrar
      </Button>
      {toDos.length > 0 && (
        <CreateButton text="Criar Nova Tarefa" onClick={handleNavigateAdd} />
      )}
    </SearchContainer>
  );
};
