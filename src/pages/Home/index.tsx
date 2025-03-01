import styled from 'styled-components';
import { AppHeader } from '@/components/Header';
import AppFooter from '@/components/Footer';
import { HeroHome } from '@/components/Home/HeroHome';
import { FeaturesHome } from '@/components/Home/Features';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.colors.neutral.neutral800};
  position: relative;

`;

const MainContentContainer = styled.div`
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
      <MainContentContainer>
        <HeroHome />
        <FeaturesHome />
      </MainContentContainer>
      <AppFooter />
    </PageWrapper>
  );
};
