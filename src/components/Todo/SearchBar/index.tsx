import { ToDo } from '@/api/service/toDo/types';
import { CreateButton } from '@/components/Todo/List/molecules';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
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

type ToDoSearchBarProps = {
  searchTerm: string;
  onSearch: (e: string) => void;
  handleNavigateAdd: () => void;
  onShowModal: () => void;
  toDos: ToDo[];
};

export const ToDoSearchBar: FC<ToDoSearchBarProps> = ({
  onSearch,
  handleNavigateAdd,
  onShowModal,
  searchTerm,
}) => {
  const { control, setValue } = useForm({
    defaultValues: { searchTerm },
  });

  useEffect(() => {
    setValue('searchTerm', searchTerm);
  }, [searchTerm, setValue]);

  const handleSearch = (value: string) => {
    onSearch(value); // Chama a função de busca
  };

  return (
    <SearchContainer>
      <Controller
        name="searchTerm"
        control={control}
        render={({ field }) => (
          <Input.Search
            {...field}
            placeholder="Buscar Tarefas"
            allowClear
            onSearch={handleSearch} // Quando pressionar Enter ou clicar no ícone de busca
            enterButton={<SearchOutlined />}
          />
        )}
      />
      <Button type="default" icon={<FilterOutlined />} onClick={onShowModal}>
        Filtrar
      </Button>
      <CreateButton text="Criar Nova Tarefa" onClick={handleNavigateAdd} />
    </SearchContainer>
  );
};
