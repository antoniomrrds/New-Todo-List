import {
  CheckOutlined,
  EditOutlined,
  InfoCircleOutlined,
  UserOutlined,
  WarningFilled,
  WarningOutlined,
} from '@ant-design/icons';
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

export const WarningIconStyled = styled(WarningOutlined)<{
  $isMarginRight?: boolean;
}>`
  color:${({ theme }) => theme.colors.error.errorRed700};
  margin-right: ${({ $isMarginRight, theme }) => ($isMarginRight ? theme.spacingFn(5) : theme.spacing.zero)};
`;
export const WarningFilledStyled = styled(WarningFilled)<{
  $isMarginRight?: boolean;
}>`
  color:${({ theme }) => theme.colors.error.errorRed700};
  margin-right: ${({ $isMarginRight, theme }) => ($isMarginRight ? theme.spacingFn(5) : theme.spacing.zero)};
`;

export const EditOutlinedStyled = styled(EditOutlined)<{
  $isMarginRight?: boolean;
  $color?: string;
}>`
  color:${({ theme, $color }) => ($color ? $color : theme.colors.neutral.neutral100)};
  margin-right: ${({ $isMarginRight, theme }) => ($isMarginRight ? theme.spacing.xsmall : theme.spacing.zero)};
`;

export const FaTrashAltStyled = styled(FaTrashAlt)<{
  $isMarginRight?: boolean;
  $color?: string;
}>`
  color:${({ theme, $color }) => ($color ? $color : theme.colors.error.errorRed600)};
  margin-right: ${({ $isMarginRight, theme }) => ($isMarginRight ? theme.spacing.xsmall : theme.spacing.zero)};
`;

export const UserOutlinedStyled = styled(UserOutlined)<{
  $isMarginRight?: boolean;
  $color?: string;
}>`
  color:${({ theme, $color }) => ($color ? $color : theme.colors.neutral.neutral100)};
  margin-right: ${({ $isMarginRight, theme }) => ($isMarginRight ? theme.spacing.xsmall : theme.spacing.zero)};
`;
export const CheckCircleFilledStyled = styled(CheckOutlined)`
  color: ${({ theme }) => theme.colors.success.successGreen500}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[700]}!important;

`;
export const InfoCircleOutlinedStyled = styled(InfoCircleOutlined)<{
  $isMarginRight?: boolean;
  $color?: string;
}>`
  color:${({ theme, $color }) => ($color ? $color : theme.colors.neutral.neutral600)};
  margin-right: ${({ $isMarginRight, theme }) => ($isMarginRight ? theme.spacing.xsmall : theme.spacing.zero)};

`;
