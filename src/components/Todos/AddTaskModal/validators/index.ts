/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import dayjs from 'dayjs';

export type expirationDate = string | Date | dayjs.Dayjs;

const cleanDescription = (html: string) => {
  const text = html.replace(/<[^>]+>/g, "").trim();
  return text;
};

const formatExpirationDateTime = (date: string, time: string, format: string) => {
  const dateFormatted = dayjs(date).format('DD-MM-YYYY');
  const timeFormatted = dayjs(time, 'HH:mm:ss').format('HH:mm:ss');

  // Combina data e hora conforme o formato desejado
  console.log("🚀 ~ formatExpirationDateTime ~ `${dateFormatted} ${timeFormatted}`:", `${dateFormatted} ${timeFormatted}`)
  return dayjs(`${dateFormatted} ${timeFormatted}`).format(format);
};

const isDateOrDayjs = (val: any) => {
  return val instanceof Date || dayjs(val).isValid();
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

  expirationDate: Yup.mixed<expirationDate>()
    .nullable()
    .notRequired()
    .test('is-date-or-dayjs', 'A data de expiração deve ser uma data válida', isDateOrDayjs)
    .when('showExpiration', (showExpiration, schema) => {
      return showExpiration[0]
        ? schema.required('A data de expiração é obrigatória')
        : schema.nullable().optional().notRequired();
    }),

  expirationTime: Yup.string()
    .nullable()
    .when('showExpiration', (showExpiration, schema) => {

      return showExpiration[0]
        ? schema.required('A hora de expiração é obrigatória')
        : schema.nullable().optional().notRequired();
    }),


});



export type CreateTask = Yup.InferType<typeof taskSchema>;
