import { ApiErrorResponse } from "@/api/error/types";

export const handleBadRequestError = (data: ApiErrorResponse, errorDetails: string[]) => {
    if (data.errors) 
        for (const [field, messages] of Object.entries(data.errors))  
            messages.forEach((msg) => errorDetails.push(`${field}: ${msg}`));
        
  return errorDetails;
 };
