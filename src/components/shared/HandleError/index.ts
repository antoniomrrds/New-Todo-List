import { FormattedError } from '@/api/core/error/types';
import { HttpStatusCode } from '@/api/http/http-status';
import { ErrorNotification } from '@/components/shared/Notifications/ErrorNotification';
import { NotificationInstance } from 'antd/es/notification/interface';

export const HandleError = (
  { originalError, message, status, messageErrors }: FormattedError,
  notification: NotificationInstance,
) => {
  if (status === HttpStatusCode.BAD_REQUEST) {
    const data = originalError.response?.data;
    const messageError = data?.message || message;
    ErrorNotification(notification, messageError, messageErrors);
  } else {
    ErrorNotification(notification, message);
  }
};
