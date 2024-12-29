import { WarningFilled } from "@ant-design/icons";
import { Alert } from "antd";
import styled from "styled-components";

export const WarningIconStyled = styled(WarningFilled)`
  color:${({ theme }) => theme.colors.error.errorRed600};
`;
export const AlertStyled = styled(Alert)<{ hasMarginBottom?: boolean }>`
  margin-bottom: ${({ hasMarginBottom }) => (hasMarginBottom ? '5px' : '0')};
`;