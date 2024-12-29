import React from "react";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button as ButtonAntd, Col, ConfigProvider, Row } from "antd";
import { useBreakpoint } from "@ant-design/pro-components";
import * as S from "@/styles/config/antd"
type ButtonProps = {
  handleCancel: () => void;
  isLoading: boolean;
};

export const ButtonGroup: React.FC<ButtonProps> = ({
  handleCancel,
  isLoading,
}) => {
  const screens = useBreakpoint();
  return (
    <Row justify="end" gutter={[8,8]} style={{ marginTop: 16 }}>
      <Col xs={24} sm={{ flex: "none" }}>
        <ConfigProvider theme={S.themeAntdConfigButtonCancel}>
          <ButtonAntd
            color="primary"
            onClick={handleCancel}
            icon={<CloseOutlined />}
            block={screens == "xs"}
          >
            Cancelar
          </ButtonAntd>
        </ConfigProvider>
      </Col>
      <Col xs={24} sm={{ flex: "none" }}>
        <ConfigProvider theme={S.themeAntdConfigButtonSuccess}>
          <ButtonAntd
            color="primary"
            htmlType="submit"
            loading={isLoading}
            icon={<PlusOutlined />}
            block={screens == "xs"}
          >
            Criar Tarefa
          </ButtonAntd>
        </ConfigProvider>
      </Col>
    </Row>
  );
};
