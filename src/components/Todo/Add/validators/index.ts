import * as Yup from 'yup';
import dayjs from 'dayjs';

import {
  cleanDescription,
  formatDateTime,
  formatExpirationDateTime,
  getEnumValuesAsNumbers,
  isDateOrDayjs,
  isFutureDate,
} from '@/utils';
import { ActivationState } from '@/api/service/toDo/enum';
export type expirationDate = string | Date | dayjs.Dayjs;

export const todoValidationSchema = Yup.object({
  showExpiration: Yup.boolean().default(false),

  title: Yup.string()
    .trim()
    .required('O Titulo é obrigatório!')
    .min(5, 'O título deve ter no mínimo 5 caracteres.'),

  description: Yup.string()
    .trim()
    .required('A descrição é obrigatória!')
    .min(5, 'A descrição deve ter pelo menos 5 caracteres!')
    .test(
      'min-cleaned-description',
      'A descrição deve ter pelo menos 5 caracteres.',
      (value) => cleanDescription(value || '').length > 4,
    ),

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

  categories: Yup.array().default([]),

  tags: Yup.array().default([]),

  expirationDate: Yup.mixed<expirationDate>()
    .nullable()
    .notRequired()
    .test(
      'is-date-or-dayjs',
      'A data de expiração deve ser uma data válida',
      isDateOrDayjs,
    )
    .test(
      'is-future-date',
      'A data de expiração não pode ser anterior à data atual',
      (value, context) => {
        const { expirationTime } = context.parent;

        // Verificar se ambos os valores são válidos
        if (value && expirationTime) {
          const { formattedDate, formattedTime } = formatDateTime(
            value,
            expirationTime,
          );

          // Chamar a validação isFutureDate apenas se os valores forem válidos
          if (isDateOrDayjs(formattedDate) && isDateOrDayjs(formattedTime)) {
            return isFutureDate(formattedDate, formattedTime);
          }
        }
        return true; // Se não for válido, não executa a validação de futuro
      },
    )
    .when('showExpiration', (showExpiration, schema) => {
      const isRequired = showExpiration[0] === true;
      return isRequired
        ? schema.required('A data de expiração é obrigatória')
        : schema.nullable().optional().notRequired();
    }),

  expirationTime: Yup.string()
    .nullable()
    .when('showExpiration', (showExpiration, schema) => {
      const isRequired = showExpiration[0] === true;
      return isRequired
        ? schema.required('A hora de expiração é obrigatória')
        : schema.nullable().optional().notRequired();
    }),

  expirationDateTime: Yup.string().nullable().notRequired(),
}).transform((_, originalObject) => {
  if (originalObject.showExpiration) {
    // Garantir que a data de expiração é válida
    const expirationDate = dayjs(originalObject.expirationDate).isValid()
      ? dayjs(originalObject.expirationDate)
      : null; // Se for inválida, atribuir null

    const expirationTime = originalObject.expirationTime;

    // Se a data ou a hora estiverem ausentes ou inválidas, retornar o objeto original
    if (!expirationDate || !expirationTime) return originalObject;

    // Formatar data e hora
    const { formattedDate, formattedTime } = formatDateTime(
      expirationDate,
      expirationTime,
    );

    // Formatar data e hora no formato desejado
    const formattedExpiration = formatExpirationDateTime(
      formattedDate,
      formattedTime,
    );

    return { ...originalObject, expirationDateTime: formattedExpiration };
  }
  return originalObject;
});

export type CreateTodoValidationType = Yup.InferType<
  typeof todoValidationSchema
>;
