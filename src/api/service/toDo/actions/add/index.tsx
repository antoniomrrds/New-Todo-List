import { FormattedError } from '@/api/error/types'
import { todoApi } from '@/api/service/toDo'
import { CreateToDo } from '@/api/service/toDo/types'
import { App as AppAntd } from 'antd'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { ErrorCodes } from '@/api/error/error-codes'
import {
  ErrorNotification,
  SuccessNotification,
} from '@/components/shared/Notifications'

export const useCreateTodo = () => {
  const { notification } = AppAntd.useApp()
  const navigate = useNavigate()

  const { mutate: createToDo, isLoading: createToDoIsLoading } = useMutation(
    (newToDo: CreateToDo) => todoApi.create(newToDo),
    {
      onSuccess: () => {
        // const location = response.headers.location;
        // const id = location.substring(location.lastIndexOf("/") + 1);
        SuccessNotification(
          notification,
          'Tarefa criada',
          'Tarefa criada com sucesso'
        )
        navigate('/todo')
      },
      onError: ({ errors, status, message }: FormattedError) => {
        if (status === ErrorCodes.BAD_REQUEST) {
          ErrorNotification(
            notification,
            'Erro ao criar tarefa',
            message,
            errors
          )
        } else {
          ErrorNotification(notification, 'Erro ao criar tarefa', message)
          navigate('/todo')
        }
      },
    }
  )

  return { createToDo, createToDoIsLoading }
}
