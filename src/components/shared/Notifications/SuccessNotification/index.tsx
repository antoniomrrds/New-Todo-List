import { NotificationInstance } from "antd/es/notification/interface";

import * as C from "@/components/shared/Notifications/SuccessNotification/success-notification.styles";
import * as S from "@/components/shared/Notifications/notification-styles";

export const SuccessNotification = (
  notification: NotificationInstance,
  message: string,
  description: string,
  pauseOnHover: boolean = true,
  duration = 5
) => {
  // notification.destroy();
  notification.success({
    message: <C.TitleStyled level={5}>{message}</C.TitleStyled>,
    description,
    closable: true,
    pauseOnHover,
    duration,
    closeIcon: <S.CloseCircleFilledStyled />,
    icon: <C.CheckCircleFilledStyled />,
    className: "ant-notification-notice-success",
  });
};
