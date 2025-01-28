import dayjs from 'dayjs';

// Função para formatar data e hora para um formato específico
export const formatExpirationDateTime = (
  date: string,
  time: string,
  format: string,
): string => {
  const dateFormatted = dayjs(date, 'DD-MM-YYYY').format('DD-MM-YYYY');
  const timeFormatted = dayjs(time, 'HH:mm:ss').format('HH:mm:ss');
  const combinedDateTime = `${dateFormatted} ${timeFormatted}`;
  return dayjs(combinedDateTime, 'DD-MM-YYYY HH:mm:ss').format(format);
};

// Função para verificar se o valor é uma data válida
export const isDateOrDayjs = (
  val: string | number | Date | dayjs.Dayjs | null | undefined,
): boolean => {
  if (val === null || val === undefined) return true;
  return val instanceof Date || dayjs(val).isValid();
};

// Função para verificar se a data de expiração é no futuro
export const isFutureDate = (date: string, time: string): boolean => {
  const currentDateTime = dayjs();
  const expirationDateTime = dayjs(`${date} ${time}`, 'DD-MM-YYYY HH:mm:ss');
  return expirationDateTime.isAfter(currentDateTime, 'minute');
};
