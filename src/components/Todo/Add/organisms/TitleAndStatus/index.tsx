import { StatusSwitchField, TitleField } from "@/components/Todo/Add/molecules";
import { TitleAndStatusType } from "@/components/Todo/Add/organisms/TitleAndStatus/types";
import { Col, Row } from "antd";

export const TitleAndStatus = ({
  control,
  errors
}: TitleAndStatusType) => (
  <Row gutter={[8, 8]}>
    <Col xs={24} sm={20}>
      <TitleField control={control} errors={errors}  />
    </Col>
    <Col xs={24} sm={4}>
      <StatusSwitchField control={control} errors={errors} name="isActive"  />
    </Col>
  </Row>
);
