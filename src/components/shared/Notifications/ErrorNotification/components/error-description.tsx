import { Typography, Badge, Alert, Space } from "antd";
const { Text } = Typography;

type ErrorDescriptionProps = {
  description: string;
};

export const ErrorDescription: React.FC<ErrorDescriptionProps> = ({
  description,
}) => {
  if (description.includes("\n")) {
    return (
      <Space direction="vertical" style={{ display: "flex" }}>
        {description.split("\n").map((item, index) => (
          <Alert
            key={index}
            type="error"
            message={<Badge status="error" text={item} />}
          />
        ))}
      </Space>
    );
  }

  return (
    <Text strong type="danger">
      {description}
    </Text>
  );
};
