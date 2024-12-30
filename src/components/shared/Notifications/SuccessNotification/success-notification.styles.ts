import { CheckOutlined } from "@ant-design/icons";

import styled from "styled-components";

import { Typography } from "antd";
const { Title } = Typography;

export const CheckCircleFilledStyled = styled(CheckOutlined)`
  color: ${({ theme }) => theme.colors.success.successGreen700};
`;

export const TitleStyled = styled(Title)`
  color: ${({ theme }) => theme.colors.neutral.neutral800} !important;
`;
