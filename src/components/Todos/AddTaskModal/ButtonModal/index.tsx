import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, ConfigProvider, Row } from "antd";
import * as S from "./Button-styles";
import React from "react";

type ButtonModalProps = {
    handleCancel: () => void;
}

export const ButtonModal: React.FC<ButtonModalProps> = ({handleCancel}) => {
    return (
        <Row justify="end" gutter={6}>
        <Col>
          <ConfigProvider theme={S.themeAntdConfigButtonCancel}>
            <Button
              color="primary"
              onClick={handleCancel}
              icon={<CloseOutlined />}
            >
              Cancelar
            </Button>
          </ConfigProvider>
        </Col>
        <Col>
          <ConfigProvider theme={S.themeAntdConfigButtonSuccess}>
            <Button
              color="primary"
              htmlType="submit"
              icon={<PlusOutlined />}
            >
              Criar Tarefa
            </Button>
          </ConfigProvider>
        </Col>
      </Row>
    );
}