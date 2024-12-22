import styled from 'styled-components';
import { AppHeader } from "@/components/Header";
import AppFooter from '@/components/Footer';
import { HeroHome } from '@/components/Home/HeroHome';
import { FeaturesHome } from '@/components/Home/Features';


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  position: relative; 
   
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  flex: 1; 
  padding: 20px;
`;


export const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      <AppHeader />
        <ContentWrapper>
        <HeroHome />
        <FeaturesHome/>
        </ContentWrapper>
      <AppFooter />
    </PageWrapper>
  );
};
