import {
  ErrorDescription,
  ErrorList,
} from "@/components/shared/Notifications/ErrorNotification/components";
import { Space } from "antd";

type ErrorContentProps = {
  description: string;
  details: string[];
};

export const ErrorContent: React.FC<ErrorContentProps> = ({
  description,
  details,
}) => (
  <Space direction="vertical" style={{ display: "flex" }}>
    <ErrorDescription description={description} />
    <ErrorList details={details} />
  </Space>
);
