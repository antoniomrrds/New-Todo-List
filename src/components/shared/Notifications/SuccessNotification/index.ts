import { NotificationInstance } from "antd/es/notification/interface";


export const successNotification = (notification: NotificationInstance, message: string , description: string) => {
  notification.success({
    message,
    description,
    closable: true,
    pauseOnHover: true,
    duration: 5,
})
}