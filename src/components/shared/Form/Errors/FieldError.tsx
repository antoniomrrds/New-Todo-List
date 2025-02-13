import React from 'react';
import { FieldErrors } from 'react-hook-form';
import { WarningFilledStyled } from '@/components/shared/Icons';
import styled from 'styled-components';

interface ErrorHelperProps {
  name: string;
  errors: FieldErrors;
}
const Span = styled.span<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  color: ${({ theme }) => theme.colors.error.errorRed600};
`;

export const FieldError: React.FC<ErrorHelperProps> = ({ name, errors }) => {
  const errorMessage = (errors[name]?.message as React.ReactNode) || '';
  return errorMessage ? (
    <Span $show={!!errorMessage}>
      <WarningFilledStyled $isMarginRight />
      {errorMessage}
    </Span>
  ) : null;
};
