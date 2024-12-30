import { WarningOutlined} from "@ant-design/icons";
import styled from "styled-components";

export const WarningIconStyled = styled(WarningOutlined)`
  color:${({ theme }) => theme.colors.error.errorRed700};
`;
