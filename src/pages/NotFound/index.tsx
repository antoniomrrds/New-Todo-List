import Logo from "@/assets/images/not-found/404 Error-pana.svg";
import * as S from "@/pages/NotFound/not-found";
import { useNavigate } from "react-router-dom";


export const NotFoundPage = () => {
    const navigate = useNavigate(); 
    
    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <S.Container>
            <S.Main>
                <S.Section>
                    <S.Title>Algo não está certo...</S.Title>
                    <S.Description>A página que você está tentando abrir não existe. Você pode ter digitado o endereço incorretamente ou a página foi movida para outro URL. Se você acha que isso é um erro, entre em contato com o suporte.</S.Description>
                    <S.Button onClick={handleNavigate}>Voltar para a página inicial</S.Button>
                </S.Section>
                <S.Image src={Logo} alt="404" />
            </S.Main>
        </S.Container>
    );
};
