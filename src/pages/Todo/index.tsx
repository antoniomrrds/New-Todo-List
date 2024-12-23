import AppFooter from "@/components/Footer";
import { AppHeader } from "@/components/Header";
import { StyledLayout } from "@/styles/global-styles";
import { Content } from "antd/es/layout/layout";
import TodoManager from "@/components/Todo";
import { ToDoSearchBar } from "@/components/Todo/SearchBar";
import { AxiosError } from "axios";
import { taskservices, ToDo } from "@/api/services/toDo";
import { useQuery } from "react-query";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";




export const TodoHomePage = () => {
    const { data: toDos = [], isLoading, error } = useQuery<ToDo[], AxiosError>("tasks", taskservices.getAllTasks);
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
        console.log('new', newPath, 'current', currentPath);
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
                    error={error as AxiosError}
                    toDos={toDos}
                    isLoading={isLoading}
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