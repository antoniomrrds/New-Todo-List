import { handleApiError } from '@/api/core/error';
import { ApiErrorResponse } from '@/api/core/error/types';
import { AxiosError } from 'axios';

export const handleRequest = async <T>(request: Promise<T>): Promise<T> => {
  try {
    return await request;
  } catch (error) {
    const formattedError = handleApiError(error as AxiosError);
    throw formattedError;
  }
};

export const handleBadRequestError = (
  data: ApiErrorResponse,
  errorDetails: string[],
) => {
  if (data.errors)
    for (const [, messages] of Object.entries(data.errors))
      messages.forEach((msg) => errorDetails.push(`${msg}`));

  return errorDetails;
};
