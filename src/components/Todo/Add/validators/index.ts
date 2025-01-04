import * as Yup from 'yup';
import dayjs from 'dayjs';
import { CompletionStatus, TodoStatus } from '@/components/Todo/Add/enum';
import { cleanDescription, formatExpirationDateTime, getEnumValuesAsNumbers, isDateOrDayjs, isFutureDate } from '@/utils';

export type expirationDate = string | Date | dayjs.Dayjs;

export const todoValidationSchema = Yup.object({
  showExpiration: Yup.boolean().default(false),

  title: Yup.string()
    .trim()
    .required("O Titulo é obrigatório!")
    .min(5, "O título deve ter no mínimo 5 caracteres."),

  description: Yup.string()
    .trim()
    .required("A descrição é obrigatória!")
    .min(5, "A descrição deve ter pelo menos 5 caracteres!")
    .test('min-cleaned-description', 'A descrição deve ter pelo menos 5 caracteres.', (value) =>  cleanDescription(value || '').length > 4),
    
  isActive: Yup
    .number()
    .oneOf(getEnumValuesAsNumbers(TodoStatus), 'O campo Ativo deve ser 0 (Inativo) ou 1 (Ativo)') 
    .required('O campo Ativo é obrigatório')
    .default(TodoStatus.Active),

  isCompleted: Yup
    .number()
    .oneOf(getEnumValuesAsNumbers(CompletionStatus), 'O campo Concluído deve ser 0 (Incompleto) ou 1 (Completo)')
    .required('O campo Concluído é obrigatório')
    .default(CompletionStatus.Incomplete),

  categories: Yup.array()
    .default([]),

  tags: Yup.array()
    .default([]),

  expirationDate: Yup.mixed<expirationDate>()
    .nullable()
    .notRequired()
    .test('is-date-or-dayjs', 'A data de expiração deve ser uma data válida', isDateOrDayjs)
    .test('is-future-date', 'A data de expiração não pode ser anterior à data atual', (value, context) => {
      if (value && context.parent.expirationTime) {
        return isFutureDate(dayjs(value).format('DD-MM-YYYY'), context.parent.expirationTime);
      }
      return true;
    })
    .when('showExpiration', (showExpiration, schema) => {
      const isRequired = showExpiration[0] === true;
      return isRequired
        ? schema.required('A data de expiração é obrigatória')
        : schema.nullable().optional().notRequired();
    }),

  expirationTime: Yup.string()
    .nullable()
    .when('showExpiration', (showExpiration , schema) => {
      const isRequired = showExpiration[0] === true;
      return isRequired
        ? schema.required('A hora de expiração é obrigatória')
        : schema.nullable().optional().notRequired();
    }),

  expirationDateTime: Yup.string().nullable().notRequired(),

}).transform((_, originalObject) => {
  if (originalObject.showExpiration) {
    const expirationDate = dayjs(originalObject.expirationDate).isValid()
      ? originalObject.expirationDate
      : dayjs(originalObject.expirationDate);

    const formattedExpiration = formatExpirationDateTime(
      expirationDate,
      originalObject.expirationTime,
      'DD-MM-YYYY HH:mm:ss'
    );
    return { ...originalObject, expirationDateTime: formattedExpiration  }; 
  }

  
  return originalObject;
});

export type CreateTodoValidationType = Yup.InferType<typeof todoValidationSchema>;
