import * as Yup from 'yup';

export const changePasswordValidationSchema = Yup.object({
  password: Yup.string()
    .required('A nova senha é obrigatória!')
    .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
});
export type ChangePasswordValidationType = Yup.InferType<
  typeof changePasswordValidationSchema
>;
