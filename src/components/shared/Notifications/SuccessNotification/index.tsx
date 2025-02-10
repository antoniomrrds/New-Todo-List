import { NotificationInstance } from 'antd/es/notification/interface';
import * as I from '@/components/shared/Icons';
import * as C from '@/components/shared/Notifications/SuccessNotification/success-notification-styles';
export const SuccessNotification = (
  notification: NotificationInstance,
  message: string,
  description: string,
  pauseOnHover: boolean = true,
  duration = 5,
) => {
  // notification.destroy();
  notification.success({
    message: message,
    description,
    closable: true,
    pauseOnHover,
    duration,
    closeIcon: <C.CloseCircleFilledStylednew />,
    icon: <I.CheckCircleFilledStyled />,
    className: 'ant-notification-notice-success',
  });
};
