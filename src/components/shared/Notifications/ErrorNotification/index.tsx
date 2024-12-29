import { NotificationInstance } from 'antd/es/notification/interface';
import * as S from './error-notification.styles';
import { Badge } from 'antd';

export const ErrorNotification = (notification: NotificationInstance, message: string, description: string, details: string[] = [], pauseOnHover: boolean = true) => {
    const errorList = details.map((detail, index) => {
        const isLastItem = index === details.length - 1;
        return (
          <S.AlertStyled
            key={index}
            type="error"
            message={<Badge status="error" text={detail} />}
            hasMarginBottom={!isLastItem} 
          />
        );
      });

    notification.destroy();
    notification.error({
        message,
        description: (
            <>
             <p>{description}</p>
                {errorList} 
            </>
        ),
        pauseOnHover,
        closable: true,
        icon: <S.WarningIconStyled />,
        duration: 5,
        className: 'ant-notification-notice-error',
    });
};
