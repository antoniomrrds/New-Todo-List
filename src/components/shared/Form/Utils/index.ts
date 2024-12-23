import { FieldErrors } from "react-hook-form";

export const getValidateStatus = (name: string, errors: FieldErrors) => errors[name] ? 'error' : undefined;

