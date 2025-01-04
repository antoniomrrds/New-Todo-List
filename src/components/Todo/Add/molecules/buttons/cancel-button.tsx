import { Button as ButtonAntd, ConfigProvider } from "antd";
import * as S from "@/styles/config/antd";
import { CloseOutlined } from "@ant-design/icons";

type CancelButtonProps = {
  onCancel: () => void;
  block?: boolean;
};

export const CancelButton = ({ onCancel, block }: CancelButtonProps) => (
  <ConfigProvider theme={S.themeAntdConfigButtonCancel}>
    <ButtonAntd
      color="primary"
      onClick={onCancel}
      icon={<CloseOutlined />}
      block={block}
    >
      Cancelar
    </ButtonAntd>
  </ConfigProvider>
);
