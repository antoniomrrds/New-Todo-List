import { WarningOutlined} from "@ant-design/icons";
import styled from "styled-components";


export const WarningIconStyled = styled(WarningOutlined)<{$isRigth?: boolean}>`
  color:${({ theme }) => theme.colors.error.errorRed700};
  margin-right: ${({ $isRigth }) => ($isRigth ? "5px" : "0")};
`;
