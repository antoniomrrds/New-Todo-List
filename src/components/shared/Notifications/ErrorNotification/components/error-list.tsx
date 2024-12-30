import { Alert, Badge, Space } from "antd";

type ErrorListProps = {
  details: string[];
};

export const ErrorList: React.FC<ErrorListProps> = ({ details }) => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      {details.map((detail, index) => (
        <Alert
          key={index}
          type="error"
          message={<Badge status="error" text={detail} />}
        />
      ))}
    </Space>
  );
};
