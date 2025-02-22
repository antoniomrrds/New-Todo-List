import * as Yup from 'yup';

export const signInValidationSchema = Yup.object({
  email: Yup.string()
    .email('E-mail inválido')
    .required('O E-mail é obrigatório!'),
  password: Yup.string()
    .required('A senha é obrigatória!')
    .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
});
export type SignInValidationType = Yup.InferType<typeof signInValidationSchema>;
