import styled from 'styled-components';
import AppFooter from "@/components/Footer";
import {AppHeader} from "@/components/header"; 
import { HeroBullets } from '@/components/hero-bullets';
import {FeaturesHero} from '@/components/features-hero'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ocupa toda a altura da tela */

  background-color: ${({ theme }) => theme.colors.secondaryColor};
  position: relative; /* Adiciona um contexto para posicionamento absoluto */

`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; /* Faz o conteúdo ocupar o espaço disponível */
  padding: 20px;
`;


export const HomePage: React.FC = () => {
    return (

      <div>oi</div>
        // <PageWrapper>
        //     <AppHeader />
        //     <HeroBullets
            
        //     />
        //     <FeaturesHero/>
        //     <ContentWrapper>
        //         {/* <HeroBullets /> */}
        //     </ContentWrapper>
        //     <AppFooter />
        // </PageWrapper>
    );
};
