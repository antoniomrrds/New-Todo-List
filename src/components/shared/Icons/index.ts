import { EditOutlined, UserOutlined, WarningOutlined } from '@ant-design/icons';
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

export const WarningIconStyled = styled(WarningOutlined)<{
  $isRigth?: boolean;
}>`
  color:${({ theme }) => theme.colors.error.errorRed700};
  margin-right: ${({ $isRigth, theme }) => ($isRigth ? '5px' : theme.spacing.zero)};
`;

export const EditOutlinedStyled = styled(EditOutlined)<{
  $isRigth?: boolean;
  $color?: string;
}>`
  color:${({ theme, $color }) => ($color ? $color : theme.colors.neutral.neutral100)};
  margin-right: ${({ $isRigth, theme }) => ($isRigth ? theme.spacing.xsmall : theme.spacing.zero)};
`;

export const FaTrashAltStyled = styled(FaTrashAlt)<{
  $isRigth?: boolean;
  $color?: string;
}>`
  color:${({ theme, $color }) => ($color ? $color : theme.colors.error.errorRed700)};
  margin-right: ${({ $isRigth, theme }) => ($isRigth ? theme.spacing.xsmall : theme.spacing.zero)};
`;

export const UserOutlinedStyled = styled(UserOutlined)<{
  $isRigth?: boolean;
  $color?: string;
}>`
  color:${({ theme, $color }) => ($color ? $color : theme.colors.neutral.neutral100)};
  margin-right: ${({ $isRigth, theme }) => ($isRigth ? theme.spacing.xsmall : theme.spacing.zero)};
`;
