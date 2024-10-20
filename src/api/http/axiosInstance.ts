import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor de resposta para lidar com erros
axiosInstance.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
        let errorMessage = "Ocorreu um erro inesperado. Tente novamente.";

        if (error.response) {
            switch (error.response.status) {
                case 404:
                    errorMessage = "Desculpe, não conseguimos encontrar as informações que você pediu. Tente novamente mais tarde.";
                    break;
                case 500:
                    errorMessage = "Houve um problema no sistema. Nossa equipe já foi notificada. Por favor, tente novamente em alguns minutos.";
                    break;
                default:
                    errorMessage = `Erro inesperado (${error.response.status}). Por favor, tente novamente mais tarde.`;
                    break;
            }
        } else if (error.request) {
            errorMessage = "Não conseguimos nos conectar ao sistema. Isso pode acontecer por problemas técnicos. Por favor, verifique sua conexão com a internet e tente novamente mais tarde.";
        } else {
            errorMessage = "Houve um problema ao configurar a solicitação. Revise as informações e tente novamente.";
        }

        return Promise.reject(new Error(errorMessage));
    }
);

export default axiosInstance;
