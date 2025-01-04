// Ant Design Components
import { App as AppAntd, Skeleton } from 'antd'

// Validators
import {
  CreateTodoValidationType,
  todoValidationSchema,
} from '@/components/Todo/Add/validators'
import { yupResolver } from '@hookform/resolvers/yup'

// React Hook Form
import { useForm } from 'react-hook-form'

// React Router
import { useNavigate } from 'react-router-dom'

// Custom Components
import { BreadCrumb, BreadcrumbItems } from '@/components/shared/BreadCrumb'
import { ErrorNotification } from '@/components/shared/Notifications'

import { useQueryCategories } from '@/api/service/category/actions'
import { useQueryTags } from '@/api/service/tag/actions/useQueryTag'

// Enums and Constants
import { CompletionStatus, TodoStatus } from './enum'

// React and Hooks
import { FC, useCallback, useEffect } from 'react'

import { TodoForm } from '@/components/Todo/Add/organisms'
// Styles
import * as G from '@/styles/global-styles'

const items: BreadcrumbItems = [
  { title: 'Todo', href: '/todo' },
  { title: 'Adicionar Tarefa' },
]

type AddTodoTemplateProps = {
  isSaving: boolean
  onFormSubmitHandler: (data: CreateTodoValidationType) => void
}

export const AddTodoTemplate: FC<AddTodoTemplateProps> = ({
  isSaving,
  onFormSubmitHandler,
}) => {
  const { categories, errorCategories, isLoadingCategories } =
    useQueryCategories()
  const { errorTags, tags, isLoadingTags } = useQueryTags()

  const { notification } = AppAntd.useApp()
  const navigate = useNavigate()

  const goToTodoPage = useCallback(() => navigate('/todo'), [navigate])

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CreateTodoValidationType>({
    resolver: yupResolver(todoValidationSchema),
    mode: 'onChange',
    defaultValues: {
      isActive: TodoStatus.Active,
      isCompleted: CompletionStatus.Incomplete,
      showExpiration: false,
    },
  })

  const isExpirationEnabled = watch('showExpiration')
  useEffect(() => {
    const errorMap = {
      categorias: errorCategories ? `${errorCategories.message}` : '',
      tags: errorTags ? `${errorTags.message}` : '',
    }

    for (const [entity, errorMessage] of Object.entries(errorMap)) {
      if (errorMessage) {
        const entityName = entity.charAt(0).toUpperCase() + entity.slice(1)

        ErrorNotification(
          notification,
          `Erro ao carregar ${entityName}`,
          errorMessage,
        )
      }
    }

    if (errorCategories || errorTags) goToTodoPage()
  }, [errorCategories, errorTags, notification, goToTodoPage])

  const handleCancel = () => {
    reset()
    goToTodoPage()
  }

  return (
    <G.StyledContainer>
      <BreadCrumb items={items} />
      <G.CardMain title="Adicionar Tarefa" hoverable>
        <Skeleton active loading={isLoadingCategories && isLoadingTags}>
          <TodoForm
            control={control}
            errors={errors}
            onFormSubmit={onFormSubmitHandler}
            isExpirationVisible={isExpirationEnabled}
            isSaving={isSaving}
            tags={tags}
            categories={categories}
            setValue={setValue}
            onCancel={handleCancel}
            handleSubmitForm={handleSubmit}
          />
        </Skeleton>
      </G.CardMain>
    </G.StyledContainer>
  )
}
