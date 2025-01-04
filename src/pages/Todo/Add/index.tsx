import { useCreateTodo } from '@/api/service/toDo/actions'
import { CreateToDo } from '@/api/service/toDo/types'
import AppFooter from '@/components/Footer'
import { AppHeader } from '@/components/Header'
import { AddTodoTemplate } from '@/components/Todo/Add'
import { CreateTodoValidationType } from '@/components/Todo/Add/validators'
import { StyledLayout } from '@/styles/global-styles'
import { Content } from 'antd/es/layout/layout'

export const AddTodoPage = () => {
  const { createToDo, createToDoIsLoading } = useCreateTodo()

  const mapFormDataToCreateTodo = (
    data: CreateTodoValidationType
  ): CreateToDo => {
    return {
      Active: data.isActive,
      idTags: data.tags,
      idCategories: data.categories,
      title: data.title,
      description: data.description,
      isCompleted: data.isCompleted,
      expirationDate: data.expirationDateTime || null,
    }
  }

  const handleFormSubmit = (data: CreateTodoValidationType) => {
    const dataToSend = mapFormDataToCreateTodo(data)
    createToDo(dataToSend)
  }

  return (
    <StyledLayout>
      <AppHeader />
      <Content>
        <AddTodoTemplate
          isSaving={createToDoIsLoading}
          onFormSubmitHandler={handleFormSubmit}
        />
      </Content>
      <AppFooter />
    </StyledLayout>
  )
}
