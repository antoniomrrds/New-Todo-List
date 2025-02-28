import * as Yup from 'yup';
import dayjs from 'dayjs';

import { getEnumValuesAsNumbers } from '@/utils';
import { ActivationState } from '@/api/core/types';
export type expirationDate = string | Date | dayjs.Dayjs;

export const tagValidationSchema = Yup.object({
  id: Yup.number().nullable().optional(),
  name: Yup.string()
    .trim()
    .required('O nome é obrigatório!')
    .min(5, 'O nome deve ter no mínimo 5 caracteres.'),

  description: Yup.string()
    .trim()
    .required('A descrição é obrigatória!')
    .min(5, 'A descrição deve ter pelo menos 5 caracteres!'),

  isActive: Yup.number()
    .oneOf(
      getEnumValuesAsNumbers(ActivationState),
      'O campo Ativo deve ser 0 (Inativo) ou 1 (Ativo)',
    )
    .required('O campo Ativo é obrigatório')
    .default(ActivationState.Active),

  isCompleted: Yup.number()
    .oneOf(
      getEnumValuesAsNumbers(ActivationState),
      'O campo Concluído deve ser 0 (Incompleto) ou 1 (Completo)',
    )
    .required('O campo Concluído é obrigatório')
    .default(ActivationState.Inactive),
});

export type SaveTagValidationType = Yup.InferType<typeof tagValidationSchema>;
