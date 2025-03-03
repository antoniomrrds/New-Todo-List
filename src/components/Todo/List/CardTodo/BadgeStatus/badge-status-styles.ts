import { generateSpacingCss } from '@/styles/Theme';
import styled from 'styled-components';

export const StatusBadge = styled.div<{ $Color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $Color }) => $Color || theme.colors.success.successGreen600};
  font-size: ${({ theme }) => theme.typography.fontSizeSmall};
  border-radius: ${generateSpacingCss(12)};
`;
