import { PlusOutlined } from "@ant-design/icons";
import { Button as ButtonAntd } from "antd";
import { FC } from "react";
type CreateButtonProps = {
  text: string
  onClick: () => void
}
export const CreateButton:FC<CreateButtonProps> = ({onClick , text}) => (
<>
  <ButtonAntd type="primary" onClick={onClick} icon={<PlusOutlined />}>
    {text}
  </ButtonAntd>
    </>
)
