/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import dayjs from 'dayjs';

export type expirationDate = string | Date | dayjs.Dayjs;

const cleanDescription = (html: string) => {
  const text = html.replace(/<[^>]+>/g, "").trim();
  return text;
};

// Adicionando a validação para categorias e tags
const isValidIdArray = (arr: any) => {
  return Array.isArray(arr) && arr.every(id => typeof id === 'number' && id > 0); // Garantir que cada item seja um ID válido (número positivo)
};

const formatExpirationDateTime = (date: string, time: string, format: string) => {
  const dateFormatted = dayjs(date, 'DD-MM-YYYY').format('DD-MM-YYYY');
  const timeFormatted = dayjs(time, 'HH:mm:ss').format('HH:mm:ss');
  const combinedDateTime = `${dateFormatted} ${timeFormatted}`;
  return dayjs(combinedDateTime, 'DD-MM-YYYY HH:mm:ss').format(format);
};

const isDateOrDayjs = (val: any) => {
  return val instanceof Date || dayjs(val).isValid();
};

const isFutureDate = (date: string, time: string) => {
  const currentDateTime = dayjs();
  const expirationDateTime = dayjs(`${date} ${time}`, 'DD-MM-YYYY HH:mm:ss');

  return expirationDateTime.isAfter(currentDateTime, 'minute');
};

export const taskSchema = Yup.object({
  showExpiration: Yup.boolean().default(false),

  task: Yup.string()
    .required("A tarefa é obrigatória!")
    .min(5, "A tarefa deve ter pelo menos 5 caracteres!"),

  description: Yup.string()
    .required("A descrição é obrigatória!")
    .min(5, "A descrição deve ter pelo menos 5 caracteres!")
    .test('min-cleaned-description', 'A descrição deve ter pelo menos 5 caracteres.', (value) => {
      return cleanDescription(value || '').length > 4;
    }),

  isActive: Yup.boolean().default(true),
  isCompleted: Yup.boolean().default(true),


  // Validação para categorias (um array de IDs)
  categories: Yup.array()
    .of(Yup.number().positive().required("O ID da categoria é obrigatório"))
    .test('is-valid-id-array', 'As categorias precisam ser um array de IDs válidos', isValidIdArray)
    .nullable(),

  // Validação para tags (um array de IDs)
  tags: Yup.array()
    .of(Yup.number().positive().required("O ID da tag é obrigatório"))
    .test('is-valid-id-array', 'As tags precisam ser um array de IDs válidos', isValidIdArray)
    .nullable(),

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
      return showExpiration
        ? schema.required('A data de expiração é obrigatória')
        : schema.nullable().optional().notRequired();
    }),

  expirationTime: Yup.string()
    .nullable()
    .when('showExpiration', (showExpiration, schema) => {
      return showExpiration
        ? schema.required('A hora de expiração é obrigatória')
        : schema.nullable().optional().notRequired();
    }),

  expirationDateTime: Yup.string().nullable().notRequired(),

}).transform((_, originalObject) => {
  if (originalObject.showExpiration && originalObject.expirationDate && originalObject.expirationTime) {

    const expirationDate = dayjs(originalObject.expirationDate).isValid()
      ? originalObject.expirationDate
      : dayjs(originalObject.expirationDate);

    const formattedExpiration = formatExpirationDateTime(
      expirationDate,
      originalObject.expirationTime,
      'DD-MM-YYYY HH:mm:ss'
    );
    return { ...originalObject, expirationDateTime: formattedExpiration };
  }
  return originalObject;
});

export type CreateToDo = Yup.InferType<typeof taskSchema>;
