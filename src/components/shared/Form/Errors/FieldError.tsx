import React from 'react';
import { FieldErrors } from 'react-hook-form';
import { WarningFilledStyled } from '@/components/shared/Icons';

interface ErrorHelperProps {
  name: string;
  errors: FieldErrors;
}

export const FieldError: React.FC<ErrorHelperProps> = ({ name, errors }) => {
  const errorMessage = (errors[name]?.message as React.ReactNode) || '';
  return errorMessage ? (
    <span>
      <WarningFilledStyled $isMarginRight />
      {errorMessage}
    </span>
  ) : null;
};
