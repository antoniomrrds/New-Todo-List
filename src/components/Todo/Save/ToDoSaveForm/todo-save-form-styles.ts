import { generateSpacingCss } from '@/styles/Theme';
import styled from 'styled-components';

export const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: start  !important;
  gap: ${generateSpacingCss(10)};
  height: ${({ theme }) => theme.container.fullHeightPercentage};

  padding:  ${generateSpacingCss(7)} ${generateSpacingCss(10)};
  `;
