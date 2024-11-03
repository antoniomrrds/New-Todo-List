import heroImage from '@/assets/images/hero/todo_image_hero.png';
import * as S from '@/components/Home/HeroHome/hero-home.styles';

export const HeroHome = () => {
  return (
    <S.Container>
        {/* <S.StyledImage
          src={heroImage}
          alt="hero-bullets"
        /> */}
        <S.Title>Transforme Sua Rotina com Nossa Lista de Tarefas</S.Title>
        <S.Description>Descubra como simplificar suas tarefas diárias e alcançar seus objetivos de forma eficiente. Organize-se e dê o primeiro passo para uma vida mais produtiva!</S.Description>
        <S.Button >Comece Agora</S.Button>
    </S.Container>
  );
};
