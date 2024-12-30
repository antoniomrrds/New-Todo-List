import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "@/styles/Theme";
import ptBR from "antd/es/locale/pt_BR";
import { ThemeProvider } from "styled-components";
import { router } from "@/routes";
import { GlobalStyle } from "./styles/global-styles";
import { App as AppAntd } from "antd";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ConfigProvider
          locale={ptBR}
          wave={{ disabled: true }}
          theme={{
            token: {
              colorPrimary: theme.colors.success.successGreen700,
              colorError: theme.colors.error.errorRed500,
            },
          }}
        >
<<<<<<< HEAD
          <AppAntd
            notification={{
              top: 80,
              stack: {
                threshold: 1,
              },
            }}
          >
=======
          <AppAntd notification={{
            top: 80,
            stack:{
              threshold : 1
            }
          }}>
>>>>>>> b87ba131415783f910a0384b8a79e59d5fe2700f
            <GlobalStyle />
            <RouterProvider router={router} />
          </AppAntd>
        </ConfigProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
