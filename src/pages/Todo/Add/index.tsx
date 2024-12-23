import AppFooter from "@/components/Footer";
import { AppHeader } from "@/components/Header";
import { AddTodo } from "@/components/Todo/Add";
import { StyledLayout } from "@/styles/global-styles";
import { Content } from "antd/es/layout/layout";

export const AddTodoPage = () => {
  return (
    <StyledLayout>
      <AppHeader />
      <Content>
        <AddTodo />
      </Content>
      <AppFooter />
    </StyledLayout>
  )
}
