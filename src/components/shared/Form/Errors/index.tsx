import React from 'react';
import { WarningOutlined } from '@ant-design/icons';
import { FieldErrors } from 'react-hook-form';

interface ErrorHelperProps {
    name: string;
    errors: FieldErrors;
}

export const FieldError: React.FC<ErrorHelperProps> = ({ name, errors }) => {
    const errorMessage = errors[name]?.message as React.ReactNode || '';
    return errorMessage ? (
        <span>
            <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
            {errorMessage}
        </span>
    ) : null;
};


