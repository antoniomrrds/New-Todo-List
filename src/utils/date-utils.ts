import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Ativar os plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const TIMEZONE_AMERICA_SAO_PAULO = 'America/Sao_Paulo';

// Função para formatar data e hora para um formato específico
const FORMAT_DEFAULT_DATE_TIME = 'YYYY-MM-DDTHH:mm:ss';

export const formatExpirationDateTime = (
  date: string,
  time: string,
  format: string = FORMAT_DEFAULT_DATE_TIME,
) => {
  console.log('date', date);
  console.log('time', time);

  // Verificar se a data e o tempo são válidos antes de processar
  if (
    !date ||
    !time ||
    !dayjs(date, 'DD-MM-YYYY', true).isValid() ||
    !dayjs(time, 'HH:mm:ss', true).isValid()
  ) {
    return '';
  }
  return dayjs
    .tz(`${date} ${time}`, 'DD-MM-YYYY HH:mm:ss', TIMEZONE_AMERICA_SAO_PAULO)
    .format(format);
};

// Função para verificar se o valor é uma data válida
export const isDateOrDayjs = (
  val: string | number | Date | dayjs.Dayjs | null | undefined,
): boolean => {
  if (val == undefined || val == null || !val) return true;
  return val instanceof Date || dayjs(val).isValid();
};

// Função para verificar se a data está no futuro
export const isFutureDate = (date: string, time: string): boolean => {
  const expirationDateTime = dayjs.tz(
    `${dayjs(date, 'YYYY-MM-DD', true).format('DD-MM-YYYY')} ${time}`,
    'DD-MM-YYYY HH:mm:ss',
    TIMEZONE_AMERICA_SAO_PAULO,
  );

  return expirationDateTime.isAfter(
    dayjs().tz(TIMEZONE_AMERICA_SAO_PAULO),
    'minute',
  );
};

// Função para formatar data e hora separadamente
export const formatDateTime = (
  date: string | Date | dayjs.Dayjs,
  time: string,
): { formattedDate: string; formattedTime: string } => {
  return {
    formattedDate: dayjs(date, 'YYYY-MM-DD', true).format('DD-MM-YYYY'),
    formattedTime: dayjs(time, 'HH:mm:ss', true).format('HH:mm:ss'),
  };
};
