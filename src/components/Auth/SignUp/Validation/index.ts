import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object({
  email: Yup.string()
    .email('E-mail inválido')
    .required('O E-mail é obrigatório!'),
  name: Yup.string()
    .required('O nome de usuário é obrigatório!')
    .min(3, 'O nome de usuário deve ter no mínimo 3 caracteres.'),
  password: Yup.string()
    .required('A senha é obrigatória!')
    .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
  confirmPassword: Yup.string()
    .required('A confirmação de senha é obrigatória!')
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
});

export type SignUpValidationType = Yup.InferType<typeof signUpValidationSchema>;
