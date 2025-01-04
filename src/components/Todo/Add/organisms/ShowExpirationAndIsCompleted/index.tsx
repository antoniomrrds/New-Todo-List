import {
  IsCompletedSwitchField,
  ShowExpirationSwitchField,
} from "@/components/Todo/Add/molecules";
import { ShowExpirationAndIsCompletedProps } from "@/components/Todo/Add/organisms/ShowExpirationAndIsCompleted/types";
import { Col, Row } from "antd";

export const ShowExpirationAndIsCompleted = ({
  control,
  errors,
}: ShowExpirationAndIsCompletedProps) => (
  <Row gutter={[8, 8]}>
    <Col xs={24} sm={12}>
      <ShowExpirationSwitchField
        control={control}
        errors={errors}
        name="showExpiration"
      />
    </Col>
    <Col xs={24} sm={12}>
      <IsCompletedSwitchField
        control={control}
        name="isCompleted"
        errors={errors}
      />
    </Col>
  </Row>
);
