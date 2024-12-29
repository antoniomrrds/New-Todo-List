import React from 'react';
import { WarningOutlined } from '@ant-design/icons';
import { FieldErrors } from 'react-hook-form';
import { theme } from '@/styles/Theme';

interface ErrorHelperProps {
    name: string;
    errors: FieldErrors;
}

export const FieldError: React.FC<ErrorHelperProps> = ({ name, errors }) => {
    const errorMessage = errors[name]?.message as React.ReactNode || '';
    return errorMessage ? (
        <span>
            <WarningOutlined style={{ color: theme.colors.error.errorRed600, marginRight: 5 }} />
            {errorMessage}
        </span>
    ) : null;
};


