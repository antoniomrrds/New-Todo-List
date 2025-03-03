import * as S from '@/components/Home/HeroHome/hero-home.styles';
import { useNavigateFunction } from '@/helpers';
import { useCallback } from 'react';

export const HeroHome = () => {
  const navigate = useNavigateFunction();
  const handleNavigate = useCallback(() => navigate('/todo'), [navigate]);
  return (
    <S.Container>
      <S.Title>Transforme Sua Rotina com Nossa Lista de Tarefas</S.Title>
      <S.Description>
        Descubra como simplificar suas tarefas diárias e alcançar seus objetivos
        de forma eficiente. Organize-se e dê o primeiro passo para uma vida mais
        produtiva!
      </S.Description>
      <S.Button onClick={handleNavigate}>Comece Agora</S.Button>
    </S.Container>
  );
};
