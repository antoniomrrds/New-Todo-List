import { FormattedError } from '@/api/error/types';
import { ErrorNotification } from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useEffect } from 'react';

type UseErrorHandlingProps = {
  errorCategories: FormattedError | null;
  errorTags: FormattedError | null;
  notification: NotificationInstance;
  goToTodoPage: () => void;
};
export const useErrorHandling = ({
  errorCategories,
  errorTags,
  notification,
  goToTodoPage,
}: UseErrorHandlingProps) => {
  useEffect(() => {
    const errorMap = {
      categorias: errorCategories ? `${errorCategories.message}` : '',
      tags: errorTags ? `${errorTags.message}` : '',
    };

    for (const [entity, errorMessage] of Object.entries(errorMap)) {
      if (errorMessage) {
        const entityName = entity.charAt(0).toUpperCase() + entity.slice(1);
        ErrorNotification(
          notification,
          `Erro ao carregar ${entityName}`,
          errorMessage,
        );
      }
    }

    if (errorCategories || errorTags) {
      goToTodoPage();
    }
  }, [errorCategories, errorTags, notification, goToTodoPage]);
};
