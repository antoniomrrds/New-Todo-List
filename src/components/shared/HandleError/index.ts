import { FormattedError } from '@/api/core/error/types';
import { HttpStatusCode } from '@/api/http/http-status';
import { ErrorNotification } from '@/components/shared/Notifications/ErrorNotification';
import { NotificationInstance } from 'antd/es/notification/interface';
import { FC } from 'react';

type HandleErrorProps = {
  error: FormattedError | null;
  notification: NotificationInstance;
};
export const HandleError: FC<HandleErrorProps> = ({ error, notification }) => {
  if (!error) {
    return null;
  }
  const { originalError, message, status, messageErrors } = error;
  if (status === HttpStatusCode.BAD_REQUEST) {
    const data = originalError.response?.data;
    const messageError = data?.message || message;
    ErrorNotification(notification, messageError, messageErrors);
  } else {
    ErrorNotification(notification, message);
  }
};
