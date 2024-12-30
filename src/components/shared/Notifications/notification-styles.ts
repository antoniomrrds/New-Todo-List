import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
type CloseCircleFilledStyledProps = {
  $colorVariant?: "error" | "success";
};

export const CloseCircleFilledStyled = styled(
  CloseOutlined
)<CloseCircleFilledStyledProps>`
  color: ${({ theme, $colorVariant }) => {
    switch ($colorVariant) {
      case "error":
        return theme.colors.error.errorRed600;
      default:
        return theme.colors.success.successGreen600;
    }
  }};
`;
