import { NotificationInstance } from 'antd/es/notification/interface';

import * as S from '@/components/shared/Notifications/notification-styles';

import { WarningFilledStyled } from '@/components/shared/Icons';
import { Alert, Badge } from 'antd';

export const ErrorNotification = (
  notification: NotificationInstance,
  message: string,
  errorMessages?: string[],
  pauseOnHover: boolean = true,
  duration = 4,
) => {
  // notification.destroy();
  notification.error({
    message,
    description:
      errorMessages &&
      errorMessages?.map((msg, index) => (
        <Alert
          message={<Badge status="error" text={msg} />}
          type="error"
          key={index}
        />
      )),
    icon: <WarningFilledStyled />,
    closeIcon: <S.CloseCircleFilledStyled $colorVariant="error" />,
    className: 'ant-notification-notice-error',
    closable: true,
    pauseOnHover,
    duration,
  });
};
