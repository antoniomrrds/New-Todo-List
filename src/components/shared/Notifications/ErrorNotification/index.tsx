import { NotificationInstance } from "antd/es/notification/interface";


import * as S from "@/components/shared/Notifications/notification-styles";

import { Typography } from "antd";
const { Title } = Typography;

import { ErrorContent } from "@/components/shared/Notifications/ErrorNotification/components";
import { WarningIconStyled } from "@/components/shared/Icons";

export const ErrorNotification = (
  notification: NotificationInstance,
  message: string,
  description: string,
  details: string[] = [],
  pauseOnHover: boolean = true,
  duration = 5
) => {
  // notification.destroy();
  notification.error({
    message: (
      <Title type="danger" level={5}>
        {message}
      </Title>
    ),
    description: <ErrorContent description={description} details={details} />,
    icon: <WarningIconStyled />,
    closeIcon: <S.CloseCircleFilledStyled $colorVariant="error" />,
    className: "ant-notification-notice-error",
    closable: true,
    pauseOnHover,
    duration,
  });
};
