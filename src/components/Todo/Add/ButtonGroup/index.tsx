import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button as ButtonAntd, Col, ConfigProvider, Row } from "antd";
import * as S from "./button-styles";
import React from "react";
import { useBreakpoint } from "@ant-design/pro-components";

type ButtonProps = {
    handleCancel: () => void;
    isLoading: boolean;
}

export const ButtonGroup: React.FC<ButtonProps> = ({handleCancel, isLoading }) => {
  const screens = useBreakpoint(); 
  console.log('a',screens);
  return (
        <Row justify="end" gutter={[8,8]} style={{ marginTop: 16 }}>
        <Col>
          <ConfigProvider theme={S.themeAntdConfigButtonCancel}>
            <ButtonAntd
              color="primary"
              onClick={handleCancel}
              icon={<CloseOutlined />}
              
            >
              Cancelar
            </ButtonAntd>
          </ConfigProvider>
        </Col>
        <Col >
          <ConfigProvider theme={S.themeAntdConfigButtonSuccess}>
            <ButtonAntd
              color="primary"
              htmlType="submit"
              loading={isLoading}
              icon={<PlusOutlined />}
            >
              Criar Tarefa
            </ButtonAntd>
          </ConfigProvider>
        </Col>
      </Row>
    );
}