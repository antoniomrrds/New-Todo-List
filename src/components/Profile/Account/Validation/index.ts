import * as Yup from 'yup';

export const profileUserValidationSchema = Yup.object({
  id: Yup.string().required('O id é obrigatório!'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('O E-mail é obrigatório!'),
  name: Yup.string()
    .required('O nome de usuário é obrigatório!')
    .min(3, 'O nome de usuário deve ter no mínimo 3 caracteres.'),
});
export type ProfileUserValidationType = Yup.InferType<
  typeof profileUserValidationSchema
>;
