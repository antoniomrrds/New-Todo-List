import AppFooter from "@/components/Footer";
import { AppHeader } from "@/components/Header";
import { StyledLayout } from "@/styles/global-styles";

import { Content } from "antd/es/layout/layout";
import { message } from "antd";

import TodoManager from "@/components/Todo";
import { ToDoSearchBar } from "@/components/Todo/SearchBar";


import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useQueryTodos } from "@/api/toDo";
import { AxiosError } from "axios";


export const TodoHomePage = () => {
    const { errorToDos, toDos, isLoadingToDos } = useQueryTodos();
    const navigate = useNavigate();
    const location = useLocation();

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filterVisible, setFilterVisible] = useState<boolean>(false);

    const showFilterModal = () => setFilterVisible(true);
    const handleFilterCancel = () => setFilterVisible(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const onFilterFinish = (filter: any) => {
        message.info(`Filtrando por: ${filter}`);
        setFilterVisible(false);
    };


    const handleNavigateAdd = () => {
        const currentPath = location.pathname;
        const newPath = `${currentPath}/add`;
        navigate(newPath);
    }

    return (
        <StyledLayout>
            <AppHeader />

            <ToDoSearchBar
                toDos={toDos}
                handleSearchChange={handleSearchChange}
                searchTerm={searchTerm}
                handleNavigateAdd={handleNavigateAdd}
                showFilterModal={showFilterModal}
            />
            <Content

            >
                <TodoManager
                    error={errorToDos as AxiosError}
                    toDos={toDos}
                    isLoading={isLoadingToDos}
                    searchTerm={searchTerm}
                    handleNavigateAdd={handleNavigateAdd}
                    filterVisible={filterVisible}
                    onFilterFinish={onFilterFinish}
                    handleFilterCancel={handleFilterCancel}
                />
            </Content>
            <AppFooter />
        </StyledLayout>
    )
}